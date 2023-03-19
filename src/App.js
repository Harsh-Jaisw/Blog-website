import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Component/Navbar/Navbar';
import Hero from './Section/Hero/Hero';
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Hero/>}></Route>
   </Routes>
   </BrowserRouter> 
  )
}

export default App;
