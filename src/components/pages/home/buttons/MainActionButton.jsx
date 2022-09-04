import React from 'react';
import './MainActionButton.css';

const MainActionButton = () => {
    let onClick = () => {
        window.location.href = "https://apps.apple.com/us/app/todopad/id1642068489";
    }

    return (
        <button className="main-action-button" onClick={onClick}>
            <label>
                Start Now
            </label>
        </button>
    )
}

export default MainActionButton

