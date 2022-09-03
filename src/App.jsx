import React from 'react';
import Navbar from "./components/nav/Navbar";
import Home from "./components/pages/home/Home";
import PrivacyPolicy from "./components/pages/privacy & terms/privacy-policy";


import Support from "./components/pages/support/Support";
import TermsAndConditions from "./components/pages/privacy & terms/terms-and-conditions";

const App = () => {
    let Component

    switch (window.location.pathname) {
        case "/":
            Component = Home
            break

        case "/terms-and_conditions":
            Component = TermsAndConditions
            break

        case "/privacy-policy":
            Component = PrivacyPolicy
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
