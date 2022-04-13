import PropTypes from 'prop-types'
import { TLBarreFond, TLBarreParcouru } from "./TLBarre";
import TLMarqueur, { Formes } from './TLMarqueur';


export default function Timeline({dateDebut, dateFin, espacement, parcouru}) {
  // Définition abstraite de la timeline. Ce composant sert de support et de point de
  // repère pour tous les sous-éléments (barres, données...)
  
  // Définition des constantes
  const MARGE = 30;

  // Tailles totale et parcourue de la zone dessinée
  const taille = (dateFin - dateDebut) * espacement + MARGE;
  const tailleParcourue = (dateFin - dateDebut) * (parcouru/100) * espacement + MARGE;

  // Positions de chaque marqueur
  let marqueurs = [];
  for (let i = 0; i <= (dateFin - dateDebut); i++) {
    marqueurs.push(MARGE + i * espacement);
  }

  return (
    <div className='relative'>
      {/* Div des barres */}
      <div className='grid justify-center justify-items-center'>
        <TLBarreFond taille={taille} />
        <TLBarreParcouru taille={tailleParcourue} />
      </div>

      {/* Div des marqueurs */}
      <div className='absolute top-0 left-1/2'>
        {marqueurs.map((pos, i) => {
          const parcouru = pos <= tailleParcourue; // Le marqueur est dans la zone parcourue ?
          let type = Formes.trait;

          return <TLMarqueur parcouru={parcouru} forme={type} position={pos} key={dateDebut + i} />
        })}
      </div>
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
  parcouru: PropTypes.number.isRequired
}
