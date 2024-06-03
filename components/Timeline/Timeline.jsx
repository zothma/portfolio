import PropTypes from 'prop-types'
import TLMarqueur, { Formes } from './TLMarqueur';
import TimelineContext, { TimelineAlignement } from '../../contexts/TimelineContext';

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

export default function Timeline({ enCours, children }) {
  const childrenCount = children.length;
  const enCoursBorne = Math.min(enCours, childrenCount);
  const gridStyle = {
    "--areas-grid": generateGridTemplateArea(children.length, true),
    "--areas-column": generateGridTemplateArea(children.length, false)
  };

  return (
    <div className="timeline lg:timeline__grid" style={gridStyle}>
      {/* Barres de fond */}
      <div className="bg-grey w-1 h-full justify-self-center mt-2" style={{gridArea: 'bar'}} />
      <div className="bg-orange w-1.5 h-full justify-self-center mt-2" style={{gridColumnStart: "bar", gridRowStart: 1, gridRowEnd: enCoursBorne + 1}} />

      {children.map((child, i) => {
        const alignement = i % 2 === 1 ? TimelineAlignement.gauche : TimelineAlignement.droite;
        const parcouru = i < enCoursBorne;

        return (
          <TimelineContext.Provider key={i} value={{ alignement, parcouru }}>
            <div className='min-h-[100px] lg:justify-self-center col-start-1 lg:col-start-2' style={{gridRowStart: i+1}}>
              <TLMarqueur forme={Formes.cercle} />
            </div>
            <div style={{gridArea: numberToLetter(i + 1)}}>{child}</div>
          </TimelineContext.Provider>
        );
      })}
    </div>
  );
}

Timeline.propTypes = {
  /** Pourcentage de la barre parcouru */
  enCours: PropTypes.number.isRequired,
}
