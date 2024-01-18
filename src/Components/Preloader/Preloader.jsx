import './Preloader.css';
import logo from "../../assets/img/logo.svg";

const Preloader = () => {
    return (
        <div className='Preloader'>
            <img src={logo} alt="img"/>
            <h1>Loading...</h1>
        </div>
    )
}

export default Preloader;