// 📥 Imports

// TODO: move imports to corsponding type sections

import { Application, Router, Context, } from 'https://deno.land/x/oak@v10.1.0/mod.ts'
import { React, ReactDOMServer, StaticRouter, } from './deps.ts'
import { Status, STATUS_TEXT } from 'https://deno.land/std/http/http_status.ts'
import staticFiles from 'https://deno.land/x/static_files@1.1.4/mod.ts'
import Document from './routes/doc.tsx'

// Types

type ID = string

interface Props {
    id: ID
    name: string
    slug: string
    status: '📝 Do' | '⚙️ Doing' | '✅ Done'
    date: Date
    type: 'Article' | 'Media'
    media: URL
}


// 📃 Variables

const NOTION_DATABASE_ID = 'b16aec9a93bb45f2b1556bbab54128dd' // TODO: Use enviroment variables

const app = new Application()
const router = new Router()


// ⚙️ Functions

async function getAllProps(databaseID: ID) {
    const request = await fetch(`https://notion-api.splitbee.io/v1/table/${databaseID}`)
    let allProps = await request.json()
    allProps = allProps.filter((props: any) => props.status === '✅ Done')
    
    return allProps
}

async function getProps(databaseID: ID, slug: string) {
    const allProps = await getAllProps(databaseID)
    const props = allProps.find((props: any) => props.slug === slug)

    return props
}

async function getBlocks(databaseID: ID, slug: string) {
    const props = await getProps(databaseID, slug)

    try {
        const request = await fetch(`https://notion-api.splitbee.io/v1/page/${props.id}`)
        const blocks = await request.json()
        return blocks
    } catch {
        throw Deno.errors.NotFound
    }
}


async function bundle(path: string | URL): Promise<string> {

    const { files } = await Deno.emit(path, {
        bundle: 'module',
    
        "compilerOptions": {
            "lib": [ 'dom' ]
        }
    })

    return files[ 'deno:///bundle.js' ]
}


// 📦 Bundle

Deno.writeTextFile('./public/script.js', await bundle('./public/script.tsx'))


// 🚀 Server

app.use(async (context, next) => {
    await next()

    console.log(`${context.request.method} ${context.request.url.pathname}`)
})

app.use(staticFiles('public'))


router.get('/api', async context => {
    const allProps = await getAllProps(NOTION_DATABASE_ID)

    context.response.type = 'application/json'
    context.response.body = JSON.stringify(allProps)
})


router.get('/api/:slug', async (context, next) => {
    try {
        const { slug } = context.params

        const props = await getProps(NOTION_DATABASE_ID, slug) 
        const blocks = await getBlocks(NOTION_DATABASE_ID, slug)

        if (!props || !blocks) {
            await next()
            return
        }

        context.response.type = 'application/json'
        context.response.body = JSON.stringify({
            props,
            blocks
        }) 
    } catch {
        new Response(
            null,
    
            {
                status: Status.NotFound,
                statusText: STATUS_TEXT.get(Status.NotFound),
            }
        )
    }
})

router.get('/(.*)', context => {
    context.response.type = 'text/html'

    context.response.body = `
        <!DOCTYPE html>

        ${ReactDOMServer.renderToString(
            <StaticRouter location={context.request.url.pathname}>
                <Document/>
            </StaticRouter>
        )}
    `
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port: 3000 })