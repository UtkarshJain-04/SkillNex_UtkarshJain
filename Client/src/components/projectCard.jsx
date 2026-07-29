
export const ProjectCard = ({project}) => {
  return (
    <div>
    <a href="#" className="hover-3d m-12 mx-1 cursor-pointer ">
  <div className="card w-90 h-108 bg-[#272324] text-[#FDF8F5] bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] ml-8">
    <div className="card-body">
      <div className="flex  flex-col gap-2 justify-between mb-10">
        <div className="font-bold">{project?.title}</div>
        <div> <p>{project?.description}</p></div>
      </div>
      <div className="flex justify-between">
        <div>
       <p>{project?.techstack}</p>
    </div>
      </div>
      <div className="overflow-hidden h-40">
        {project?.images ? (<img src={project?.images} alt="" className="object-cover h-full w-full"/>) : 
        (
    <div className="h-40 flex items-center justify-center rounded-lg border border-dashed border-slate-600">
    </div>
)}</div>
      <div className="flex justify-between">
        <div>
          <div className="text-lg opacity-20">Link:</div>
          <p><span style={{fontWeight:"bolder"}}></span>{project?.link}</p>
        </div>
         
        <div>
          <div className="text-s opacity-30">Progress:</div>
           <p><span style={{fontWeight:"bolder"}}></span>{project?.progress}%</p>
        </div>
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

