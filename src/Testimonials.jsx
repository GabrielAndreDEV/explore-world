import { useState } from "react";
import "./css/testimonials.css";

import avatar1 from "./assets/person-1.webp";
import avatar2 from "./assets/person-2.jpg";
import avatar3 from "./assets/person-3.jpg";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Avaliações dos Clientes</h2>

        <div className="testimonials-content">
          <p className="testimonials-quote">{currentReview.quote}</p>

          <div className="testimonials-controls">
            <button
              className="nav-arrow left"
              onClick={handlePrev}
              aria-label="Anterior"
            >
              <span>&#10094;</span>
            </button>

            <div className="avatar-wrapper">
              {currentReview.image ? (
                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  className="avatar-image"
                />
              ) : (
                <div className="avatar-placeholder"></div>
              )}
            </div>

            <button
              className="nav-arrow right"
              onClick={handleNext}
              aria-label="Próximo"
            >
              <span>&#10095;</span>
            </button>
          </div>

          <p className="testimonials-author">
            <strong>{currentReview.name}</strong>,{" "}
            <span>{currentReview.role}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const reviews = [
  {
    id: 1,
    quote:
      "“Facilis nemo molestias eum eligendi assumenda consequuntur, alias cumque fugit tenetur laudantium in dolores delectus temporibus magni quae est quaerat, deleniti repellat provident veniam reiciendis atque neque! Optio eaque eveniet accusantium nesciunt omnis eum quidem sint odio molestiae dolore est aut laborum laudantium voluptates, rerum, architecto et.”",
    image: avatar1,
    name: "Patrícia",
    role: "Jornalista",
  },
  {
    id: 2,
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium.”",
    image: avatar2,
    name: "Carlos",
    role: "Desenvolvedor de Software",
  },
  {
    id: 3,
    quote:
      "“Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error.”",
    image: avatar3,
    name: "Mariana",
    role: "Designer Gráfica",
  },
];
