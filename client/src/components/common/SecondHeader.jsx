import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import profileIcon from '../../assets/avatar.png'
import notificationIcon from '../../assets/bell.png'

const SecondHeader = () => {
    return (
        <nav className=' bg-[#01257d]' >
            <div className='max-width py-3 flex-between'>
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" width='90px' />
                    </Link>
                </div>
                <ul className='flex-center gap-8'>
                    <li>
                        <Link to='/list-property' className='primary-btn' style={{ backgroundColor: 'white', color: '#01257d', fontWeight: "800" }}>List Your Property</Link>

                    </li>
                    <li>
                        <a href="#gettheapp">Wishlist</a>
                    </li>
                    <li>
                        <a href="#wishlist">Your Trips</a>
                    </li>
                    <li>
                        <a href="#register">
                            <img src={profileIcon} alt="" width='40px' />
                        </a>
                    </li>
                    <li>
                        <img src={notificationIcon} alt="" width='40px' />
                    </li>

                </ul>
            </div>
        </nav >
    );
};

export default SecondHeader;