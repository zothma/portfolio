import PropTypes from 'prop-types'
import Image from 'next/image'

function Competence({ icon, alt }) {
  return (
    <div title={alt} className="relative flex items-center w-16 h-16" key={alt}>
      <Image src={"/icons/logos/" + icon} alt={alt} layout="fill" objectFit='contain' />
    </div>
  )
}

export default function CarteCompetences({titre, data}) {
  // Le premier mot apparaît en orange, le reste en gris
  const [premierMot, ...mots] = titre.split(" ")

  return (
    <div className='relative bg-[#fff] p-8 rounded-3xl flex-grow flex-shrink basis-0 shadow-lg'>
      <h3 className='font-ubuntu font-bold text-3xl mb-8'>
        <span className='text-orange'>{premierMot} </span>
        {mots}
      </h3>

      <div className='flex flex-wrap gap-10 justify-center'>
        {data.map((props, i) => <Competence key={i} {...props} />)}
      </div>
    </div>
  )
}
CarteCompetences.propTypes = {
  /** Titre de la carte */
  titre: PropTypes.string.isRequired,
  /** Données des images */
  data: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    alt: PropTypes.string
  })).isRequired
}
