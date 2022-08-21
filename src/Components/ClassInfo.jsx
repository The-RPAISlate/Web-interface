const ClassInfo = (props) => {
    return (
        <div className="class-info">
            <span className="class-num">Class - {props.class}</span>
            <span className="teacher">Teacher - {props.teacher}</span>
        </div>
    );
}

export default ClassInfo;