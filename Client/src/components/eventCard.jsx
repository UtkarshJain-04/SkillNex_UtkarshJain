const EventCard = ({ event }) => {
  return (
    <a href="" className="hover-3d my-10 mx-3 cursor-pointer block">
      <div className="card w-96 h-134 bg-[#000000] text-white rounded-2xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 hover:border-emerald-400/40 hover:shadow-emerald-500/10 bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">

        <div className="card-body p-8">

          <div className="flex justify-between items-start mb-3">

            <div>
              <h2 className="text-3xl font-bold leading-tight">
                {event?.title}
              </h2>

              <span className="inline-flex mt-3 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 text-sm font-medium">
                {event?.category}
              </span>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                event?.status === "Upcoming"
                  ? "bg-blue-500/15 text-blue-300 border-blue-500/20"
                  : event?.status === "Ongoing"
                  ? "bg-green-500/15 text-green-300 border-green-500/20"
                  : "bg-red-500/15 text-red-300 border-red-500/20"
              }`}
            >
              {event?.status}
            </span>
          </div>

          <p className="text-gray-400 text-[15px] leading-7 mb-2 line-clamp-3">
            {event?.description}
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">

            <div>
              <p className="text-gray-500 text-sm mb-1">Mode</p>
              <p className="font-medium text-base">{event?.mode}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-1">Prize Pool</p>
              <p className="font-medium text-base">
                ₹{event?.prize?.toString()}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-1">Start Date</p>
              <p className="text-base">
                {event?.startDate?.split("T")[0]}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-1">
                Registration Ends
              </p>
              <p className="text-base">
                {event?.regDeadline?.split("T")[0]}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-1">Eligibility</p>
              <p className="text-base wrap-break-word">
                {event?.eligibility}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-1">Team Size</p>
              <p className="text-base">
                {event?.teamSize === 1 ? "Individual": event?.teamSize}
              </p>
            </div>

            {event?.mode === "Offline" && (
              <div className="col-span-2">
                <p className="text-gray-500 text-sm mb-1">Venue</p>
                <p className="text-base wrap-break-word">
                  {(event?.venue) ? (event?.venue) : "Campus"}
                </p>
              </div>
            )}

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
  );
};

export default EventCard;