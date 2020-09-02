import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import LinkedLanguage from '../../components/LinkedLanguage/LinkedLanguage'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'
import Guess from '../../components/LinkedLanguage/Guess'

class LearningRoute extends Component {
  static contextType = LinkedLanguageContext;

  render() {
    const { language } = this.context

    return (
      <section className="group-column">
        <p className="caption">Total correct answers: {language.total_score}</p>
        <h2>{language.name}</h2>
        <Guess /> 
      </section>
    );
  }
}

export default LearningRoute
