
const EventCard = ({event}) => {
  
  return (
    <div>
  <a href="" className="hover-3d my-12 mx-1 cursor-pointer ">
  <div className="card w-90 bg-[#000000] text-[#ffffff] bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] ml-8">
    <div className="card-body">
      <div className="flex  flex-col gap-2 justify-between mb-10">
        <div className="font-bold">{event?.title}</div>
        <div> <p>{event?.category}</p></div>
      </div>
      <div className="flex justify-between">
        <div>
      <div className="text-lg opacity-20">Mode:</div>
       <p>{event?.mode}</p>
      
</div>
      <div>
          <div className="text-s opacity-30"> Start Date:</div>
           <p>{event?.startDate.split("T")[0]}</p>
        </div>
      </div>
      <div className="flex justify-between">
        
        <div>
          <div className="text-lg opacity-20">Prize Pool:</div>
          <p><span style={{fontWeight:"bolder"}}></span>{event?.prize}</p>
        </div>
         
        <div>
          <div className="text-s opacity-30"> Registration till:</div>
           <p><span style={{fontWeight:"bolder"}}></span>{event?.regDeadline.split("T")[0]}</p>
        </div>
      </div>

 <div className="flex justify-between">
        
        <div>
          <div className="text-lg opacity-20">Eligibility:</div>
          <p >{event?.eligibility}</p>
        </div>
         
        <div>
          <div className="text-s opacity-30"> Registration till:</div>
           <p>{event?.regDeadline.split("T")[0]}</p>
        </div>
      </div>
<div className="flex justify-between">
        <div>
          <div className="text-lg opacity-20">Team Size:</div>
          <p >{event?.teamSize}</p>
        </div>
    {event?.mode==="Offline" ? (<div><div className="text-lg opacity-20">Venue</div><div>{event?.venue}</div></div>) : <p></p>}
      </div>
    </div>
  </div>
         <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
  
  
</a>
</div>
  )
}

export default EventCard