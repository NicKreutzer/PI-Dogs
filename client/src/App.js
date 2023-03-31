import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'


function App() {
  return (
    <div className="App">
      {/* {location.pathname !== "/" && <Nav/>} */}
      <h1>Henry Dogs</h1>
      <Routes>
        <Route exact path= "/" element={<LandingPage/>}></Route>
        <Route exact path= "/home"></Route>
        <Route exact path= "/detail/:detailID"></Route>
      </Routes>
    </div>
  );
}

export default App;
