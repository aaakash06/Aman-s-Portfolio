import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Background from "./assets/components/background/background";

import Foreground from './assets/components/forground/foreground'
import ContextApiProvider from "./assets/store/contexApi";
import Contact from "./assets/components/contact-card/contact";
function App() {
  const [isContact, setIsContact] = useState(true);

  return (
    <>
      <ContextApiProvider>
        <Background></Background>
    <Foreground></Foreground>
      </ContextApiProvider>
    </>
  );
}

export default App;
