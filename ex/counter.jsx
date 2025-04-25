import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement, stepChange } from "./CounterActions";

const Counter = (props) => (
    <div>
        {props.count}
        <input type="text" onChange={props.stepChange} value={props.step} />
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.increment}>Increment</button>
    </div>
);

const mapStateToProps = (state) => ({
    step: state.CounterReducer.step,
    count: state.CounterReducer.count
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ increment, decrement, stepChange }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
