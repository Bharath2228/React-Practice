import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployeeStatus] = useState(true);

    const changeName = () => {
        setName("Bharath")
    }

    function incrementAge(){
        setAge( age + 2);
    }

    const toggleEmployeeStatus = () => {
        setEmployeeStatus(!isEmployed)
    }

    return(
        <>
            <p>Name: {name}</p>
            <button onClick={changeName}>Click me</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployeeStatus}>Toggle Employee Status</button>
        </>
    );
}

export default MyComponent