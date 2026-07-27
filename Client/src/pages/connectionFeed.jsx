import { useState } from "react"
import { useEffect } from "react"
import useAuthStore from "../store/useAuthStore.js"
import ConnectionCard from "../components/connectionCard.jsx"


const ConnectionFeed = () => {
    const {login, token} = useAuthStore()
    const [loading, setLoading] = useState(true)
    const [connections, setConnections] = useState([])
    useEffect(()=>{
        const fetchConnectionFeed = async()=>{
            try {
                setLoading(true)
                const response = await fetch("http://localhost:5001/api/connection/feed",{
                    method:'GET',
                    headers:{'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`}
             })
                const result = await response.json()
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
    },[login, token])
    
  return (
    <>
    {loading ? "Loading...." : 
    <div className="flex flex-wrap gap-3">
    {connections?.map((conn) => (
        <ConnectionCard conn = {conn}
        token = {token}
        setConnections = {setConnections}/>
    ))}
    </div>}
    
    </>
  )
}

export default ConnectionFeed