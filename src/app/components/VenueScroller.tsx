// File: app/components/EventScroller.tsx
"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function EventScroller() {
  useEffect(() => {
    const scroll = document.querySelector(".event-scroll") as HTMLElement;
    if (scroll) {
      scroll.innerHTML += scroll.innerHTML;
    }
  }, []);

  const events = [
    {
      img: "/events/devfest.jpg",
      title: "DevFest 2025",
      location: "San Francisco, CA",
      date: "Sep 15–17, 2025",
      type: "Developer Conference",
      price: 199,
    },
    {
      img: "/events/ai_summit.jpg",
      title: "AI Innovation Summit",
      location: "Austin, TX",
      date: "Oct 8–10, 2025",
      type: "Tech Conference",
      price: 249,
    },
    {
      img: "/events/startupbootcamp.jpg",
      title: "Startup Bootcamp",
      location: "New York, NY",
      date: "Nov 1–3, 2025",
      type: "Entrepreneur Workshop",
      price: 149,
    },
    {
      img: "/events/design_thinking.jpg",
      title: "Design Thinking Workshop",
      location: "Chicago, IL",
      date: "Sep 28–29, 2025",
      type: "UX/UI Workshop",
      price: 129,
    },
  ];

  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container mb-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h2 className="fw-bold display-6">
            Discover <span className="bg-info px-2 text-white">upcoming events</span>
          </h2>
          <a className="btn btn-primary mt-3 mt-md-0" href="#">View All Events</a>
        </div>
        <p className="text-muted mt-2">
          Stay ahead with the most anticipated tech conferences, workshops, and summits happening near you.
        </p>
      </div>
      <div className="event-scroll d-flex px-3" style={{ animation: "scroll 60s linear infinite", whiteSpace: "nowrap" }}>
        {events.map((event, idx) => (
          <div className="card mx-3 shadow-sm" style={{ width: "300px", minWidth: "300px", borderRadius: "16px" }} key={idx}>
            <Image src={event.img} alt={event.title} width={300} height={180} className="card-img-top rounded-top" />
            <div className="card-body">
              <h5 className="card-title mb-1">{event.title}</h5>
              <p className="text-muted small mb-1"><i className="bi bi-geo-alt"></i> {event.location}</p>
              <p className="text-muted small mb-1"><i className="bi bi-calendar-event"></i> {event.date}</p>
              <p className="text-muted small mb-1"><i className="bi bi-people-fill"></i> {event.type}</p>
              <h6 className="fw-bold mt-2">${event.price} <span className="text-muted fw-normal fs-6">/ticket</span></h6>
              <a href="#" className="text-primary small d-block mt-2">Register Now <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
