import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componets/Pages/Home';
import About from './componets/Pages/About';
import Signin from './componets/Pages/Login/Signin';
import Signup from './componets/Pages/Login/Signup';
import Contact from './componets/Pages/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './componets/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Afterloginpage from './componets/Pages/Afterloginpage';
import Lifequote from './componets/collections_of_cards/Life-Quote/Lifequote';
import Motivationalquote from './componets/collections_of_cards/Motivational-quote/Motivationalquote';
import Wisdomquote from './componets/collections_of_cards/Wisdom-quote/Wisdomquote';
import Miscellaneousquote from './componets/collections_of_cards/Miscellaneous-Quote/Miscellaneousquote';
import ProtectRouting from './ProtectRouting/ProtectRouting';
import Footer from './componets/Footer';

function App() {
  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact us' element={<Contact/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/userpage' element={<ProtectRouting><Afterloginpage/></ProtectRouting>}/>
        <Route path='/life-quotations' element={<ProtectRouting><Lifequote/></ProtectRouting>}/>
        <Route path='/motivational-quotations' element={<ProtectRouting><Motivationalquote/></ProtectRouting>}/>
        <Route path='/wisdom-quotations' element={<ProtectRouting><Wisdomquote/></ProtectRouting>}/>
        <Route path='/miscellaneous-quotations' element={<ProtectRouting><Miscellaneousquote/></ProtectRouting>}/>
       
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>

  );
}

export default App;