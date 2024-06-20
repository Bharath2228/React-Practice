import pic from './assets/Pic.jpg'
function Button(){

    let count = 0;
    let ImageUrl = './src/assests/Pic.jpg'
    const buttonclicked = (event) => {
        event.target.textContent = "Ouch"
    }

    const buttonclicked2 = (name) => {
        

        if(count < 3){
            count++;
            console.log(`${name} clicked ${count} time/s`)
        } else {
            console.log("Stop clicking me.. ")
        }
    }

    const imageButton = (e) => {
        console.log("Hello!!!")
        e.target.style.display = "none"

    }

    return(
        <>
            {/* <button onClick={(event) => buttonclicked(event)}>Click Me 😊</button>
            <button onClick={() => buttonclicked2("Bro")}>Click Me</button> */}

            <img onClick={(e) => imageButton(e)} src={pic} width={100} height={100} ></img>
        </>
        
    );

}

export default Button