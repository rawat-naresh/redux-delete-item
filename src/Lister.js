import React from 'react';
import { connect } from 'react-redux';
import constants from './store/constants';

function Lister(props) {
    return (
        <div>
        <h2>Lister</h2>
        <form onSubmit={props.handleSubmit}>
            <input value={props.inputText} onChange={props.inputChanged} />
        </form>
        <ul>
            {props.items.map((item,index) => { 
                return <li key={index} 
                    onClick={()=>props.itemDelete(index)}>{item}</li>})}
        </ul>
        
        </div>
    );
}

// onChange={props.inputChanged}
const mapStateToProps = (state)=>{
    return {
        inputText:state.inputText,
        items:state.items,
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        inputChanged:(event)=>{
            const action = {type:constants.INPUT_CHANGE, text:event.target.value}
            dispatch(action);
        },
        handleSubmit:(event) => {
            event.preventDefault();
            const action = {type:constants.HANDLE_SUBMIT}
            dispatch(action);
        },
        itemDelete:(index)=>{
            const action = {type:constants.DELETE_ITEM, index:index};
            dispatch(action);
        },
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Lister);;
// connect(mapStateToProps,mapDispatchToProps)(InputMirror);