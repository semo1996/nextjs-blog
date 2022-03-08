import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return(
        <footer>
            <p>THIS IS THE FOOTER</p>
            <div className="socialLinks">
                <Link href="/">
                    <a>Privacy Policy</a>
                </Link>
                <Link href="/">
                    <a>Terms and Conditions</a>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;