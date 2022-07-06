import React from 'react'
import Link from 'next/link'
// import Image from 'next/image';
import Image from 'next/future/image'
import { useRouter } from "next/router";

import logo from '@public/logo.png';
import s from './Navbar.module.scss'

interface Props {
    navbarClass?: string
}

function Navbar({ navbarClass }: Props) {

    const router = useRouter();

    return (
        <React.Fragment>
            {/* <div className={`navbar ${navbarClass ? navbarClass : ''}`} > */}
            <header className={navbarClass ? `${s.navbar} ${s.navbarClass}` : `${s.navbar}`} >

                <div className={s.navbar_container}>

                    <Link href="/">
                        <a>
                            <Image
                                className={s.navbar_icon_img}
                                src={logo}
                                alt="Logo"
                                title="Logo"
                            />
                        </a>
                    </Link>

                    <Link href="/about">
                        {/* Use bracket notation for BEM implementation */}
                        <a
                            className={router.pathname == "/about" ? `${s['navlink']} ${s['navlink--active']}` : `${s['navlink']}`}
                        >
                            About us
                        </a>
                    </Link>

                    <Link href="/blog">
                        <a
                            className={router.pathname == "/blog" ? `${s['navlink']} ${s['navlink--active']}` : `${s['navlink']}`}
                        >
                            Blog
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a
                            className={router.pathname == "/contact" ? `${s['navlink']} ${s['navlink--active']}  ${s['navlink--right']} ${s['navlink']}` : `${s['navlink']} ${s['navlink--right']}`}
                        >
                            Contact
                        </a>
                    </Link>

                </div >

            </header >
        </React.Fragment >

    );
}

export default Navbar;