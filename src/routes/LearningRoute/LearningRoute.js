import React, { Component } from 'react'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'
import LinkedLanguageApiService from '../../services/linked-language-api-service'
import Guess from '../../components/LinkedLanguage/Guess'

class LearningRoute extends Component {
  static contextType = LinkedLanguageContext;

  async componentDidMount() {
    try {
        const word = await LinkedLanguageApiService.getHead()
        this.context.setNextWord(word)
    }
    catch(e) {
        console.log(e)
        this.context.setError(e)
    }
  }

  render() {
    const { error = null, language = [], word = {} } = this.context

    return (
      <section className="group-column">
        <div role='alert'>
            {error && <p>{error}</p>}
        </div>
        <p className="caption">Total correct answers: {word.totalScore}</p>
        {/* <h2>{language.name}</h2> */}
        <Guess /> 
      </section>
    );
  }
}

export default LearningRoute
