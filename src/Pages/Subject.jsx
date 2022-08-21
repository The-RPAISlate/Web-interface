// Components
import Card from "../Components/Card";

const Subject = (props) => {

    return (<>
        <div className="subject-container">

            <span className="subject-title">{props.name}</span>

            <div className="cards-container">
                <Card name="Textbooks" url="textbooks" />
                <Card name="Lectures" url="lectures" />
                <Card name="Notes" url="notes" />
            </div>
        </div>
    </>);
}

export default Subject;