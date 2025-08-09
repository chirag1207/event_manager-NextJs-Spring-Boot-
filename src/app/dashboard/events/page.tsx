// /app/dashboard/events/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AllEventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/api/v1/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Failed to load events:", err));
  }, []);

  return (
    <div>
      <h2>All Events</h2>
      <ul className="list-group mt-3">
        {events.map((event: any) => (
          <li key={event.id} className="list-group-item">
            <h5>{event.name}</h5>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
