import jwt from 'jsonwebtoken'

export function makeLoginToken() {
  const loginUser = {
    user_id: 123,
    name: 'Test name of user',
  }
  return jwt.sign(loginUser, 'miki-likes-wesley', {
    subject: 'test-username',
    expiresIn: '2m',
    algorithm: 'HS256',
  })
}
