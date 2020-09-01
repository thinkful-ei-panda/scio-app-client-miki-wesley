import React, { Component } from 'react'
import LinkedLanguage from '../../components/LinkedLanguage/LinkedLanguage'

class DashboardRoute extends Component {
  render() {
    return (
      <section className="group-column">
        <p className="caption">Latin: Common Abbreviations</p>
        <h2>Words to Practice</h2>
        <button>START PRACTICE</button>
        <LinkedLanguage />
      </section>
    );
  }
}

export default DashboardRoute
