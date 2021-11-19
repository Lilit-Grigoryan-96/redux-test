import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const CarList = () =>{
    return (
        <ul>
            {
                cars.map((el) =>{
                    return (
                        <li>{el.name}</li>
                    )
                })
            }

        </ul>
    )
};

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
    
}

export default connect(mapStateToProps)(CarList);