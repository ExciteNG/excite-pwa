import Cookies from 'cookies'
import useAxios from '../axios-token-manager/init'


export default async ({ req, res, query }) => {

  const handleRedirectURL = (user) => {
    switch (user) {
      case "EX50AFTAX":
        return '/services/consultants/tax'
      case "EX50AFBIZ":
        return '/services/consultants/business'
      case "EX50AFFIN":
        return '/services/consultants/loan'
      case "EX20AF":
        return '/services/affiliates'
      case "EX10AF":
        return '/console'
      default:
        return {
          props: { login: false }
        };
    }
  }
  const cookie = new Cookies(req, res);
  const myCookie = cookie.get('jwt');
  if (!myCookie) return {
    props: { login: false }
  }
  else {
    try {
      const response = await useAxios.get('/merchants', { headers: { cookie: myCookie } });
      if (!response.data.user) {
        cookie.set('jwt', null)
        return {
          props: { login: false }
        }
      } else {
        // console.log(response.data.profile.userType)
        return {
          redirect: {
            destination: handleRedirectURL(response.data.profile.userType),
            permanent: false
          }
        }
      }
    } catch (error) {
      cookie.set('jwt', null)
      return {
        props: { login: false }
      }
    }
  }

}

