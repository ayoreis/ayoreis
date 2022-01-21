import { Outlet, React, Route, Routes } from '../deps.ts'

import Navigation from '../components/nav.tsx'
import Footer from '../components/footer.tsx'

import Home from './home.tsx'
import Post from './post.tsx'

function Document() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <script defer type="module" src="script.js"></script>
                <link rel="stylesheet" href="/styles.css" />
                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </head>
            <body>
                <Navigation />

                <main>
                    <Routes>
                        <Route index element={<Home/>} />
                        <Route path="/:slug" element={<Post/>} />
                    </Routes>
                </main>

                <Footer />
            </body>
        </html>
    )
}

export default Document
