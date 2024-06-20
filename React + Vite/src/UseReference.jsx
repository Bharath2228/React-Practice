import React, {useEffect, useRef} from "react";

function UseReference(){

    const inputRef = useRef(null)

    useEffect(() => {
        console.log("Component Rendered");
        console.log(inputRef)
    })

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.background = "yellow"
    }

    return(
        <>
            <button onClick={handleClick}>Click me</button>
            <input ref={inputRef}/>
        </>
    )

}
export default UseReference