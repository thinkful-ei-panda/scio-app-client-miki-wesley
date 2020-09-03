import React, { Component } from 'react'
import UserContext from './UserContext'

const LinkedLanguageContext = React.createContext({
    language: {},
    words: [],
    currentWord: {},
    afterWord: {},
    error: null,
})

export default LinkedLanguageContext

export class LinkedLanguageProvider extends Component {
    static contextType = UserContext

    state = {
        language: {},
        words: [],
        currentWord: {},
        afterWord: {},
        error: null,
    }

    setLinkedLanguage = (language, words) => {
        this.setState({language, words})
    }

    setLanguage = (language) => {
        this.setState({language})
    }

    setWords = (words) => {
        this.setState({words})
    }

    setCurrentWord = (currentWord) => {
        this.setState({currentWord})
    }
    
    setAfterWord = (afterWord) => {
        this.setState({afterWord})
    }

    setError = (e) => {
        let { error } = e
        if(error === 'Unauthorized request')
            this.context.processLogout()

        if(error ===    `Missing 'guess' in request body`)
            error = 'Please enter a valid string'

        this.setState({error})
    }

    render() {
        const value = {
            language: this.state.language,
            words: this.state.words,
            currentWord: this.state.currentWord,
            afterWord: this.state.afterWord,

            setLinkedLanguage: this.setLinkedLanguage,
            setLanguage: this.setLanguage,
            setWords: this.setWords,
            setCurrentWord: this.setCurrentWord,
            setAfterWord: this.setAfterWord,

            error: this.state.error,
            setError: this.setError,
        }

        return (
            <LinkedLanguageContext.Provider value={value}>
                {this.props.children}
            </LinkedLanguageContext.Provider>
        )
    }
}