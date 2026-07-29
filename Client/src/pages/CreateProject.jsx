import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { Link } from "react-router-dom";

export default function CreateProject() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useAuthStore();
  const [toast, setToast] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    images: "",
    description: "",
    link: "",
    techstack: "",
    progress: "",
  });

  const handleReset = () => {
    setFormData({
      title: "",
      images: "",
      description: "",
      link: "",
      techstack: "",
      progress: "",
    });
  };

  useEffect(() => {
    if (toast) {
      const timerId = setTimeout(() => {
        setToast(null);
      }, 4000);
      return () => clearTimeout(timerId);
    }
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const data = {
      ...formData,
      techstack: formData.techstack.split(",").map((tech) => tech.trim()),
    };
    console.log("Data enetered:", data);
    try {
      const response = await fetch("http://localhost:5001/api/project/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Project data", data);
      if (!response.ok) {
        throw new Error("Failed to create project.");
      }

      setToast({
        message: "Project created successfully",
        type: "success",
      });
      setTimeout(() => {
        navigate("/project-feed");
      }, 1500);
    } catch (err) {
      setToast({
        message: err.message,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full p-3 border border-gray-200 rounded-md text-base text-gray-800 outline-none bg-white transition-colors duration-200 placeholder-gray-400 focus:border-black";
  const labelClass = "mb-2 text-sm text-gray-600";
  const formGroupClass = "flex flex-col mb-5";

  return (
    <>
      <button className="btn bg-red-400 text-white font-semibold text-lg rounded-xl m-4 transition-colors duration-200 hover:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed ">
        <Link to="/project-feed">🢀 Back</Link>
      </button>

      <div className="max-w-4/6 mx-auto my-12 p-8 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] font-sans box-border">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-8 mt-0">
          New Project
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className={formGroupClass}>
            <label htmlFor="title" className={labelClass}>
              Project Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Web Development Project"
              required
              className={inputClass}
            />
          </div>

          <div className={formGroupClass}>
            <label htmlFor="description" className={labelClass}>
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter project details.."
              required
              className={`${inputClass} resize-none`}
            ></textarea>
          </div>

          <div className={formGroupClass}>
            <label htmlFor="techstack" className={labelClass}>
              Techstack*
            </label>
            <textarea
              id="techstack"
              name="techstack"
              rows="4"
              value={formData.techstack}
              onChange={handleChange}
              placeholder="Enter Techstack"
              required
              className={`${inputClass} resize-none`}
            ></textarea>
          </div>

          <div className={formGroupClass}>
            <label htmlFor="link" className={labelClass}>
              Link *
            </label>
            <input
              type="url"
              id="link"
              name="link"
              pattern="https://.*"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://example.com"
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className={formGroupClass}>
            <label htmlFor="progress" className={labelClass}>
              Progess
            </label>
            <input
              type="number"
              id="progress"
              name="progress"
              value={formData.progress}
              onChange={handleChange}
              placeholder=""
              required
              min="0"
              max="100"
              className={inputClass}
            />
          </div>

          <div className={formGroupClass}>
            <label htmlFor="images" className={labelClass}>
              Image Link *
            </label>
            <input
              type="url"
              id="images"
              name="images"
              pattern="https://.*"
              value={formData.images}
              onChange={handleChange}
              placeholder="https://example.com"
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-100 p-4 mt-4 mr-5 bg-black text-white border-none rounded-md text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Upload Project"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-100 p-4 mt-4 bg-black text-white border-none rounded-md text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Reset Form
            </button>
          </div>
        </form>
        {toast && (
          <div className="toast toast-top">
            <div
              className={`alert ${toast.type === "success" ? "alert-success" : "alert-error"}`}
            >
              <span>{toast.message}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
