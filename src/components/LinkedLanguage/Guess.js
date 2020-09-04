import React, { Component } from 'react'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'

class Guess extends Component {
  static contextType = LinkedLanguageContext;

  render() {
    const { afterWord = {} } = this.context
    const { handleUserGuess } = this.props

    return (
        <article className="learn-guess-group">
            <div className="learn-guess-score">
                <p>Correct Score: {afterWord.wordCorrectCount}</p>
                <p>Incorrect Score: {afterWord.wordIncorrectCount}</p>
            </div>
            <h2>{afterWord.nextWord}</h2>
            <form className="learn-guess-form" onSubmit={(e) => handleUserGuess(e)}>
                <label htmlFor="learn-guess-input">Guess:</label>
                <input id="learn-guess-input" name="learn-guess-input" type="text" required /> 
                <button type="submit">Submit</button>
            </form>
        </article>       
    );
  }
}

export default Guess
