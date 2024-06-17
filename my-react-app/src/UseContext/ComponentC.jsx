import ComponentD from "./ComponentD.jsx";
import React, {useContext} from "react"
import { userContext } from "./ComponentA"

function ComponentC(){

    const user = useContext(userContext)

    return(
        <div className="box">
            <p>Component C {user}</p>
            <ComponentD />
        </div>
    );
}
export default ComponentC