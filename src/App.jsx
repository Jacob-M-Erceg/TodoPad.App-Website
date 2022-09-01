import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Support from "./components/support/Support";

const App = () => {
    let Component

    switch (window.location.pathname) {
        case "/":
            Component = Home
            break
        case "/support":
            Component = Support
            break
    }
    return (
        <>
            <Navbar />
            <Component />
        </>
    )
}

export default App
