import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { Link } from 'react-router-dom'
import { API_URL } from '../config'

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timerId = setTimeout(() => {
        setToast(null);
      }, 4000);

      return () => clearTimeout(timerId);
    }
  }, [toast]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(" login data", data);
      if (!response.ok) {
        throw new Error(data.message || "login failed");
      }
      console.log("login.jsx", data.userData);
      login(data?.userData?.user, data?.userData?.token);
      setToast({ message: "Login successfully", type: "success" });
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (err) {
      setToast({ message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex">

  {/* Left Side */}
  <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">

    <div className="absolute top-20 left-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
    <div className="absolute bottom-16 right-16 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

    <div className="relative z-10 flex flex-col justify-center px-20">

      <h1 className="text-5xl font-black leading-tight">
        Skill<span className="text-emerald-400">Nex</span>
      </h1>

      <p className="mt-6 text-2xl font-semibold text-gray-100">
        Connect. Build. Grow.
      </p>

      <p className="mt-5 text-lg text-gray-300 leading-8 max-w-lg">
        Discover hackathons, connect with talented students,
        showcase projects and explore career opportunities—
        all from one platform.
      </p>

      <div className="mt-14 space-y-6">

        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center">
            🎯
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Personalized Opportunities
            </h3>
            <p className="text-gray-400">
              AI recommendations based on your profile.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center">
            🤝
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Build Your Network
            </h3>
            <p className="text-gray-400">
              Connect with peers and collaborators.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center">
            🚀
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Showcase Your Work
            </h3>
            <p className="text-gray-400">
              Share projects and discover new opportunities.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>

<div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-100">

  <div className="w-full max-w-md">

    <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold">
      Welcome Back
    </p>

    <h2 className="mt-2 text-4xl font-bold text-gray-900">
      Sign in to SkillNex
    </h2>

    <p className="mt-3 text-gray-500">
      Continue discovering events, projects, connections and opportunities.
    </p>

    <form
      onSubmit={handleSubmit}
      className="mt-10 bg-white rounded-3xl shadow-xl border border-gray-200 p-8"
    >

      <label className="label">
        <span className="label-text font-medium">Email</span>
      </label>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="input input-bordered w-full rounded-xl"
        placeholder="Enter your email"
      />

      <label className="label mt-5">
        <span className="label-text font-medium">Password</span>
      </label>

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="input input-bordered w-full rounded-xl"
        placeholder="Enter your password"
      />


      <button
        type="submit"
        className="btn btn-primary w-full mt-8 rounded-xl"
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="loading loading-spinner loading-sm"></span>
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </button>

      <div className="divider text-gray-400">OR</div>

      <p className="text-center text-gray-500">

        New to SkillNex?{" "}

        <Link
          to="/signup"
          className="font-semibold text-primary hover:underline"
        >
          Create an account
        </Link>

      </p>

    </form>

  </div>

</div>

{toast && (

            <div className="toast toast-end">
            <div className={`alert ${toast.type === 'success' ? 'alert-success': 'alert-error'}`}>
            <span>{toast.message}</span>
            </div>
            </div>
        )}
</div>
  );
};

export default Login;
