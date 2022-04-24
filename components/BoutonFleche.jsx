import Fleche from './Icons/ArrowDown';
import PropTypes from "prop-types";

// Représente un bouton, avec ou sans texte, et contenant une flèche vers le bas
export default function BoutonFleche(props) {
  // L'objet n'a pas forcément de titre
  let titre = <></>;
  if ('titre' in props) {
    titre = <span>{props.titre}</span>
  }

  return (
    <a href={props.lien} className="inline-flex gap-3" aria-label='Accéder à la présentation' title='Accéder à la présentation'>
      {titre}
      <Fleche className="w-[70px] h-[70px]" />
    </a>  
  )
}

BoutonFleche.propTypes = {
  titre: PropTypes.string
};