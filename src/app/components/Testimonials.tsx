"use client";
import { useEffect } from "react";
import 'bootstrap/js/dist/carousel';

export default function Testimonials() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[
              "Our team loved the retreat! Everything was seamless.",
              "Booking with TeamOut made planning so much easier.",
              "Highly recommend for any remote team getaway."
            ].map((quote, idx) => (
              <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                <div className="d-flex justify-content-center">
                  <div className="col-md-8">
                    <div className="p-4 bg-white shadow rounded text-center">
                      <p className="lead">“{quote}”</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}