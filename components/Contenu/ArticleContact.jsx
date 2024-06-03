import { Github, Home, Linkedin, Mail, Phone } from "../Icons";
import Article from "./Article";

export default function ArticleContact() {
  return (
    <Article id="contact" titre="Me contacter">
      <p className="text-center md:mx-36 mb-8">
        <strong>Mon profil vous intéresse ? </strong>
        N&apos;hésitez pas à me contacter par mail ou par téléphone pour échanger. Vous pouvez aussi consulter mes profils sur LinkedIn et GitHub
      </p>

      <p className="flex flex-col md:flex-row items-center gap-y-5 gap-x-10 justify-center flex-wrap mb-8">
        <a href={`tel:${process.env.PHONE.replaceAll(' ', '')}`}>
          <Phone className="inline-block mr-3" aria-label="Téléphone" />
          <span className="underline underline-offset-4">
            {process.env.PHONE}
          </span>
        </a>
        <a href={`mailto:${process.env.MAILTO}`}>
          <Mail className="inline-block mr-3" aria-label="e-mail" />
          <span className="underline underline-offset-4">
            {process.env.MAILTO}
          </span>
        </a>
        <a href={process.env.LINKS.LINKEDIN}>
          <Linkedin className="inline-block mr-3" aria-hidden="true" />
          <span className="underline underline-offset-4">
            LinkedIn
          </span>
        </a>
        <a href={process.env.LINKS.GITHUB}>
          <Github className="inline-block mr-3" aria-hidden="true" />
          <span className="underline underline-offset-4">
            GitHub
          </span>
        </a>
      </p>

      <p className="text-center md:mx-36">
        <Home className="inline-block mr-3" aria-label="Adresse d'habitation" />
        1 La Perrière Billiet, 22800 Saint-Donan
      </p>
    </Article>
  )
}