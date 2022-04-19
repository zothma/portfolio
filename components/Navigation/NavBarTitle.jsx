import PropTypes from "prop-types";
import IconMenu from "../Icons/Menu";

// Titre suivi d'un point de couleur
export default function NavBarTitre(props) {
  return (
    <div className="flex justify-between w-full h-full items-center">
      <h2 className={"font-bold transition-all duration-300 w-44 " + (props.petit ? "text-3xl" : "text-4xl")}>
        {props.children}<span className="text-orange">.</span>
      </h2>
    </div>
  );
}

NavBarTitre.propTypes = {
  petit: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};