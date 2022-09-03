import React from 'react';
import './navbar.css';
import NavIconButton from "./buttons/NavIconButton";
import NavDownloadButton from "./buttons/NavDownloadButton";

const Navbar = () => {

    return (
        <nav className="nav">
            <NavIconButton />
            <ul>
                <li>
                    <a className="light-links" href="/terms-and_conditions">Terms & Conditions</a>
                </li>
                <li>
                    <a className="light-links" href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                    <a className="dark-links"  href="/support">Support</a>
                </li>
                <li>
                    <NavDownloadButton />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
