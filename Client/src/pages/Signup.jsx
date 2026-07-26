import  { useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom'



 const Signup = () => {
  const [toast, setToast] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
const[formData,setFormData]= useState({
name:'',
email:'',
password:'',
  dateofbirth: '',
    gender:'',
   bio:'',
   college:''
})

useEffect(() => {
    if (toast) {
      const timerId = setTimeout(() => {
        setToast(null)
      }, 4000)
      return () => clearTimeout(timerId)
    }
  }, [toast])

  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: { 'CONTENT-TYPE': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Signup failed")
      }
      setToast({
        message: "Signup successfully",
        type: 'success'
      })
      setTimeout(() => { navigate('/login') }, 1500)

    } catch (err) {
      setToast({
        message: err.message,
        type: 'error'
      })
    } finally {
      setLoading(false)
    }
  }
const handleChange=(e)=>{

setFormData({...formData,[e.target.name]:e.target.value})
}

  return (
   <form onSubmit={HandleSubmit}>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Signup</legend>

    <label className="label" htmlFor="name">Name</label>
  <input type="text" id="name" className="input" placeholder=" Enter your Name" value={formData.name} onChange={handleChange} name="name" />

  <label className="label" htmlFor="email">Email</label>
  <input type="email" id="email"  className="input" placeholder=" Enter your Email" value={formData.email} onChange={handleChange} name="email"/>

  <label className="label" htmlFor="passowrd">Password</label>
  <input type="password" id="password" className="input" placeholder=" Enter your Password" value={formData.password} onChange={handleChange} name="password" />

 <label className="label" htmlFor="Birth">Date of Birth</label>
        <input type="date" id="Birth" className="input" placeholder="Date of Birth" value={formData.dateofbirth } onChange={handleChange} name="dateofbirth" />

        <div className="flex gap-2" >
          <label className="label" htmlFor="Gender">Gender :</label>
        
    <input
  type="radio"
  name="gender"
  value="Male"
  checked={formData.gender === "Male"}
  onChange={handleChange}
/>
Male

<input
  type="radio"
  name="gender"
  value="Female"
  checked={formData.gender === "Female"}
  onChange={handleChange}
/>
Female

<input
  type="radio"
  name="gender"
  value="Rather not to say"
  checked={formData.gender === "Rather not to say"}
  onChange={handleChange}
/>
Rather not to say

</div>
        <label className="label" htmlFor="Bio">Bio</label>
        <textarea id="Bio"   placeholder=" Bio" className="input" style={{ resize: 'none',overflowWrap: 'break-all',whiteSpace:'pre-wrap',overflow: 'hidden'}} value={formData.bio } onChange={handleChange} name="bio"></textarea>


        <label className="label" htmlFor="College">College</label>
        <input type="text" id="College" className="input" placeholder="College" value={formData.college } onChange={handleChange} name="college" />


<button className="btn btn-soft btn-primary" disabled={loading}  > 
  {loading ?"plz wait":"Signup"} 

  </button>

</fieldset>
</form>



  )
}

export default Signup