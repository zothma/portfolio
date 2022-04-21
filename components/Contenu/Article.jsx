import PropTypes from 'prop-types'
import SousTitre from "../SousTitre";

export default function Article(props) {
  // Un article définit un sous-titre, un contenu et dispose d'un identifiant
  return (
    <article id={props.id} className='mx-8 md:mx-24 lg:mx-32 mt-20 mb-28 text-lg sm:text-xl'>
      <SousTitre titre={props.titre}/>
      {props.children}
    </article>
  );
}

Article.propTypes = {
  titre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
