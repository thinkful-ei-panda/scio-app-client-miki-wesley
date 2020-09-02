import config from '../config';
import TokenService from './token-service';

const LinkedLanguageApiService = {
    getLinkedLanguage() {
        return fetch(`${config.API_ENDPOINT}/language`, {
            'method': 'GET',
            'headers': {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                }
                return response.json()
            })
    },

    getHead() {
        return fetch(`${config.API_ENDPOINT}/language/head`, {
            'method': 'GET',
            headers: {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                }

                return response.json()
            })
    },

    getNextWord() {

    }
}

export default LinkedLanguageApiService