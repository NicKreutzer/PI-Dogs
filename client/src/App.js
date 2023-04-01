import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home';
import DogDetail from './Components/DogDetail/DogDetail';
import Form from './Components/Form/Form';


function App() {
  return (
    <div className="App">
      {/* {location.pathname !== "/" && <Nav/>} */}
      <Routes>
        <Route exact path= "/landing" element={<LandingPage/>}></Route>
        <Route exact path= "/home" element={<Home/>}></Route>
        <Route exact path= "/dogs/:id" element={<DogDetail/>}></Route>
        <Route exact path="/form" element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
