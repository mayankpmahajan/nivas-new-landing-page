import Hero from "./components/Hero";
import Bento from "./components/Bento";
import Logo from "./components/Logo";
import { useState } from "react";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="overflow-hidden">
      <Logo/>
      <Hero isVisible = {isVisible} setIsVisible = {setIsVisible}/>
      <Info isVisbile = {isVisible} />
      <Bento/>
      <Footer/>
    </div>
  );
}

export default App;
