// Menu contenant les liens dans la page
function NavBarMenu() {
  const liens = ["Présentation", "Projets", "Contact"];

  return (
    <ul className="flex flex-col items-center lg:flex-row mb-10 lg:mb-0 gap-10 text-lg">
      {liens.map(el => {
        return <li key={el.toLowerCase()}>
          <a href={"#" + el.toLowerCase()}>{el}</a>
        </li>
      })}    
    </ul>
  );
}

export default NavBarMenu;