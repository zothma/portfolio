import {ReactComponent as GitHub} from "../icons/github.svg";
import {ReactComponent as LinkedIn} from "../icons/linkedin.svg";

// Titre suivi d'un point de couleur
function NavBarTitre(props) {
  return (
    <h2 className="font-bold text-3xl">
      <a href="/index.html">
        {props.children}<span className="text-orange">.</span>
      </a>
    </h2>
  );
}

// Menu contenant les liens dans la page
function NavBarMenu() {
  const liens = ["Présentation", "Projets", "Contact"];

  return (
    <ul className="flex gap-10 text-lg">
      {liens.map(el => {
        return <li key={el.toLowerCase()}>
          <a href={"#" + el.toLowerCase()}>{el}</a>
        </li>
      })}    
    </ul>
  );
}

// Menu des réseaux
function NavBarSocial() {
  const reseaux = [
    {icon: LinkedIn, text: "LinkedIn", url: "https://fr.linkedin.com/in/enzo-maros"},
    {icon: GitHub, text: "GitHub", url: "https://github.com/zothma"}
  ];

  return (
    <ul className="flex gap-5">
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

function NavBar() {
  return (
    <nav className="w-full px-20 py-7 flex justify-between items-center bg-[#fff] shadow-md">
      <NavBarTitre>Portfolio</NavBarTitre>
      <NavBarMenu/>
      <NavBarSocial/>
    </nav>
  );
}

export default NavBar;