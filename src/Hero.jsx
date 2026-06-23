import './css/hero.css';
import hero from "./assets/image-1.jpg";

export const Hero = () => {
  return (
    <section className="hero">
      <img className="hero-img" src={hero} alt="hero" />

      <div  className="content">
        <h1 className="title">EXPLORE O MUNDO!</h1>

        <form id="search-form" className="search-box-wrapper" onSubmit={(e) => e.preventDefault()}>
          <div className="search-box">
            <div className="field">
              <label for="destiny">Para onde vamos?</label>
              <input id="destiny" name="destiny" type="text" />
            </div>

            <div className="field">
              <label for="star_date">Quando?</label>
              <input id="star_date" name="star_date" type="date" />
            </div>

            <div className="field">
              <label for="end_date">Retorno</label>
              <input id="end_date" name="end_date" type="date" />
            </div>

            <button type='submit' className="search-btn btn-orange">Buscar</button>
          </div>
        </form>
      </div>
    </section>
  );
};
