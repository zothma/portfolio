import GitHub from "../Icons/Github";
import LinkedIn from "../Icons/Linkedin";

// Menu des réseaux
function NavBarSocial() {
  const reseaux = [
    {icon: LinkedIn, text: "LinkedIn", url: process.env.LINKS.LINKEDIN},
    {icon: GitHub, text: "GitHub", url: process.env.LINKS.GITHUB}
  ];

  return (
    <ul className="flex flex-col lg:flex-row justify-end items-center gap-10 lg:gap-5 lg:w-20 text-lg">
      {reseaux.map(({icon: Icon, text, url}) => {
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