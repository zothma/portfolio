import PropTypes from "prop-types";

// Titre suivi d'un point de couleur
export default function NavBarTitre(props) {
  return (
      <h2 className={"font-bold transition-all duration-300 w-44 " + (props.petit ? "text-3xl" : "text-4xl")}>
        <a href="/index.html">
            {props.children}<span className="text-orange">.</span>
        </a>
      </h2>
  );
}

NavBarTitre.propTypes = {
  petit: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};