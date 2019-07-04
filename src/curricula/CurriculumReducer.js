const defaultState = {
	curriculumInfo: {
		author: {
			display_name: ''
		},
		units: []
	},
	moduleInfo: {
		name: '',
		lessons: []
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
	} else if (action.type == 'SET_MODULE_INFO') {
		return {
			...state, 
			moduleInfo: action.moduleInfo,
			loading: false
		}
	} else if (action.type == 'START_LOADING') {
		return {
			...state,
			loading: true
		}
	} else {
		return {...state}
	}
}

export default curriculumReducer