"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Tips to Host a Perfect Event",
      image: "/blog1.jpg",
      description: "Learn how to plan, organize, and execute a flawless event with these simple tips.",
      fullContent: `Hosting a perfect event requires careful planning, attention to detail, and a touch of creativity.
      Here are 5 tips to help you:
      1. Define your event goals.
      2. Create a realistic budget.
      3. Choose the right venue.
      4. Plan engaging activities.
      5. Ensure smooth execution and follow-up.`,
    },
    {
      id: 2,
      title: "Choosing the Right Venue",
      image: "/blog2.jpg",
      description: "Venue selection is key to event success. Here's what you should consider.",
      fullContent: `When choosing a venue, consider factors such as:
      - Location and accessibility
      - Capacity and seating arrangements
      - Facilities and amenities
      - Cost and flexibility
      A well-chosen venue sets the tone for a memorable event.`,
    },
    {
      id: 3,
      title: "How to Attract More Attendees",
      image: "/blog3.jpg",
      description: "Strategies to market your event and boost your registrations effectively.",
      fullContent: `To attract more attendees:
      - Use targeted social media ads
      - Collaborate with influencers
      - Offer early-bird discounts
      - Leverage email marketing
      - Create engaging promotional content.`,
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  return (
    <div className="container my-5 pt-5">
      <h1 className="mb-4 fw-bold text-center">Our Latest Blogs</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text flex-grow-1">{blog.description}</p>
                <button
                  className="btn btn-primary mt-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#blogModal"
                  onClick={() => setSelectedBlog(blog)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="blogModal"
        tabIndex={-1}
        aria-labelledby="blogModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            {selectedBlog && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="blogModalLabel">
                    {selectedBlog.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="img-fluid rounded mb-3"
                  />
                  <p style={{ whiteSpace: "pre-line" }}>
                    {selectedBlog.fullContent}
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
