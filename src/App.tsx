import React, { useRef, useState } from 'react';
import Logo from './components/Logo';
import Hero from './components/Hero';
import Info from './components/Info';
import Bento from './components/Bento';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  // const [joinUsPopupOpen, setJoinUsPopupOpen] = useState(false); // State to manage JoinUs popup
  const [popupOpen, setPopupOpen] = useState<string | null>(null);
  const aboutUsRef = useRef(null);
  const brandEnquiryRef = useRef(null);
  const careersRef = useRef(null);
  const investorRelationsRef = useRef(null);


  const openPopup = (popupType: string) => setPopupOpen(popupType);

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBrandEnquiry = () => {
    if (brandEnquiryRef.current) {
      brandEnquiryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCareers = () => {
    if (careersRef.current) {
      careersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToInvestorRelations = () => {
    if (investorRelationsRef.current) {
      investorRelationsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openJoinUsPopup = () => {
    setJoinUsPopupOpen(true);
  };

  const closeJoinUsPopup = () => {
    setJoinUsPopupOpen(false);
  };

  return (
    <div className="">
      <Logo />
      <Hero isVisible={isVisible} setIsVisible={setIsVisible} scrollToAboutUs={scrollToAboutUs}/>
      <Info isVisible={true} aboutUsRef={aboutUsRef} />
      <Bento popupOpen={popupOpen} setPopupOpen={setPopupOpen} openPopup={openPopup}  brandEnquiryRef={brandEnquiryRef} careersRef={careersRef} investorRelationsRef = {investorRelationsRef} />
      <Footer scrollToAboutUs={scrollToAboutUs} setPopupOpen = {setPopupOpen}  openPopup = {openPopup} scrollToBrandEnquiry={scrollToBrandEnquiry} scrollToCareers={scrollToCareers} scrollToInvestorRelations={scrollToInvestorRelations}/>
    </div>
  );
}

export default App;

