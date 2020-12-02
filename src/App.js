import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import DataList from './components/datalist';
import Main from './components/main';
import {createStore} from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';

// // actions

// const increment = () => {
//  return { type: 'INCREMENT' }
// }

// const decrement = () => {
//   return { type: 'DECREMENT' }
// }

// // reducer

// const reducerCounter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // store

// let store = createStore(reducerCounter);

// // dispatch 


// // display

//  store.subscribe(() => console.log(store.getState()));

//  store.dispatch(increment());
//  store.dispatch(decrement());

 let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 
function App() {
  return (
    <>
    <Provider store={store}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
         <Counter store={store} />
        </div>
        <div className="col-md-6">
         <DataList store={store} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
         <Main />
        </div>
      </div>
    </div>
    </Provider>
    </>
  );
}

export default App;
