import { Gamepad, Global, Lightbulb } from "../Icons";
import  * as LocalImage from "../../public/assets/projets"
import Projet from "../Projets/Projet";

export default function SectionProjets() {
  const projData = [
    {
      titre: "Implémentation du jeu de Yams",
      icon: Gamepad,
      image: LocalImage.Yams,
      fond: "bg-black",
      texte: "text-white fill-white",
      dates: "Octobre - Novembre 2021",
      temps: 20,
      equipe: false,
      description: "Premier projet durant ma formation en BUT Informatique, cette <strong>application terminal</strong> " +
        "permet à deux joueurs de se défier sur une <strong>partie de Yams</strong>, célèbre jeu de 5 dés.",
      competences: [
        "extraire des besoins",
        "implémenter",
        "documenter",
        "tester"
      ]
    },

    {
      titre: "Fabrik Ta Pépite",
      icon: Lightbulb,
      image: LocalImage.FabrikTaPepite,
      fond: "bg-[#fff]",
      dates: "Novembre 2021 - Février 2022",
      equipe: true,
      texteEquipe: "Concours entrepreneurial en équipe",
      description: "Dans le cadre du <strong>concours entrepreneurial</strong>, et par groupe de jeunes étudiants, nous " +
        "avions 3 mois pour trouver une <strong>idée d'entreprise innovante</strong> et la développer. " +
        "Notre équipe a eu pour idée de créer une <strong>application anti-tabac</strong>, Fuzway, dont l'innovation " +
        "reposait sur la <strong>communication</strong> entre fumeurs et sur <strong>l'esprit d'équipe</strong>.",
      competences: [
        "travailler en équipe",
        "faire preuve de créativité",
        "anticiper",
        "défendre un projet"
      ]
    },

    {
      titre: "Site vitrine - KohFrais",
      icon: Global,
      image: LocalImage.KohFrais,
      dates: "Novembre 2021 - Janvier 2022",
      temps: 120,
      equipe: true,
      description: "KohFrais, une entreprise de vente de produits surgelés et de glaces, souhaitait " +
        "disposer d'un <strong>site vitrine</strong> pour se faire connaître. En équipe, nous avons <strong>extrait leurs " +
        "besoins</strong>, imaginé l'arborescence du site, créé la <strong>maquette</strong> et la <strong>charte graphique</strong>, " +
        "puis développé le site web.",
      competences: [
        "extraire des besoins",
        "maquetter",
        "travailler en équipe"
      ]
    }
  ]

  return (
    <section id="projets" className="flex overflow-x-scroll snap-x snap-mandatory">
      {
        projData.map((el, i) => <Projet key={i} {...el} />)
      }
    </section>
  )
}