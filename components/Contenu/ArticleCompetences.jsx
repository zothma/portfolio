import CarteCompetences from "../CarteCompetences";

// Icones Web Front
import IconHTML from "../Icons/Logos/Html5";
import IconCSS from "../Icons/Logos/Css3";
import IconBootstrap from "../Icons/Logos/Bootstrap";
import IconJS from "../Icons/Logos/Javascript";

// Icones Web Back
import IconPHP from "../Icons/Logos/Php";
import IconNodeJS from "../Icons/Logos/Nodejs";
import IconPGSQL from "../Icons/Logos/Postgresql";

// Icones Logiciels
import IconC from "../Icons/Logos/C";
import IconJava from "../Icons/Logos/Java";
import IconPython from "../Icons/Logos/Python";
import IconDart from "../Icons/Logos/Dartlang";

// Icones outils
import IconGitHub from "../Icons/Github";
import IconGit from "../Icons/Logos/Git";
import IconFigma from "../Icons/Logos/Figma";
import IconVSC from "../Icons/Logos/Vsc";
import IconStudio from "../Icons/Logos/AndroidStudio";

// Icones système
import IconWindows from "../Icons/Logos/Windows";
import IconLinux from "../Icons/Logos/Linux";
import IconUbuntu from "../Icons/Logos/Ubuntu";
import IconArch from "../Icons/Logos/Archlinux";
import IconDocker from "../Icons/Logos/Docker";

import Article from './Article';

export default function ArticleCompetences() {
  return (
    <Article id="competences" titre="Compétences" >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <CarteCompetences titre="Web Front">
            <IconHTML aria-label="Icone HTML5" title="HTML5" />
            <IconCSS aria-label="Icone CSS3" title="CSS3" />
            <IconBootstrap aria-label="Icone Bootstrap" title="Bootstrap" />
            <IconJS aria-label="Icone JavaScript" title="JavaScript" />
          </CarteCompetences>

          <CarteCompetences titre="Web Back">
            <IconPHP aria-label="Icone PHP" title="PHP" />
            <IconNodeJS className="fill-[#8cc84b]" aria-label="Icone NodeJS" title="NodeJS" />
            <IconPGSQL aria-label="Icone PostgreSQL" title="PostgreSQL" />
          </CarteCompetences>

          <CarteCompetences titre="Logiciel">
            <IconC aria-label="Icone Language C" title="Language C" />
            <IconJava aria-label="Icone Java" title="Java" />
            <IconPython aria-label="Icone Python" title="Python" />
            <IconDart aria-label="Icone Dart" title="Dart" />
          </CarteCompetences>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <CarteCompetences titre="Outils">
            <IconGitHub aria-label="Icone GitHub" title="GitHub" />
            <IconGit aria-label="Icone Git" title="Git" />
            <IconFigma aria-label="Icone Figma" title="Figma" />
            <IconVSC aria-label="Icone de l'éditeur Visual Studio Code" title="Éditeur Visual Studio Code" />
            <IconStudio aria-label="Icone de l'IDE Android Studio" title="Android Studio" />
          </CarteCompetences>

          <CarteCompetences titre="Systèmes">
            <IconWindows aria-label="Icone Système Windows" title="Windows" />
            <IconLinux aria-label="Icone Système Linux" title="Linux" />
            <IconUbuntu aria-label="Icone Système Ubuntu" title="Ubuntu" />
            <IconArch aria-label="Icone Système ArchLinux" title="ArchLinux" />
            <IconDocker aria-label="Icone Docker" title="Docker" />
          </CarteCompetences>
        </div>
      </div>
    </Article>
  )
}