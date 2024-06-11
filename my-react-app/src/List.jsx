import propTypes from 'prop-types'

function List(props){

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => a.Calories - b.Calories)

    // const filterCalories = fruits.filter(fruit => fruit.Calories < 40)
    

    const itemArray = props.items

    const listItems = itemArray.map(fruit => <li key= {fruit.id}>{fruit.name}: <b>{fruit.Calories}</b></li>)  
    
    return(
        <>
            <h3>{props.category}</h3>
            <ol>{listItems}</ol>
        </>
    
);
}

List.defaultProps = {
    category: "Category",
    items: []
}

List.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        Calories: propTypes.number
    })),
    category: propTypes.string
}

export default List 