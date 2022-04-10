export default function SousTitre(props) {
  // Un titre est composé d'un # suivi du nom du titre

  return (
    <h2 className="text-center">
      <span className="text-orange ml-5">#</span>
      {props.titre}
    </h2>
  );
}