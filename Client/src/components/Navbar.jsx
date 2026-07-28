import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <a className="btn btn-ghost text-2xl font-semibold">SkillNex</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-2 text-xl">
      <li><Link to="/eventfeed">Events</Link></li>
      <li><a>Mentors</a></li>
      <li><Link to="/connection-feed">People</Link></li>
      <li><Link to="/project-feed">Projects</Link></li>
    </ul>
  </div>
  <div className="navbar-end mr-3">
    <input type="text" placeholder="Search" className="input w-15 md:w-auto mr-6 rounded-xl" />
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
  </div>
</div>
  )
}

export default Navbar