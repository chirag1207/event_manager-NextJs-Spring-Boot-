// /app/dashboard/profile/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    full_name: "",
    dob: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios.get(`http://localhost:8090/api/v1/user/${userId}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.error("Failed to load profile", err));
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      await axios.put(`http://localhost:8090/api/v1/user/${userId}`, formData);
      alert("Profile updated successfully");
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update profile");
    }
  };

  return (
    <div>
      <h2>My Profile</h2>
      <form onSubmit={handleUpdate} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">DOB</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" required />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-control" required />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Pincode</label>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="form-control" required />
          </div>
        </div>
        <button type="submit" className="btn btn-success">Update Profile</button>
      </form>
    </div>
  );
}
