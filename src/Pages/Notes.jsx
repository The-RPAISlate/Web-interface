// Packages
import { useState, useEffect } from "react";

// Components
import Card from "../Components/Card";

const Notes = (props) => {

    const [notes, setNotes] = useState({});

    useEffect(() => {
        fetch("/json/notes.json")
        .then(res => res.json())
        .then(json => setNotes(json));
    }, []);

    return (<>
        {notes && notes[props.url] &&
        <div className="subject-container">
            <span className="subject-title">{props.name}</span>

            <div className="cards-container">
                {notes[props.url].map(
                    note => {
                        return <Card 
                                    name={note.title}
                                    url="notes"
                                    type="file"
                                    file_type="pdf"
                                    file_path={note.path}
                                />
                    }
                )}
            </div>
        </div>
        }
    </>)

}

export default Notes;