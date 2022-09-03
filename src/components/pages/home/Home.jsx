import React from 'react';
import './home.css';
import MainActionButton from "./buttons/MainActionButton";
import iPhone_SS from '../../../assets/home-clay-1Comp-900px.png';
import App_Store_Badge from '../../../assets/app-store-badge.svg';

const Home = () => {
    return (
        <div className="homepage">

            <div className="labels-and-button">
                <label className="main-label">Level up your life</label>
                <label className="sub-label">Track daily tasks. Reach your goals.</label>
                <MainActionButton />
            </div>

            <img className="iPhone-screenshot"  src={iPhone_SS} />

            <img className="app-store-badge" src={App_Store_Badge} />
        </div>
    )
}

export default Home
