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
          <p>Sorry, you sucky suck!</p>
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
            <p>Yay, but not good enough.</p>
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
                <button onClick={(e) => handleUserNextWord(e, afterWord)}>Next Word</button>
            </div>
        </article>   
    );
  }
}

export default Answer
