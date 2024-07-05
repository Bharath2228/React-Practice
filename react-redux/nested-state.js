const redux = require('redux');
const produce = require('immer').produce
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const intialState = {
    name: 'Vishwas',
    address: {
        street: '123 main str',
        city: 'Boston',
        state: 'MA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED'

function updateStreet(street){
    return{
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        case STREET_UPDATED:
            // return{
            //     ...state, address: {
            //         ...state.address, 
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default:
            return state
    }
}

const store = redux.createStore(reducer, applyMiddleware(logger))

// console.log("intial state", store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(updateStreet("486 main str"))


unsubscribe()
