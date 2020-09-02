import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LinkedLanguage from '../../components/LinkedLanguage/LinkedLanguage'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'

class DashboardRoute extends Component {
  static contextType = LinkedLanguageContext;

  render() {
    const { language } = this.context

    return (
      <section className="group-column">
        <p className="caption">Words to Practice</p>
        <h2>{language.name}</h2>
        <p>Total correct answers: {language.total_score}</p>
        <Link to={'/learn'}><button>START PRACTICE</button></Link>
        <LinkedLanguage />
      </section>
    );
  }
}

export default DashboardRoute
