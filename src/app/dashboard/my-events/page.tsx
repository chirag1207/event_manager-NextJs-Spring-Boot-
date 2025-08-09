"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AllEventsPage() {
  const [events, setEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    // Fetch all events
    axios.get("http://localhost:8090/api/v1/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Failed to load events:", err));

    // Fetch user's registered events
    axios.get(`http://localhost:8090/api/v1/events/registered/${userId}`)
      .then((res) => setMyEvents(res.data))
      .catch((err) => console.error("Failed to fetch user events", err));

    // Load stored user details for pre-fill
    setFormData({
      fullName: localStorage.getItem("fullName") || "",
      email: localStorage.getItem("email") || "",
      phone: localStorage.getItem("phone") || "",
    });
  }, []);

  const isRegistered = (eventId: number) =>
    myEvents.some((e: any) => e.id === eventId);

  const handleRegisterClick = (event: any) => {
    setSelectedEvent(event);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    try {
      await axios.post(`http://localhost:8090/api/v1/events/register`, {
        userId,
        eventId: selectedEvent.id,
        ...formData,
      });
      alert("Registered successfully!");
      setSelectedEvent(null);
      // refresh registered events
      const res = await axios.get(`http://localhost:8090/api/v1/events/registered/${userId}`);
      setMyEvents(res.data);
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div>
      <h2>All Events</h2>
      
      <h4 className="mt-4">Registered Events</h4>
      <ul className="list-group mt-2">
        {myEvents.map((event: any) => (
          <li key={event.id} className="list-group-item">
            <h5>{event.name}</h5>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>

      <h4 className="mt-4">Available to Register</h4>
      <ul className="list-group mt-2">
        {events
          .filter((event: any) => !isRegistered(event.id))
          .map((event: any) => (
            <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{event.name}</h5>
                <p>{event.description}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => handleRegisterClick(event)}
              >
                Register
              </button>
            </li>
          ))}
      </ul>

      {/* Registration Modal */}
      {selectedEvent && (
        <div className="modal show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleFormSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Register for {selectedEvent.name}</h5>
                  <button type="button" className="btn-close" onClick={() => setSelectedEvent(null)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setSelectedEvent(null)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Submit Registration</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
