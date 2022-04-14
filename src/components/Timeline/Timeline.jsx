import PropTypes from 'prop-types'
import { TLBarreFond, TLBarreParcouru } from "./TLBarre";
import TLMarqueur, { Formes } from './TLMarqueur';
import TLSeparateur from './TLSeparateur';


export default function Timeline({dateDebut, dateFin, espacement, parcouru, marqueurs, separation}) {
  // Définition abstraite de la timeline. Ce composant sert de support et de point de
  // repère pour tous les sous-éléments (barres, données...)
  
  // Définition des constantes
  const MARGE = 30;
  const dateFinGlobal = dateFin;            // Utilisée par les sous-branches
  dateFin = separation ?? dateFinGlobal;    // Utilisée par la branche principale

  // Tailles totale et parcourue de la branche principale
  const taille = (dateFin - dateDebut) * espacement + MARGE;
  const tailleParcourue = (dateFin - dateDebut) * (parcouru/100) * espacement + MARGE;

  // Positions de chaque marqueur de la branche principale
  let marqueursPos = [];
  for (let i = 0; i <= (dateFin - dateDebut); i++) {
    marqueursPos.push(MARGE + i * espacement);
  }

  return (
    <div className='relative flex flex-col items-center'>
      {/* Div des barres */}
      <div className='grid justify-center justify-items-center'>
        <TLBarreFond taille={taille} />
        <TLBarreParcouru taille={tailleParcourue} />
      </div>

      {/* Div des marqueurs */}
      <div className='absolute top-0 left-1/2'>
        {marqueursPos.map((pos, i) => {
          const parcouru = pos <= tailleParcourue; // Le marqueur est dans la zone parcourue ?
          const date = dateDebut + i;
          
          // Choix du bon type
          let type;
          if (date === separation)            type = Formes.choix;    // (?)
          else if (marqueurs.includes(date))  type = Formes.cercle;   // ( )
          else                                type = Formes.trait;    // ---

          return <TLMarqueur parcouru={parcouru} forme={type} position={pos} key={dateDebut + i} />
        })}

      </div>

      {/* Séparateur en sous-branches */}
      { separation == null ? <></> : <TLSeparateur /> }
    </div>
  )
}

Timeline.propTypes = {
  /** Date de début globale */
  dateDebut: PropTypes.number.isRequired,
  /** Date de fin globale */
  dateFin: PropTypes.number.isRequired,
  /** Taille entre deux marqueurs */
  espacement: PropTypes.number.isRequired,
  /** Pourcentage de la barre parcouru */
  parcouru: PropTypes.number.isRequired,
  /** Marqueurs à ajouter */
  marqueurs: PropTypes.arrayOf(PropTypes.number),
  /** Année de séparation */
  separation: PropTypes.number
}
