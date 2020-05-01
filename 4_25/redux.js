//redux原理实现

//ceaetStore原理实现,
const createState = (stateChange) => {
    if(typeof stateChange !== 'function'){
        throw Error('you need enter a function param')
    }
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        stateChange(state, action);
        listeners.forEach(listener => listener())
    }
    //初始化state
    dispatch({});
    return { subscribe, dispatch, getState}
}

