import './App.css';
import React, { Fragment } from 'react';
import AppHeader from './components/appHeader';
import HeroSection from './components/heroSection';
import CryptotableSection from './components/cryptotableSection';
import EarnSection from './components/earnSection';
import CreateCryptoSection from './components/createCryptoSection';
import Trust from './components/trust';
import Stats from './components/stats';
import GetStarted from './components/getStarted';
import PreFooter from './components/preFooter';
import Footer from './components/footer';

function App() {
    return (
        <>
            <AppHeader />
            <HeroSection />
            <CryptotableSection />
            <EarnSection />
            <CreateCryptoSection />
            <Trust />
            <Stats />
            <GetStarted />
            <PreFooter />
            <Footer />
        </>
    )
}

export default App;
