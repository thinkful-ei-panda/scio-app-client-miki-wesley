import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import LinkedLanguage from '../../components/LinkedLanguage/LinkedLanguage'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'

class Guess extends Component {
  static contextType = LinkedLanguageContext;

  componentDidMount() {

  }

  render() {
    console.log(this.context)
    // const { language } = this.context

    return (
        <article className="learn-guess-group">
            <div className="learn-guess-score">
                <p>Correct Score: 0</p>
                <p>Incorrect Score: 0</p>
            </div>
            <h3>Word</h3>
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
