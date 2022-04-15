import PropTypes from 'prop-types'

export default function CarteCompetences(props) {
  console.log(props.children);

  // Le premier mot apparaît en orange, le reste en gris
  const [mot1, ...mots] = props.titre.split(" ")

  return (
    <div className='bg-[#fff] p-8 rounded-3xl flex-grow flex-shrink basis-0 shadow-lg'>
      <h3 className='font-ubuntu font-bold text-3xl mb-8'>
        <span className='text-orange'>{mot1} </span>
        {mots}
      </h3>
      <div className='flex flex-wrap gap-10 justify-center'>
        {props.children?.map(el => {
          const IconType = el.type;
          return <IconType {...el.props} className={ (el.props.className ?? "") + " w-16 h-auto"} key={IconType.name} />
        })}
      </div>
    </div>
  )
}
CarteCompetences.propTypes = {
  /** Titre de la carte */
  titre: PropTypes.string.isRequired,
}
