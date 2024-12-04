import Navigation from "./components/Navigation";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction";
import MissionVisionValues from "./components/MissionVisionValues";
import Divisions from "./components/Divisions/Divisions";
import Events from "./components/Events/Events";
import Testimonials from "./components/Testimonials/Testimonials";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-dark-100 text-white min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <MissionVisionValues />
      <Divisions />
      <Events />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
