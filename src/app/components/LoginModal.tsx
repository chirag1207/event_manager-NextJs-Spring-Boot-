"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Modal } from "bootstrap"; // ⬅️ Add this import

import { useRouter } from "next/navigation";

export default function LoginModal() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  try {
    const response = await axios.post(
      "http://localhost:8090/api/v1/user/login",
      formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const { userId, token } = response.data;

    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);

    setSuccess("Login successful!");

    // ✅ Close modal programmatically
    const modalElement = document.getElementById("loginModal");
    if (modalElement) {
      const modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
      modalInstance.hide();
    }

    // Redirect to dashboard
    router.push("/dashboard");

  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      if (err.response?.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  }
};

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex={-1}
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Login to Your Account
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
            <div className="text-center mt-3">
              <p className="mb-0">
                Not registered?{" "}
                <Link href="/signup" className="text-decoration-none">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
