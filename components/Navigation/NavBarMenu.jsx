import NavLink from "./NavLink";

function NavBarMenu() {
  return (
    <ul className="flex flex-col items-center lg:flex-row mb-10 lg:mb-0 gap-10 text-lg">
      <li>
        <NavLink href="/">Accueil</NavLink>
      </li>
      <li>
        <NavLink href="/projets">Projets</NavLink>
      </li>
    </ul>
  );
}

export default NavBarMenu;