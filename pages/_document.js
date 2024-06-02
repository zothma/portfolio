import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta name="title" content="Enzo MAROS - Portfolio" />
        <meta name="description" content="Étudiant à l'IUT de Lannion, je suis en formation BUT Informatique afin de devenir à terme développeur." />
        <meta name="author" content="Enzo MAROS" />
        <meta name="theme-color" content="#4D4B44" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enzo-maros.com/" />
        <meta property="og:title" content="Enzo MAROS - Portfolio" />
        <meta property="og:description" content="Étudiant à l'IUT de Lannion, je suis en formation BUT Informatique afin de devenir à terme développeur." />
        <meta property="og:image" content="https://enzo-maros.com//assets/open-graph.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://enzo-maros.com/" />
        <meta property="twitter:title" content="Enzo MAROS - Portfolio" />
        <meta property="twitter:description" content="Étudiant à l'IUT de Lannion, je suis en formation BUT Informatique afin de devenir à terme développeur." />
        <meta property="twitter:image" content="https://enzo-maros.com//assets/open-graph.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}