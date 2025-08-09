// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light py-5 border-top">
      <div className="container-fluid">
        <div className="row gy-4">
          {/* Brand and About */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="Event Manager Logo"
                className="me-2"
              />
              <span className="h5 mb-0 fw-bold">Event Manager</span>
            </div>
            <p className="mb-1">
              Plan, organize, and manage your events effortlessly — from small
              gatherings to large conferences.
            </p>
            <small className="text-muted d-block mb-2">
              2093 Philadelphia Pike #3511 Claymont, DE 19703
            </small>
            <div className="d-flex gap-3">
              <a href="#" className="text-danger">
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/chiragnarkar/"
                className="text-danger"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="text-uppercase text-secondary fw-bold mb-3">
              Quick Links
            </h6>
            <ul className="list-unstyled small">
              {[
                { name: "Browse Events", href: "/events" },
                { name: "My Events", href: "/my-events" },
                { name: "Create Event", href: "/create-event" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-decoration-none text-muted d-block mb-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-4">
            <h6 className="text-uppercase text-secondary fw-bold mb-3">
              Support
            </h6>
            <ul className="list-unstyled small">
              {[
                { name: "Help Center", href: "/help" },
                { name: "FAQs", href: "/faq" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-decoration-none text-muted d-block mb-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 small text-muted">
          © {new Date().getFullYear()} Event Manager. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
