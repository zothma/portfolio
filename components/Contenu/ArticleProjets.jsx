import Image from "next/image";
import Bouton, { TypesBtn } from "../Bouton";
import IconeBuilding from "../Icons/Building";
import IconeGraduationCap from "../Icons/GraduationCap";
import IconeUser from "../Icons/User";
import TLData from "../Timeline/TLData";
import Timeline from "../Timeline/Timeline";
import Article from "./Article";

function Competence({ classe }) {
  const classeBornee = Math.max(1, Math.min(classe, 6));

  const classes = [
    { couleur: "#006BA6", texte: "white", nom: "Réaliser un développement d’application" },
    { couleur: "#33AAFF", texte: "black", nom: "Optimiser des applications informatiques" },
    { couleur: "#FFBC42", texte: "black", nom: "Administrer des systèmes informatiques communicants complexes" },
    { couleur: "#ED705A", texte: "black", nom: "Gérer des données de l’information" },
    { couleur: "#D81158", texte: "white", nom: "Conduire un projet" },
    { couleur: "#8F2D56", texte: "white", nom: "Travailler dans une équipe informatique" },
  ]

  return (
    <strong
      className="text-xs py-1 px-2 rounded-lg cursor-default"
      title={classes[classeBornee - 1].nom}
      style={{
        backgroundColor: classes[classeBornee - 1].couleur,
        color: classes[classeBornee - 1].texte
      }}
    >
      C{ classeBornee }
    </strong>
  )
}

function TypeProjet({ type, competences = [] }) {
  const types = {
    "personnel": {
      Icone: IconeUser,
      texte: "Projet personnel"
    },
    "etudiant": {
      Icone: IconeGraduationCap,
      texte: "Cadre universitaire"
    },
    "entreprise": {
      Icone: IconeBuilding,
      texte: "Cadre professionnel"
    }
  };

  const { Icone, texte } = types[type];

  return (
    <p>
      <strong>
        <Icone className="inline mr-2 align-top" aria-label={texte} />
        {texte}
      </strong>
      <br />
      <span className="space-x-2">
        {competences.sort().map((classe) => <Competence key={classe} classe={classe} />)}
      </span>
    </p>
  );
}

