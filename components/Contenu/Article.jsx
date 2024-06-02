import PropTypes from 'prop-types'
import Titre from "../Titre";

/**
 * Définit un article avec un titre.
 */
export default function Article({ id, titre, children }) {
  return (
    <article id={id} className='mx-8 md:mx-24 lg:mx-32 mt-20 mb-28 text-lg sm:text-xl scroll-mt-20'>
      <Titre titre={titre} niveau={2}/>
      {children}
    </article>
  );
}

Article.propTypes = {
  titre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
