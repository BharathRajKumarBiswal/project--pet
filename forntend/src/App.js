// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Gallery from './Component/Gallery';
import Appointements from './Component/Appointements';
import Services from './Component/Services';
import Shop from './Component/Shop';
import Aboutus from './Component/Aboutus';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Footer from './Component/Footer';
import Auth from './Component/Auth';
import Profile from './Component/Profile';
import AuthProvider from './Component/AuthProvider';
import Appointment from './Component/Appointment';
import Cart from './Component/Cart';
import Food from './Component/Food';
import Accesories from './Component/Accesories';


function App() {
  return (
    <div className="App">
      {/* <Auth> */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<Appointements />} />
        <Route path='/service' element={<Services />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/appform' element={<Appointment />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shop' element={<Shop />}>
          <Route index element={<Food />} />
          <Route path='food' element={<Food />} />
          <Route path='accery' element={<Accesories />} />
        </Route>
        <Route path='/profile' element={
          // <AuthProvider>
            <Profile />
        //  </AuthProvider>
        } />


      </Routes>


      {/* </Auth> */}



    </div>
  );
}

export default App;

