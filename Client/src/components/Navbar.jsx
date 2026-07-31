import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore.js";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <Link
          to="/home"
          className="btn btn-ghost text-2xl font-semibold normal-case"
        >
          SkillNex
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-lg font-medium">
          <li>
            <Link to="/eventfeed">Events</Link>
          </li>
          <li>
            <Link to="/connection-feed">People</Link>
          </li>
          <li>
            <Link to="/project-feed">Projects</Link>
          </li>
          <li>
            <Link to="/job-feed">Jobs</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-14 rounded-full overflow-hidden border-2 border-slate-700 shadow-md hover:border-emerald-500 transition-all duration-300">
              <img
                src={
                  user?.profile_img ||
                  "https://api.dicebear.com/9.x/lorelei/svg?seed=default"
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-base dropdown-content mt-3 z-100 p-2 shadow-xl bg-base-100 rounded-box w-56"
          >
            <li className="menu-title text-lg">
              <span>Hi, {user?.name || user?.userName || "User"} !</span>
            </li>
            <li>
              <Link to="/my-profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-icon lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>{" "}
                Profile
              </Link>
            </li>
            <li>
              <Link to="/myevents">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar-check-icon lucide-calendar-check"
                >
                  <path d="M8 2v3" />
                  <path d="M16 2v3" />
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="m9 15 2 2 4-4" />
                </svg>{" "}
                My Events
              </Link>
              <Link to="/myevents">My Events</Link>
            </li>
            <li>
              <Link to="/accepted-connections">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users-icon lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <circle cx="9" cy="7" r="4" />
                </svg>{" "}
                My Connections
              </Link>
            </li>
            <li>
              <Link to="/pending-requests">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-round-arrow-left-icon lucide-user-round-arrow-left"
                >
                  <path d="m19 16-3 3" />
                  <path d="M2 21a8 8 0 0 1 12.664-6.5" />
                  <path d="M22 19h-6l3 3" />
                  <circle cx="10" cy="8" r="5" />
                </svg>
                Pending Requests
                <span className="badge badge-primary">New</span>
              </Link>
            </li>
            <div className="divider my-1"></div>
            <li>
              <button className="text-error text-base" onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-out-icon lucide-log-out"
                >
                  <path d="m16 17 5-5-5-5" />
                  <path d="M21 12H9" />
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
