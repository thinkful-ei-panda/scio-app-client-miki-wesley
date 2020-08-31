export default {
  API_ENDPOINT: (process.env.REACT_APP_ENV === 'production')
    ? 'https://floating-ridge-78190.herokuapp.com/api'
    : 'http://localhost:8000/api',
  TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || 'scio-app-auth-token',
}
