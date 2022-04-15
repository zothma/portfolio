import PropTypes from "prop-types";

export default function SousTitre(props) {
  // Un titre est composé d'un # suivi du nom du titre

  return (
    <h2 className="text-center text-5xl mb-12 font-bold">
      <span className="text-orange mr-5">#</span>
      {props.titre}
    </h2>
  );
}

SousTitre.propTypes = {
  titre: PropTypes.string.isRequired
};