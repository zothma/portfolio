import Link from "next/link";

export default function Footer() {
  const date = new Date(process.env.DATEBUILD || Date.now());
  const formatDate = [date.getDate(), date.getMonth()+1, date.getFullYear()].map(el => {
    return el.toString().padStart(2, "0")
  }).join('/');

  return (
    <footer className="text-white bg-black text-sm p-1 text-center space-x-6" >
      <span>Enzo MAROS 2022</span>
      <span>Fait avec Next.js et React</span>
      <span>Mis à jour le {formatDate}</span>
      <span><Link href="/mentions-legales" passHref><a className="underline cursor-pointer">Mentions Légales</a></Link></span> 
    </footer>
  );
}