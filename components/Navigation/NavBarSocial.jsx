import GitHub from "../Icons/Github";
import LinkedIn from "../Icons/Linkedin";

// Menu des réseaux
function NavBarSocial() {
  const reseaux = [
    {icon: LinkedIn, text: "LinkedIn", url: "https://fr.linkedin.com/in/enzo-maros"},
    {icon: GitHub, text: "GitHub", url: "https://github.com/zothma"}
  ];

  return (
    <ul className="flex flex-col lg:flex-row justify-end items-center gap-10 lg:gap-5 lg:w-20 text-lg">
      {reseaux.map(el => {
        // Récupération des éléments concernant un réseau
        const {icon, text, url} = el;
        const Icon = icon

        return <li key={text.toLowerCase()}>
          <a href={url}>
            <Icon className="inline-block mr-3 lg:mr-0" aria-label={text}/>
            <span className="align-middle lg:hidden">{text}</span>
          </a>
        </li>
      })}
    </ul>
  );
}

export default NavBarSocial;