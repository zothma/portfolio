import PropTypes from 'prop-types'
import { TLBarreFond, TLBarreParcouru } from "./TLBarre";


export default function Timeline({dateDebut, dateFin, espacement, parcouru}) {
  // Définition abstraite de la timeline. Ce composant sert de support et de point de
  // repère pour tous les sous-éléments (barres, données...)
  
  // Définition des constantes
  const MARGE = 30;

  // Tailles totale et parcourue de la zone dessinée
  const taille = (dateFin - dateDebut) * espacement + MARGE;
  const tailleParcourue = (dateFin - dateDebut) * (parcouru/100) * espacement + MARGE;

  return (
    <div className='grid justify-center justify-items-center'>
      <TLBarreFond taille={taille} />
      <TLBarreParcouru taille={tailleParcourue} />
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
