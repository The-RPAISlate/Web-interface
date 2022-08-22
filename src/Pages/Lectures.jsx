// Packages
import { useState, useEffect } from "react";

// Components
import Card from "../Components/Card";

const Lectures = (props) => {

    const [lectures, setLectures] = useState({});

    useEffect(() => {
        fetch("/json/lectures.json")
        .then(res => res.json())
        .then(json => setLectures(json));
    }, []);

    return (<>
        {lectures && lectures[props.url] &&
        <div className="subject-container">
            <span className="subject-title">{props.name}</span>

            <div className="cards-container">
                {lectures[props.url].map(
                    lecture => {
                        return <Card 
                                    name={lecture.title}
                                    url="lectures"
                                    type="file"
                                    file_type="media"
                                    file_path={lecture.path}
                                />
                    }
                )}
            </div>
        </div>
        }
    </>)
}

export default Lectures;