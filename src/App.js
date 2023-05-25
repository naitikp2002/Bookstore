// import logo from './logo.svg';
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ResponsiveAppBar from "./Components/Navbar";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Products from "./Components/Products"
import Cart from "./Components/Cart"
import Register from "./Components/Register";
import Login from "./Components/Login";
import Post from "./Components/Post";
// import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      </>
  );
}

export default App;
