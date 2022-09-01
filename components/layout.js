import Footer from '../components/Footer';
import Navbar from './navbar';

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main className="container w-[90%] md:w-[85%] xl:w-[75%] mx-auto my-20">
          { children }
        </main>
        <Footer />
      </>
    )
  }