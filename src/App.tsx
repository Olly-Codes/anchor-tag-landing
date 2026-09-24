import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadSection from "./components/DownloadSection";

function App() {
  return (
    <main className="font-rubik">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
