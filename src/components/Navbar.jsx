import img from '../img/react-logo.png';
import css from "../css/main.css";

export default function Navbar(){
    return (
            <nav>
                <img src={img} className="nav--img" width={40} />
                <h3 className='nav--logo_text'>ReactFacts</h3>
                <h4 className='nav--text_right'>React Course - Project 1</h4>
            </nav>   
        )
}