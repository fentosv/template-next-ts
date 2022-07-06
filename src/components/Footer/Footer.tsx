import React from 'react'


import s from './Footer.module.scss'

interface Props {
    footerClass?: string
}

function Footer({ footerClass }: Props) {


    return (
        <React.Fragment>
            {/* <div className={`footer ${footerClass ? footerClass : ''}`} > */}
            <footer className={footerClass ? `${s.footer} ${s.footerClass}` : `${s.footer}`} >
                Footer
            </footer>


        </React.Fragment>

    );
}

export default Footer;