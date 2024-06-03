import profilePic from './assets/Pic.jpg'

function Card(){

    return(
        <div className="card">
            <img className='cardImage' src={profilePic} alt="My Pic"></img>
            <h2 className='cardTitle'>Bharath P</h2>
            <p className='cardText'>I am Software Developer and a Coder</p>
        </div>
    );
}

export default Card