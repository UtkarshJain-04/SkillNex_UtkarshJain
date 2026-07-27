import { useState } from "react"
import { useEffect } from "react"
import connectionCard from "../components/connectionCard.jsx"


const ConnectionFeed = () => {
    const [loading, setLoading] = useState(true)
    const [connections, setConnections] = useState([])
    useEffect(()=>{
        const fetchConnectionFeed = async()=>{
            try {
                const response = await fetch("http://localhost:5001/api/connection/feed")
                const result = await response.json()
                console.log(result)
                setConnections(result)
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
    <div>connectionFeed</div>
    {connections.map((conn) => (
        <connectionCard conn = {conn}/>
    ))}
    </>
  )
}

export default ConnectionFeed