import React, {useState} from 'react'

function UpdateState(){

    const [car, setCar] = useState({});
    const [foods, setFood] = useState(["Orange", "Apple", "Carrot"]);

    const changeYear = (event) => {
        setCar(c => ({...c, year: event.target.value}))
    }                                

    const changeModel = (event) => {
        setCar(c => ({...c, model: event.target.value}))
    }

    const changeCarName = function(event){
        setCar(c => ({...c, name: event.target.value}))
    }

    function addFoodInArray(){

        const addedFood = document.getElementById("InputValue").value
        document.getElementById("InputValue").value = ''
        setFood([...foods, addedFood])

    }

    function removeFoodInArray(index){

        setFood(foods.filter((_, i) => i !== index))

    }

    return(
        <>
            <p>Favourite Car: {car.year} {car.model} {car.name}</p>
            <input type='number' placeholder='Year' value={car.year} onChange={changeYear}/> 
            <br></br>
            <input type='text' placeholder='Model' value={car.model} onChange={changeModel}/>
            <br></br>
            <input type='text' placeholder='Car Name' value={car.name} onChange={changeCarName}/>

            <div>
                <ul>
                    {foods.map((food, index) => 
                        <li key={index} onClick={() => removeFoodInArray(index)}>
                            {food}
                        </li>
                    )}
                </ul>
                <input type='text' id='InputValue' />
                <button onClick={addFoodInArray}>Add Food</button>
            </div>
        </>
    );
}

export default UpdateState