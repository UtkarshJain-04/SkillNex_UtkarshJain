
const ConnectionCard = ({ conn, token, setConnections }) => {
    const handleSendRequest = async()=>{
        console.log("Token:",token)
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
    
      <a href="#" className="hover-3d my-12 mx-1 cursor-pointer block">
        {/* Adjusted bg-gradient rings for light mode and fixed bg-length syntax */}
        <div className="card w-68 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
          <div className="card-body p-7 ml-2">
            
            {/* Header: Name/College on Left, Image on Right */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex flex-col gap-1">
                <div className="font-bold text-xl">{conn?.name}</div>
                <div className="text-lg">{conn?.college}</div>
              </div>
              
              {/* Profile Image Logic */}
              {conn?.profile_img ? (
                <img 
                  src={conn.profile_img} 
                  alt={`${conn?.name}'s profile`} 
                  className="w-12 h-12 rounded-full object-cover shadow-sm border border-gray-300"
                />
              ) : (
                /* Fallback Initial if no image exists */
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 text-gray-500 font-bold text-lg shadow-sm">
                  {conn?.name?.charAt(0) || "?"}
                </div>
              )}
            </div>

            {/* Bio Section */}
            <div className="flex justify-between">
              <p className="text-base leading-relaxed">
                {conn?.bio}
              </p>
            </div>

            <button className="bg-white text-black text-base my-1 rounded-lg cursor-pointer" onClick={handleSendRequest}>Get in Touch</button>
            
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
    
  );
};

export default ConnectionCard;

