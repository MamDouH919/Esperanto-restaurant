import React from 'react'
import { Image } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Facebook from '../img/facebook.webp';
import Insta from '../img/instagram.webp';
import Logo from '../img/logo.webp';

export default function Footer() {
    return (
        <footer className='footer bg-dark shadow'>
            <div className='logo-cont'>
                <Image className='footer-logo' width={300} height={80} src={Logo} alt="Logo" />
            </div>
            <div className='social-cont'>
                <div className='d-flex'>
                    <a href='https://www.facebook.com/profile.php?id=100086020118355' target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage width={58} height={58} src={Facebook} alt='facebook-logo' />
                    </a>
                    <a href='https://www.instagram.com/esperanto_egy/' target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage width={60} height={60} src={Insta} alt='instagram-logo' />
                    </a>
                </div>
                <div className='fs-6 text-white text-center special-color'>
                    For inquiries please call +201153332508<br />
                    © 2022 by ESPERANTO.
                </div>
            </div>
        </footer>
    )
}
