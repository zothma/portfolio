import GitHub from "../Icons/Github";
import LinkedIn from "../Icons/Linkedin";

// Menu des réseaux
function NavBarSocial() {
  const reseaux = [
    {icon: LinkedIn, text: "LinkedIn", url: "https://fr.linkedin.com/in/enzo-maros"},
    {icon: GitHub, text: "GitHub", url: "https://github.com/zothma"}
  ];

  return (
    <ul className="flex flex-col lg:flex-row justify-end gap-5 w-20">
      {reseaux.map(el => {
        // Récupération des éléments concernant un réseau
        const {icon, text, url} = el;
        const Icon = icon

        return <li key={text.toLowerCase()}>
          <a href={url}>
            <Icon/>
          </a>
        </li>
      })}
    </ul>
  );
}

export default NavBarSocial;