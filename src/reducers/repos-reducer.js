const SET_COUNT = 'SET_COUNT';

const defaultState = {
    imptes: [],
    isFetching: true,
    count: 0
}

export default function reposReducer(state= defaultState, action) {
    switch(action.type){
        case SET_COUNT: 
            return{
                ...state,
                count: action.payload
            }
        default:
            return action.type
    }
}

export const setCount = (count) => ({ // return action
    type: SET_COUNT,
    payload: count 
})