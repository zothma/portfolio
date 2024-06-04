import Article from "../components/Contenu/Article";
import ArticleProjets from "../components/Contenu/ArticleProjets";
import Layout from "../components/Layout";

export default function Projets() {
  return (
    <>
      <div className="pt-14">
        <ArticleProjets />
      </div>
    </>
  )
}

Projets.getLayout = Layout;