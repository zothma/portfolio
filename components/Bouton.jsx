import PropTypes from 'prop-types'
import { Download, ExternalLink, Github } from "./Icons"

export const TypesBtn = {
  telechargement: Symbol("téléchargement"),
  externe: Symbol("externe"),
  github: Symbol("github")
};

export default function Bouton(props) {
  const icons = {
    [TypesBtn.telechargement] : Download,
    [TypesBtn.externe] : ExternalLink,
    [TypesBtn.github] : Github
  };

  const Icone = icons[props.type];

  return (
    <a href={props.url} className='inline-flex items-center h-12 font-ubuntu border-4 rounded-full px-5 border-orange text-orange'>
      {<Icone className='h-6 w-6 mr-3 fill-orange' />}
      {props.type === TypesBtn.github ? "Ouvrir sur GitHub" : props.texte}
    </a>
  )
};

Bouton.defaultProps = {
  type: TypesBtn.externe
}

Bouton.propTypes = {
  /** URL associée au lien */
  url: PropTypes.string.isRequired,
  /** Texte affiché */
  texte: PropTypes.string,
  /** Type de bouton */
  type: PropTypes.symbol
}
