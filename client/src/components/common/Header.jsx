import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <nav className='max-width flex-between'>
            <img
                className='h-[100px] mt-6'
                src={logo}
                alt="" />
            <ul className='flex-center gap-3'>
                <li>
                    <a href="#gettheapp">Get the app</a>
                </li>
                <li>
                    <a href="#wishlist">Wishlist</a>
                </li>
                <li>
                    <a href="#register">Register</a>
                </li>
                <li>
                    <a href="/login">Sign in</a>
                </li>
                <li>
                    <Link to='/list-property' className='primary-btn'>List Your Property</Link>
                </li>
            </ul>
        </nav >
    );
};

export default Header;