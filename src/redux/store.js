import {thunk} from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import  Reducers  from "./Reducer/reducer";


const middleWare = [thunk];

const reducer = combineReducers({
  userInfo: Reducers,
  abcd : {"zxdcv": "sdfg"}
});

const store = createStore(
  reducer,
  applyMiddleware(...middleWare)
);
console.log(store,"kkkkkkkkkkkkk",reducer,"testttttttttttttttt")
export { store };