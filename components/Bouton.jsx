import PropTypes from 'prop-types'
import { Download, ExternalLink, Github } from "./Icons"

export const TypesBtn = {
  telechargement: Symbol("téléchargement"),
  externe: Symbol("externe"),
  github: Symbol("github")
};

export default function Bouton(props) {
  // Récupération de l'icone liée au type de bouton
  const icons = {
    [TypesBtn.telechargement] : Download,
    [TypesBtn.externe] : ExternalLink,
    [TypesBtn.github] : Github
  };
  const Icone = icons[props.type];

  // Récupération de la couleur : un bouton peut être blanc
  // ou orange
  const couleurBouton = props.blanc ? "border-white text-white" : "border-orange text-orange";
  const couleurIcone = props.blanc ? "fill-white" : "fill-orange";

  return (
    <a href={props.url} className={'inline-flex items-center h-12 font-ubuntu border-4 rounded-full px-4 shrink-0 ' + couleurBouton}>
      <Icone className={'h-6 w-6 mr-3 ' + couleurIcone} />
      {props.type === TypesBtn.github ? "Ouvrir sur GitHub" : props.texte}
    </a>
  )
};

Bouton.defaultProps = {
  type: TypesBtn.externe,
  blanc: false
}

Bouton.propTypes = {
  /** URL associée au lien */
  url: PropTypes.string.isRequired,
  /** Texte affiché */
  texte: PropTypes.string,
  /** Type de bouton */
  type: PropTypes.symbol,
  /** Affiche le bouton en blanc */
  blanc: PropTypes.bool
}
