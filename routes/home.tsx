import { React, Link } from '../deps.ts'

import Article from '../components/types/article.tsx'
import Media from '../components/types/media.tsx'

function Home() {

    const [ posts, setPosts ] = React.useState<any>()

    React.useEffect(() => {
        
        fetch('/api')
        
            .then(response => response.json())

            .then(props => {
                setPosts(props)
            })
        
    }, [])

    return (
        <>
            <header className="main">
                <h1>
                    Hello, world!
                    <br/>
                    I am Ayo,
                    <br/>
                    I make stuff.
                </h1>
            </header>

            <section className="posts">
                {/* <header className="posts--header">
                    <input
                        type="search"
                        placeholder="🔎 Search..."
                        enterKeyHint="search"
                        className="search"/>
                </header> */}

                <div className="posts--content">
                    {
                        !posts
                        ? <p>Loading...</p>
                        : posts.map((post: any) => {
                            return (
                                post.type === 'Article'
                                ? <Article props={ post }/>
                                : <Media props={ post }/>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Home
