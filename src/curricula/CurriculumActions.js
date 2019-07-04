
const apiRoot = 'https://www.physicsisbeautiful.com/api'

export function loadCurriculumInfo(curriculumName) {
    return dispatch => {
        return fetch(`${apiRoot}/v1/curricula/curricula/${curriculumName}?expand=units.modules`).then((response) => 
            response.json()
        )
        .then(data => dispatch(setCurriculumInfo(data)))
        .catch((err) => {
            console.log(err)
        })
    }
}

export function loadModuleInfo(moduleUuid) {
    return dispatch => {
        dispatch(startLoading())
        fetch(`${apiRoot}/v1/curricula/modules/${moduleUuid}?expand=lessons`)
            .then((response) => 
                response.json()
            )
            .then(data => dispatch(setModuleInfo(data)))
            .catch((err) => {
                console.log(err)
            })
    }
}

function setCurriculumInfo(curriculumInfo) {
    return {
        type: 'SET_CURRICULUM_INFO',
        curriculumInfo: curriculumInfo
    }
}

function startLoading() {
    return {
        type: 'START_LOADING'
    }
}

function setModuleInfo(moduleInfo) {
    return {
        type: 'SET_MODULE_INFO',
        moduleInfo: moduleInfo
    }
}