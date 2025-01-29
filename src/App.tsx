import "./App.css";
import Priser from "./components/Priser";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavbarSection from "./components/NavbarSection";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <>
      <NavbarSection></NavbarSection>
      <HeroSection></HeroSection>
      <Priser></Priser>
      <Kontakt></Kontakt>
      <Footer></Footer>
    </>
  );
}

export default App;
