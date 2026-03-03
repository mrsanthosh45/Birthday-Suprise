import { useState } from "react";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import GiftBox from "./components/GiftBox";
import Gallery from "./components/Gallery";
import confettieffect from "./components/confettieffect";
import background from "./assets/world.jpg";
import "./App.css";

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {!showSurprise ? (
        <Hero onEnter={() => setShowSurprise(true)} />
      ) : (
        <>
          <ConfettiEffect />
          <Letter />
          <GiftBox />
          <Gallery />
        </>
      )}
    </div>
  );
}

export default App;