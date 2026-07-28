
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'
import bg_image from '../assets/bg.jpg'

const Login = () => {

 const {login} = useAuthStore()
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
   <div className='min-h-screen'>
    <img src={bg_image} alt="" className="absolute inset-0 h-full w-full object-cover"/>
    <div className='flex justify-center absolute inset-0 bg-black/40'>
    <form onSubmit={handleSubmit} className='relative z-10 flex min-h-screen items-center justify-center'>
    <fieldset className="fieldset w-105
      rounded-3xl
      border border-white/20
      bg-white/10
      backdrop-blur-xl
      shadow-[0_8px_32px_rgba(0,0,0,0.4)]
      p-10 flex flex-col">
  <div className='flex flex-col items-center gap-3'>
  <label className="label text-base text-white font-semibold" htmlFor='Email'>Email</label>
  <input type="email" id='Email' className="input" placeholder="Email" value={formData.email} onChange={handleChange} name="email" />
  <label className="label text-base text-white font-semibold" htmlFor='Password'>Password</label>
  <input type="password" id='Password' className="input" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />

  <button type='submit' className="btn btn-neutral mt-4 w-80" disabled={loading}> {loading ? "Wait for a while":"Login"}
  </button>
  </div>
</fieldset>
</form>
   </div>
   </div>
  )
}

export default Login