// Packages
import { Link } from "react-router-dom";

// Assets
import DefaultIcon from "../Assets/default-subject.png";
import TextbookIcon from "../Assets/textbook.png";
import English from "../Assets/english.png";

import "./components.css";

const icons = {
    "english": English,
    "textbook": TextbookIcon
}

const Card = (props) => {

    let icon_path = DefaultIcon;
    if(props.url in icons){
        icon_path = icons[props.url]
    }

    if(props.type === "file"){
        return (<div>
            <Link to="/file" state={{type: props.file_type, file_path:props.file_path}}>
            <div className="card">
                <div className="file-name">{props.name}</div>
                <div className="subject-icon">
                    <img src={icon_path} alt={props.name} />
                </div>
            </div>
            </Link>
        </div>)
    }

    else{
        return (<div>
            <Link to={props.url}>
                <div className="card">
                    <div className="subject-name">{props.name}</div>
                    <div className="subject-icon">
                        <img src={icon_path} alt={props.name} />
                    </div>
                </div>
            </Link>
        </div>);
    }
}

export default Card;