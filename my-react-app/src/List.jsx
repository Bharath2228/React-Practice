
function List(){

    const fruits = [
        {id: 1, name: "Orange", Calories: 32},
        {id: 2, name: "Apple", Calories: 43},
        {id: 3, name: "Promogranate", Calories: 37},
        {id: 4, name: "Pineapple", Calories: 123},
        {id: 5, name: "Banana", Calories: 23}
    ]

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    fruits.sort((a, b) => a.Calories - b.Calories)
    
    const listItems = fruits.map(fruit => <li key= {fruit.id}>{fruit.name}: <b>{fruit.Calories}</b></li>)  

    
    
    return(<ol>{listItems}</ol>);
}

export default List 