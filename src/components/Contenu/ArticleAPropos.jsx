import Article from "./Article";

export default function ArticleAPropos() {
  return (
    <Article titre="À propos" id="présentation" >
      <p className="text-center leading-loose">
        <strong>Passionné</strong> par l'informatique depuis l'âge de 8 ans, j'ai très vite commencé
        le <strong>développement</strong> Web et Applications. Aujourd'hui âgé de 18 ans, cet enthousiasme pour
        la <strong>programmation</strong> ne m'a pas quitté, et je compte bien en faire mon <strong>métier</strong>.
      </p>
    </Article>
  )
}