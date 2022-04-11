import {ReactComponent as Fleche} from "../icons/arrow-down.svg";
import PropTypes from "prop-types";

// Représente un bouton, avec ou sans texte, et contenant une flèche vers le bas
export default function BoutonFleche(props) {
  // L'objet n'a pas forcément de titre
  let titre = <></>;
  if ('titre' in props) {
    titre = <span>{props.titre}</span>
  }

  return (
    <a href={props.lien} className="icon-fleche inline-flex gap-3">
      {titre}
      <Fleche />
    </a>  
  )
}

BoutonFleche.propTypes = {
  titre: PropTypes.string
};