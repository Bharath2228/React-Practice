import ComponentB from "./ComponentB.jsx";
import React, {useState, createContext} from "react"

export const userContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Bharath")

    return(
        <div className="box"> 
            <p >Component A {user}</p>

            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>
            
        </div>
        );

    

}
export default ComponentA