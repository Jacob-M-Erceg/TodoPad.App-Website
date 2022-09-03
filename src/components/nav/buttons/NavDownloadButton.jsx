import React from 'react';
import './NavDownloadButton.css';

const NavDownloadButton = () => {
    let onClick = () => {
        window.location.href = "https://apps.apple.com/us/app/todopad/id1642068489";
    }

    return (
        <button className="nav-download-button" onClick={onClick}>
            <label>
                Download
            </label>
        </button>
    )
}

export default NavDownloadButton
