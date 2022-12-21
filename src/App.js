import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from "../src/components/Header"
import GreetUser from "./components/Greeting";
import ContactUs from "./components/Contact";
import ImageSlider from "./components/Gallery";
import Services from './components/Services';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
     <Header/>
     <GreetUser/>
     <ContactUs/>
     <ImageSlider/>
     <Services/>
     <Reviews/>
     <ContactForm/>
     <Footer/>
    </div>
  );
}

export default App;
