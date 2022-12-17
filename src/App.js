import './App.css';
import { About, Cards, Download, Footer, Header, Navbar, Review } from './components/index'

function App() {
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
