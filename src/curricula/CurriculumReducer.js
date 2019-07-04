const defaultState = {
	curriculumInfo: {
		author: {
			display_name: ''
		},
		units: []
	},
	loading: true
}

let curriculumReducer = (state=defaultState, action) => {
	if (action.type == 'SET_CURRICULUM_INFO') {
		return {
			...state,
			curriculumInfo: action.curriculumInfo,
			loading: false
		}
	} else {
		return {...state}
	}
}

export default curriculumReducer