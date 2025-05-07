
import './App.css'
// import Button from './components/Button';
import Destinations from './components/Destination';
import Footer from './components/Footer';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';

function App() {


  return (
    <>
      <div className="bg-amber-500 h-screen">
        <Header />
        <Hero />
        <Services />
        <Destinations />
        <Steps />
        <Testimonials />
        <Footer />

        {/* <Button /> */}
      </div>
    </>
  );
}

export default App
