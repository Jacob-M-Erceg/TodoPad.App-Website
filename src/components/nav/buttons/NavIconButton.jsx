import React from 'react';
import icon from '../../../assets/todopad-icon.png';
import './NavIconButton.css';

const NavIconButton = () => {
    let onClick = () => {
        window.location.pathname = "/";
    }

    return (
        <button className="nav-icon-button" onClick={onClick}>
            <img className="nav-icon-button-img" src={icon} />
            <text className="nav-icon-button-text">TodoPad</text>
        </button>
    )
}

export default NavIconButton
