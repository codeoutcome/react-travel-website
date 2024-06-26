import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Social from '../src/components/Social';
import Team from '../src/components/Team';
import CustomerLogos from './components/CustomerLogos';
import Showcase from './components/Showcase';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Social />
      <Showcase />
      <Team />
      <Stats /> 
      <CustomerLogos />
      <Footer />
    </div>
  );
}

export default App;
