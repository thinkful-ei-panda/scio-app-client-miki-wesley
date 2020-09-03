import React, { Component } from 'react'
// import LinkedLanguageApiService from '../../services/linked-language-api-service'
import UserContext from './UserContext'

const LinkedLanguageContext = React.createContext({
    language: {},
    words: [],
    currentWord: {},
    afterWord: {},
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
        const { error } = e
        if(error.message && error.message === 'Unauthorized')
            this.context.processLogout()
        
        this.setState({error: error.message})
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
            setError: this.setError,
            error: this.state.error,
        }

        return (
            <LinkedLanguageContext.Provider value={value}>
                {this.props.children}
            </LinkedLanguageContext.Provider>
        )
    }
}