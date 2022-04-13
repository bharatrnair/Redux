const redux = require("redux");
const {createStore, combineReducers} = redux;

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
const store = createStore(reducer);


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