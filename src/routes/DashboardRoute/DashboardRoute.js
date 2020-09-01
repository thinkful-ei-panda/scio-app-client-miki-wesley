import React, { Component } from 'react'
import LinkedLanguage from '../../components/LinkedLanguage/LinkedLanguage'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'

class DashboardRoute extends Component {
  static contextType = LinkedLanguageContext;

  render() {
    console.log(this.context)
    const { language } = this.context

    return (
      <section className="group-column">
        <p className="caption">Language: {language.name}</p>
        <h2>Words to Practice</h2>
        <p>Current Total Score: {language.total_score}</p>
        <button>START PRACTICE</button>
        <LinkedLanguage />
      </section>
    );
  }
}

export default DashboardRoute
