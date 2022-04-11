// Une en-tête de présentation rapide
// Premier élément visible sur la page

import BoutonFleche from "../BoutonFleche";

export default function EnTete() {
  return (
    <div id="top" className="relative">
      <div className="z-0 bg-code bg-fixed bg-cover bg-center blur-sm w-full h-screen"></div>

      <div className="z-10 absolute top-0 bg-none flex justify-center items-center w-full h-screen p-20 gap-36">
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
          <h2 className="text-5xl font-normal">
            Étudiant en développement informatique
          </h2>
        </div>
      </div>

      <div className="z-20 absolute flex justify-center inset-x-0 bottom-5">
        <BoutonFleche lien="#présentation"/>
      </div>
    </div>
  );
}