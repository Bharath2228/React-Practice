import React, {useState} from 'react'

function UpdateArray(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function addCar(){

        const carsDetail = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        console.log(carsDetail)
        setCars(c => ([...c, carsDetail]))
        console.log(cars)
        setCarMake('')
        setCarModel('')
        setCarYear(new Date().getFullYear())
    }

    function removeCar(index){

        setCars(cars.filter((element, i) => i!== index))
    }
    
    function changeCarYear(event){
        setCarYear(event.target.value)
    }

    function changeCarMake(event){
        setCarMake(event.target.value)
    }

    function changeCarModel(event){
        setCarModel(event.target.value)
    }

    return(
        <div>
            <p>Card Details: </p>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => removeCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)
                )}
            </ul>

            <input placeholder='YYYY' value={carYear} onChange={changeCarYear}/><br />
            <input placeholder='Car Make Detail' value={carMake} onChange={changeCarMake}/> <br />
            <input placeholder='Car Model Detail' value={carModel} onChange={changeCarModel}/> <br />
            <button onClick={addCar}>Add Car</button>
        </div>
    );


}

export default UpdateArray