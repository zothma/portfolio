import React from 'react'

import Timeline from "../Timeline/Timeline";
import TLData from "../Timeline/TLData";
import Article from "./Article";
import Bouton from "../Bouton";

// Importation des SVG
import IconeLieu from "../Icons/MapPin";
import Lien from '../Lien';

export default function ArticleFormation() {
  return (
    <Article titre="Mon parcours" id="formation">
      <Timeline enCours={4}>
        <TLData date={2018} texteDate="2018 - 2021" titre="Baccalauréat général">
          <p>
            <IconeLieu className="inline mr-2 align-top" aria-label="Lieu de formation" />
            <Lien url="https://www.jean23-quintin.net/">Collège Lycée Jean XXIII, Quintin</Lien>
          </p>
          <p>
            <strong>Spécialités & Options</strong>
            <br />
            Numérique et Sciences de l’Informatique (NSI), Mathématiques
            <br />
            Mathématiques expertes, Anglais littéraire.
          </p>
          <Bouton url={process.env.LINKS.PROGRAMME_BAC} texte="Programme national" />
        </TLData>

        <TLData date={2019} texteDate="2019 et 2021" titre="Diplômes d'allemand" >
          <p>
            <Lien url={process.env.LINKS.DSD}>Deutsches Sprachdiplom</Lien>, niveau B1 <br />
            <Lien url={process.env.LINKS.GOETHE}>Goethe Zertifikat</Lien>, niveau B2
          </p>
        </TLData>

        <TLData date={2021} texteDate="2021 - 2024" titre="Bachelor Universitaire de Technologie (BUT) Informatique" >
          <p>
            <IconeLieu className="inline mr-2 align-top" aria-label="Lieu de formation" />
            <Lien url={process.env.LINKS.IUT_LANNION}>IUT de Lannion</Lien>
          </p>

          <p>
            <strong>Enseignements</strong>
            <br />
            Développement logiciel, développement Web, base de données, gestion de systèmes (Linux), gestion de projet.
          </p>

          <Bouton url={process.env.LINKS.PROGRAMME_BUT} texte="Découvrir le programme" />
        </TLData>

        <TLData date={2022} texteDate="2022 - 2024" titre="Alternance développeur Web Fullstack">
          <p>
            <IconeLieu className="inline mr-2 align-top" aria-label="Lieu de formation" />
            Ministère des Armées, Rennes
          </p>
          <p>
            <strong>Missions</strong>
            <br />
            Développement d&apos;applications Web, maintenance d&apos;applications existantes, gestion de bases de données, gestion de projets.
          </p>
        </TLData>

        <TLData date={2024} texteDate="2024 - 2027" titre="Objectif Bac+5">
          <p>Je souhaite obtenir mon diplôme tout en me professionnalisant, puis poursuivre mes études en école d’ingénieur, à l’UTC de Compiègne.</p>
        </TLData>

        <TLData date={2027} texteDate="2027" titre="Diplôme d'ingénieur" />
      </Timeline>
    </Article>
  )
}