import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

function Projet(props) {
  // Définit si le bloc est visible à 10%
  const {ref, inView } = useInView({threshold: 0.1});

  return (
    <div ref={ref} className={"h-[90vh] min-w-full snap-center " + props.fond + " " + props.texte}>
      
    </div>
  )
}

Projet.propTypes = {
  titre: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  /** Définition des couleurs */
  fond: PropTypes.string,
  texte: PropTypes.string,
  /** Notion de temps */
  dates: PropTypes.string.isRequired,
  temps: PropTypes.number,
  /** Informations sur l'équipe */
  equipe: PropTypes.bool,
  texteEquipe: PropTypes.string,
  /** Contenu */
  description: PropTypes.string.isRequired,
  competences: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Projet