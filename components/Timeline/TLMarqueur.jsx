import PropTypes from 'prop-types';

// Les types que le marqueur peut prendre
const Formes = {
  trait: Symbol("trait"),     // Marqueur de base
  cercle: Symbol("cercle"),   // Cercle vide
  choix: Symbol("choix")      // Cercle contenant un '?'
};

function Choix(props) {
  // Renvoie un ? formaté pour le type choix
  const couleurTexte = props.parcouru ? "text-orange" : "text-grey";
  
  return <span className={'font-ubuntu font-bold ' + couleurTexte}>?</span>
}

Choix.propTypes = {
  parcouru: PropTypes.bool.isRequired
}

function TLMarqueur({parcouru, forme}) {
  // Un marqueur peut être un trait ou un cercle, et il dispose d'une position
  
  // On ne peut pas décomposer les noms des styles (ex: créer une variable couleur et l'ajouter à chaque style)
  // sinon TailwindCSS ne détecte pas le style et ne le génère pas
  const couleurFond = parcouru ? "bg-orange" : "bg-grey";
  const couleurBordure = parcouru ? "border-orange" : "border-grey";
  const tailleBordure = parcouru ? "border-6" : "border-4";

  const CERCLE = "box-border h-7 w-7 mt-[3px] rounded-2xl bg-white " + tailleBordure + " " + couleurBordure;
  const TRAIT = "h-1 w-5 " + couleurFond;
  const styleForme = forme === Formes.trait ? TRAIT : CERCLE;
  
  return (
    <div
      className={styleForme}>
        {forme === Formes.choix ? <Choix parcouru={parcouru} /> : <></>}
    </div>
  );
}


TLMarqueur.defaultProps = { parcouru: true, forme: Formes.cercle }

TLMarqueur.propTypes = {
  parcouru: PropTypes.bool,
  forme: PropTypes.symbol
};

export default TLMarqueur;
export { Formes };
