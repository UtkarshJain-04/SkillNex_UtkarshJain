
const ConnectionCard = ({ conn, token, setConnections }) => {
    const handleSendRequest = async()=>{
        const response = await fetch(`http://localhost:5001/api/connection/send/${conn?._id}`,{
                    method:'POST',
                    headers:{'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`}
             })
            const result = await response.json()
            if(!response.ok){
                throw new Error(result.message)
            }
        console.log(result.request)
        setConnections((prev) =>prev.filter((user) => user._id !== conn._id))
    }

  return (
  <a href="" className="hover-3d my-12 mx-1 cursor-pointer block">
    <div className="card w-68 h-60 bg-black text-white border border-white/10 shadow-xl rounded-2xl overflow-hidden
    bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
      <div className="card-body p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-bold text-2xl tracking-tight">
              {conn?.name}
            </h2>
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/10 text-base font-medium text-gray-300 border border-white/10">
              {conn?.college}
            </span>
          </div>
          {conn?.profile_img ? (
            <img
              src={conn.profile_img}
              alt={conn?.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-lg"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-bold text-xl text-black">
              {conn?.name?.charAt(0)}
            </div>
          )}
        </div>
        <p className="mt-3 text-gray-300 text-base leading-6 line-clamp-2 min-h-12">
          {conn?.bio || "No bio added yet."}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-base text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Available
          </div>
          <button
            onClick={handleSendRequest}
            className="px-3 py-2 rounded-xl text-base bg-white text-black font-semibold transition-all duration-300 hover:bg-emerald-400 hover:text-white hover:scale-105"
          >Get in Touch</button>
        </div>
      </div>
    </div>
  </a>
);
};

export default ConnectionCard;

