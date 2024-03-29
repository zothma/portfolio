import Bouton, { TypesBtn } from "../Bouton";
import Article from "./Article";

export default function ArticleAPropos() {
  return (
    <Article titre="À propos" id="présentation">
      <p className="text-center leading-loose mb-12">
        <strong>Passionné</strong> par l&apos;informatique depuis l&apos;âge de 8 ans, j&apos;ai très vite commencé
        le <strong>développement</strong> Web et Applications. Aujourd&apos;hui âgé de 20 ans, cet enthousiasme pour
        la <strong>programmation</strong> ne m&apos;a pas quitté, et je compte bien en faire mon <strong>métier</strong>.
      </p>
      <p className="text-center">
        <Bouton url="/Enzo MAROS CV.pdf" texte="Lire mon CV" type={TypesBtn.telechargement} />
      </p>
    </Article>
  )
}
