// Packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import AppLogo from "../Assets/app_logo.png";
import Arrow from "../Assets/dropdown-arrow.svg";

import "./components.css";

const Navbar = (props) => {

    const [dropdownStatus, setDropdownStatus] = useState(false);

    return (<div className="navbar">
        
        <Link to="/">
        <div className="logo">
            <img src={AppLogo} alt="RPAISlate" />
        </div>
        </Link>

        <div className="navlinks">
            <Link to="/">
                <span className="navlink">Home</span>
            </Link>

            <div className="subjects-menu">

                <div className="dropdown navlink" 
                onClick={()=>{setDropdownStatus(!dropdownStatus)}}>
                    <span>Subjects</span>
                    <img 
                        src={Arrow} 
                        alt="-dropdown" 
                        className={dropdownStatus ?"arrow-active" : ""}
                    />
                </div>

                <div className={dropdownStatus? "dropdown-menu": "menu-inactive"}>
                    {props.subjects && 

                        props.subjects.map(
                            s => {
                                return (<div className="subject" key={s.url}>
                                    <Link to={s.url} className="subject-link">
                                        {s.name}
                                    </Link>
                                </div>);
                            }
                        )
                    }
                </div>

            </div>

            <Link to="/contact">
                <span className="navlink">Contact</span>
            </Link>
        </div>

        <Link to="/contact">
        <div className="logo school-logo">
            <img src={props.logo_path} alt={props.school_name} />
        </div>
        </Link>
        
    </div>);
}

export default Navbar;