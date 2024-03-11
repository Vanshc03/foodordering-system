import {LOGO_URL} from "../utils/constants";


const Header =() => {
    const handleHomeClick =()=>{
        window.location.reload();
    };
    
    return(
    <div className ="header">
        <div className="logo-container">
            <img 
            className="logo"
            src={LOGO_URL} />
        </div>
        <div className= "nav-items">
            <ul>
                <li onClick={handleHomeClick}>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
        
    );
};

export default Header;