import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { Link } from 'react-router-dom';
import { API_URL } from '../config'


export default function CreateEvent() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useAuthStore();
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    mode: "Online",
    eligibility: "",
    startDate: "",
    endDate: "",
    regDeadline: "",
    prize: 0,
    teamSize: 1,
    status: "Live",
    venue: "",
  });

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

if(formData.endDate < formData.startDate){
alert("Enter valid End date")
}
if(formData.regDeadline > formData.startDate || formData.regDeadline > formData.endDate ){
alert("Enter valid Registration deadline")
}
    
    setFormData((prev) => ({
      ...prev,
      [name]: name === "number" || name === "teamSize" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/event/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(" Event data", data);
      if (!response.ok) {
        throw new Error("Failed to create event.");
      }
      setToast({
        message: "Event created successfully",
        type: "success",
      });
      setTimeout(() => {
        navigate("/eventfeed");
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
  const labelClass = "mb-2 text-base text-gray-600";
  const formGroupClass = "flex flex-col mb-5";

  return (
    <div className="flex flex-col">
        <div className="flex justify-start mt-5 ml-5">
            <button className="btn bg-red-400 text-white font-semibold text-lg rounded-xl"><Link to="/eventfeed">🢀 Back</Link></button>
        </div>
        <div className="max-w-4/6 mx-auto my-8 p-8 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] font-sans box-border">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-8 mt-0">New Event</h2>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className={formGroupClass}>
          <label htmlFor="title" className={labelClass}>
            Event Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Annual Tech Fest"
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
            placeholder="Enter event details, rules, and schedule..."
            required
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>

        <div className="flex justify-between gap-2">
            <div className='mb-5 w-sm'>
          <label htmlFor="category" className={labelClass}>
            Category *
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g., Hackathon, Seminar, Workshop"
            required
            className={inputClass}
          />
        </div>

        <div className='mb-5 w-sm'>
          <label htmlFor="mode" className={labelClass}>
            Mode *
          </label>
          <select
            id="mode"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        </div>

        <div className={formGroupClass}>
          <label htmlFor="eligibility" className={labelClass}>
            Eligibility *
          </label>
          <input
            type="text"
            id="eligibility"
            name="eligibility"
            value={formData.eligibility}
            onChange={handleChange}
            placeholder="e.g., Undergraduate Students"
            required
            className={inputClass}
          />
        </div>

        <div className="flex justify-between">
            <div className='mb-5 w-sm'>
          <label htmlFor="startDate" className={labelClass}>
            Start Date *
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className='mb-5 w-sm'>
          <label htmlFor="endDate" className={labelClass}>
            End Date *
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        </div>

        <div className="flex justify-between">
            <div className='mb-5 w-sm'>
          <label htmlFor="regDeadline" className={labelClass}>
            Registration Deadline *
          </label>
          <input
            type="date"
            id="regDeadline"
            name="regDeadline"
            value={formData.regDeadline}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className='mb-5 w-sm'>
          <label htmlFor="prize" className={labelClass}>
            Prize Amount
          </label>
          <input
            type="number"
            id="prize"
            name="prize"
            min="0"
            value={formData.prize}
            onChange={handleChange}
            placeholder="0"
            className={`${inputClass}`}
          />
        </div>
        </div>

        <div className="flex justify-between">
            <div className='mb-5 w-sm'>
          <label htmlFor="teamSize" className={labelClass}>
            Team Size (1-4)
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className={inputClass}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        <div className='mb-5 w-sm'>
          <label htmlFor="status" className={labelClass}>
            Event Status *
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="Live">Live</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        </div>

        <div className={formGroupClass}>
          <label htmlFor="venue" className={labelClass}>
            Venue
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="e.g., Main Auditorium"
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-4 mt-4 bg-black text-white border-none rounded-md text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Adding..." : "Add Event"}
        </button>
      </form>
      {toast && (
      <div className="toast toast-top">
      <div className={`alert ${toast.type==='success'? 'alert-success':'alert-error'}`}>
        <span>{toast.message}</span>
      </div>
      </div>
      )}
    </div>
    </div>
  );
}
