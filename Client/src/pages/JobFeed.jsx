import { useEffect } from "react"
import { useState } from "react"
import JobCard from "../components/jobCard"

const JobFeed = () => {

const [loading, setLoading] = useState(false) 
const [jobs, setJobs] =useState([])

 useEffect(()=>{
        const fetchJobs = async()=>{
           try {
             setLoading(true)
             const response = await fetch('https://remotive.com/api/remote-jobs?&category=tech')
             const result = await response.json()
             console.log(result.jobs)
             if (!response.ok) {
              throw new Error(result.message);
             }
             setJobs(result.jobs)
           } catch (err) {
            console.log("Error while fetching jobs", err);
           } finally {
            setLoading(false)
           }
        }
       fetchJobs()
    },[])

  return (
    <div>
    {loading ? "Loading....." : 
      <div className="flex flex-wrap gap-3 justify-center">
    {jobs?.map((job)=>(
        <JobCard job = {job}/>
            ))}
  </div>}
    </div>
  )
}

export default JobFeed