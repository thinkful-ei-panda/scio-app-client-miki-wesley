import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import LinkedLanguageApiService from '../../services/linked-language-api-service'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'

class Guess extends Component {
  static contextType = LinkedLanguageContext;

  render() {
    console.log(this.context)
    const { word = {} } = this.context
    const { nextWord, wordCorrectCount, wordIncorrectCount} = word

    return (
        <article className="learn-guess-group">
            <div className="learn-guess-score">
                <p>Correct Score: {wordCorrectCount}</p>
                <p>Incorrect Score: {wordIncorrectCount}</p>
            </div>
            <h2>{nextWord}</h2>
            <form className="learn-guess-form">
                <label htmlFor="learn-guess-input">Guess:</label>
                <input id="learn-guess-input" placeholder="Input guess here" type="text" /> 
                <button>Submit</button>
            </form>
        </article>       
    );
  }
}

export default Guess
