import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto px-20 py-10'>
        { children }
      </div>
      <Footer />
    </div>
  )
}