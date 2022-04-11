import PropTypes from "prop-types";

// Titre suivi d'un point de couleur
export default function NavBarTitre(props) {
  return (
      <h2 className="font-bold text-3xl">
        <a href="/index.html">
            {props.children}<span className="text-orange">.</span>
        </a>
      </h2>
  );
}

NavBarTitre.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};