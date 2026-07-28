import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useAuthStore = create(
    persist(
    
    (set)=>({


    user: null,
    token: null,

    login: (userData, token)=>set((state)=>({
        
        user: userData,
        token: token
    })),

    logout: ()=>set((state)=>({
        user: null,
        token: null
    })),
    refresh:(updatedUser)=>set((state)=>({
        user:updatedUser
    }))
})

    ,{name: 'loginStorage'})

)

export default useAuthStore