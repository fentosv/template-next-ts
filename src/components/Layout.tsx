// import { Toaster } from 'react-hot-toast';
import { ReactNode } from 'react';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';


interface Props {
    children: ReactNode;
    navbarClass?: string;
    bodyClass?: string;
    contentClass?: string;
    footerClass?: string;
}

export default function Layout({ children, navbarClass, bodyClass, contentClass, footerClass }: Props) {
    return (
        <>
            {/* <div className={bodyClass ? `body ${bodyClass}` : "body"}> */}
            <Navbar navbarClass={navbarClass} />
            {/* <div className={contentClass ? `page-content ${contentClass}` : "page-content"}>
                {children}
            </div> */}
            <main className='body'>{children}</main>
            {/* </div> */}
            <Footer footerClass={footerClass} />
        </>
    )
}
