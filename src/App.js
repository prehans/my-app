
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Body} from './components/Body';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
     <Header/>
     <Body/>
     <ContactForm/>
     <Footer/>
    </div>
  );
}

export default App;
