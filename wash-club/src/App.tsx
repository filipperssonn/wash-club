import "./App.css";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavbarSection from "./components/NavbarSection";

function App() {
  return (
    <>
      <NavbarSection></NavbarSection>
      <HeroSection></HeroSection>
      <ContentSection></ContentSection>
      <Footer></Footer>
    </>
  );
}

export default App;
