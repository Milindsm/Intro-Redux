const redux = require ('redux');

//Reducer function it contains two inputs:old state +Dispatch action and return new state object
const counterReducer=(state, action)=>{
    return{
         counter:state.counter+1
    }
};

//create store which is central data(state)
const store = redux.createStore(counterReducer);

//component or subscriber
// getState is method created with createstore, it gives the latest updated state snapshot
const counterSubscriber=()=>{
   const latestState = store.getState()
   console.log (latestState)
}

store.subscribe(counterSubscriber);