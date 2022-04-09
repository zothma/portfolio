import React, {useState, useEffect} from 'react';
import '../App.css';

export default function Points() {
  // Le nombre de points affiché est de 3, mais certains disparaissent
  const [nbPoints, setNbPoints] = useState(1);

  const updatePoints = () => {
    setNbPoints((prevNbPoints) => {
      // repart à 1 dès que 3 est dépassé
      return prevNbPoints === 3 ? 1 : prevNbPoints+1;
    });
  }

  useEffect(() => {
    // Met à jour les points toutes les secondes
    let idIntervalle = setInterval(updatePoints, 1300);
    // Callbakc suppression du composant
    return () => clearInterval(idIntervalle);
  }, []);

  return (
    <>
      <span className='text-orange'>{".".repeat(nbPoints)}</span>
      <span className='opacity-0'>{".".repeat(3-nbPoints)}</span>
    </>
  )
}