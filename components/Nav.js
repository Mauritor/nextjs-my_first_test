import Link from 'next/link'

export default function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand text-danger" href="#">Nextjs-Test</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto text-center">
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
                        <li className="nav-item">
                            <Link href="/users">
                                <a className={props.statusUsers + " nav-link"}>Users</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <style jsx>
                {`
                li{
                    font-size: 20px;
                    font-family: 'Righteous';
                }
                `}
            </style>
        </>
    )

}

