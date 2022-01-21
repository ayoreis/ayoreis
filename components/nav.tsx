import { React, NavLink, } from '../deps.ts'

function Navigation() {
    const [ open, setOpen ] = React.useState(false)

    return (
        <>
            <nav className="nav">
                <div className="nav--content">
                    <NavLink to="/">😎 Ayo Reis.</NavLink>
                    <NavLink to="/about">❤️ About.</NavLink>

                    <address>
                        <a href="//github.com/ayoreis">🐈‍⬛ GitHub.</a>
                    </address>
                </div>

                {/* <button className="menu--toggle" onClick={ () => setOpen(!open) } >
                    {
                        open
                        ? "+"
                        : "×"
                    }
                </button> */}
            </nav>
            
            {/*
                open
                && <nav className={ `menu menu__${ open ? 'open' : 'closed' }` }>
                    <p>
                        Just a menu without any stuff in it.
                    </p>
                </nav>
            */}
        </>
    )
}

export default Navigation
