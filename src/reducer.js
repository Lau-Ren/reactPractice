import clone from 'clone';

const initialState = {
	"blocks": [10, 10],
	"status": "alive"
}

export default (state = initialState, action) => {
	let newState 
	switch (action.type) {

		case 'ADD_BLOCK' :
			newState = clone(state)
			if (state.blocks[action.id] > 0) {
				newState[action.id] = state.blocks[action.id] + 1
			} 
			return newState

		case 'LOSE_BLOCK' :
			newState = clone(state)
			if (state.blocks[action.id] > 0) {
				newState[action.id] = state.blocks[action.id] - 1
			} else {
				clearInterval()
			}
			return newState

		case 'KILL_PET' :
			newState = clone(state)
			if (state.status === 'dead') {
				newState[action.id] = state.blocks[action.id] - 1
			} else {
				clearInterval()
			}
			return newState
		
		default :
			return state
	}
}