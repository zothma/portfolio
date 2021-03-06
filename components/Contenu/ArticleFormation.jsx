import React, { useState, useEffect } from 'react'

import Timeline from "../Timeline/Timeline";
import TLData, { Orientations } from "../Timeline/TLData";
import Article from "./Article";

// Importation des SVG
import IconeLieu from "../Icons/MapPin";
import IconeDiplome from "../Icons/FilePaper";
import IconeOptions from "../Icons/AddCircle";
import IconeSpecialite from "../Icons/PencilRule";
import Bouton from "../Bouton";

function obtenirTaille(tailleEcran) {
  // Retourne la taille de la timeline selon l'écran
  let newTaille;
  if (tailleEcran < 768) newTaille = 125;
  else if (tailleEcran < 1280) newTaille = 120;
  else newTaille = 90;

  return newTaille;
}

export default function ArticleFormation() {
  // La timeline est plus grande lorsque l'écran est réduit
  const tailleMin = 90;
  const [taille, setTaille] = useState(tailleMin);

  useEffect(() => {
    setTaille(obtenirTaille(window.innerWidth));

    window.addEventListener("resize", () => {
      setTaille(obtenirTaille(window.innerWidth));
    });
  }, [])

  // Calcul du pourcentage parcouru jusqu'à 2023 (date de branchement) en fonction
  // de la date actuelle
  const debut = new Date("2018-09-01").getTime();
  const fin = new Date("2023-09-01").getTime();
  const parcours = (Date.now() - debut) / (fin - debut) * 100;

  return (
    <Article titre="Formation" id="formation">

      <Timeline
        dateDebut={2018}
        dateFin={2024}
        espacement={taille}
        parcouru={parcours}
        marqueurs={[2018, 2021]}
        separation={2023}>

        <TLData date={2018} orientation={Orientations.gauche} texteDate="2018 - 2021" titre="Baccalauréat général" >
          <p>
            <IconeLieu className="inline mr-2 align-top" aria-label="Lieu de formation" />
            <a className="underline underline-offset-4 flex-grow-0" href="https://www.jean23-quintin.net/" target={"_blank"} rel="noreferrer">
              Collège Lycée Jean XXIII, Quintin
            </a>
          </p>
          <p>
            <IconeSpecialite className="inline mr-2 align-top" aria-label="Spécialités" />
            Numérique et Sciences de l’Informatique (NSI) et Mathématiques
          </p>
          <p>
            <IconeOptions className="inline mr-2 align-top" aria-label="Options" />
            Mathématiques expertes, anglais littéraire
          </p>
          <Bouton url="https://www.data.gouv.fr/fr/datasets/programmes-denseignement-de-terminale-generale-reforme-du-baccalaureat-2021/#resources" texte="Programme national" />
        </TLData>

        {
          taille !== tailleMin ? <></> : <TLData date={2019} orientation={Orientations.droite} texteDate="2019 et 2021" titre="Diplômes d'allemand" >
            <div className="flex gap-2">
              <IconeDiplome className="flex-shrink-0" aria-label="Diplomes" />
              <p>
                <a className="underline underline-offset-4 flex-grow-0" href="https://allemagneenfrance.diplo.de/fr-fr/-/1995798" target={"_blank"} rel="noreferrer">Deutsches Sprachdiplom</a>, niveau B1 <br />
                <a className="underline underline-offset-4 flex-grow-0" href="https://www.goethe.de/ins/fr/fr/sta/tou/prf/gzb2.html" target={"_blank"} rel="noreferrer">Goethe Zertifikat</a>, niveau B2
              </p>
            </div>
          </TLData>
        }

        <TLData date={2021} orientation={Orientations.droite} texteDate="2021 - 2024" titre="Bachelor Universitaire de Technologie (BUT) Informatique" >
          <div className="flex gap-2">
            <IconeLieu className="flex-shrink-0" aria-label="Lieu de formation" />
            <p>
              <a className="underline underline-offset-4 flex-grow-0" href="https://iut-lannion.univ-rennes1.fr/" target={"_blank"} rel="noreferrer">IUT de Lannion</a>
            </p>
          </div>

          <div className="flex gap-2">
            <IconeSpecialite className="flex-shrink-0" aria-label="Spécialités" />
            <p>Développement logiciel, développement Web, base de données, gestion de systèmes (Linux), gestion de projet</p>
          </div>

          <Bouton url="https://cache.media.enseignementsup-recherche.gouv.fr/file/SPE4-MESRI-17-6-2021/35/5/Annexe_17_INFO_BUT_annee_1_1411355.pdf" texte="Découvrir le programme" />
        </TLData>

        <TLData date={2024} orientation={Orientations.gauche} texteDate="2024 - 2026" titre="Objectif Bac+5" >
          <p>Je souhaite obtenir mon diplôme tout en me professionnalisant, puis poursuivre mes études jusqu’à Bac+5 en école d’ingénieur (dès <strong>2023</strong>) ou en master</p>
        </TLData>

      </Timeline>

    </Article>
  )
}