
const PeopleCard = ({ user }) => {

  return (
    <div>
      <a href="#" className="hover-3d my-12 mx-1 cursor-pointer block">
        {/* Adjusted bg-gradient rings for light mode and fixed bg-length syntax */}
        <div className="card w-68 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
          <div className="card-body p-7 ml-2">
            
            {/* Header: Name/College on Left, Image on Right */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex flex-col gap-1">
                <div className="font-bold text-xl">{user?.name}</div>
                <div className="text-lg">{user?.college}</div>
              </div>
              
              {/* Profile Image Logic */}
              {user?.profile_img ? (
                <img 
                  src={user.profile_img} 
                  alt={`${user?.name}'s profile`} 
                  className="w-12 h-12 rounded-full object-cover shadow-sm border bg border-gray-300"
                />
              ) : (
                /* Fallback Initial if no image exists */
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 text-gray-500 font-bold text-lg shadow-sm">
                  {user?.name?.charAt(0) || "?"}
                </div>
              )}
            </div>

            {/* Bio Section */}
            <div className="flex justify-between">
              <p className="text-base leading-relaxed">
                {user?.bio}
              </p>
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
    
  );
};

export default PeopleCard;

