import { useState } from "react"
import { useEffect } from "react"
import useAuthStore from "../store/useAuthStore.js"
import RequestCard from '../components/requestCard.jsx'
import { Link } from 'react-router-dom'
import { API_URL } from '../config'

const PendingRequests = () => {
    const {token} = useAuthStore()
    const [loading, setLoading] = useState(false)
    const [requests, setRequests] = useState([])
    const [toast, setToast] = useState(null)
    useEffect(()=>{
        const fetchPendingRequests = async()=>{
            try {
                setLoading(true)
                const response = await fetch(`${API_URL}/api/connection/pending`,
                    {headers:{'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`}
                })
                const result = await response.json()
                console.log(result)
                if(!response.ok){
                    throw new Error(result.message)
                }
                console.log(result?.myPendingRequests)
                setRequests(result?.myPendingRequests)
            } catch (error) {
                console.log("Error:", error.message)
            } finally {
                setLoading(false)
            }
        }
        if (toast) {
          const timerId = setTimeout(() => {
            setToast(null);
          }, 4000);
          return () => clearTimeout(timerId);
        }
        fetchPendingRequests()
    },[toast])
    
  return (
    <>
    {loading ? "Loading...." : 
    <div className="flex flex-col">
            <div className="flex justify-start mt-5 ml-5">
                <button className="btn bg-orange-400 text-white font-semibold text-lg rounded-xl"><Link to="/connection-feed">🢀 Back</Link></button>
            </div>
    <div className="flex flex-wrap gap-5 justify-center">
    {requests?.map((request) => (
        <RequestCard request = {request}
        token = {token}
        setRequests = {setRequests}
        setToast = {setToast}/>
    ))}
    </div>
   </div>}
   {toast && (
  <div className="toast toast-top toast-end z-50">
    <div
      className={`alert ${
        toast.type === "success" ? "alert-success" : "alert-error"
      }`}
    >
      <span>{toast.message}</span>
    </div>
  </div>
)}
    </>
  )
}

export default PendingRequests
