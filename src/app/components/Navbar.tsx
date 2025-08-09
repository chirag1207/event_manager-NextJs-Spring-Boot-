"use client";
import Image from 'next/image'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top px-3">
      {/* Logo aligned far left */}
      <Link href="/" className="navbar-brand d-flex align-items-center me-3" style={{ marginLeft: '10px' }}>
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Logo"
          className="me-2"
        />
        <span className="fw-bold">Event Manager</span>
      </Link>

      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links aligned far right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav" style={{ marginRight: '10px' }}>
            <li className="nav-item">
              <Link className="nav-link" href="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-primary ms-2"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary ms-2" href="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
