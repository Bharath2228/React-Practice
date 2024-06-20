import React, {useContext} from "react"
import { userContext } from "./ComponentA"

function ComponentD(){

    const value = useContext(userContext)
    return (
        <div className="box">
        <p >Component D {value}</p>
        </div>
    )
}
export default ComponentD