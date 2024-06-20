import './App.css'
import React, {useState} from 'react'

function App() {

    const [count, setCount] = useState(0)

    function handleAdd(){
        setCount(count + 1)
    }

    function handleSub(){
        setCount(count - 1)
    }

    return(
        <div className = "App">
            <div className="box">
                <p>Count: {count}</p>
                <button onClick={handleAdd} className="add">ADD</button>
                <button onClick={handleSub} className="subtract">SUB</button>
            </div>
        </div>
    );
}

export default App

