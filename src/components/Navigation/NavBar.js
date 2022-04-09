import NavBarTitre from "./NavBarTitle";
import NavBarMenu from "./NavBarMenu";
import NavBarSocial from "./NavBarSocial";

// Menu principal
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