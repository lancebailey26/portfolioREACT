import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Routers from './route'
import 'bootstrap/dist/css/bootstrap.min.css';
AOS.init();


function App() {
  return (
   <>
      <Routers/>
    </>
  );
}

export default App;
