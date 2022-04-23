import { Gamepad, Global, Lightbulb } from "../Icons";
import Projet from "../Projets/Projet";

export default function SectionProjets() {
  const projData = [
    {
      titre: "Implémentation du jeu de Yams",
      icon: Gamepad,
      image: "yams/feuille-score-vierge.png",
      fond: "bg-black",
      texte: "text-white",
      dates: "Octobre - Novembre 2021",
      temps: 20,
      equipe: false,
      description: "Premier projet durant ma formation en BUT Informatique, cette <b>application terminal</b> " +
        "permet à deux joueurs de se défier sur une <b>partie de Yams</b>, célèbre jeu de 5 dés.",
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
      image: "fabrik-ta-pepite.png",
      fond: "bg-[#fff]",
      dates: "Novembre 2021 - Février 2022",
      equipe: true,
      texteEquipe: "Concours entrepreneurial",
      description: "Dans le cadre du <b>concours entrepreneurial</b>, et par groupe de jeunes étudiants, nous " +
        "avions 3 mois pour trouver une <b>idée d'entreprise innovante</b> et la développer. " +
        "Notre équipe a eu pour idée de créer une <b>application anti-tabac</b>, Fuzway, dont l'innovation " +
        "reposait sur la <b>communication</b> entre fumeurs et sur <b>l'esprit d'équipe</b>.",
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
      image: "kohfrais.png",
      dates: "Novembre 2021 - Janvier 2022",
      temps: 120,
      equipe: true,
      description: "KohFrais, une entreprise de vente de produits surgelés et de glaces, souhaitait " +
        "disposer d'un <b>site vitrine</b> pour se faire connaître. En équipe, nous avons <b>extrait leurs " +
        "besoins</b>, imaginé l'arborescence du site, créé la <b>maquette</b> et la <b>charte graphique</b>, " +
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
        projData.map((el, i) => <Projet data={el} key={i} />)
      }
    </section>
  )
}