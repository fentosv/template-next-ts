import React from 'react'
import Link from 'next/link'
// import Image from 'next/image';
import Image from 'next/future/image'
import { useRouter } from 'next/router';
import classnames from 'classnames-creator'

import logo from '@public/logo.png';
import s from './Navbar.module.scss'

interface Props {
    navbarClass?: string
}

function Navbar({ navbarClass }: Props) {

    const router = useRouter();

    return (
        <>
            <header
                className={
                    classnames(
                        s.navbar,
                        {
                            [s[navbarClass ?? '']]: navbarClass
                        }
                    )}
            >
                <div className={s.navbar_container}>

                    <Link href='/'>
                        <a>
                            <Image
                                className={s.navbar_icon_img}
                                src={logo}
                                alt='Logo'
                                title='Logo'
                            />
                        </a>
                    </Link>

                    <Link href='/about'>
                        {/* Use bracket notation for BEM implementation */}
                        <a
                            className={
                                classnames(
                                    s.navlink,
                                    {
                                        [s['navlink--active']]: router.pathname == '/about'
                                    }
                                )}
                        >
                            About us
                        </a>
                    </Link>

                    <Link href='/blog'>
                        <a
                            className={
                                classnames(
                                    s.navlink,
                                    {
                                        [s['navlink--active']]: router.pathname == '/blog'
                                    }
                                )}
                        >
                            Blog
                        </a>
                    </Link>

                    <Link href='/contact'>
                        <a
                            className={
                                classnames(
                                    s.navlink,
                                    s['navlink--right'],
                                    {
                                        [s['navlink--active']]: router.pathname == '/items'
                                    }
                                )}
                        >
                            Contact
                        </a>
                    </Link>
                </div>
            </header >
        </>
    );
}

export default Navbar;