import React from 'react'
import classnames from 'classnames-creator'

import s from './Footer.module.scss'

interface Props {
    footerClass?: string
}

function Footer({ footerClass }: Props) {

    const classes = classnames(
        s.footer,
        {
            [s[footerClass ?? '']]: footerClass,
        }
    )

    return (
        <React.Fragment>
            <footer className={classes} >
                Footer
            </footer>
        </React.Fragment>
    );
}

export default Footer;