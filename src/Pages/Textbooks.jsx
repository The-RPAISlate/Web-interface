// Packages
import { useState, useEffect } from "react";

// Components
import Card from "../Components/Card";

const Textbooks = (props) => {

    const [textbooks, setTextbooks] = useState({});

    useEffect(() => {
        fetch("/json/textbooks.json")
        .then(res => res.json())
        .then(json => setTextbooks(json));
    }, []);

    return (<>
        {textbooks && textbooks[props.url] &&
        <div className="subject-container">
            <span className="subject-title">{props.name}</span>

            <div className="cards-container">
                {textbooks[props.url].map(
                    book => {
                        return <Card 
                                    name={book.title}
                                    url="textbook"
                                    type="file"
                                    file_type="pdf"
                                    file_path={book.path}
                                />
                    }
                )}
            </div>
        </div>
        }
    </>)
}

export default Textbooks;