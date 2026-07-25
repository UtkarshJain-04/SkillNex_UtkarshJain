import  { useState } from "react"

 const Signup = () => {

const[formData,setFormData]= useState({
name:'',
email:'',
password:''
})

const handleChange=(e)=>{

setFormData({...formData,[e.target.name]:e.target.value})
}

  return (
   <form>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Signup</legend>

    <label className="label" htmlFor="name">Name</label>
  <input type="text" id="name" className="input" placeholder=" Enter your Name" value={formData.name} onChange={handleChange} name="name" />

  <label className="label" htmlFor="email">Email</label>
  <input type="email" id="email"  className="input" placeholder=" Enter your Email" value={formData.email} onChange={handleChange} name="email"/>

  <label className="label" htmlFor="passowrd">Password</label>
  <input type="password" id="password" className="input" placeholder=" Enter your Password" value={formData.password} onChange={handleChange} name="password" />



<button className="btn btn-soft btn-primary" >Next</button>

</fieldset>
</form>



  )
}

export default Signup