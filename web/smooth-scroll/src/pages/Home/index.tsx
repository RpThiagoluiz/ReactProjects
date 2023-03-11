import { About } from './components/About';
import { Demo } from './components/Demo';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Testimonials } from './components/Testimonials';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </>
  );
}

export default Home;
