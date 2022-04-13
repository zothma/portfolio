import './App.css';
import ArticleAPropos from './components/Contenu/ArticleAPropos';
import ArticleFormation from './components/Contenu/ArticleFormation';
import Presentation from './components/Contenu/EnTete';
import NavBar from './components/Navigation/NavBar';

function App() {
  return (
    <div className='font-inter'>
      <header>
        <NavBar />
      </header>
      <main>
        <header className='mb-20'>
          <Presentation />
        </header>
        <ArticleAPropos />
        <ArticleFormation />
      </main>
    </div>
  );
}

export default App;
