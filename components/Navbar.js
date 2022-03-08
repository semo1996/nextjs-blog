import React from 'react';
import Link from 'next/link';


const Navbar = () => {
    return(
        <nav>
            <menu>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/form">
                    <a>Form</a>
                </Link>
            </menu>
        </nav>
    );
}

export default Navbar;