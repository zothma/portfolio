import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white bg-black text-sm p-1 text-center" >
      Enzo MAROS 2022 &nbsp;&nbsp; | &nbsp;&nbsp; Fait avec Next.js et React &nbsp;&nbsp; | &nbsp;&nbsp; <Link href="/mentions-legales" passHref><span className="underline cursor-pointer">Mentions Légales</span></Link>
    </footer>
  )
}