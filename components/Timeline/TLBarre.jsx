import PropTypes from 'prop-types';

function TLBarre({taille, epaisseur, couleur, jonction}) {
  // Définition abstraite d'une barre

  // Définition du style
  const styleLigne = { height: taille };
  const styleBord = jonction ? "rounded-none" : "rounded";

  return (
    // Pour superposer les deux barres, on les place sur le même emplacement de la grille
    <div className={['row-start-1 row-end-2 col-start-1 col-end-2', epaisseur, couleur, styleBord].join(' ')}
      style={styleLigne}
      suppressHydrationWarning />
  )
}

const propTypes = {
  /** Hauteur en pixels de la barre  */
  taille: PropTypes.number.isRequired,
  /** Vrai si le bord haut doit être carré plutot qu'arrondi */
  jonction: PropTypes.bool
};

const defaultTypes = {
  jonction: false
};

export function TLBarreParcouru({taille}) { return TLBarre({taille: taille, epaisseur: 'w-1.5', couleur: 'bg-orange'}) };
export function TLBarreFond ({taille, jonction}) { return TLBarre({taille: taille, jonction: jonction, epaisseur: 'w-1', couleur: 'bg-grey'}) };

TLBarreParcouru.propTypes = propTypes;
TLBarreFond.propTypes = propTypes;
TLBarreFond.defaultTypes = defaultTypes;