export default function ArticleProjets() {
  return (
    <Article titre="Projets et compétences" id="projets">
      <Timeline enCours={8}>
        <TLData date="2021" titre="Jeu de Yams">
          <TypeProjet type="etudiant" competences={[1, 5]} />
          <p>
            <em>
              Célèbre jeu aux 5 dés, j&apos;ai développé le Yams en C dans le cadre de mon premier projet universitaire.
            </em>
          </p>

          <p>
            Ce projet a été l&apos;occasion de mettre à profit mes compétences de développement dans un projet complet,
            mené de bout en bout, et dont les conditions de réalisation m&apos;étaient données.
          </p>

          <p>
            <strong>Réalisations</strong><br />
            Maquettage, cahier de tests, développement, documentation.
          </p>

          <p>
            <Bouton type={TypesBtn.github} url={process.env.LINKS.PROJET_YAMS} />
          </p>
        </TLData>

        <TLData date="2021" titre="KohFrais">
          <TypeProjet type="etudiant" competences={[1, 5, 6]} />

          <p>
            <em>
              Premier projet de groupe, KohFrais est un site vitrine à destination d&apos;un vendeur de produits glacés breton.
            </em>
          </p>

          <p>
            Au cours de ce projet, j&apos;ai pu découvrir les méthodes de travail en équipe, la répartition des tâches et la gestion de projet.
            J&apos;ai également pu mettre en pratique mes compétences en développement Web (HTML, CSS et JS) tout en collaborant avec Git.
          </p>

          <p>
            <strong>Réalisations</strong><br />
            Maquettage, développement, déploiement, collaboration.
          </p>

          <p className="flex gap-3 flex-wrap">
            <Bouton type={TypesBtn.github} url={process.env.LINKS.PROJET_KOHFRAIS} />
            <Bouton type={TypesBtn.externe} url={process.env.LINKS.KOHFRAIS} texte={"Parcourir le site"} />
          </p>
        </TLData>

        <TLData date="2021 - 2022" titre="Fabrik ta Pépite">
          <TypeProjet type="personnel" competences={[5, 6]} />
          <p>
            <em>
              Fabrik ta Pépite est un concours entrepreneurial annuel pour les étudiants français.
              En équipe, nous avons imaginé pendant 3 mois la création d&apos;une entreprise autour d&apos;une idée innovante.
            </em>
          </p>

          <p>
            Dans le cadre de ce projet, j&apos;ai découvert et mis en pratique les différentes étapes de la création d&apos;une entreprise.
            Notre idée devant fédérer autour de la lutte anti-tabac, nous nous sommes orientés vers la conception d&apos;une appli mobile.
          </p>

          <p>
            <strong>Réalisations</strong><br />
            Étude de marché, business plan, pitch.
          </p>

          <p className="flex gap-3 flex-wrap">
            <Bouton type={TypesBtn.externe} url={process.env.LINKS.PRESENTATION_FABRIK} texte={"Découvrir le concours"} />
            <Bouton type={TypesBtn.externe} url={process.env.LINKS.PROJET_FABRIK} texte={"Rendus"} />
          </p>
        </TLData>

        <TLData date="2022" titre="Portfolio">
          <TypeProjet type="personnel" competences={[1, 5]} />

          <p>
            <em>
              Mon portfolio est un projet personnel, réalisé pour mettre en avant mes compétences et mes réalisations.
            </em>
          </p>

          <p>
            Ce projet a été conçu, designé, développé et déployé par mes soins afin d&apos;offrir une fenêtre sur mon parcours et mes compétences.
          </p>

          <p>
            <Bouton type={TypesBtn.github} url={process.env.LINKS.PROJET_PORTFOLIO} />
          </p>
        </TLData>

        <TLData date="2022" titre="Module Excel VBA pour les RH">
          <TypeProjet type="entreprise" competences={[1, 2]} />

          <p>
            <em>
              Afin d&apos;aider les ressources humaines à gérer les congés, j&apos;ai amélioré un module VBA Excel existant.
            </em>
          </p>

          <p>
            En parallèle de l&apos;implémentation de nouvelles fonctionnalités, j&apos;ai participé à une refonte du code existant pour le rendre plus lisible et maintenable.
            Plusieurs points ont été améliorés et optimisés pour un traitement efficace des données.
          </p>

          <p>
            <strong>Déroulement</strong><br />
            Refonte du code, ajout de fonctionnalités, optimisation du traitement, formation des utilisateurs.
          </p>
        </TLData>

        <TLData date="2023" titre="Application de demande de prestation en restauration">
          <TypeProjet type="entreprise" competences={[1, 3, 4, 5]} />

          <p>
            <em>
              Les prestations en restauration permettent aux agents d&apos;organiser et financer des repas exceptionnels.
            </em>
          </p>

          <p>
            Autrefois traitées manuellement par Excel, les demandes sont maintenant centralisées dans une application Web.
            J&apos;ai eu la charge du développement ex nihilo de cette application, de sa conception à sa mise en production.
            J&apos;ai pu choisir le modèle de données, l&apos;architecture logicielle, et la stack technique.
          </p>

          <p>
            <strong>Réalisations</strong><br />
            Conception, développement, déploiement, maintenance, organisation de réunions, suivi de projet.
          </p>
        </TLData>

        <TLData date="2023 - 2024" titre="Application comptable - module budgétaire">
          <TypeProjet type="entreprise" competences={[1, 2, 3, 4, 5, 6]} />

          <p>
            <em>
              Afin d&apos;aider la cellule comptabilité à définir le budget annuel, j&apos;ai développé un module permettant
              de collecter les besoins de chaque service.
            </em>
          </p>

          <p>
            Projet d&apos;envergure, j&apos;ai conçu une application Web s&apos;intégrant dans un SI comptable en cours de développement.
            J&apos;ai pris en compte chaque échange avec les nombreux experts métiers pour intégrer chaque besoin.
            Enfin, j&apos;ai suivi une méthodologie de développement agile pour livrer un produit fonctionnel et adapté.
          </p>

          <p>
            <strong>Réalisations</strong><br />
            Conception, développement, déploiement, maintenance, organisation de réunions, gestion de projet, formation des utilisateurs.
          </p>
        </TLData>

        <TLData date="2024" titre="Aventure littéraire">
          <TypeProjet type="etudiant" competences={[1, 2, 6]} />
          <p>
            <em>
              Transformer un livre interractif en application web : c&apos;est le défi que nous a lancé l&apos;IUT de Lannion pour notre dernier projet d&apos;équipe.
            </em>
          </p>

          <p>
            Ce projet Web a été l&apos;occasion de mettre en pratique nos capacités d&apos;analyse et de résolution de problèmes, face à toutes les contraintes rencontrées.
            Nous avons dû adapter notre vision du projet pour coller au plus près des attentes de notre client, tout en apportant notre touche personnelle.
          </p>

          <p>
            <strong>Réalisations</strong><br />
            Analyse du besoin, conception, développement, accessibilité, gestion de projet.
          </p>

          <p>
            <Bouton type={TypesBtn.github} url={process.env.LINKS.PROJET_LIVRE} />
          </p>
        </TLData>

        <TLData date="2024" titre="Refonte du portfolio">
          <TypeProjet type="personnel" competences={[1, 2, 5]} />
          <p>
            <em>
              Mon portfolio, vieillissant, a besoin d&apos;un coup de jeune. Je décide de le refondre pour le moderniser et le rendre plus attractif.
            </em>
          </p>

          <p>
            <strong>En cours...</strong>
          </p>
        </TLData>
      </Timeline>
    </Article>
  )
}