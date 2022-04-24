import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Contenu/Footer";

export default function Mentions() {
  return (
    <div className="font-inter text-black">
      <Head>
        <title>Enzo MAROS - Mentions Légales</title>
      </Head>

      <header>
        <h1 className="text-center text-5xl font-bold my-10">
          <Link href="/" passHref>
            <span className="cursor-pointer">
              Portfolio<span className="text-orange">.</span>
            </span>
          </Link>
        </h1>
      </header>

      <hr className="border-grey w-1/2 mx-auto" />

      <main className="mt-10 mx-32">
        <header className="mb-10">
          <h1 className="text-3xl text-center font-bold mb-6">Conditions générales d&apos;utilisation</h1>
          <p className="text-center mb-6">En vigueur au 24/04/2022</p>
          <p>Les présentes conditions générales d&apos;utilisation (dites « <strong>CGU</strong> ») ont pour objet l&apos;encadrement juridique
            des modalités de mise à disposition du site, et de définir les
            conditions d&apos;accès et d&apos;utilisation des services par « <strong>l&apos;Utilisateur</strong> ».
            Les présentes CGU sont accessibles sur le site à la rubrique « <strong>Mentions légales</strong> »</p>
        </header>

        <article className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Article 1 : Mentions légales</h2>
          <p>L&apos;édition et la direction de la publication du site enzo-maros.fr est assurée par MAROS Enzo, domicilié
            1 La Perrière Billiet, 22800 Saint-Donan.</p>
          <p>Téléphone : 0755617680</p>
          <p className="mb-6">Addresse e-mail : enzo.maros@gmail.com</p>
          <p>L&apos;hébergeur du site enzo-maros.fr est l&apos;association NiHost, association loi 1901, dont le siège social est situé au 19 rue de la république - 93260 Les Lilas - France</p>
          <p>Le nom de domain est fourni par la société OVH, dont le siège social est situé au 2 rue Kellermann - 59100 Roubaix - France </p>
        </article>

        <article className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Article 2 : Accès au site</h2>
          <p className="mb-6">Le site enzo-maros.fr permet à l&apos;Utilisateur d&apos;accéder à une présentation de l&apos;auteur, de ses aptitudes dans son domaine, et de ses projets.</p>
          <p>Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les
            frais supportés par l&apos;Utilisateur pour accéder au service (matériel informatique, logiciels, connexion
            Internet, etc.) sont à sa charge.</p>
        </article>

        <article className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Article 3 : Collecte des données</h2>
          <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la
            mesure où il ne collecte aucune donnée concernant les Utilisateurs.</p>
        </article>

        <article className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Article 4 : Propriété intellectuelle</h2>
          <p className="mb-6">Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l&apos;objet
            d&apos;une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d&apos;auteur.</p>
          <p className="mb-6">L&apos;Utilisateur doit solliciter l&apos;autorisation préalable du site pour toute reproduction, publication, copie des
            différents contenus. Il s&apos;engage à une utilisation des contenus du site dans un cadre strictement privé,
            toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
          <p className="mb-6">Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l&apos;autorisation
            expresse de l&apos;exploitant du site Internet constituerait une contrefaçon sanctionnée par l&apos;article L 335-2
            et suivants du Code de la propriété intellectuelle.</p>
          <p>Il est rappelé conformément à l&apos;article L122-5 du Code de propriété intellectuelle que l&apos;Utilisateur qui
            reproduit, copie ou publie le contenu protégé doit citer l&apos;auteur et sa source.</p>
        </article>

        <article className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Article 5 : Responsabilité</h2>
          <p className="mb-6">Les sources des informations diffusées sur le site enzo-maros.fr sont réputées fiables mais le site ne
            garantit pas qu&apos;il soit exempt de défauts, d&apos;erreurs ou d&apos;omissions.</p>
          <p className="mb-6">Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.
            Malgré des mises à jour régulières, le site enzo-maros.fr ne peut être tenu responsable de la
            modification des dispositions administratives et juridiques survenant après la publication. De même, le
            site ne peut être tenue responsable de l&apos;utilisation et de l&apos;interprétation de l&apos;information contenue dans
            ce site.</p>
          <p className="mb-6">Le site enzo-maros.fr ne peut être tenu pour responsable d&apos;éventuels virus qui pourraient infecter
            l&apos;ordinateur ou tout matériel informatique de l&apos;Internaute, suite à une utilisation, à l&apos;accès, ou au
            téléchargement provenant de ce site.</p>
          <p>La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et
            insurmontable d&apos;un tiers.</p>
        </article>

        <article className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Article 6 : Liens hypertextes</h2>
          <p>Des liens hypertextes peuvent être présents sur le site. L&apos;Utilisateur est informé qu&apos;en cliquant sur ces
            liens, il sortira du site enzo-maros.fr. Ce dernier n&apos;a pas de contrôle sur les pages web sur lesquelles
            aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
        </article>

        <article className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Article 7 : Cookies</h2>
          <p>Le site enzo-maros.fr fonctionne sans l&apos;utilisation de cookies</p>
        </article>

        <article className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Article 8 : Droit applicable et juridiction compétente</h2>
          <p>La législation française s&apos;applique au présent contrat. En cas d&apos;absence de résolution amiable d&apos;un
            litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
            Pour toute question relative à l&apos;application des présentes CGU, vous pouvez joindre l&apos;éditeur aux
            coordonnées inscrites à l&apos;ARTICLE 1</p>
        </article>
      </main>

      <Footer />
    </div>
  )
}