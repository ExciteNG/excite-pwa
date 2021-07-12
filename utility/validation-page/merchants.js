import Cookies from 'cookies'
import useAxios from './../../utility/axios-token-manager/init'

export default async ({req,res,query})=>{
    const cookie = new Cookies(req,res);
    const myCookie=cookie.get('jwt');
    if(!myCookie) return{
      redirect:{
        destination:"/services/login",
        permanent:false
      }
    }
    try {
    const response = await useAxios.get('/merchants',{headers:{cookie:myCookie}});
      if(!response.data.user){
        cookie.set('jwt',null)
        return{
          redirect:{
            destination:"/services/login",
            permanent:false
          }
        }
      }else{
        // console.log(response.data.profile.userType)
        return{
          props:{profile:response.data.profile,query:query}
        }
      }
    } catch (error) {
      cookie.set('jwt',null)
      return{
        redirect:{
          destination:"/services/login",
          permanent:false
        }
      }
    }
   
  }
  
  