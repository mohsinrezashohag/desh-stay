import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import profileIcon from '../../assets/avatar.png'
import notificationIcon from '../../assets/bell.png'
import { useState } from 'react'

const SecondHeader = () => {
  const [open, setOpen] = useState(false)

  // logout functionality
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <nav className=' bg-[#01257d] pe-4'>
      <div className='max-width py-3 flex-between'>
        <div>
          <Link to='/'>
            <img src={logo} alt='logo' width='90px' />
          </Link>
        </div>
        <ul
          className={
            open
              ? 'absolute mt-5 p-4 flex md:hidden  flex-col items-end gap-y-6  top-[90px] bg-primary  w-[100%] text-left  z-50 right-0  text-white  bg-[#01257d] '
              : 'hidden md:flex justify-center gap-x-4'
          }
          onClick={() => setOpen(false)}
        >
          <li>
            <Link
              to='/list-property'
              className='primary-btn'
              style={{
                backgroundColor: 'white',
                color: '#01257d',
                fontWeight: '800',
              }}
            >
              List Your Property
            </Link>
          </li>
          <li>
            <a href='#gettheapp'>Wishlist</a>
          </li>
          <li>
            <a href='#wishlist'>Your Trips</a>
          </li>
          <li>
            <Link to='/profile'>
              <img src={profileIcon} alt='' width='40px' />
            </Link>
          </li>
          <li>
            <img src={notificationIcon} alt='' width='40px' />
          </li>
        </ul>

        <button
          className='text-white block md:hidden'
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <i className='fa-solid fa-xmark text-2xl'></i>
          ) : (
            <i className='fa-solid fa-bars text-2xl'></i>
          )}
        </button>
      </div>
    </nav>
  )
}

export default SecondHeader
