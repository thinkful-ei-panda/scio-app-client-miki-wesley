import React, { Component } from 'react';
import LinkedLanguageApiService from '../../services/linked-language-api-service'
import Word from './Word'

class LinkedLanguage extends Component {
    state = {
        error: null,
        language: {},
        words: [],
    }

    async componentDidMount() {
        try {
            const { language, words } = await LinkedLanguageApiService.getLinkedLanguage()

            this.setState({language, words})
        }
        catch(e) {
            const { error } = e;
            this.setState({error: error.message})
        }

    }

    renderWords(words) {
        return words.map(word => <Word key={word.id} {...word}/>)
    }

    render() {
        const { error, words = [] } = this.state


        return (
            <article className="group">
                <div role='alert'>
                    {error && <p>{error}</p>}
                </div>
                {/* {words.length ? 'Meow' : this.renderWords(words)} */}
                {words.length ? this.renderWords(words) : 'Meow'}
            </article>
        )
    }
}

export default LinkedLanguage