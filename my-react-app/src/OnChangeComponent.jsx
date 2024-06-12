import React, {useState} from 'react'

function OnChangeComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("0");
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function OnchangeInputText(event){
        setName(event.target.value)
    }

    const ChangeQuantity = (event) => {
        setQuantity(event.target.value)
    }

    const changeComment = (event) => {
        setComment(event.target.value);
    }

    const changePayment = (event) => {
        setPayment(event.target.value)
    }

    function changeShipping(event){
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={OnchangeInputText}/> 
            <p>Text: {name}</p>  

            <input value={quantity} onChange={ChangeQuantity} type='number'/>     
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={changeComment} placeholder='Write down the comments'/>
            <p>Comments: {comment}</p>

            <select value={payment} onChange={changePayment}>
                <option value=''>Select Payment</option>
                <option value='Visa'>Visa</option>
                <option value='Mastercard'>Mastercard</option>
                <option value='Rupay'>Rupay</option>
            </select>
            <p>Payment: {payment}</p>
            
            <div>
                <input type='radio' value="Pick Up" onChange={changeShipping} checked={shipping === "Pick Up"}/>
                <label>Pick Up</label><br></br>
                <input type='radio' value="Delivery" onChange={changeShipping} checked={shipping === "Delivery"}/>
                <label>Delivery</label><br></br>

                <p>Shipping: {shipping}</p>
            </div>
        </div>
    );

}

export default OnChangeComponent