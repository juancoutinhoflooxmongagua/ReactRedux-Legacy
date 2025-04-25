const INITIAL_STATE = { step: 1, count: 0 };

export default function CounterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + state.step };
        case 'DECREMENT':
            return { ...state, count: state.count - state.step };
        case 'STEP_CHANGE':
            return { ...state, step: parseInt(action.payload) };
        default:
            return state;
    }
}