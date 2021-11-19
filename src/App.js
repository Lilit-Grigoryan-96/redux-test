import './App.css';
import { createStore } from 'redux'
import allReducers from './redux/reducers/index'
import {Provider} from "react-redux";
import CarList from "./containers/car-list"

function App() {
    const store= createStore(allReducers);
    return (
    <div>
        <Provider store={store}>
            <CarList/>
        </Provider>
        test
    </div>
  );
}

export default App;
