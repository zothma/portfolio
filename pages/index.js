import Head from "next/head";
import NavBar from "../components/Navigation/NavBar"
import Presentation from "../components/Contenu/EnTete"
import ArticleAPropos from '../components/Contenu/ArticleAPropos'
import ArticleFormation from '../components/Contenu/ArticleFormation'
import ArticleCompetences from "../components/Contenu/ArticleCompetences";
import SectionProjets from "../components/Contenu/SectionProjets";
import ArticleContact from "../components/Contenu/ArticleContact";

export default function Home() {
  return (
    <div className='font-inter text-black'>
      <Head>
        <meta name="title" content="Enzo MAROS - Portfolio" />
        <meta name="description" content="Étudiant à l'IUT de Lannion, je suis en formation BUT Informatique afin de devenir à terme développeur." />
        <meta name="author" content="Enzo MAROS" />
        <meta name="theme-color" content="#4D4B44" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enzo-maros.fr/" />
        <meta property="og:title" content="Enzo MAROS - Portfolio" />
        <meta property="og:description" content="Étudiant à l'IUT de Lannion, je suis en formation BUT Informatique afin de devenir à terme développeur." />
        <meta property="og:image" content="https://enzo-maros.fr//assets/open-graph.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://enzo-maros.fr/" />
        <meta property="twitter:title" content="Enzo MAROS - Portfolio" />
        <meta property="twitter:description" content="Étudiant à l'IUT de Lannion, je suis en formation BUT Informatique afin de devenir à terme développeur." />
        <meta property="twitter:image" content="https://enzo-maros.fr//assets/open-graph.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
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

        <hr className="w-1/2 mx-auto mb-16 border-grey" />
        <SectionProjets />
        <hr className="w-1/2 mx-auto my-16 border-grey" />

        <ArticleContact />
      </main>

    </div>
  )
}
