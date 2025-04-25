export function increment() {
    return { type: 'INCREMENT' };
 }

 export function decrement() {
    return { type: 'DECREMENT' };
 }

 export function stepChange(e) {
    return { type: 'STEP_CHANGE', 
        payload: e.target.value 
    };
}
 