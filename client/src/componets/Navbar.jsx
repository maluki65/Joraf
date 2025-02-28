import React, { useState, useEffect } from 'react';
import { logImage } from '../assets';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const ToContact = () => {
        document.getElementById('footer-box').scrollIntoView ({ behavior: "smooth" });
      };

    // On toggle menu state
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    // On closing menu
    const closeNavbar = () => {
        setMenuOpen(false);
    };

    // on handling scroll event for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
    }, []);

    // On closing menu when a link is clicked
    useEffect(() => {
        const links = document.querySelectorAll('.PageLinks');
        links.forEach(link => {
            link.addEventListener('click', closeNavbar);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', closeNavbar);
            });
        };
    }, []);

    const NavList = [
        { name: "Home", link: "#HeroSection" },
        { name: "About Us", link: "#aboutSection" },
        { name: "Products", link: "#productSection" },
        { name: "Team", link: "#TeamSection" },
        { name: "Benefits", link: "#benefitsSection" }
    ];

    return (
        <div className={`navbar ${sticky ? 'stickly' : ''}`} id='navbar'>
            <div className='Logo' id='logo'>
                <img src={logImage} alt="Logo" />
            </div>

            <div className={`navlinks ${menuOpen ? 'open' : ''}`} id='navlinks'>
                <ul>
                    {NavList.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} className='PageLinks'>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='contactBtn' id='contactBtn'>
                <a href='#footerSection' className='btn' onClick={ ToContact }>
                    Contact Us
                </a>
            </div>

            <div className="hambuger" id="hambuger" onClick={toggleMenu}>
                <p>&#9776;</p>
            </div>
        </div>
    );
}

export default Navbar;