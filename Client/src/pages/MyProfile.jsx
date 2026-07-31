import { useEffect, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { API_URL } from '../config'

const MyProfile = () => {
  const [toast, setToast] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { user, token, refresh } = useAuthStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    bio: "",
    college: "",
    profile_img: "",
  });

  useEffect(() => {
    console.log(user);
    if (!user) return;
    setFormData({
      name: user.userName || "",
      email: user.userEmail || "",
      gender: user.userGender || "",
      bio: user.userBio || "",
      college: user.userCollege || "",
      profile_img: user.profile_img || "",
    });
  }, [user]);
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${API_URL}/api/profile/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      refresh({
        userId: data.updatedProfile._id,
        userName: data.updatedProfile.name,
        userEmail: data.updatedProfile.email,
        userGender: data.updatedProfile.gender,
        userCollege: data.updatedProfile.college,
        userBio: data.updatedProfile.bio,
        userDateofbirth: data.updatedProfile.dateofbirth,
        profile_img: data.updatedProfile.profile_img,
      });
      setToast({
        message: "Profile updated successfully",
        type: "success",
      });

      setIsEditing(false);
    } catch (err) {
      setToast({
        message: err.message,
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-base-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="relative h-64 bg-linear-to-r from-slate-900 via-slate-700 to-slate-900">
          <div className="absolute left-12 bottom-6">
            <div className="avatar">
              <div className="w-40 rounded-full ring-4 ring-white shadow-2xl bg-white">
                <img
                  src={
                    formData.profile_img ||
                    "https://api.dicebear.com/9.x/lorelei/svg"
                  }
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 py-10">
          <div className="flex justify-between items-start">
            <div className="mt-2">
              <h1 className="text-4xl font-bold">{formData.name}</h1>

              <p className="text-lg text-gray-500 mt-2">{formData.email}</p>

              <p className="text-gray-400">{formData.college}</p>
            </div>

            {isEditing ? (
              <div className="flex gap-3">
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setFormData({
                      name: user.userName,
                      email: user.userEmail,
                      gender: user.userGender,
                      bio: user.userBio,
                      college: user.userCollege,
                      profile_img: user.profile_img,
                    });

                    setIsEditing(false);
                  }}
                >
                  Cancel
                </button>

                <button className="btn btn-primary" onClick={handleSave}>
                  Update
                </button>
              </div>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          <div className="divider my-8"></div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="label font-semibold">Name</label>
              <input
                name="name"
                className="input input-bordered w-full"
                value={formData.name}
                disabled={!isEditing}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label font-semibold">College</label>
              <input
                name="college"
                className="input input-bordered w-full"
                value={formData.college}
                disabled={!isEditing}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label font-semibold">Email</label>
              <input
                className="input input-bordered w-full"
                value={formData.email}
                disabled
              />
            </div>

            <div>
              <label className="label font-semibold">Gender</label>
              <input
                className="input input-bordered w-full"
                value={formData.gender}
                disabled
              />
            </div>

            <div>
              <label className="label font-semibold">Date of Birth</label>
              <input
                className="input input-bordered w-full"
                value={
                  user?.userDateofbirth
                    ? user.userDateofbirth.split("T")[0]
                    : ""
                }
                disabled
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="label font-semibold">Bio</label>

            <textarea
              name="bio"
              className="textarea textarea-bordered resize-none w-full h-10"
              value={formData.bio}
              disabled={!isEditing}
              onChange={handleChange}
            />
          </div>
        </div>

        {toast && (
          <div className="toast toast-top toast-end">
            <div
              className={`alert ${
                toast.type === "success" ? "alert-success" : "alert-error"
              }`}
            >
              <span>{toast.message}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
