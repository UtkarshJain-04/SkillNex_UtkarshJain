// import { useEffect, useState } from "react"
// import {Link, useNavigate } from 'react-router-dom'


// const DetailsSignup = () => {


//   const navigate = useNavigate()

//   const [toast, setToast] = useState(null)

//   const [loading, setLoading] = useState(false)

//   const [formData, setFormData] = useState({
//     Birth: '',
//     Gender:'',
//    Bio:'',
//    College:''

//   })


//   useEffect(() => {
//     if (toast) {
//       const timerId = setTimeout(() => {
//         setToast(null)
//       }, 4000)
//       return () => clearTimeout(timerId)
//     }
//   }, [toast])

//   const HandleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       setLoading(true)
//       const response = await fetch('http://localhost:5001/api/auth/signup', {
//         method: 'POST',
//         headers: { 'CONTENT-TYPE': 'application/json' },
//         body: JSON.stringify(formData)
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || "Signup failed")
//       }
//       setToast({
//         message: "Signup successfully",
//         type: 'success'
//       })
//       setTimeout(() => { navigate('/login') }, 1500)

//     } catch (err) {
//       setToast({
//         message: err.message,
//         type: 'error'
//       })
//     } finally {
//       setLoading(false)
//     }
//   }
//   const handleChange = (e) => {

//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   return (
//     <form onSubmit={HandleSubmit}>
//       <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//         <legend className="fieldset-legend">Details</legend>


//         <label className="label" htmlFor="Birth">Date of Birth</label>
//         <input type="date" id="Birth" className="input" placeholder="Date of Birth" value={formData.Birth } onChange={handleChange} name="Birth" />

//         <div className="flex gap-2" >
//           <label className="label" htmlFor="Gender">Gender :</label>
        
//         <input type="radio" id="Gender"   value={formData.Gender} name="Gender" onChange={handleChange}/>Male
//         <input type="radio" id="Gender"  value={formData.Gender } name="Gender" onChange={handleChange}/>Female
//         <input type="radio" id="Gender"  value={formData.Gender } name="Gender" onChange={handleChange}/>Rather not to say

// </div>
//         <label className="label" htmlFor="Bio">Bio</label>
//         <textarea id="Bio"   placeholder=" Bio" className="input" style={{ resize: 'none',overflowWrap: 'break-all',whiteSpace:'pre-wrap',overflow: 'hidden'}} value={formData.Bio } onChange={handleChange} name="Bio"></textarea>


//         <label className="label" htmlFor="College">College</label>
//         <input type="text" id="College" className="input" placeholder="College" value={formData.College } onChange={handleChange} name="College" />


//         <button  className="btn btn-soft btn-primary"> <Link to="/signup">Previous</Link> </button>
//         <button type="submit" className="btn btn-soft btn-primary" disabled={loading} onSubmit={HandleSubmit} > {loading ?"Taking you there":"Signup"} </button>
//       </fieldset></form>
//   )
// }

// export default DetailsSignup;