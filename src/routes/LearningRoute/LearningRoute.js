import React, { Component } from 'react'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'
import LinkedLanguageApiService from '../../services/linked-language-api-service'
import Guess from '../../components/LinkedLanguage/Guess'
import Answer from '../../components/LinkedLanguage/Answer'

class LearningRoute extends Component {
  static contextType = LinkedLanguageContext;

  state = {
      guess: true,
  }

  handleUserGuess = async(e) => {
    e.preventDefault()

    const guess = e.target['learn-guess-input'].value

    try {
        const word = await LinkedLanguageApiService.postGuess(guess)
        await Promise.all([this.context.setAfterWord(word), this.setState({guess: false}), this.context.setError(null)])
    }
    catch(e) {
        this.context.setError(e)
    }
  }

  handleUserNextWord = async(e, afterWord) => {
      e.preventDefault(e)

      const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount } = afterWord
      const word = { nextWord, totalScore, wordCorrectCount, wordIncorrectCount }

      await Promise.all([this.context.setCurrentWord(word), this.context.setAfterWord(word), this.setState({guess: true})])
  }

  async componentDidMount() {
    try {
        const word = await LinkedLanguageApiService.getHead()
        await Promise.all([this.context.setCurrentWord(word), this.context.setAfterWord(word)])
    }
    catch(e) {
        this.context.setError(e)
    }
  }

  render() {
    const { error = null, afterWord = {} } = this.context

    return (
      <section className="group-column">
        <p className="caption">Total Score: {afterWord.totalScore}</p>
        {(this.state.guess)
            ? <Guess handleUserGuess={this.handleUserGuess}/>
            : <Answer handleUserNextWord={this.handleUserNextWord} />
        }
        <div role='alert'>
            {error && <p>{error}</p>}
        </div>
      </section>
    );
  }
}

export default LearningRoute
