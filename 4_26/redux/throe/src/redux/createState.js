//createState原理实现
const createState = (stateChange) => {
    let state = null;
    let listeners = [];
    let subscribe = (listener) => listeners.push(listener);
    let getState = () => state;
    let dispatch = (action) => {
        stateChange(state, action);
        listeners.forEach(listener => listener())
    }

    //初始化stae
    dispatch({})

    return { subscribe, getState, dispatch}
}

export default createState;