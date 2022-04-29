// Une en-tête de présentation rapide
// Premier élément visible sur la page

import Image from "next/image";
import BoutonFleche from "../BoutonFleche";

export default function EnTete() {
  return (
    <div id="top" className="relative">
      <div className="bg-code bg-fixed bg-cover bg-center blur-sm w-full h-screen"></div>

      <div className="absolute top-0 flex flex-col gap-10 justify-center items-center w-full h-screen p-20 md:p-32 md:flex-row md:gap-14 lg:gap-36">
        <span className="flex-shrink-0">
          <Image
            src="/assets/profil_res.jpg" 
            alt="Identité"
            height="330"
            width="330"
            className="rounded-full w-80 h-80"
            priority={true} />
        </span>
        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold pb-5">
            Enzo MAROS<span className="text-orange">.</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-normal">
            Étudiant en développement informatique
          </h2>
        </div>
      </div>

      <div className="z-0 absolute flex justify-center inset-x-0 bottom-5">
        <BoutonFleche lien="#présentation"/>
      </div>
    </div>
  );
}