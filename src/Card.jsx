import "./css/card.css";

export const Card = ({ image, title, description, children }) => {
  return (
    <div className={`card ${children || title || description ? "card-content" : "card-image-only"}`}>
      <div className="card-image-wrapper">
        <img src={image} alt={title || "card image"} />
      </div>

      {(title || description || children) && (
        <div className="card-content">
          {title && <h3 className="card-title">{title}</h3>}
          {description && <p className="card-description">{description}</p>}
          {children}
        </div>
      )}
    </div>
  );
}
