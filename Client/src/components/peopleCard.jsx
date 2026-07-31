
const PeopleCard = ({ user }) => {
  return (
    <div>
      <div className="hover-3d m-12 mx-1 cursor-pointer group relative">
        
        <div className="card w-68 h-60 bg-black text-white border border-white/10 shadow-xl rounded-2xl overflow-hidden bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
          <div className="card-body p-6 flex flex-col justify-between h-full">
            
            <div className="flex justify-between items-start gap-2">
              <div className="max-w-[70%]">
                <h2 className="font-bold text-2xl tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300 truncate">
                  {user?.name || "Anonymous"}
                </h2>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/10 text-base font-medium text-gray-300 border border-white/10 max-w-full truncate">
                  {user?.college || "No College Listed"}
                </span>
              </div>

              <div className="shrink-0">
                {user?.profile_img ? (
                  <img
                    src={user.profile_img}
                    alt={user?.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-lg transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-bold text-xl text-black">
                    {user?.name?.charAt(0) || "?"}
                  </div>
                )}
              </div>
            </div>

            <p className="mt-3 text-gray-300 text-base leading-6 line-clamp-2 min-h-12">
              {user?.bio || "No bio added yet."}
            </p>

            <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-base">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Profile
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
    </div>
  );
};

export default PeopleCard;
