import propType from 'prop-types'


function Students(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Students.propType = {
    name: propType.string,
    age: propType.number,
    isStudent: propType.bool
}

Students.defaultProps = {
    name: "Guest",
    age: 30,
    isStudent: false
}

export default Students