import React, {useState, useEffect} from 'react'

function UseEffect(){

    const [count, setCount] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

    useEffect(() => {
        window.addEventListener("resize", resizeFunction)
        console.log("Added EventListner")
    }, [])

    function countIncrement(){
        setCount(c => c + 1)
    }

    function countDecrement(){
        setCount(c => c - 1)
    }

    function resizeFunction(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={countIncrement}>Count ++</button>
            <button onClick={countDecrement}>Count --</button>

            <div>
                <p>Width: {width}px</p>
                <p>Height: {height}px</p>
            </div>
        </>
    );
}

export default UseEffect