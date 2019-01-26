const reducer = (state = [], action = {}) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.payload !== ' ' || action.payload === 'default' ? action.payload : state];
		default:
			return state;
	}
};

export default reducer;
