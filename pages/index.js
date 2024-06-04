import Head from "next/head";
import Presentation from "../components/Contenu/EnTete"
import ArticleAPropos from '../components/Contenu/ArticleAPropos'
import ArticleFormation from '../components/Contenu/ArticleFormation'
import ArticleCompetences from "../components/Contenu/ArticleCompetences";
import ArticleContact from "../components/Contenu/ArticleContact";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Enzo MAROS - Portfolio</title>
      </Head>

      <header className="mb-20">
        <Presentation />
      </header>

      <ArticleAPropos />
      <ArticleFormation />
      <ArticleCompetences />
      <ArticleContact />
    </>
  )
}

Home.getLayout = Layout;