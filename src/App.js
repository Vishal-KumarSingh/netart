import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Testinomial from './component/Testinomial';
import Services from './component/Services';
import Footer from './component/Footer';
import About from './component/About';

function App() {
  return (
    <>
      <Header />
      <About  />
      <Testinomial />
      <Services />
      <Footer />
    </>
    
  );
}

export default App;
