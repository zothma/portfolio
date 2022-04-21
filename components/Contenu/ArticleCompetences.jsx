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
            <IconHTML />
            <IconCSS />
            <IconBootstrap />
            <IconJS />
          </CarteCompetences>

          <CarteCompetences titre="Web Back">
            <IconPHP />
            <IconNodeJS className="fill-[#8cc84b]" />
            <IconPGSQL />
          </CarteCompetences>

          <CarteCompetences titre="Logiciel">
            <IconC />
            <IconJava />
            <IconPython />
            <IconDart />
          </CarteCompetences>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <CarteCompetences titre="Outils">
            <IconGitHub />
            <IconGit />
            <IconFigma />
            <IconVSC />
            <IconStudio />
          </CarteCompetences>

          <CarteCompetences titre="Systèmes">
            <IconWindows />
            <IconLinux />
            <IconUbuntu />
            <IconArch />
            <IconDocker />
          </CarteCompetences>
        </div>
      </div>
    </Article>
  )
}