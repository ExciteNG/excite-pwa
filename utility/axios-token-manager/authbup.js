import api, { setToken } from './init'
import { getDecodedToken } from './token'






// Sends a POST request to /auth/sign-up on the server, with first name, last name, email & password registering the user and returning the JWT
export function signUp({ name, email, password }) {
  return api.post('/auth/sign-up', { name, email, password })
    .then(res => {
      const token = res.data.token
      // console.log(token)
      setToken(token)
      return getDecodedToken()
    })
}

// Sends a POST request to /auth on the server, with the email & password returning the JWT
// Belonging to the user with supplied credentials
export async function signIn({ email, password }) {
  const data = {email:email,password:password}
  // console.log(data)
  try {
  const response= await api.post('/auth',data);
    const token = response.data.token;
    if(token){
      setToken(token);
     
      return {
        user: getDecodedToken(),
        token:token
       }
    }else{
      return null
    }
  } catch (error) {
    return null
  }
  // return api.post('/auth', data)
  //   .then(res => {
  //     const token = res.data.token
  //     // console.log(res.data)
  //     setToken(token)
  //     return {
  //      user: getDecodedToken(),
  //      token:token
  //     }
  //   })
  //   .catch(res => {
  //     console.log(res)
  //     if (res.response.status === 400 || res.response.status === 401) {
  //       // alert("There was an error with your email or password. Please try again.")
  //       return null
  //     }
  //   })
}

// sign in partner
export function signInPartner({ email, password }) {
  const data = {email:email,password:password}
  // console.log(data)
  return api.post('/auth/login/partners', data)
    .then(res => {
      const token = res.data.token
      setToken(token)
      return getDecodedToken()
    })
    .catch(res => {
      // console.log(res)
      if (res.response.status === 400 || res.response.status === 401) {
        // alert("There was an error with your email or password. Please try again.")
        return null
      }
    })
}

// sign in affiliates
export function signInAffiliate({ email, password }) {
  const data = {email:email,password:password}
  // console.log(data)
  return api.post('/auth/login/affiliates', data)
    .then(res => {
      const token = res.data.token
      setToken(token)
      return getDecodedToken()
    })
    .catch(res => {
      if (res.response.status === 400 || res.response.status === 401) {
        // alert("There was an error with your email or password. Please try again.")
        return null
      }
    })
}
//sign in springboard

export function signInSB({ email, password }) {
  const data = {email:email,password:password}
  console.log(data)
  return api.post('/auth/login/springboard', data)
    .then(res => {
      const token = res.data.token
      setToken(token)
      return getDecodedToken()
    })
    .catch(res => {
      if (res.response.status === 400 || res.response.status === 401) {
        alert("There was an error with your email or password. Please try again.")
      }
    })
}
//sign in excite

export function signInExcite({ email, password }) {
  const data = {email:email,password:password}
  // console.log(data)
  return api.post('/auth/login/admin', data)
    .then(res => {
      const token = res.data.token
      setToken(token)
      return getDecodedToken()
    })
    .catch(res => {
      if (res.response.status === 400 || res.response.status === 401) {
        alert("There was an error with your email or password. Please try again.")
        return null
      }else{
        return null
      }
    })
}

export function pageValidate (){
  return api.get('/validation').then(res=>res)
}

export function signOut() {
  setToken(null)
}
