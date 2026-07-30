import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore.js";

const Navbar = () => {
   const navigate = useNavigate();
   const logout = useAuthStore((state) => state.logout);

   const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Logo */}
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
            <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-100 p-2 shadow-xl bg-base-100 rounded-box w-56"
          >
            <li className="menu-title">
              <span>My Account</span>
            </li>
            <li>
              <Link to="/myevents">My Events</Link>
            </li>
            <li>
              <Link to="/accepted-connections">My Connections</Link>
            </li>
            <li>
              <Link to="/pending-requests">
                Pending Requests
                <span className="badge badge-primary">New</span>
              </Link>
            </li>
            <div className="divider my-1"></div>
            <li>
              <button className="text-error" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
