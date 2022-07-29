import Footer from '../components/Footer';

export default function Layout({ children }) {
    return (
      <>
        <main className="container w-[90%] md:w-[85%] xl:w-[75%] mx-auto my-20">
          { children }
        </main>
        <Footer />
      </>
    )
  }