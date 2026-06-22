import './App.css';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { Register } from './views/Register';
import { Login } from './views/Login';
import { Cart } from './views/Cart';
import { Pizza } from './views/Pizza';
import { Profile } from './views/Profile';
import { NotFound } from './views/Notfound';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
        path="/" //poner la ruta
        element={<Home/>}
        />
        <Route
        path="/register"
        element={<Register/>}
        />
          <Route
        path="/login"
        element={<Login/>}
        />
          <Route
        path="/cart"
        element={<Cart/>}
        />
          <Route
        path="/pizza/p001"
        element={<Pizza/>}
        />
          <Route
        path="/profile"
        element={<Profile/>}
        />
          <Route
        path="/404"
        element={<NotFound/>}
        />
          <Route
        path="*"
        element={<NotFound/>}
        />
      </Routes>

      <main className="container py-4">
      </main>
      <Footer />
    </div>
  );
};
export default App;
