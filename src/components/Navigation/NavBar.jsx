import React, { useState, useEffect } from 'react';

import NavBarTitre from "./NavBarTitle";
import NavBarMenu from "./NavBarMenu";
import NavBarSocial from "./NavBarSocial";

// Menu principal
function NavBar() {
  // La barre réduit dès que l'utilisateur commence à scroll
  const [petit, setPetit] = useState(false);

  const handleScroll = () => {
    setPetit(window.scrollY > 0);
  }

  useEffect(() => {
    // Lors du montage, on initialise l'eventListener
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={"fixed z-50 w-full px-20 transition-all duration-300 flex justify-between items-center bg-[#fff] shadow-md " + (petit ? "h-16" : "h-24")}>
      <NavBarTitre petit={petit}>Portfolio</NavBarTitre>
      <NavBarMenu/>
      <NavBarSocial/>
    </nav>
  );
}

export default NavBar;