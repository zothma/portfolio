import PropTypes from 'prop-types'
import { ReactComponent as IconeDL } from '../icons/download.svg'
import { ReactComponent as IconeExterne } from '../icons/external-link.svg'

export const TypesBtn = {
  telechargement: Symbol("téléchargement"),
  externe: Symbol("externe")
};

export default function Bouton(props) {
  const Icone = props.type === TypesBtn.externe ? IconeExterne : IconeDL;

  return (
    <a href={props.url} className='inline-flex items-center h-12 font-ubuntu border-4 rounded-full px-5 border-orange text-orange'>
      {<Icone className='h-6 w-6 mr-3 fill-orange' />}
      {props.texte}
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
  texte: PropTypes.string.isRequired,
  /** Type de bouton */
  type: PropTypes.symbol
}
