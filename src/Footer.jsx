import "./css/footer.css";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const now = new Date();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column brand-column">
          <h2 className="footer-logo">Buenas Viagens!</h2>
          <p className="company-name">Buenas Viagens & Turismo S.A.</p>
          <p className="address">Avenida da Boa Vista, 1234 Porto, Portugal</p>
          <p className="copyright">
            Buenas Viagens & Turismo S.A. &copy; Todos os direitos reservados{" "}
            {now.getFullYear()}
          </p>
        </div>

        <div className="footer-column partners-column">
          <h3>NOSSOS PARCEIROS</h3>
          <ul>
            <li>Consectetur Adipisicing</li>
            <li>Pariatur Autem Harum</li>
            <li>Distinctio Laudantium Ducimus</li>
            <li>Temporibus Vel Magnam</li>
            <li>Commodi Sed Quaerat</li>
            <li>Quas Perspiciatis Blanditiis</li>
            <li>Aspernatur</li>
          </ul>
        </div>

        <div className="footer-column action-column">
          <div className="newsletter-section">
            <h3>ASSINE A NOSSA NEWSLETTER</h3>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Informe seu E-mail"
                className="newsletter-input"
              />
              <button type="submit" className="btn-indigo font-bold">
                Enviar
              </button>
            </form>
          </div>

          <hr className="footer-divider" />

          <div className="social-section">
            <h3>SIGA NOSSAS REDES SOCIAIS</h3>

            <div className="social-icons">
              <a href="#" className="social-icon-circle" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon-circle" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a
                href="#"
                className="social-icon-circle"
                aria-label="X (Twitter)"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar"></div>
    </footer>
  );
};
