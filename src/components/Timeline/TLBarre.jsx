import PropTypes from 'prop-types';

function TLBarre({taille, epaisseur, couleur}) {
  // Définition abstraite d'une barre

  // Définition du style
  const styleLigne = { height: taille };

  return (
    // Pour superposer les deux barres, on les place sur le même emplacement de la grille
    <div className={'rounded row-start-1 row-end-2 col-start-1 col-end-2 ' + epaisseur + ' ' + couleur}
      style={styleLigne} />
  )
}

const propTypes = {
  /** Hauteur en pixels de la barre  */
  taille: PropTypes.number
};

export function TLBarreParcouru({taille}) { return TLBarre({taille: taille, epaisseur: 'w-1.5', couleur: 'bg-orange'}) };
export function TLBarreFond ({taille}) { return TLBarre({taille: taille, epaisseur: 'w-1', couleur: 'bg-grey'}) };

TLBarreParcouru.propTypes = propTypes;
TLBarreFond.propTypes = propTypes;
