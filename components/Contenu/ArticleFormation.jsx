import React, { useState, useEffect, Fragment } from 'react'

import Timeline from "../Timeline/Timeline";
import TLData from "../Timeline/TLData";
import Article from "./Article";
import Bouton from "../Bouton";

// Importation des SVG
import IconeLieu from "../Icons/MapPin";

export default function ArticleFormation() {
  return (
    <Article titre="Mon parcours" id="formation">
      <Timeline enCours={4}>
        <TLData date={2018} texteDate="2018 - 2021" titre="Baccalauréat général">
          <p>
            <IconeLieu className="inline mr-2 align-top" aria-label="Lieu de formation" />
            <a className="underline underline-offset-4 flex-grow-0" href="https://www.jean23-quintin.net/" target={"_blank"} rel="noreferrer">
              Collège Lycée Jean XXIII, Quintin
            </a>
          </p>
          <p>
            <strong>Spécialités & Options</strong>
            <br />
            Numérique et Sciences de l’Informatique (NSI), Mathématiques
            <br />
            Mathématiques expertes, Anglais littéraire.
          </p>
          <Bouton url="https://www.data.gouv.fr/fr/datasets/programmes-denseignement-de-terminale-generale-reforme-du-baccalaureat-2021/#resources" texte="Programme national" />
        </TLData>

        <TLData date={2019} texteDate="2019 et 2021" titre="Diplômes d'allemand" >
          <p>
            <a className="underline underline-offset-4 flex-grow-0" href="https://allemagneenfrance.diplo.de/fr-fr/-/1995798" target={"_blank"} rel="noreferrer">Deutsches Sprachdiplom</a>, niveau B1 <br />
            <a className="underline underline-offset-4 flex-grow-0" href="https://www.goethe.de/ins/fr/fr/sta/tou/prf/gzb2.html" target={"_blank"} rel="noreferrer">Goethe Zertifikat</a>, niveau B2
          </p>
        </TLData>

        <TLData date={2021} texteDate="2021 - 2024" titre="Bachelor Universitaire de Technologie (BUT) Informatique" >
          <p>
            <IconeLieu className="inline mr-2 align-top" aria-label="Lieu de formation" />
            <a className="underline underline-offset-4 flex-grow-0" href="https://iut-lannion.univ-rennes1.fr/" target={"_blank"} rel="noreferrer">IUT de Lannion</a>
          </p>

          <p>
            <strong>Enseignements</strong>
            <br />
            Développement logiciel, développement Web, base de données, gestion de systèmes (Linux), gestion de projet.
          </p>

          <Bouton url="https://www.enseignementsup-recherche.gouv.fr/sites/default/files/annexe-2-licence-professionnelle-bachelor-universitaire-de-technologie-informatique-29016.pdf" texte="Découvrir le programme" />
        </TLData>

        <TLData date={2022} texteDate="2022 - 2024" titre="Alternance développeur Web Fullstack">
          <p>
            <IconeLieu className="inline mr-2 align-top" aria-label="Lieu de formation" />
            Ministère des Armées, Rennes
          </p>
          <p>
            <strong>Missions</strong>
            <br />
            Développement d'applications Web, maintenance d'applications existantes, gestion de bases de données, gestion de projets.
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