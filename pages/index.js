import Head from "next/head";
import NavBar from "../components/Navigation/NavBar"
import Presentation from "../components/Contenu/EnTete"
import ArticleAPropos from '../components/Contenu/ArticleAPropos'
import ArticleFormation from '../components/Contenu/ArticleFormation'
import ArticleCompetences from "../components/Contenu/ArticleCompetences";
import ArticleContact from "../components/Contenu/ArticleContact";
import Footer from "../components/Contenu/Footer";

export default function Home() {
  return (
    <div className='font-inter text-black'>
      <Head>
        <title>Enzo MAROS - Portfolio</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main>
        <header className="mb-20">
          <Presentation />
        </header>

        <ArticleAPropos />
        <ArticleFormation />
        <ArticleCompetences />
        <ArticleContact />
      </main>

      <Footer />
    </div>
  )
}
