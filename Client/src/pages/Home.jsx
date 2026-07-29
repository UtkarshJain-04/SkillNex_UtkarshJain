import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-200 font-sans selection:bg-primary selection:text-white">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-slate-900/80 to-emerald-950/80"></div>

        {/* Background Blur */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-500/10 text-yellow-300 text-sm font-medium mb-8">
                Built for Students • Developers • Innovators
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white">
                Build.
                <br />
                Collaborate.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Grow Together.
                </span>
              </h1>

              <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
                SkillNex helps students discover technical events, showcase
                projects, build meaningful connections, and explore
                opportunities through one community-driven platform.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/connection-feed"
                  className="btn btn-primary btn-lg rounded-full px-8"
                >
                  Explore Community
                </Link>

                <Link
                  to="/create-event"
                  className="btn btn-outline btn-lg rounded-full text-white border-white/30 hover:bg-white hover:text-black"
                >
                  Create Event
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 blur-3xl opacity-25"></div>

                <div className="relative w-[500px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                    className="rounded-2xl"
                    alt=""
                  />

                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Upcoming Hackathons</span>

                      <span className="text-emerald-400 font-semibold">
                        32 Live
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-300">Active Connections</span>

                      <span className="text-blue-400 font-semibold">540+</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-300">AI Recommendations</span>

                      <span className="text-yellow-400 font-semibold">
                        Enabled
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase">
              Why SkillNex?
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-base-content">
              Everything You Need to
              <span className="text-primary"> Learn, Build & Network</span>
            </h2>

            <p className="mt-6 text-lg text-base-content/70 leading-8">
              From discovering opportunities to collaborating on projects,
              SkillNex simplifies the way students connect, participate, and
              grow together.
            </p>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl border border-base-300 bg-base-200 p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-5xl font-black text-primary">250+</h3>

              <p className="mt-3 font-semibold text-lg">Students</p>

              <p className="text-base-content/60 text-sm mt-2">
                Growing developer community
              </p>
            </div>

            <div className="rounded-3xl border border-base-300 bg-base-200 p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-5xl font-black text-secondary">80+</h3>

              <p className="mt-3 font-semibold text-lg">Events</p>

              <p className="text-base-content/60 text-sm mt-2">
                Workshops, hackathons & meetups
              </p>
            </div>

            <div className="rounded-3xl border border-base-300 bg-base-200 p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-5xl font-black text-accent">150+</h3>

              <p className="mt-3 font-semibold text-lg">Projects</p>

              <p className="text-base-content/60 text-sm mt-2">
                Built and shared by students
              </p>
            </div>

            <div className="rounded-3xl border border-base-300 bg-base-200 p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-5xl font-black text-info">600+</h3>

              <p className="mt-3 font-semibold text-lg">Connections</p>

              <p className="text-base-content/60 text-sm mt-2">
                Meaningful collaborations made
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-24 px-6 max-w-7xl mx-auto relative z-20 -mt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-base-content mb-4 tracking-tight">
            One Platform.{" "}
            <span className="text-primary">Infinite Possibilities.</span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            Stop juggling different apps for networking and event management.
            SkillNex brings your entire professional and creative life under one
            roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl border border-base-300/50 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group">
            <div className="card-body">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h2 className="card-title text-2xl font-bold">Create Events</h2>
              <p className="text-base-content/70 mt-2">
                Host hackathons, business pitches, or casual meetups. Set up
                your event page in minutes and start inviting your network.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-300/50 hover:-translate-y-2 hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 group">
            <div className="card-body">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                  />
                </svg>
              </div>
              <h2 className="card-title text-2xl font-bold">Event Feed</h2>
              <p className="text-base-content/70 mt-2">
                Scroll through a personalized feed of upcoming ideathons, tech
                conferences, and campus events happening near you.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-300/50 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group">
            <div className="card-body">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h2 className="card-title text-2xl font-bold">Connect</h2>
              <p className="text-base-content/70 mt-2">
                Send connection requests, chat with industry experts, or build
                your dream team for your next major project.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-300/50 hover:-translate-y-2 hover:shadow-2xl hover:border-info/50 transition-all duration-300 group">
            <div className="card-body">
              <div className="w-14 h-14 bg-info/10 rounded-2xl flex items-center justify-center mb-4 text-info group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="card-title text-2xl font-bold">People Feed</h2>
              <p className="text-base-content/70 mt-2">
                Stay updated with what your network is building. Share your
                latest GitHub commits, design mockups, or project launches.
              </p>
            </div>
          </div>

          {/* Feature 5: Find Jobs */}
          <div className="card bg-base-100 shadow-xl border border-base-300/50 hover:-translate-y-2 hover:shadow-2xl hover:border-warning/50 transition-all duration-300 group">
            <div className="card-body">
              <div className="w-14 h-14 bg-warning/10 rounded-2xl flex items-center justify-center mb-4 text-warning group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7h16M9 3h6a2 2 0 012 2v2H7V5a2 2 0 012-2zm-5 6h16v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9z"
                  />
                </svg>
              </div>

              <h2 className="card-title text-2xl font-bold">Find Jobs</h2>

              <p className="text-base-content/70 mt-2">
                Explore internships and full-time opportunities tailored to your
                skills, interests, and career goals—all in one streamlined feed.
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-primary/90 to-secondary/90 text-primary-content shadow-xl border border-transparent hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group">
            <div className="card-body">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <h2 className="card-title text-2xl font-bold text-white">
                All at One Place
              </h2>
              <p className="text-white/80 mt-2">
                No more context switching. Seamlessly navigate between
                discovering events, reading updates, and networking with peers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
