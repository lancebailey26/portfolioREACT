import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import Routers from './route'

AOS.init();


function App() {
  return (
   <>
      <Routers/>
    </>
  );
}

export default App;
