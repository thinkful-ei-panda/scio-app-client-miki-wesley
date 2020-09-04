import React, { Component } from 'react'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'

class Answer extends Component {
  static contextType = LinkedLanguageContext;

  renderIncorrect(answer, correct, incorrect) {
    return (
      <>
        <div className="learn-guess-score">
          <p>Correct Score: {correct}</p>
          <p className="learn-guess-incorrect">Incorrect Score: {++incorrect}</p>
        </div>
          <h3>{answer}</h3>
          <p className="cy-incorrect-feedback learn-guess-incorrect">Sorry! Keep practicing and you'll get this right next time!</p>
      </>
    )
}

  renderCorrect(answer, correct, incorrect) {
      return (
        <>
          <div className="learn-guess-score">
            <p className="learn-guess-correct">Correct Score: {++correct}</p>
            <p>Incorrect Score: {incorrect}</p>
          </div>
            <h3>{answer}</h3>
            <p className="cy-correct-feedback learn-guess-correct">Great, keep practicing to reinforce the new word!</p>
        </>
      )
  }

  render() {
    const { currentWord = {}, afterWord = {} } = this.context
    const { handleUserNextWord } = this.props
    const { wordCorrectCount, wordIncorrectCount} = currentWord
    const { answer, isCorrect } = afterWord

    return (
        <article className="learn-guess-group">
            {(isCorrect)
                ? this.renderCorrect(answer, wordCorrectCount, wordIncorrectCount)
                : this.renderIncorrect(answer, wordCorrectCount, wordIncorrectCount)
            }
            <div>
                <button onClick={(e) => handleUserNextWord(e, afterWord)}>Try another word!</button>
            </div>
        </article>   
    );
  }
}

export default Answer
