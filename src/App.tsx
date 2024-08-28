import { useEffect } from "react";
import Img from "./components/atoms/Img";
import Brands from "./components/organism/Brands";
import Contact from "./components/organism/Contact";
import Distillery from "./components/organism/Distillery";
import Distribution from "./components/organism/Distribution";
import Header from "./components/organism/header";
import Importing from "./components/organism/Importing";
import Services from "./components/organism/Services";
import Slider from "./components/organism/slider";
import What from "./components/organism/What";
import AOSInit from "./helpers/aos";

function App() {
  useEffect(() => {
    AOSInit();
  }, []);
  return (
    <>
    <Header/>
    <main>
      <Slider/>
      <What/>
      <Img src="land" ext="jpg" alt="Services Image" ></Img>
      <Services/>
      <Distribution/>
      <Img src="warehouse" ext="jpg" alt="Importing Image" ></Img>
      <Importing/>
      <Brands/>
      <Distillery/>
      <Contact/>
    </main>

    </>
  )
}

export default App
