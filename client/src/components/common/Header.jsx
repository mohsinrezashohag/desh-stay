import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// images
import logo from '../../assets/logo.png'
import heartIconNotField from '../../assets/heart-regular.svg'
import profileIcon from '../../assets/avatar.png'

// hooks
import {
  useGetAllWishlistQuery,
  useGetMyWishlistQuery,
} from '../../rtk/features/wishlist/wishlistApi'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  // load userinfo from redux state
  const userInfo = useSelector((state) => state.user.userInfo)
  //rtk query
  const {
    data: myWishlist,
    isLoading,
    isError,
  } = useGetMyWishlistQuery(userInfo?._id)
  const wishList = myWishlist?.data

  // logout functionality
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <nav className='max-width flex-between '>
      <Link to='/'>
        <img className='h-[100px] mt-6' src={logo} alt='' />
      </Link>

      <div>
        <button
          className='relative text-white block md:hidden pe-3'
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <i className='fa-solid fa-xmark text-2xl'></i>
          ) : (
            <i className='fa-solid fa-bars text-2xl'></i>
          )}
        </button>

        <ul
          className={`${
            open
              ? 'md:hidden absolute flex flex-col gap-y-8 bg-[#01257d] mt-12 p-4 w-full right-0 justify-start items-start h-1/2 '
              : 'hidden md:flex-center gap-3'
          }`}
        >
          <li>
            <a href='#gettheapp'>Get the app</a>
          </li>
          <li>
            <Link to='/wishlist'>
              {' '}
              <div className='wishlist-icon  flex items-center justify-center relative mr-2'>
                <Link to='/wishlist' className='mr-1'>
                  Wishlist
                </Link>
                <img src={heartIconNotField} height={25} width={25} alt='' />
                <span className='mb-10 ml-24 wishlist-count absolute   inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>
                  {wishList?.length || 0}
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to='/list-property'
              className={` ${open ? 'white-primary-btn' : 'primary-btn'}`}
            >
              List Your Property
            </Link>
          </li>

          {userInfo ? (
            <>
              <li>
                <Link to='/profile'>
                  <img src={profileIcon} alt='' width='40px' />
                </Link>
              </li>
              <button onClick={() => logout()} className='primary-btn'>
                Logout
              </button>
            </>
          ) : (
            <>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/login'>Sign in</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Header
