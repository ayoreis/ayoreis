/*
    @jsx React.createElement
    @jsxFrag React.Fragment
*/

import { Link, React, useParams } from '../deps.ts'

import { NotionRenderer } from 'https://cdn.skypack.dev/react-notion'

import NotFound from './not_found.tsx'

import Article from '../components/types/article.tsx'
import Media from '../components/types/media.tsx'


function Post() {
    const { slug } = useParams()
    
    const [ post, setPost ] = React.useState<any>()

    React.useEffect(() => {
        const post = fetch(`/api/${slug}`)

            .then(async response => {
                if (response.ok) {
                    setPost(await response.json())
                } else {
                    setPost(404)
                }
            })
    }, [])

    return (
        !post
        ? <p>Loading...</p>
        : post === 404
        ? <NotFound/>
        : post.props.type === 'Article'
        ? <Article {...post}/>
        : <Media {...post}/>
    )
}

export default Post
