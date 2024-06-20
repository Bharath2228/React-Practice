
function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.Username}</h2>
    // } else {
    //     return <h2>Please log In to continue..</h2>
    // }

    return(props.isLoggedIn ? <h2>Welcome {props.Username}</h2> : <h2>Please Log in to Continue.. </h2>);

}

export default UserGreeting