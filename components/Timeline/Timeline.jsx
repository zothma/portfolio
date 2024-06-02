import PropTypes from 'prop-types'
import TLMarqueur, { Formes } from './TLMarqueur';
import TLBarre from './TLBarre';
import { Fragment } from 'react';

function numberToLetter(number) {
  return String.fromCharCode(65 + number - 1);
}

/**
 * Génère une chaîne de caractères représentant le modèle de grille CSS pour les zones de template.
 * @param {number} size - La taille de la grille.
 * @param {boolean} staggered - Indique si les zones doivent être décalées en alternance.
 * @returns {string} - Le modèle de grille CSS généré.
 */
function generateGridTemplateArea(size, staggered = false) {
  let template = "";
  
  for (let line = 0; line < size; line++) {
      if (staggered) {
        if (line % 2 === 0) {
            const area = numberToLetter(line);
            const nextArea = numberToLetter(line + 1);
            template += `"${line == size ? '.' : nextArea} bar ${line == 0 ? '.' : area}" `;
        } else {
            const area = numberToLetter(line);
            const nextArea = numberToLetter(line + 1);
            template += `"${area} bar ${line == size ? '.' : nextArea}" `;
        }
      } else {
        template += `"bar ${numberToLetter(line + 1)}" `;
      }
  }

  return template;
}

function Grid({ children }) {
  const gridStyle = {
    "--areas-grid": generateGridTemplateArea(children.length, true),
    "--areas-column": generateGridTemplateArea(children.length, false)
  };

  return (
    <div className="timeline lg:timeline__grid" style={gridStyle}>
      <div className='justify-self-center pt-1' style={{gridArea: 'bar'}}>
        <TLBarre couleur="bg-grey" epaisseur="w-1" taille="100%" />
      </div>

      {children.map((child, i) => {
          return (
            <Fragment key={i}>
              <div className='min-h-[100px] lg:justify-self-center col-start-1 lg:col-start-2' style={{gridRowStart: i+1}}>
                <TLMarqueur forme={Formes.cercle} parcouru={false} />
              </div>
              <div style={{gridArea: numberToLetter(i+1)}}>{child}</div>
            </Fragment>
          );
      })}
    </div>
  );
}

export default function Timeline({ dateDebut, dateFin, espacement, parcouru, marqueurs, children }) {
  return (
    <Grid>
      {children}
    </Grid>
  );
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
