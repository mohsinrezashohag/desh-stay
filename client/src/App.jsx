// react slick import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/common/Home"
import Login from "./pages/common/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./pages/common/Register";
import Profile from "./pages/common/Profile";
import SearchResult from "./pages/member/SearchResult";
import ApartmentDetails from "./pages/common/ApartmentDetails";
import BookingConfirmation from "./pages/member/BookingConfirmation";
import RecentTrips from "./pages/member/RecentTrips";
import SetupProfile from "./pages/common/SetupProfile";
import ListProperty from "./pages/seller/ListProperty";
import ListPropertySecondStep from "./pages/seller/ListPropertySecondStep";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          {/* common */}
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/search-result" element={<SearchResult></SearchResult>}></Route>
          <Route path="/apartment-details" element={<ApartmentDetails></ApartmentDetails>}></Route>
          <Route path="/setup-profile" element={<SetupProfile></SetupProfile>}></Route>

          {/* member */}
          <Route path="/book-now" element={<BookingConfirmation></BookingConfirmation>}></Route>
          <Route path="/your-trips" element={<RecentTrips></RecentTrips>}></Route>

          {/* seller */}
          <Route path="/list-property" element={<ListProperty></ListProperty>}></Route>
          <Route path="/list-property-extra-info" element={<ListPropertySecondStep></ListPropertySecondStep>}></Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
