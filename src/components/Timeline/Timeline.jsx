import PropTypes from 'prop-types'


export default function Timeline({dateDebut, dateFin, espacement}) {
  // Définition abstraite de la timeline. Ce composant sert de support et de point de
  // repère pour tous les sous-éléments (barres, données...)
  
  // Taille totale de la zone dessinée
  const taille = (dateFin - dateDebut) * espacement;

  return (
    <div></div>
  )
}

Timeline.propTypes = {
  /** Date de début globale */
  dateDebut: PropTypes.number.isRequired,
  /** Date de fin globale */
  dateFin: PropTypes.number.isRequired,
  /** Taille entre deux marqueurs */
  espacement: PropTypes.number.isRequired
}
