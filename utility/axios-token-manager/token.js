// For storing the logged in user's credentails across page refreshes
import decodeJWT from 'jwt-decode'
const key = 'user'

export function rememberToken(token) {
  if(typeof window !== "undefined"){
  if (token ) {
    // console.log(token)
    // store the token
    sessionStorage.setItem(key, token);
    
    
  }
  else {
    // Clear token from local storage
    sessionStorage.removeItem(key)
  }
}
}

export function getValidToken() {
  if(typeof window !== "undefined"){

  const token = sessionStorage.getItem(key) 
  try {
    const decodedToken = decodeJWT(token)
    // console.log(decodedToken)
    // valid token
    const now = Date.now() / 1000
    // check if token has expired
    // console.log(now)
    if (now > decodedToken.exp) {
      return null
    }
    return token
  }
  catch (error) {
    // invalid token
    return null
  }
}
}

export function getDecodedToken() {
  const validToken = getValidToken()
  if (validToken) {
    return decodeJWT(validToken)
  }
  else {
    return null
  }
}