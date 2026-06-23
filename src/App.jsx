import { CardsSection } from "./CardsSection";
import "./css/App.css";
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
    </>
  );
}

export default App;
