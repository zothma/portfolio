import Footer from "./Contenu/Footer";
import NavBar from "./Navigation/NavBar";

export default function Layout({ children }) {
  return (
    <div className='font-inter text-black min-h-screen'>
      <header>
        <NavBar />
      </header>

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}