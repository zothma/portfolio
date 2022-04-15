import PropTypes from 'prop-types'
import { TLBarreFond, TLBarreParcouru } from "./TLBarre";
import TLBranche from './TLBranche';
import TLData from './TLData';
import TLMarqueur, { Formes } from './TLMarqueur';
import TLSeparateur from './TLSeparateur';


export default function Timeline({dateDebut, dateFin, espacement, parcouru, marqueurs, separation, children}) {
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

  // Récupération des TLData depuis les children
  let donnees = [];
  if (Array.isArray(children)) {
    donnees = children.filter(el => el.type);
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

      {/* Séparation en sous-branches */}
      { separation == null ? <></> : <>
        <TLSeparateur />

        <div className="flex gap-11">
          <div className='translate-x-1/2'>
            <TLBranche 
              dateDebut={dateFin} 
              dateFin={dateFinGlobal} 
              espacement={espacement} 
              nom="Ingénieur" />
          </div>

          <div className='-translate-x-1/2'>
            <TLBranche 
              dateDebut={dateFin} 
              dateFin={dateFinGlobal} 
              espacement={espacement}
              marqueurs={[2024]}
              nom="Master" />
          </div>
        </div>
      </> }

      {/* Div des données TLData */}
      <div>
        {donnees.map(el => {
          // calcul de la position par rapport au haut
          const position = (el.props.date - dateDebut) * espacement + MARGE - 18;
          const parcouru = position < tailleParcourue;

          return <div className='absolute w-full left-0' key={el.props.date} style={{top: position}}>
            <TLData
              {...el.props}
              parcouru={parcouru} />
          </div>
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
  parcouru: PropTypes.number.isRequired,
  /** Marqueurs à ajouter */
  marqueurs: PropTypes.arrayOf(PropTypes.number),
  /** Année de séparation */
  separation: PropTypes.number
}
