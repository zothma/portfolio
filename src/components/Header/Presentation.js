// Une en-tête de présentation rapide
// Premier élément visible sur la page

import BoutonFleche from "../Navigation/BoutonFleche";

export default function Presentation() {
  return (
    <div className="relative">

      <div className="flex justify-center items-center w-full h-[100vh] p-20 gap-36">
        <img 
          src="/assets/profil.jpg" 
          alt="Identité"
          height="360"
          width="360"
          className="rounded-full" />
        <div>
          <h1 className="text-7xl font-bold pb-5">
            Enzo MAROS<span className="text-orange">.</span>
          </h1>
          <h2 className="text-5xl">
            Étudiant en développement informatique
          </h2>
        </div>
      </div>

      <div className="absolute flex justify-center inset-x-0 bottom-5">
        <BoutonFleche lien="#présentation"/>
      </div>
    </div>
  );
}