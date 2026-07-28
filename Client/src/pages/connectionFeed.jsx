import { useState } from "react"
import { useEffect } from "react"
import useAuthStore from "../store/useAuthStore.js"
import ConnectionCard from "../components/connectionCard.jsx"


const ConnectionFeed = () => {
    const {token} = useAuthStore()
    const [loading, setLoading] = useState(false)
    const [connections, setConnections] = useState([])
    useEffect(()=>{
        const fetchConnectionFeed = async()=>{
            try {
                console.log("Token at connection feed before api call",token)
                setLoading(true)
                const response = await fetch("http://localhost:5001/api/connection/feed",{
                  
                    headers:{'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`}
             })
                const result = await response.json()
                console.log(result)
                if(!response.ok){
                    throw new Error(result.message)
                }
                console.log(result?.myConnectionFeed)
                setConnections(result?.myConnectionFeed)
            } catch (error) {
                console.log("Error:", error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchConnectionFeed()
    },[])
    
  return (
    <>
    {loading ? "Loading...." : 
    <div className="flex flex-wrap gap-3 justify-center">
    {connections?.map((conn) => (
        <ConnectionCard conn = {conn}
       
        setConnections = {setConnections}/>
    ))}
    </div>}
    
    </>
  )
}

export default ConnectionFeed