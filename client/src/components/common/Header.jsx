
const Header = () => {
    return (
        <nav className='max-width flex-between'>
            <img
                className='h-[100px] mt-6'
                src='../../../public/images/logo.png'
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
                    <button className='primary-btn'>List Your Property</button>
                </li>
            </ul>
        </nav >
    );
};

export default Header;