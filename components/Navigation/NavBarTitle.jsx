import PropTypes from "prop-types";
import IconMenu from "../Icons/Menu";

// Titre suivi d'un point de couleur
export default function NavBarTitre(props) {
  return (
    <div className="px-10 lg:px-0 flex justify-between w-full h-full items-center pointer-events-auto lg:pointer-events-none">
      <h1 className={"font-bold transition-all duration-300 w-44 " + (props.petit ? "text-3xl" : "text-4xl")}>
        {props.children}<span className="text-orange" aria-hidden="true">.</span>
      </h1>
      <IconMenu onClick={props.onClick} className="lg:hidden cursor-pointer" />
    </div>
  );
}

NavBarTitre.propTypes = {
  petit: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func.isRequired
};