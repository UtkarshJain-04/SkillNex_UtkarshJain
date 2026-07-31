import { Link } from 'react-router-dom'


const Start = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ecfeff,transparent_35%),radial-gradient(circle_at_bottom_right,#dcfce7,transparent_35%)]" />

  <div className="relative max-w-7xl mx-auto px-6 py-24">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div>

        <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm">
          One Platform for Student Growth
        </span>

        <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-[1.05] text-gray-900">

          Don't just

          <br />

          attend events.

          <br />

          <span className="text-primary">
            Build your future.
          </span>

        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">

          Meet talented students, discover hackathons,
          land internships, showcase projects and
          grow your network—without switching between
          five different platforms.

        </p>

        <div className="mt-10 flex gap-5">

          <Link
            to="/signup"
            className="btn btn-primary btn-lg rounded-2xl px-8"
          >
            Create Free Account
          </Link>

          <Link
            to="/login"
            className="btn btn-outline btn-lg rounded-2xl">
            Login
          </Link>

        </div>
      </div>

      <div className="relative h-140">

        <div className="absolute top-4 left-10 bg-white rounded-3xl shadow-2xl border p-5 w-72 rotate-[-8deg]">

          <div className="badge badge-success mb-3">
            LIVE
          </div>
          <h3 className="font-bold text-xl">
            Smart India Hackathon
          </h3>
          <p className="text-gray-500 mt-2">
            1,200 students already registered
          </p>

        </div>

        <div className="absolute right-0 top-36 bg-white rounded-3xl shadow-2xl border p-5 w-64 rotate-6">

          <div className="flex items-center gap-3">

            <div className="avatar placeholder">
              <div className="bg-primary text-white text-xl rounded-full w-12 text-center">
                AJ
              </div>
            </div>

            <div>

              <h4 className="font-semibold">
                Aarjav Jain
              </h4>

              <p className="text-sm text-gray-500">
                MERN Developer
              </p>

            </div>

          </div>

          <button className="btn btn-primary btn-sm w-full mt-4">
            Connected ✓
          </button>

        </div>
        <div className="absolute bottom-12 left-20 bg-white rounded-3xl shadow-2xl border p-5 w-80 rotate-[-4deg]">
          <div className="flex justify-between">
            <h3 className="font-bold">
              SkillNex
            </h3>
            <span className="badge badge-outline">
              MERN
            </span>
          </div>
          <p className="mt-3 text-gray-500">

            AI powered networking platform
            for students.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>
  )
}

export default Start
