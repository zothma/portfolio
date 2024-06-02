import PropTypes from 'prop-types';

export default function TLData({date, texteDate, titre, parcouru, children}) {
  // Par défaut, si aucun texte n'est passé pour la date, on utilise directement
  // la date
  texteDate = texteDate ?? String(date);

  // Définition des styles
  const styleCouleur = parcouru ? "text-orange" : "text-grey";
  // La direction de l'alignement n'est effectif que lorsque la fenêtre est assez grande
  // const styleAlignement = (orientation === Orientations.gauche) ? "xl:text-right xl:items-end" : "";
  // const stylePosition = (orientation === Orientations.gauche) ? "xl:left-0 xl:right-1/2 xl:pl-0 xl:pr-20" : "xl:left-1/2 xl:pl-20";

  return (
    <div className={['flex flex-col gap-5 leading-8 items-start pl-0'].join(' ')} >
      <h3 className='font-bold font-ubuntu text-2xl lg:text-3xl'>
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
  // orientation: PropTypes.symbol.isRequired,
}
