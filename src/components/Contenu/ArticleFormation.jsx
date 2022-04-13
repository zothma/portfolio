import Timeline from "../Timeline/Timeline";
import Article from "./Article";

export default function ArticleFormation() {
  return (
    <Article titre="Formation" id="formation">

      <Timeline 
        dateDebut={2018} 
        dateFin={2024} 
        espacement={150}
        parcouru={40} />
      
    </Article>
  )
}