import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='group-column'>
        <p className='caption'>
          Practice learning a language with the spaced repetition revision technique.
        </p>
        <div className='log-group'>
            <h2>Sign up</h2>
            <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
            />
        </div>
      </section>
    );
  }
}

export default RegistrationRoute
