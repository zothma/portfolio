import {ReactComponent as GitHubIcon} from "../icons/github-fill.svg";
import {ReactComponent as LinkedInIcon} from "../icons/linkedin-box-fill.svg";

export default function Social() {
  // Réseaux sociaux
  const listeReseaux = [
    {name: "GitHub", icon: GitHubIcon, url: "https://github.com/zothma"},
    {name: "LinkedIn", icon: LinkedInIcon, url: "https://fr.linkedin.com/in/enzo-maros"}
  ];

  const genererIcone = (data) => {
    const {name, icon, url} = data;
    let Icon = icon;

    return (
      <a href={url} key={name}>
        <Icon />
      </a>
    );
  };

  return (
    <div className="flex gap-4">
      {listeReseaux.map((data) => genererIcone(data))}
    </div>
  );
}