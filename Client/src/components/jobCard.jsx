
const JobCard = ({job}) => {

  return (
    <div>
    <div className="hover-3d my-8 mx-1 cursor-pointer">

  {/* content */}
  <div className="card w-96 h-70 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
    <div className="card-body flex gap-3">
      <div className="flex font-bold text-2xl">
        <span>{job?.company_name}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-lg">{job?.title}</span>
        <span className="flex gap-1.5 text-xs">{job?.tags.slice(0,4).map((tag)=>(<span>{(tag.split(" ").join(" ").toUpperCase())}</span>))}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
           <div className="flex flex-col text-base">
            <span>Salary :</span><span className="opacity-70">{job?.salary ? job?.salary : "Interview"}</span>
            </div> 
           <div className="flex flex-col text-base">
            <span>Location :</span><span className="opacity-70">{job?.candidate_required_location}</span>
            </div> 
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col text-base">
           <span>Category :</span><span className="opacity-70">{job?.category}</span>
           </div>
           <div className="flex flex-col text-base">
           <span>Type :</span><span className="opacity-70">{job?.job_type ? job?.job_type : "Full Time"}</span>
           </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</div>  
  )
}

export default JobCard