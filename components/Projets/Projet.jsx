import Image from 'next/image';
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';

import Bouton, { TypesBtn } from '../Bouton';
import { CalendarEvent, Group, Time, User } from '../Icons';

function Projet(props) {
  // Définit si le bloc est visible à 50%. Cela permet de ne pase avoir deux blocs visibles en même temps
  const { ref, inView } = useInView({ threshold: 0.5 });
  const Icon = props.icon;

  // On attend que le composant soit entièrement monté avant de lancer la mise à jour
  // du composant parent
  useEffect(() => {
    if (inView) {
      props.onVisible();
    }
  }, [props, inView])

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
    const blanc = props.fond === "bg-black";
    return <Bouton type={type} key={i} blanc={blanc} {...lien} />
  }

  return (
    <article id={"projet" + props.id} ref={ref} className={"md:h-[800px] min-w-full snap-center px-8 md:px-10 lg:px-20 xl:px-32 py-14 " + props.fond + " " + props.texte}>
      <h2 className='text-4xl text-center font-bold mb-8'>
        <Icon className={"inline w-10 h-10 md:w-16 md:h-16 align-middle mb-2 mr-3 md:mr-7 " + props.texte} aria-hidden="true" />
        {props.titre}
      </h2>

      <div className='text-lg items-start lg:items-center'>
        <div className='float-left hidden md:block md:shrink-0 mr-12 max-w-max w-60 lg:w-80 xl:w-96'>
          <Image src={props.image} quality={100} className="self-center" alt={props.imageAlt} />
        </div>

        {/* Contenu principal */}
        <div>
          {/* Caractéristiques du projet (date, temps, equipe) */}
          <div className='flex flex-wrap gap-x-12 gap-y-3 mb-3'>
            <p className='flex items-center gap-3 shrink-0'>
              <CalendarEvent className={props.texte} aria-label="Dates de projet" />
              {props.dates}
            </p>

            {
              props.temps !== undefined && <p className='flex items-center gap-3 shrink-0'>
                <Time className={props.texte} aria-label="Durée du projet" />
                {props.temps}h
              </p>
            }
          </div>

          <p className='flex items-center gap-3 mb-12'>
            {props.equipe ? <Group className={props.texte} aria-hidden="true" /> : <User className={props.texte} aria-hidden="true" />}
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
          <p className='mb-8'><strong>Compétences :</strong> {props.competences.join(", ")}</p>

          {/* Liens externes */}
          <div className='flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3'>
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
  /** Identification */
  id: PropTypes.number.isRequired,
  titre: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
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
  ).isRequired,
  /** Action déclanchée lorsqu'il est visible */
  onVisible: PropTypes.func.isRequired
}

export default Projet