import Link from 'next/link'

export default function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Nextjs-Test</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className={props.statusHome + " nav-link"}>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/test">
                                <a className={props.statusTest + " nav-link"}>Test</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className={props.statusAbout + " nav-link"}>About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )

}

