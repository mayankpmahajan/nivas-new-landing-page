import Info from "./components/Info";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import { useState } from "react";

function App() {
  
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="overflow-hidden">
      <Logo/>
      <Hero isVisible = {isVisible} setIsVisible = {setIsVisible}/>
      <Info isVisbile = {isVisible} />
    </div>
  );
}

export default App;
