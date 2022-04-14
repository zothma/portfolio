import PropTypes from 'prop-types'
import { TLBarreFond } from './TLBarre';
import TLMarqueur, { Formes } from './TLMarqueur';

export default function TLBranche({dateDebut, dateFin, espacement, nom, marqueurs}) {
  // Une branche est une sous-partie de la timeline principale

  // Une partie de la taille a déjà été dessinée par le séparateur
  const TAILLE_SEP = 24;
  const MARGE = 50;

  const taille = (dateFin - dateDebut) * espacement - TAILLE_SEP + MARGE;

  // Positions de chaque marqueur de la branche principale
  let marqueursPos = [];
  // Le marqueur de séparation compte déjà comme marqueur pour l'année de début
  for (let i = 1; i <= (dateFin - dateDebut); i++) {
    marqueursPos.push(i * espacement - TAILLE_SEP);
  }

  return (
    <div className='relative'>
      {/* div des barres de fond et du nom de la branche */}
      <div className='grid justify-items-center'>
        <TLBarreFond taille={taille} jonction />
        <div className='row-start-2 col-start-1 row-end-3 col-end-2 border-grey border-r-4 border-dashed h-10'></div>
        <div className='row-start-3 col-start-1 row-end-4 col-end-2 text-bas-haut rotate-180 mt-5 font-bold text-grey'>
          {nom}
        </div>
      </div>

      {/* Div des marqueurs */}
      <div className='absolute top-0 left-1/2'>
        {marqueursPos.map((pos, i) => {
          const date = dateDebut + i + 1;
          
          // Choix du bon type
          let type = marqueurs.includes(date) ? Formes.cercle : Formes.trait;

          return <TLMarqueur parcouru={false} forme={type} position={pos} key={dateDebut + i} />
        })}
      </div>
    </div>
  )
}

TLBranche.defaultProps = {
  marqueurs: []
};

TLBranche.propTypes = {
  /** Date de début */
  dateDebut: PropTypes.number.isRequired,
  /** Date de fin de la branche */
  dateFin: PropTypes.number.isRequired,
  /** Taille entre deux marqueurs */
  espacement: PropTypes.number.isRequired,
  /** Nom de la branche */
  nom: PropTypes.string.isRequired,
  /** Marqueurs à ajouter */
  marqueurs: PropTypes.arrayOf(PropTypes.number)
}
