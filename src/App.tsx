import React, { useRef, useState } from 'react';
import Logo from './components/Logo';
import Hero from './components/Hero';
import Info from './components/Info';
import Bento from './components/Bento';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [joinUsPopupOpen, setJoinUsPopupOpen] = useState(false); // State to manage JoinUs popup

  const aboutUsRef = useRef(null);

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openJoinUsPopup = () => {
    setJoinUsPopupOpen(true);
  };

  const closeJoinUsPopup = () => {
    setJoinUsPopupOpen(false);
  };

  return (
    <div className="overflow-hidden">
      <Logo />
      <Hero isVisible={isVisible} setIsVisible={setIsVisible} />
      <Info isVisible={true} aboutUsRef={aboutUsRef} />
      <Bento joinUsPopupOpen={joinUsPopupOpen} closeJoinUsPopup={closeJoinUsPopup} />
      <Footer scrollToAboutUs={scrollToAboutUs} openJoinUsPopup={openJoinUsPopup} />
    </div>
  );
}

export default App;
