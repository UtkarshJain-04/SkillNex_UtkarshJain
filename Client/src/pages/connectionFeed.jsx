import { useState } from "react"
import { useEffect } from "react"
import useAuthStore from "../store/useAuthStore.js"
import ConnectionCard from "../components/connectionCard.jsx"
import {Link} from 'react-router-dom'
 import { API_URL } from '../config'

const ConnectionFeed = () => {
    const {token} = useAuthStore()
    const [loading, setLoading] = useState(false)
    const [connections, setConnections] = useState([])
    useEffect(()=>{
        const fetchConnectionFeed = async()=>{
            try {
                console.log("Token at connection feed before api call",token)
                setLoading(true)
                const response = await fetch(`${API_URL}/api/connection/feed`,{
                  
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
    <div className="flex flex-col gap-2">
        <div className="flex justify-end mt-5 mr-5 gap-3">
                <button className="btn bg-emerald-400 text-white font-semibold text-lg rounded-xl"><Link to="/accepted-connections">Connections</Link></button>
                <button className="btn bg-orange-400 text-white font-semibold text-lg rounded-xl"><Link to="/pending-requests">Pending Requests</Link></button>
              </div>
        <div className="flex flex-wrap gap-3 justify-center">
        {connections?.map((conn) => (
        <ConnectionCard conn = {conn}
        token = {token}
        setConnections = {setConnections}/>
    ))}
    </div>
        </div>}
    
    </>
  )
}

export default ConnectionFeed
