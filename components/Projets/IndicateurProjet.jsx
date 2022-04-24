import PropTypes from 'prop-types';

function IndicateurVide({ sombre }) {
  const couleurFond = sombre ? "bg-white" : "bg-black";

  return <div className='h-7 w-7 flex justify-center items-center'>
    <div className={'rounded-full h-3 w-3 ' + couleurFond}></div>
  </div>
}

function IndicateurProjet({ icons, id, sombre }) {
  // Indique quel projet est actuellement visible et offre la possibilité
  // de changer de projet au clic

  const couleurIcone = sombre ? "fill-white" : "fill-black";

  return (
    <div className='hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-3 items-center'>
      {icons.map((Icon, i) => {
        if (i == id) {
          return <a href={"#projet" + i} key={i}><Icon className={couleurIcone}/></a>
        }
        else {
          return <a href={"#projet" + i} key={i}><IndicateurVide sombre={sombre} /></a>
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
}
export default IndicateurProjet