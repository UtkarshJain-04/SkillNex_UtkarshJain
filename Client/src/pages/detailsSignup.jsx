
const detailsSignup = () => {
  return (
  
 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Details</legend>


<label className="label">Date of Birth</label>
  <input type="date" className="input" placeholder="Date of Birth" />

<label className="label">Gender</label>
<input type="radio" name="radio-2" className="radio radio-xs"  />Male
<input type="radio" name="radio-2" className="radio radio-xs"  />Female


    <label className="label">Bio</label>
  <input type="text" className="input" placeholder="Bio" />

    <label className="label">College</label>
  <input type="text" className="input" placeholder="College" />
</fieldset>



  )
}

export default detailsSignup