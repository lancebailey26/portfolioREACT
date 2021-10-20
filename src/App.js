import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Intro from './components/intro';
import General from './components/general'
import Contact from './components/contact';
AOS.init();


function App() {
  return (
   <>
      <Intro />
      <General/>
      <Contact/>
    </>
  );
}

export default App;
