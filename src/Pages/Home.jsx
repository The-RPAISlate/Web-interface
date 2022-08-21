// Package
import { Link } from "react-router-dom";

// Components
import Card from "../Components/Card";

import "./pages.css";

const Home = (props) => {
    return (
        <div className="cards-container">
            {props.subjects &&

            props.subjects.map(
                subject => {
                    return <Card 
                                key={subject.url}
                                name={subject.name}
                                url={subject.url}
                            />
                }
            )
            }
        </div>
    );
}

export default Home;