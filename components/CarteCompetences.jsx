import PropTypes from 'prop-types'

export default function CarteCompetences(props) {
  console.log(props.children);
  return (
    <div className='bg-[#fff] p-8 rounded-3xl flex-grow flex-shrink basis-0 shadow-lg'>
      <h3 className='font-ubuntu font-bold text-3xl mb-8'>{props.titre}</h3>
      <div className='flex flex-wrap gap-10 justify-center'>
        {props.children?.map(el => {
          const IconType = el.type;
          return <IconType className="w-16 h-auto" key={IconType.name} />
        })}
      </div>
    </div>
  )
}
CarteCompetences.propTypes = {
  /** Titre de la carte */
  titre: PropTypes.string.isRequired,
  /**  */
}
