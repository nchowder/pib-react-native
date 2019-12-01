
const apiRoot = 'https://www.physicsisbeautiful.com/api'

export function loadCurriculumInfo(curriculumName) {
  return dispatch => {
    dispatch(startLoading())
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

export function loadNextQuestion(lessonUuid) {
  return dispatch => {
    dispatch(startLoading())
    fetch(`${apiRoot}/v1/curricula/lessons/${lessonUuid}/next-question`)
      .then((response) => 
        response.json()
      )
      .then(data => dispatch(setQuestionInfo(data)))
      .catch((err) => {
        console.log(err)
      })
  }
}

export function submitResponse(questionUuid, responseJson) {
  return dispatch => {
    dispatch(startLoading())
    fetch(`${apiRoot}/v1/curricula/questions/${questionUuid}/response`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(responseJson)
    })
      .then((response) => {
        console.log(response)
        return response.json()
      }
      )
      .then(data => dispatch(setResponseInfo(data)))
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

function setResponseInfo(responseInfo) {
  return {
    type: 'SET_RESPONSE_INFO',
    responseInfo: responseInfo
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

function setQuestionInfo(questionInfo) {
  return {
    type: 'SET_QUESTION_INFO',
    questionInfo: questionInfo
  }
}