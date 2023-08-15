// react slick import
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Home from './pages/common/Home'
import Login from './pages/common/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/common/Register'
import Profile from './pages/common/Profile'
import SearchResult from './pages/member/SearchResult'
import ApartmentDetails from './pages/common/ApartmentDetails'
import BookingConfirmation from './pages/member/BookingConfirmation'
import RecentTrips from './pages/member/RecentTrips'
import SetupProfile from './pages/common/SetupProfile'
import ListProperty from './pages/seller/ListProperty'
import ListPropertySecondStep from './pages/seller/ListPropertySecondStep'
import ListPropertyThirdStep from './pages/seller/ListPropertyThirdStep'
import Wishlist from './pages/member/Wishlist'
import { Toaster } from 'react-hot-toast'
import useAuthCheck from './hooks/useAuthcheck'
import Listings from './pages/member/Listings'
import PrivateRoute from './utils/privateRoute'

function App() {
  const userSingedIn = useAuthCheck()

  return (
    <>
      <Toaster position='bottom-right' reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>

          {/* common */}
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route
            path='/search-result'
            element={<SearchResult></SearchResult>}
          ></Route>
          <Route
            path='/apartment-details/:id'
            element={
              <PrivateRoute>
                <ApartmentDetails></ApartmentDetails>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path='/setup-profile'
            element={<SetupProfile></SetupProfile>}
          ></Route>
          <Route path='/listings' element={<Listings></Listings>}></Route>

          {/* member */}
          <Route
            path='/book-now'
            element={
              <PrivateRoute>
                <BookingConfirmation></BookingConfirmation>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path='/your-trips'
            element={
              <PrivateRoute>
                <RecentTrips></RecentTrips>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path='/wishlist'
            element={
              <PrivateRoute>
                <Wishlist></Wishlist>
              </PrivateRoute>
            }
          ></Route>

          {/* seller */}
          <Route
            path='/list-property'
            element={
              <PrivateRoute>
                <ListProperty></ListProperty>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path='/list-property-second-step'
            element={
              <PrivateRoute>
                <ListPropertySecondStep></ListPropertySecondStep>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path='/list-property-third-step'
            element={
              <PrivateRoute>
                <ListPropertyThirdStep></ListPropertyThirdStep>
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
