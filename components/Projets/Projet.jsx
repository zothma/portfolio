import Image from 'next/image';
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import Bouton, { TypesBtn } from '../Bouton';
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

  // Définition des fonctions de génération
  const genererIcone = (Icon, i) => {
    return <Icon key={i} className="inline mr-2 h-7 w-auto" />
  }

  const genereLien = (lien, i) => {
    // Retourne le bouton coresspondant aux données du lien
    const type = lien.url.startsWith("https://github.com") ? TypesBtn.github : TypesBtn.externe;
    return <Bouton type={type} key={i} {...lien} /> 
  }

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

        {/* Contenu principal */}
        <div>
          {/* Caractéristiques du projet (date, temps, equipe) */}
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

          {/* Description du projet */}
          <h3 className='text-2xl font-bold mb-5'>Description</h3>
          <p className='mb-8' dangerouslySetInnerHTML={{ __html: props.description }}></p>

          {/* Informations complémentaires  (technologies, compétences) */}
          <div className='flex flex-wrap gap-x-10 gap-y-3 mb-3'>
            {
              props.technologies && <p>
                <strong>Technologies :</strong> {props.technologies.map(genererIcone)}
              </p>
            }
            {
              props.outils && <p>
                <strong>Outils :</strong> {props.outils.map(genererIcone)}
              </p>
            }
          </div>
          <p className='mb-12'><strong>Compétences :</strong> {props.competences.join(", ")}</p>

          {/* Liens externes */}
          <div className='flex flex-wrap gap-x-8 gap-y-3'>
            {props.liens.map(genereLien)}
          </div>
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
  technologies: PropTypes.arrayOf(PropTypes.func),
  outils: PropTypes.arrayOf(PropTypes.func),
  competences: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Liens externes */
  liens: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      texte: PropTypes.string
    })
  ).isRequired
}

export default Projet