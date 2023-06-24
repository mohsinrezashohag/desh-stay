// react slick import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/common/Home"
import Login from "./pages/common/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./pages/common/Register";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
