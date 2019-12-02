// This file contains all the API calls needed in this app

const apiRoot = 'https://www.physicsisbeautiful.com/api'

export async function getCurriculumInfo(curriculumName) {
  /**
     * Returns the modules in a given curriculum
     */
  const response = await fetch(`${apiRoot}/v1/curricula/curricula/${curriculumName}?expand=units.modules`)
  return response.json()
}

export async function getModuleInfo(moduleName) {
  /**
     * Returns the lessons in a given module
     */
  const response = await fetch(`${apiRoot}/v1/curricula/modules/${moduleName}?expand=lessons`)
  return response.json()
}

export async function getNextQuestion(lessonUuid) {
  /**
     * Gets the next question in a given lesson (uses cookies to store state)
     */
  const response = await fetch(`${apiRoot}/v1/curricula/lessons/${lessonUuid}/next-question`)
  return response.json()
}

export async function getSubmitResponse(questionUuid, responseJson) {
  /**
     * Submits a response to a given question
     */
  const response = await fetch(`${apiRoot}/v1/curricula/questions/${questionUuid}/response`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(responseJson)
  })
  return response.json()
}
