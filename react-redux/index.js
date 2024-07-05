const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducer = redux.combineReducers

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake(){
   return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restoreCake(qty = 1){
    return {
       type: CAKE_RESTOCKED,
       payload: qty 
    }
}

function orederIcecream(qty = 1){
    return{
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIcecream(qty = 1){
    return{
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const initialCakeState = {
    numberofCakes: 10
}

const intialIcecreamState = {
    numberofIceCream: 10
}

// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {

    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numberofCakes: state.numberofCakes - 1
            }
        
        case CAKE_RESTOCKED:
            return{
                ...state,
                numberofCakes: state.numberofCakes + action.payload
            }
            
        default:
                return state
    }
}

const icecreamReducer = (state = intialIcecreamState, action) => {

    switch(action.type){
        
        case ICECREAM_ORDERED:
            return{
                ...state,
                numberofIceCream: state.numberofIceCream - action.payload
            }

        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numberofIceCream: state.numberofIceCream + action.payload
            }    
        default:
                return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer)
console.log("Intial State", store.getState())

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restoreCake(3))

const actions = bindActionCreators({orderCake, restoreCake, orederIcecream, restockIcecream}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restoreCake(3)
actions.orederIcecream(2)
actions.restockIcecream(3)
unsubscribe()

