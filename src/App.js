import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import Departments from './components/Departments';
import Home from './components/Home/Home';
import Pages from './components/Pages';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className='bg-gradient-to-r from-sky-50 to-pink-50'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/departments' element={<Departments></Departments>}></Route>
        <Route path='/pages' element={<Pages></Pages>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contacts' element={<Contacts></Contacts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
