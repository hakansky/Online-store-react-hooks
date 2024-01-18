import '../Header/Header.css';
import logo from '../../assets/img/logo.svg';

const Header = () => {

    return (
        <header className='Header'>
            <img src={logo} alt="img"/>
            <h1>Online store</h1>
            <nav>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </nav>
        </header>
    )
}

export default Header;