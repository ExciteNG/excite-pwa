export const Payment=(choice,user)=>{
    return{
        type:"Payment",
        payload:{choice,user}
    }
}