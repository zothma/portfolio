import React, { useState, useEffect } from 'react';

import NavBarTitre from "./NavBarTitle";
import NavBarMenu from "./NavBarMenu";
import NavBarSocial from "./NavBarSocial";

// Menu principal
function NavBar() {
  // La barre réduit dès que l'utilisateur commence à scroll
  const [taille, setTaille] = useState("h-24");

  const handleScroll = () => {
    setTaille(window.scrollY > 0 ? "h-16" : "h-24");
  }

  useEffect(() => {
    // Lors du montage, on initialise l'eventListener
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={"fixed z-50 w-full px-20 transition-all flex justify-between items-center bg-[#fff] shadow-md " + taille}>
      <NavBarTitre>Portfolio</NavBarTitre>
      <NavBarMenu/>
      <NavBarSocial/>
    </nav>
  );
}

export default NavBar;