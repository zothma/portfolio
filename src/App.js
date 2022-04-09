import './App.css';
import Points from './components/Points';
import Social from './components/Social';

function App() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full font-inter">
      <h1 className='text-6xl font-ubuntu font-bold'>Site en construction<Points /></h1>
      <p>Portfolio actuellement en cours de développement. Disponible fin avril.</p>
      <Social />
    </div>
  );
}

export default App;
