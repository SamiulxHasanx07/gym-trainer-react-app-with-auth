import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Login from './Pages/Auth/Login/Login';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import ResetPassword from './Pages/Auth/ResetPassword/ResetPassword';
import Signup from './Pages/Auth/Signup/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Cheakout/Checkout';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import './App.css';
import './responsive.css';
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resetpass' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
