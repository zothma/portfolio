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

  // Définition des styles du menu
  const menuLarge = "lg:absolute lg:top-0 lg:left-0 lg:bg-[transparent] lg:h-full lg:py-0 lg:px-20 lg:flex lg:justify-between lg:items-center";
  const menuPetit = "bg-[#fff] w-full py-10 shadow-md ";

  return (
    <nav className={"fixed z-40 w-full lg:px-20 transition-all duration-300 bg-[#fff] shadow-md " + (petit ? "h-16" : "h-24")}>
      <NavBarTitre petit={petit}>Portfolio</NavBarTitre>
      <div className={menuLarge + ' ' + menuPetit}>
        <div className='w-20 flex-shrink-0'></div>
        <NavBarMenu/>
        <NavBarSocial/>
      </div>
    </nav>
  );
}

export default NavBar;