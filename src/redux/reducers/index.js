import {combineReducers} from "redux"
import Car from "./Car"

const allReducers = combineReducers({
    cars: Car
});
export default allReducers