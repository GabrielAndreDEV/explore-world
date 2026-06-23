import "./css/App.css";

import { CardsSection } from "./CardsSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { HomeInfo } from "./HomeInfo";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HomeInfo />
      <CardsSection />
      <Footer />
    </>
  );
}

export default App;
