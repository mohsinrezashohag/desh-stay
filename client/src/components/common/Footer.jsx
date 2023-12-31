import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='max-width flex flex-col  md:items-center md:flex-row justify-between text-white py-16'>
        <div className='flex flex-col md:flex-row md:justify-start md:items-center items-start'>
          <img src={logo} alt='' />
          <div className='flex flex-col ps-6'>
            <p>office address: 221 gulshan dhaka 1212</p>
            <p>phone: 4359435934</p>
            <p>email: banglabell@gmail.co</p>
          </div>
        </div>

        <div className='text-left  mt-6 md:mt-0 md:text-right  px-6 md:px-0'>
          <h1 className='text-3xl font-semibold pb-6'>Quick Links</h1>
          <ul className='flex flex-col gap-3'>
            <li>
              <a href='#gettheapp'>Get the app</a>
            </li>
            <li>
              <a href='#wishlist'>Wishlist</a>
            </li>
            <li>
              <a href='#register'>Register</a>
            </li>
            <li>
              <a href='/login'>Sign in</a>
            </li>
            <li>
              <button className='md:primary-btn me-[-15px]'>
                List Your Property
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
