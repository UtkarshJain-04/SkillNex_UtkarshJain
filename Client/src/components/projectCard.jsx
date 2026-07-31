export const ProjectCard = ({ project }) => {
  return (
    <div className="hover-3d m-12 mx-1 cursor-pointer block group relative">
      <div className="card w-90 h-108 bg-[#fdfbf7] text-[#1e293b] border border-slate-200 rounded-xl transition-all duration-500 ml-8 hover:border-slate-400 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:bg-[#faf6ee]">
        <div className="card-body p-6 flex flex-col justify-between h-full">
          
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors duration-300">
              {project?.title || "Untitled Project"}
            </div>
            <div className="text-sm text-[#475569] font-medium line-clamp-3">
              <p>{project?.description || "No description provided."}</p>
            </div>
          </div>

          <div className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md self-start group-hover:bg-slate-200/60 transition-all duration-300">
            <p>{project?.techstack || "No tech stack listed"}</p>
          </div>

          <div className="overflow-hidden h-40 rounded-lg border border-slate-200 relative group-hover:border-slate-300 transition-colors duration-500 bg-white/60">
            {project?.images ? (
              <img 
                src={project?.images} 
                alt="" 
                className="object-cover h-full w-full transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="h-full flex items-center justify-center border border-dashed border-slate-300 rounded-lg">
                <span className="text-xs font-semibold text-slate-400">Awaiting Preview</span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-end border-t border-slate-100 pt-4 text-xs">
            <div className="max-w-[60%] truncate z-10">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold mb-0.5">Link</div>
              {project?.link ? (
                <a 
                  href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#334155] font-semibold truncate hover:text-amber-800 hover:underline transition-colors block"
                >
                  {project.link}
                </a>
              ) : (
                <p className="text-slate-400 font-semibold truncate">None</p>
              )}
            </div>
             
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold mb-0.5">Progress</div>
              <p className="text-slate-800 font-extrabold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                <span style={{ fontWeight: "bolder" }}></span>
                {project?.progress ?? 0}%
              </p>
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
    </div>
  )
}
