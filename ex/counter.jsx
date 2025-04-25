import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "./CounterActions";
import { stepChange } from "./CounterActions";

const Counter = (props) => {
    <div>Ok</div>
}

const mapStateToProps = (state) => {
    return {
        step: state.CounterReducer.step,
        count: state.CounterReducer.count
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ increment, decrement, stepChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);