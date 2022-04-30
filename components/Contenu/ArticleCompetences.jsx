import CarteCompetences from "../CarteCompetences";

import Article from './Article';

const webFrontData = [
  {icon: "HTML5.svg", alt: "HTML5"},
  {icon: "CSS3.svg", alt: "CSS3"},
  {icon: "javascript.svg", alt: "JavaScript"},
  {icon: "bootstrap.svg", alt: "Bootstrap"},
];

const webBackData = [
  {icon: "PHP.svg", alt: "PHP"},
  {icon: "nodejs.svg", alt: "NodeJS"},
  {icon: "postgresql.svg", alt: "PostgreSQL"},
];

const logicielData = [
  {icon: "C.svg", alt: "Langage C"},
  {icon: "Java.svg", alt: "Java"},
  {icon: "python.svg", alt: "Python"},
  {icon: "dartlang.svg", alt: "Dart"},
];

const outilsData = [
  {icon: "github.svg", alt: "GitHub"},
  {icon: "Git.svg", alt: "Git"},
  {icon: "Figma.svg", alt: "Figma"},
  {icon: "VSC.svg", alt: "Éditeur Visual Studio Code"},
  {icon: "android-studio.svg", alt: "Android Studio"},
];

const systemData = [
  {icon: "Windows.svg", alt: "Windows"},
  {icon: "Linux.svg", alt: "Linux"},
  {icon: "Ubuntu.svg", alt: "Ubuntu"},
  {icon: "archlinux.svg", alt: "Arch Linux"},
  {icon: "docker.svg", alt: "Docker"},
]

export default function ArticleCompetences() {
  return (
    <Article id="competences" titre="Compétences" >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <CarteCompetences titre="Web Front" data={webFrontData} />
          <CarteCompetences titre="Web Back" data={webBackData} />
          <CarteCompetences titre="Logiciel" data={logicielData} />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <CarteCompetences titre="Outils" data={outilsData} />
          <CarteCompetences titre="Systèmes" data={systemData} />
        </div>
      </div>
    </Article>
  )
}