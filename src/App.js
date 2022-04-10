import './App.css';
import Presentation from './components/Contenu/EnTete';
import NavBar from './components/Navigation/NavBar';

function App() {
  return (
    <div className='font-inter'>
      <header>
        <NavBar />
      </header>
      <main>
        <header>
          <Presentation />
        </header>
      </main>
    </div>
  );
}

export default App;
