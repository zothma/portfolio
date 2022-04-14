import PropTypes from 'prop-types';

export const Orientations = {
  droite: Symbol("droite"),
  gauche: Symbol("gauche")
};

export default function TLData({date, texteDate, titre, parcouru, orientation, children}) {
  // Par défaut, si aucun texte n'est passé pour la date, on utilise directement
  // la date
  texteDate = texteDate ?? String(date);

  // Définition des styles
  const styleCouleur = parcouru ? "text-orange" : "text-grey";
  const styleAlignement = (orientation === Orientations.gauche) ? "text-right" : "text-left";
  const stylePosition = (orientation === Orientations.gauche) ? "right-1/2 pr-14" : "left-1/2 pl-14";

  return (
    <div
      className={['absolute', stylePosition, styleAlignement].join(' ')} >

      <h3 className='font-bold font-ubuntu text-3xl'>
        <span className={styleCouleur}>{texteDate}</span> : {titre}
      </h3>

      {children}
    </div>
  )
};

TLData.defaultTypes = {
  parcouru: true
}

TLData.propTypes = {
  /** Date permettant de positionner les données */
  date: PropTypes.number.isRequired,
  /** Texte affiché pour la date, avant le titre */
  texteDate: PropTypes.string,
  /** Titre */
  titre: PropTypes.string.isRequired,
  /** Définit si la date associée est parcourue ou non */
  parcouru: PropTypes.bool,
  /** Côté sur lequel la donnée doit être écrite */
  orientation: PropTypes.symbol.isRequired,
}
