import React, { Component } from 'react';
import LinkedLanguageApiService from '../../services/linked-language-api-service'
import LinkedLanguageContext from '../../contexts/LinkedLanguageContext'
import Word from './Word'

class LinkedLanguage extends Component {
    static contextType = LinkedLanguageContext

    async componentDidMount() {
        try {
            const { language, words } = await LinkedLanguageApiService.getLinkedLanguage()
            this.context.setLinkedLanguage(language, words)
        }
        catch(e) {
            this.context.setError(e)
        }

    }

    renderWords(words) {
        return words.map(word => <Word key={word.id} {...word}/>)
    }

    render() {
        const { error, words = [] } = this.context

        return (
            <article className="group">
                <div role='alert'>
                    {error && <p>{error}</p>}
                </div>
                {words.length ? this.renderWords(words) : ''}
            </article>
        )
    }
}

export default LinkedLanguage