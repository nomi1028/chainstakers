
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './components/styles/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./components/pages/mainPage"
import Abc from "./components/pages/product"
import SignUp from './components/pages/Signup';
import SignIn from './components/pages/Signin';
import './App.css';
import Product from './components/pages/product';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
        <Route path='/' element={<MainPage />} ></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
        <Route path='/signin' element={<SignIn />} ></Route>
     <Route path='/cart' element={<Product />} ></Route>
   </Routes>

   </BrowserRouter>

   </>
  );
}

export default App;
