import { createStore } from 'redux';
import constants from './constants';

const initialState = {
    inputText:'',
    items:[]
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case constants.INPUT_CHANGE :
            return Object.assign({},state,{inputText:action.text})
        case constants.HANDLE_SUBMIT :
            return Object.assign({},state,{
                items:state.items.concat(state.inputText),
                inputText:''
            });
        case constants.DELETE_ITEM:
            const copyOfItems = state.items.slice();
            copyOfItems.splice(action.index,1);
            return Object.assign({},state,{items:copyOfItems})
        default :
            return state;

    }
}
const store = createStore(reducer);

export default store;