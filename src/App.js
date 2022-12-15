import './App.css';
import Header from "../src/components/Header"
import GreetUser from "./components/Greeting";
import ContactUs from "./components/Contact";
import ImageSlider from "./components/Gallery";

function App() {
  return (
    <div className="App">
     <Header/>
     <GreetUser/>
     <ContactUs/>
     <ImageSlider/>
    </div>
  );
}

export default App;
