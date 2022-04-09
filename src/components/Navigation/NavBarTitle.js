// Titre suivi d'un point de couleur
function NavBarTitre(props) {
  return (
      <h2 className="font-bold text-3xl">
      <a href="/index.html">
          {props.children}<span className="text-orange">.</span>
      </a>
      </h2>
  );
}

export default NavBarTitre;
