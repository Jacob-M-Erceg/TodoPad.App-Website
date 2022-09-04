import React, {useEffect, useState} from 'react';
import './home.css';
import MainActionButton from "./buttons/MainActionButton";
import iPhone_SS from '../../../assets/home-clay-1Comp-900px.png';
import App_Store_Badge from '../../../assets/app-store-badge.svg';

const Home = () => {
    const [isMobileScreenSize, setIsMobileScreenSize] = useState(() => {
        if (window.matchMedia("(max-width: 559px)").matches) {
            return true
        } else {
            return false
        }
    })

    useEffect(() => {
        window.matchMedia("(max-width: 559px)")
            .addEventListener('change', (e)  => {
                setIsMobileScreenSize(e.matches)
            })
    }, []);

    let onClick = () => {
        window.location.href = "https://apps.apple.com/us/app/todopad/id1642068489";
    }

    return (
        <div className="homepage">

            <div className="labels-and-button">
                <label className="main-label">Level up your life</label>
                <label className="sub-label">{'Track daily tasks.\nReach your goals.'}</label>
                <MainActionButton />
            </div>

            <img className="iPhone-screenshot"  src={iPhone_SS} />
            <img className="app-store-badge" src={App_Store_Badge} onClick={onClick} />

            {/* These links are only shown on mobile, because the nav will be too small to show them */}
            { (isMobileScreenSize == true) &&
                <ul className="mobile-bottom-links">
                    <li>
                        <a className="dark-links"  href="/support">Support</a>
                    </li>
                    <li>
                        <a className="light-links" href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                        <a className="light-links" href="/terms-and-conditions">Terms & Conditions</a>
                    </li>
                </ul>
            }
        </div>
    )
}

export default Home
