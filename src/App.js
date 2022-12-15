import './App.css';
import Header from "../src/components/Header"
import GreetUser from "./components/Greeting";
import ContactUs from "./components/Contact";
import ImageSlider from "./components/Gallery";
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <GreetUser/>
     <ContactUs/>
     <ImageSlider/>
     <Services/>
     <Footer/>
    </div>
  );
}

export default App;
