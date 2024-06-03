import PropTypes from 'prop-types';
import { useContext } from 'react';
import TimelineContext, { TimelineAlignement } from '../../contexts/TimelineContext';

export default function TLData({date, texteDate, titre, children}) {
  texteDate = texteDate ?? String(date);
  
  const {alignement, parcouru} = useContext(TimelineContext);
  const styleCouleur = parcouru ? "text-orange" : "text-grey";
  const styleAlignement = (alignement === TimelineAlignement.gauche) ? "" : "lg:text-right lg:items-end";

  return (
    <div className={`flex flex-col gap-5 leading-8 items-start pl-0 ${styleAlignement}`} >
      <h3 className='font-bold font-ubuntu text-2xl lg:text-3xl'>
        <span className={styleCouleur}>{texteDate}</span> : {titre}
      </h3>

      {children}
    </div>
  )
};

TLData.defaultTypes = {
  parcouru: true
}

TLData.propTypes = {
  /** Date permettant de positionner les données */
  date: PropTypes.number.isRequired,
  /** Texte affiché pour la date, avant le titre */
  texteDate: PropTypes.string,
  /** Titre */
  titre: PropTypes.string.isRequired
}
