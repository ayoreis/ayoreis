import { React, NotionRenderer, Link, useNavigate } from '../../deps.ts'

function Media({ props, blocks }: any) {
    const navigate = useNavigate()

    return (
        <article className={ `post post--media post--${ blocks ? 'full' : 'mini' }` }>
            <header className="post__header">
                { /* figure? @uxte */ }
                <img alt={props.mediaAlt} onClick={() => navigate(`/${props.slug}`)} className="post__media" src={props.media}/>
            </header>

            {
                blocks
                && <>
                    <div className="post__content">

                        <time className="post__date" dateTime={props.date}>{props.date}</time>
                        <h3 className="post__name">{props.name}</h3>

                        <NotionRenderer blockMap={blocks}/>
                    </div>

                    <footer className="post__footer">
                        <Link to="/">⬅️ Home.</Link>
                    </footer>
                </>
            }
        </article>
    )
}

export default Media
