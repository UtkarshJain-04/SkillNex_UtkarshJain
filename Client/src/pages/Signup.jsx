import React from 'react'

const Signup = () => {









  return (
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Signup</legend>

    <label className="label">Name</label>
  <input type="text" className="input" placeholder="Name" />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">Signup</button>
</fieldset>




  )
}

export default Signup