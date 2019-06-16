
const apiRoot = 'https://www.physicsisbeautiful.com/api'

export function loadCurriculumInfo(curriculumName) {
    return dispatch => {
        return fetch(`${apiRoot}/v1/curricula/curricula/${curriculumName}`).then((response) => 
            response.json()
        )
        .then(data => dispatch(setCurriculumInfo(data)))
        .catch((err) => {
            console.log(err)
        })
    }
}

export function setCurriculumInfo(curriculumInfo) {
    return {
        type: 'SET_CURRICULUM_INFO',
        curriculumInfo: curriculumInfo
    }
}