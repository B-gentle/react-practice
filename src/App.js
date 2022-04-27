import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import BedSpace from './components/BedSpace/BedSpace';
import Reservations from './components/Reservation/Reservations';
import Footer from './components/footer/Footer';

function App() {

  return (

    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <h1>BeeTech Room Services</h1>
        <Routes>
         <Route path='/' element={<Home />}></Route>
          <Route path='/bedspace' element={<BedSpace />}></Route>
          <Route path='/reservations' element={<Reservations />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>



  );
}

export default App;
