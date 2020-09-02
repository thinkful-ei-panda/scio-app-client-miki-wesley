import React, { Component } from 'react'
import UserContext from './UserContext'

const LinkedLanguageContext = React.createContext({
    language: {},
    words: [],
    word: null,
})

export default LinkedLanguageContext

export class LinkedLanguageProvider extends Component {
    static contextType = UserContext

    state = {
        
        language: {},
        words: [],
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
    
    setNextWord = (word) => {
        this.setState({word})
    }

    setError = (e) => {
        const { error } = e
        if(error.message === 'Unauthorized')
            this.context.processLogout()
        
        this.setState({error: error.message})
    }

    render() {
        const value = {
            language: this.state.language,
            words: this.state.words,
            word: this.state.word,
            setLinkedLanguage: this.setLinkedLanguage,
            setLanguage: this.setLanguage,
            setWords: this.setWords,
            setNextWord: this.setNextWord,
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