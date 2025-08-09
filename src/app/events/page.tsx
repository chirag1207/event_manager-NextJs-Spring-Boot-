'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface EventSchedule {
  id: number;
  startTime: string;
  endTime: string;
}

interface Event {
  eventId: number;
  name: string;
  details: string;
  schedules: EventSchedule[];
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8090/api/v1/events')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Upcoming Events</h1>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row">
          {events.map(event => (
            <div className="col-md-6 col-lg-4 mb-4" key={event.eventId}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.name}</h5>
                  <p className="card-text">{event.details}</p>

                  {event.schedules.length > 0 && (
                    <ul className="list-unstyled mt-3">
                      {event.schedules.map((schedule, idx) => (
                        <li key={idx}>
                          <strong>Start:</strong> {new Date(schedule.startTime).toLocaleString()}<br />
                          <strong>End:</strong> {new Date(schedule.endTime).toLocaleString()}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
