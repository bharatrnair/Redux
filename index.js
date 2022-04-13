const redux = require("redux");
const {createStore} = redux;

const reducer =(state =[],action)=>{
    switch (action.type){
        case "ADD_TODO":
            return [...state,action.payload];
        default:
            return state;
    }
};

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
