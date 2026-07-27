
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'


const Login = () => {

 const {login, token} = useAuthStore()
const navigate = useNavigate()
const[loading, setLoading] = useState(false)

const[formData, setFormData] = useState({
    email: '',
    password: ''
})

const[toast, setToast] = useState(null)

useEffect(()=>{
if(toast){
    const timerId = setTimeout(()=>{
            setToast(null)
    },4000)

    return ()=>clearTimeout(timerId)
}
},[toast])

const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
}

const handleSubmit = async (e) =>{
    e.preventDefault()

try {   
        setLoading(true)
        const response = await fetch('http://localhost:5001/api/auth/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
    
        const data = await response.json()
       console.log(" login data", data);
        if(!response.ok){
            throw new Error(data.message || "login failed")
        }
        console.log("login.jsx", data.userData);
        login(data?.userData?.user, data?.userData?.token)
        setToast({message: "Login successfully", type: 'success'})
        setTimeout(()=>{navigate('/')},1500)

} catch (err) {
        setToast({message: err.message, type: 'error'})
        
} finally {
    setLoading(false)
}
}

  return (
   <form onSubmit={handleSubmit} >
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>

  <label className="label" htmlFor='Email'>Email</label>
  <input type="email" id='Email' className="input" placeholder="Email" value={formData.email} onChange={handleChange} name="email" />

  <label className="label" htmlFor='Password'>Password</label>
  <input type="password" id='Password' className="input" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />

  <button type='submit'   className="btn btn-neutral mt-4" disabled={loading}> {loading ? "Wait for a while":"Login"}
  </button>
</fieldset>
</form>
  )
}

export default Login