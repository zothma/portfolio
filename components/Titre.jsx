import PropTypes from "prop-types";

export default function Titre({ titre, niveau = 2, hashtag = true }) {
  const Heading = `h${niveau}`

  return (
    <Heading className="text-center text-4xl sm:text-5xl mb-12 font-bold">
      {hashtag && <span className="text-orange mr-5" aria-hidden="true">#</span>}
      {titre}
    </Heading>
  );
}

Titre.propTypes = {
  titre: PropTypes.string.isRequired,
  niveau: PropTypes.number,
  hashtag: PropTypes.bool
};