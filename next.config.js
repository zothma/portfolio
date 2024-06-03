/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  env: {
    DATEBUILD: new Date(),
    LINKS: {
      GITHUB: "https://github.com/zothma",
      LINKEDIN: "https://www.linkedin.com/in/enzo-maros/",
      PROGRAMME_BAC: "https://www.data.gouv.fr/fr/datasets/programmes-denseignement-de-terminale-generale-reforme-du-baccalaureat-2021/#resources",
      PROGRAMME_BUT: "https://www.enseignementsup-recherche.gouv.fr/sites/default/files/annexe-2-licence-professionnelle-bachelor-universitaire-de-technologie-informatique-29016.pdf",
      DSD: "https://eduscol.education.fr/1139/certification-de-langue-allemande",
      GOETHE: "https://www.goethe.de/ins/fr/fr/sta/par/prf/gzb2.cfm",
      IUT_LANNION: "https://iut-lannion.univ-rennes1.fr/",
    },
    MAILTO: "enzo.maros@gmail.com",
    PHONE: "+33 7 55 61 76 80",
  },

  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    if (isServer) {
      import('./scripts/sitemap-generator.mjs');
    }

    return config;
  },

  async redirects() {
    return [
      {
        source: "/joyeux-noel",
        destination: "https://youtu.be/dQw4w9WgXcQ",
        permanent: false
      }
    ]
  }
}
