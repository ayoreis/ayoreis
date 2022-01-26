/*
    @jsx React.createElement
    @jsxFrag React.Fragment
*/

import { React, NotionRenderer, Link, } from '../../deps.ts'

function Article({ props, blocks }: any) {
    return (
        <article className={ `post post--article post--${ blocks ? 'full' : 'mini' }` }>
            <header className="post__header">

                {
                    blocks
                    && <img className="post__media" src={props.media} alt={props.mediaAlt}/>
                }

                <time className="post__date" dateTime={props.date}>02 August 2022</time>

                <h3 className="post__name">
                    {
                        blocks
                        ? props.name
                        : <Link to={ `/${props.slug}` }>{props.name}</Link>
                    }
                </h3>
            </header>

            {
                blocks
                && <>
                    <div className="post__content">
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

export default Article
