import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Component/Navbar/Navbar';
import Hero from './Section/Hero/Hero';
import Details from './Pages/Details/Details';
import CreateBlog from './Pages/CreateBlog/CreateBlog';
function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Hero/>}></Route>
    <Route path="/Details/:id" element={<Details/>}></Route>
    <Route path="/newblog" element={<CreateBlog/>}></Route>
   </Routes>
   </BrowserRouter> 
  )
}

export default App;
