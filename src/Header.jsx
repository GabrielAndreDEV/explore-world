import "./css/header.css";

export const Header = () => {
  return (
    <header className="header-menu">
      <div className="logo">
        <a href="#">Buenas Viagens!</a>
      </div>

      <nav className="header-menu-nav">
        <a href="#">Home</a>
        <a href="#">Passeios</a>
        <a href="#">Destinos</a>
        <a href="#">Avaliações</a>
      </nav>
    </header>
  );
};
