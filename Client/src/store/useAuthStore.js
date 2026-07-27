import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useAuthStore = create(
    persist(
    
    (set)=>({


    user: null,
    token: null,

    login: (userData, token)=>{
          console.log("login called", userData, token)
        set(()=>(
        {
       
        user: userData,
        token: token
    }))},

    logout: ()=>set(()=>({
        user: null,
        token: null
    })),
    refresh:(updatedUser)=>set(()=>({
        user:updatedUser
    }))
})

    ,{name: 'loginStorage'})

)

export default useAuthStore