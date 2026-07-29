// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [toast, setToast] = useState(null);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     dateofbirth: "",
//     gender: "",
//     bio: "",
//     college: "",
//   });

//   useEffect(() => {
//     if (toast) {
//       const timerId = setTimeout(() => {
//         setToast(null);
//       }, 4000);
//       return () => clearTimeout(timerId);
//     }
//   }, [toast]);

//   const HandleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:5001/api/auth/signup", {
//         method: "POST",
//         headers: { "CONTENT-TYPE": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Signup failed");
//       }
//       setToast({
//         message: "Signup successfully",
//         type: "success",
//       });
//       setTimeout(() => {
//         navigate("/login");
//       }, 1500);
//     } catch (err) {
//       setToast({
//         message: err.message,
//         type: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <form onSubmit={HandleSubmit}>
//       <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//         <legend className="fieldset-legend">Signup</legend>

//         <label className="label" htmlFor="name">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           className="input"
//           placeholder=" Enter your Name"
//           value={formData.name}
//           onChange={handleChange}
//           name="name"
//         />

//         <label className="label" htmlFor="email">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           className="input"
//           placeholder=" Enter your Email"
//           value={formData.email}
//           onChange={handleChange}
//           name="email"
//         />

//         <label className="label" htmlFor="passowrd">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="input"
//           placeholder=" Enter your Password"
//           value={formData.password}
//           onChange={handleChange}
//           name="password"
//         />

//         <label className="label" htmlFor="Birth">
//           Date of Birth
//         </label>
//         <input
//           type="date"
//           id="Birth"
//           className="input"
//           placeholder="Date of Birth"
//           value={formData.dateofbirth}
//           onChange={handleChange}
//           name="dateofbirth"
//         />

//         <div className="flex gap-2">
//           <label className="label" htmlFor="Gender">
//             Gender :
//           </label>
//           <input
//             type="radio"
//             name="gender"
//             value="Male"
//             checked={formData.gender === "Male"}
//             onChange={handleChange}
//           />
//           Male
//           <input
//             type="radio"
//             name="gender"
//             value="Female"
//             checked={formData.gender === "Female"}
//             onChange={handleChange}
//           />
//           Female
//           <input
//             type="radio"
//             name="gender"
//             value="Rather not to say"
//             checked={formData.gender === "Rather not to say"}
//             onChange={handleChange}
//           />
//           Rather not to say
//         </div>
//         <label className="label" htmlFor="Bio">
//           Bio
//         </label>
//         <textarea
//           id="Bio"
//           placeholder=" Bio"
//           className="input"
//           style={{
//             resize: "none",
//             overflowWrap: "break-all",
//             whiteSpace: "pre-wrap",
//             overflow: "hidden",
//           }}
//           value={formData.bio}
//           onChange={handleChange}
//           name="bio"
//         ></textarea>

//         <label className="label" htmlFor="College">
//           College
//         </label>
//         <input
//           type="text"
//           id="College"
//           className="input"
//           placeholder="College"
//           value={formData.college}
//           onChange={handleChange}
//           name="college"
//         />

//         <button className="btn btn-soft btn-primary" disabled={loading}>
//           {loading ? "plz wait" : "Signup"}
//         </button>
//       </fieldset>
//     </form>
//   );
// };

// export default Signup;

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateofbirth: "",
    gender: "",
    bio: "",
    college: "",
  });

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5001/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      setToast({
        message: "Signup successful",
        type: "success",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setToast({
        message: err.message,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5 py-12">

      {toast && (
        <div className="toast toast-top toast-end z-50">
          <div
            className={`alert ${
              toast.type === "success" ? "alert-success" : "alert-error"
            } shadow-lg`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}
      <div className="w-full max-w-2/4 bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Join SkillNex and start networking.
          </p>
        </div>
        <form onSubmit={HandleSubmit} className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full rounded-xl"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full rounded-xl"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full rounded-xl"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Date of Birth
              </span>
            </label>
            <input
              type="date"
              name="dateofbirth"
              className="input input-bordered w-full rounded-xl"
              value={formData.dateofbirth}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-medium">Gender</span>
            </label>
            <div className="flex gap-5 mt-2 text-gray-700 flex-wrap">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="radio radio-sm"
                />
                Male
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="radio radio-sm"
                />
                Female
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Rather not to say"
                  checked={formData.gender === "Rather not to say"}
                  onChange={handleChange}
                  className="radio radio-sm"
                />
                Prefer not to say
              </label>

            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Bio</span>
            </label>

            <textarea
              rows="3"
              name="bio"
              className="textarea textarea-bordered w-full rounded-xl resize-none"
              placeholder="Tell us about yourself..."
              value={formData.bio}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">College</span>
            </label>

            <input
              type="text"
              name="college"
              className="input input-bordered w-full rounded-xl"
              placeholder="College / University"
              value={formData.college}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-neutral w-full rounded-xl shadow-md mt-3"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Create Account"
            )}
          </button>

          <div className="text-center text-gray-600 text-sm pt-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-black hover:underline"
            >
              Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;
