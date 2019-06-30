const defaultState = {
    curriculumInfo: {
        author: {
            display_name: ''
        },
        units: []
    },
    loading: true
}

export default curriculumReducer = (state=defaultState, action) => {
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