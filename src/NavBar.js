// Titre suivi d'un point de couleur
function Titre(props) {
  return (
    <h2 className="font-bold text-3xl">
      <a href="">
        {props.children}<span className="text-orange">.</span>
      </a>
    </h2>
  );
}

// Menu contenant les liens dans la page
function Menu() {
  const liens = ["Présentation", "Projets", "Contact"];

  return (
    <ul className="flex gap-5 text-lg">
      {liens.map(el => {
        return <li key={el.toLowerCase()}>
          <a href={"#" + el.toLowerCase()}>{el}</a>
        </li>
      })}    
    </ul>
  );
}

// Menu des réseaux
function Social() {
  const reseaux = ["LinkedIn", "GitHub"];
  return (
    <ul className="flex gap-5">
      {reseaux.map(el => {
        return <li key={el.toLowerCase()}>
          <a href="#">{el}</a>
        </li>
      })}
    </ul>
  );
}

function NavBar() {
  return (
    <nav className="w-full px-20 py-7 flex justify-between items-center">
      <Titre>Portfolio</Titre>
      <Menu/>
      <Social />
    </nav>
  );
}

export default NavBar;