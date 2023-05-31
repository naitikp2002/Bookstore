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
import { UserProvider } from "./Components/UserContext";
import { ChakraProvider,CSSReset } from "@chakra-ui/react";

function App() {
  return (
    <>
    {/* <ChakraProvider> */}
    <CSSReset />
      <ResponsiveAppBar />
      <UserProvider>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      </UserProvider>
      {/* </ChakraProvider> */}
      </>
  );
}

export default App;
