import { useRef, useState } from 'react';
import Logo from '../../Logo.png';
import Phone from '../../Phone.png';
import PhoneWhite from '../../PhoneWhite.png';
import {useOnClickOutside} from '../../hooks/useOnClickOutside';

import './Header.scss';

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const mobileMenuRef = useRef(null);

    useOnClickOutside(mobileMenuRef, () => {
        if (!showMobileMenu) {
            setShowMobileMenu(false);
        }
    });

    const handleMenuOpen = () => {
        if (showMobileMenu) {
            setShowMobileMenu(false);
        } else {
            setShowMobileMenu(true);
        }
    }

    return (
        <>
            <div className="contact-mobile">
                <img src={PhoneWhite} alt="Phone"/>
                <div className="contact-number"><a href="tel:+79162090997">+7 (916) 209 09 97</a></div>
            </div>
            <header className="header">
                <a href="#main" className="logo">
                    <img src={Logo} alt="Logo"/>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" onClick={handleMenuOpen} htmlFor="menu-btn">
                    <span className="navicon"/>
                </label>
                <div className="menu">
                    <div className="menu-item"><a href="#main">Главная</a></div>
                    <div className="menu-item"><a href="#about">О нас</a></div>
                    <div className="menu-item"><a href="#offers">Основные Услуги</a></div>
                    <div className="menu-item"><a href="#jobs">Мои работы</a></div>
                    <div className="menu-item"><a href="#contacts">Контакты</a></div>
                </div>
                <div className="contact">
                    <img src={Phone} alt="Phone"/>
                    <div className="contact-number"><a href="tel:+79162090997">+7 (916) 209 09 97</a></div>
                </div>
                <div className={`mobile-menu ${showMobileMenu ? 'show' : ''}`} ref={mobileMenuRef}>
                    <div className="mobile-menu-item"><a href="#main">Главная</a></div>
                    <div className="mobile-menu-item"><a href="#about">О нас</a></div>
                    <div className="mobile-menu-item"><a href="#offers">Основные Услуги</a></div>
                    <div className="mobile-menu-item"><a href="#jobs">Мои работы</a></div>
                    <div className="mobile-menu-item"><a href="#contacts">Контакты</a></div>
                </div>
            </header>
        </>
    );
}

export default Header;
