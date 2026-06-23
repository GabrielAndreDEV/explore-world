import './css/hero.css';
import hero from "./assets/image-1.jpg";

export const Hero = () => {
  return (
    <section className="hero">
      <img className="hero-img" src={hero} alt="hero" />

      <div className="content">
        <h1 className="title">EXPLORE O MUNDO!</h1>

        <div className="search-box-wrapper">
          <div className="search-box">
            <div className="field">
              <label>Para onde vamos?</label>
              <input type="text" />
            </div>

            <div className="field">
              <label>Quando?</label>
              <input type="date" />
            </div>

            <div className="field">
              <label>Retorno</label>
              <input type="date" />
            </div>

            <button className="font-bold btn-orange">Buscar</button>
          </div>
        </div>
      </div>
    </section>
  );
};
