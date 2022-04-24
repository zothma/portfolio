import PropTypes from 'prop-types';
import { useEffect } from "react"

function IndicateurVide({ sombre }) {
  const couleurFond = sombre ? "bg-white" : "bg-black";

  return <div className='h-7 w-7 flex justify-center items-center'>
    <div className={'rounded-full h-3 w-3 ' + couleurFond}></div>
  </div>
}

function IndicateurProjet({ icons, id, sombre, labels }) {
  // Indique quel projet est actuellement visible et offre la possibilité
  // de changer de projet au clic

  const couleurIcone = sombre ? "fill-white" : "fill-black";

  let handleClick = (id) => {
    return () => {
      document.querySelector("#projets > div").scroll(window.innerWidth * id, 0)
    }
  }

  return (
    <div className='hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-3 items-center'>
      {icons.map((Icon, i) => {
        if (i == id) {
          return <button onClick={handleClick(i)} aria-label={"Accéder au projet " + labels[i]} key={i}><Icon className={couleurIcone}/></button>
        }
        else {
          return <button onClick={handleClick(i)} aria-label={"Accéder au projet " + labels[i]} key={i}><IndicateurVide sombre={sombre} /></button>
        }
      })}
    </div>
  )
}

IndicateurProjet.defaultProps = {
  sombre: false,
}

IndicateurProjet.propTypes = {
  /** Liste des icones de tous les projets */
  icons: PropTypes.arrayOf(PropTypes.func).isRequired,
  /** Projet actuellement affiché */
  id: PropTypes.number.isRequired,
  /** Couleur sombre des éléments */
  sombre: PropTypes.bool,
  /** Labels utilisés pour l'accessibilité */
  labels: PropTypes.arrayOf(PropTypes.string)
}
export default IndicateurProjet