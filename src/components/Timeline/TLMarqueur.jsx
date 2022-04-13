import PropTypes from 'prop-types';

// Les types que le marqueur peut prendre
const Formes = {
  trait: Symbol("trait"),     // Marqueur de base
  cercle: Symbol("cercle"),   // Cercle vide
  choix: Symbol("choix")      // Cercle contenant un '?'
};

function Choix(props) {
  // Renvoie un ? formaté pour le type choix
  const couleurTexte = props.parcouru ? "text-orange" : "text-gris";
  
  return <span className={'font-ubuntu font-bold ' + couleurTexte}>?</span>
}

Choix.propTypes = {
  parcouru: PropTypes.bool.isRequired
}

function TLMarqueur({position, parcouru, forme}) {
  // Un marqueur peut être un trait ou un cercle, et il dispose d'une position
  
  const marqueurStyle = { top: position }

  // On ne peut pas décomposer les noms des styles (ex: créer une variable couleur et l'ajouter à chaque style)
  // sinon TailwindCSS ne détecte pas le style et ne le génère pas
  const couleurFond = parcouru ? "bg-orange" : "bg-grey";
  const couleurBordure = parcouru ? "border-orange" : "border-grey";
  const tailleBordure = parcouru ? "border-6" : "border-4";

  const CERCLE = "box-border h-7 w-7 rounded-2xl bg-white " + tailleBordure + " " + couleurBordure;
  const TRAIT = "h-1 w-5 " + couleurFond;
  const styleForme = forme === Formes.trait ? TRAIT : CERCLE;
  
  return (
    <div
      className={'absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ' + styleForme}
      style={marqueurStyle}>
        {forme === Formes.choix ? <Choix parcouru={parcouru} /> : <></>}
    </div>
  );
}


TLMarqueur.defaultProps = { parcouru: true, forme: Formes.cercle }

TLMarqueur.propTypes = {
  position: PropTypes.number.isRequired,
  parcouru: PropTypes.bool,
  forme: PropTypes.symbol
};

export default TLMarqueur;
export { Formes };
