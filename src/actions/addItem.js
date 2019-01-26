export function getaddItem(selectedItem){
    return function(dispatch){
            return dispatch(addItem(this.props.selectedItem))
        }
    }

export const ADD_ITEM = 'ADD_ITEM';

export function addItem(selectedItem){
    return {
        type: ADD_ITEM,
        payload:{
            selectedItem
        }
    }
}