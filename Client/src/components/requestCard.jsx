import { API_URL } from '../config'
const RequestCard = ({ request, token, setRequests, setToast }) => {
    const handleAccept = async()=>{
        const response = await fetch(`${API_URL}/api/connection/accept/${request?._id}`,{
                    method:'PUT',
                    headers:{'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`}
             })
            const result = await response.json()
            if(!response.ok){
                throw new Error(result.message)
            }
        console.log(result)
        setToast({
        message: "Request accepted successfully",
        type: "success",
      });
        setRequests((prev) =>prev.filter((request) => request._id !== request._id))
    }

    const handleReject = async()=>{
        const response = await fetch(`${API_URL}/api/connection/reject/${request?._id}`,{
                    method:'PUT',
                    headers:{'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`}
             })
            const result = await response.json()
            if(!response.ok){
                throw new Error(result.message)
            }
        console.log(result)
        setToast({
        message: "Request rejected successfully",
        type: "error",
      });
        setRequests((prev) =>prev.filter((request) => request._id !== request._id))
    }

  return (

    <a href="" className="hover-3d my-12 mx-1 cursor-pointer block">
  <div
    className="card w-78 h-72 bg-black text-white border border-white/10 shadow-xl rounded-2xl overflow-hidden
    bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
    <div className="card-body p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold text-2xl tracking-tight">
            {request?.sender?.name}
          </h2>
          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/10 text-sm font-medium text-gray-300 border border-white/10">
            {request?.sender?.college}
          </span>
        </div>
        {request?.sender?.profile_img ? (
          <img
            src={request.sender.profile_img}
            alt={request?.sender?.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-lg"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-bold text-xl text-black">
            {request?.sender?.name?.charAt(0)}
          </div>
        )}
      </div>
      <p className="mt-3 text-gray-300 text-base leading-6 line-clamp-2 min-h-12">
        {request?.sender?.bio || "No bio added yet."}
      </p>
      <div className="">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs font-medium border border-yellow-400/20">
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          Pending Request
        </span>
      </div>
      <div className="mt-3 flex gap-3">
        <button
          onClick={handleAccept}
          className="flex-1 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold transition-all duration-300 hover:bg-emerald-400 hover:scale-105"
        >✓ Accept</button>
        <button
          onClick={handleReject}
          className="flex-1 py-2.5 rounded-xl border border-red-400/30 bg-red-500/10 text-red-300 font-semibold transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-105"
        >✕ Reject</button>
      </div>
    </div>
  </div>
</a>
    
  );
};

export default RequestCard;

