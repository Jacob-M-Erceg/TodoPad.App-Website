import React from 'react';
import './BackToHomeButton.css';
import chev_left from './../../../../assets/chev_left.svg';

const BackToHomeButton = () => {
    let onClick = () => {
        window.location.pathname = "/";
    }

    return (
        <button className="back-to-home-button" onClick={onClick}>
            <img className="back-to-home-button-icon" src={chev_left} />

            <label className="back-to-home-button-label">
                Back To Home
            </label>
        </button>
    )
}

export default BackToHomeButton
