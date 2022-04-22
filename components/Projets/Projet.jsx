import PropTypes from 'prop-types'

function Projet({color}) {
  return (
    <div className={"h-[90vh] min-w-full snap-center " + color}>Projet</div>
  )
}
Projet.propTypes = {}

export default Projet