import PropTypes from 'prop-types'
import Image from 'next/image';

function genererIcone({ icon, alt }, i) {
  return (
    <span className='relative inline-block h-7 w-7' key={i}>
      <Image src={"/icons/logos/" + icon} alt={alt} layout="fill" objectFit='contain' />
    </span>
  )
}

function ParagrapheIcones({ titre, icones }) {
  return (
    <p className='flex gap-2'>
      <strong>{titre} :</strong>
      {icones.map(genererIcone)}
    </p>
  )
}

ParagrapheIcones.propTypes = {
  /** Liste des URL des icones avec leurs textes alternatifs */
  icones: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    alt: PropTypes.string
  })).isRequired,
  /** Titre du paragraphe */
  titre: PropTypes.string.isRequired
}
export default ParagrapheIcones