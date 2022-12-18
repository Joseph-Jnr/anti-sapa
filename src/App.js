import React,{useEffect} from "react";
import './App.css';
import { About, Cards, Download, Footer, Header, Navbar, Review } from './components/index'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  
  return (
    <main>
      <header className='py-6'>
        <div className='container header-wrapper'>
          <div className='header-circle'></div>
          <Navbar />  
          <Header />
        </div>
      </header>
      <About />
      <Cards />
      <Review />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
