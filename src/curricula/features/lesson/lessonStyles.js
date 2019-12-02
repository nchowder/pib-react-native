import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  lessonScreen: {
    padding: 5
  }, 
  finishedScreen: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredDisplay: {
    height: 200,
  },
  finishedScreenText: {
    fontSize: 20,
    paddingBottom: 10
  },
  progressBarContainer: {
    marginTop: 10
  },
  questionImage: {
    width: '100%', 
    height: 200, 
    resizeMode: 'contain'
  },
  question: {
    marginBottom: 10
  }
})
