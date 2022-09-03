import React, { useState, useEffect }  from 'react';
import './navbar.css';
import NavIconButton from "./buttons/NavIconButton";
import NavDownloadButton from "./buttons/NavDownloadButton";

const Navbar = () => {
    const [screenSize, setScreenSize] = useState(() => {
        if (window.matchMedia("(min-width: 851px)").matches) {
            return "Computer"
        }
        else if (window.matchMedia("(min-width: 560) and (max-width: 850px)").matches) {
            return "Tablet"
        }
        else {
            return "Mobile"
        }
    })

    useEffect(() => {
        window.matchMedia("(min-width: 851px)")
            .addEventListener('change', (e)  => {
                if (e.matches == true ) {
                    setScreenSize("Computer" );
                }
            });

        window.matchMedia("(min-width: 560px) and (max-width: 850px)")
            .addEventListener('change', (e)  => {
                if (e.matches == true ) {
                    setScreenSize("Tablet" );
                }
            })

        window.matchMedia("(max-width: 559px)")
            .addEventListener('change', (e)  => {
                if (e.matches == true ) {
                    setScreenSize("Mobile" );
                }
            })
    }, []);

    let termsTitle = () => {
        if (screenSize == "Computer") {
            return "Terms & Conditions"
        } else if (screenSize == "Tablet") {
            return "Terms"
        } else {
            return ""
        }
    }

    let privacyTitle = () => {
        if (screenSize == "Computer") {
            return "Privacy Policy"
        } else if (screenSize == "Tablet") {
            return "Privacy"
        } else {
            return ""
        }
    }

    return (
        <nav className="nav">
            <NavIconButton />
            <ul>
                { (screenSize != "Mobile") &&
                    <li>
                        <a className="light-links" href="/terms-and-conditions">{termsTitle()}</a>
                    </li>
                }

                { (screenSize != "Mobile") &&
                    <li>
                        <a className="light-links" href="/privacy-policy">{privacyTitle()}</a>
                    </li>
                }

                { (screenSize != "Mobile") &&
                    <li>
                        <a className="dark-links"  href="/support">Support</a>
                    </li>
                }

                <li>
                    <NavDownloadButton />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
