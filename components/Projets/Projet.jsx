import Image from 'next/image';
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { CalendarEvent, Group, Time, User } from '../Icons';

function Projet(props) {
  // Définit si le bloc est visible à 10%
  const { ref, inView } = useInView({ threshold: 0.1 });
  const Icon = props.icon;

  // Définition du texte affiché à côté de l'équipe
  let texteEquipe;
  if (props.texteEquipe !== undefined) texteEquipe = props.texteEquipe;
  else if (props.equipe) texteEquipe = "Projet réalisé en équipe"
  else texteEquipe = "Projet réalisé seul"

  return (
    <article ref={ref} className={"h-[90vh] min-w-full snap-center px-28 py-14 " + props.fond + " " + props.texte}>
      <h2 className='text-4xl text-center font-bold mb-8'>
        <Icon className={"inline w-16 h-16 align-middle mb-2 mr-7 " + props.texte} />
        {props.titre}
      </h2>

      <div className='flex text-lg items-start'>
        <div className='shrink-0 mr-12'>
          <Image src={props.image} quality={100} className="self-center" />
        </div>

        <div>
          <div className='flex flex-wrap gap-x-12 gap-y-3 mb-3'>
            <p className='flex items-center gap-3 shrink-0'>
              <CalendarEvent className={props.texte} />
              {props.dates}
            </p>

            {
              props.temps !== undefined && <p className='flex items-center gap-3 shrink-0'>
                <Time className={props.texte} />
                {props.temps}h
              </p>
            }
          </div>

          <p className='flex items-center gap-3 mb-12'>
            {props.equipe ? <Group className={props.texte} /> : <User className={props.texte} />}
            {texteEquipe}
          </p>

          <h3 className='text-2xl font-bold mb-5'>Description</h3>
          <p className='mb-10' dangerouslySetInnerHTML={{__html: props.description}}></p>

          <p><strong>Compétences :</strong> {props.competences.join(", ")}</p>
        </div>
      </div>

    </article>
  )
}

Projet.defaultProps = {
  equipe: false
}

Projet.propTypes = {
  titre: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
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