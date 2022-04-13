const redux = require("redux");
const {createStore, combineReducers, applyMiddleware } = redux;

const todo =(state =[],action)=>{
    switch (action.type){
        case "ADD_TODO":
            return [...state,action.payload];
        case "REMOVE_TODO":
            return state.filter((todo)=>todo !==action.payload);
        default:
            return state;
    }
};

const counter =(state = 0,action)=>{
    switch (action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

const reducer = combineReducers({
    todo,
    counter,
});

const middle = (store) => (next) => (action) => {
    if(action.payload) {
        action.payload = action.payload + "!";
    }
    const nextValue = next(action);
    return nextValue;
};

const store = createStore(
    reducer,
    {
        todo: [],
        counter: 0,
    },
    applyMiddleware(middle)
    
    );


store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({
    type:"ADD_TODO",
    payload:"Learn Redux"
});

store.dispatch({
    type:"ADD_TODO",
    payload:"Learn React"
});

store.dispatch({
    type:"INCREMENT"
})

store.dispatch({
    type:"REMOVE_TODO",
    payload:"Learn Redux"
});

store.dispatch({
    type:"DECREMENT"
});