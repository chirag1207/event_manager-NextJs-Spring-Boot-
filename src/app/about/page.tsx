'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-[#fff8f3] text-gray-900">

      {/* Hero Section */}
      <section className="text-center pt-32 pb-16 px-4">
        {/* ↑ Added pt-32 to offset fixed header height */}
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Building <span className="bg-orange-200 px-2 text-orange-700">Culture</span> That Lasts
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">
          We help companies connect, inspire, and grow through unforgettable retreats and team-building experiences.
        </p>
      </section>

      {/* Story Section */}
      <section className="px-6 md:px-32 py-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-orange-700">Our Story</h2>
        <p className="text-gray-700 leading-7 mb-4">
          Founded in 2021, we saw how remote work created distance between people. Our mission was simple:
          bring teams together in ways that strengthen bonds, foster creativity, and celebrate success.
        </p>
        <p className="text-gray-700 leading-7 mb-4">
          In the early days, we started with small weekend retreats for local companies. The energy, laughter, and
          genuine connections we saw inspired us to dream bigger. Soon, we expanded internationally, curating
          retreats across stunning destinations — from beachside resorts to serene mountain lodges.
        </p>
        <p className="text-gray-700 leading-7">
          Today, we’ve helped hundreds of organizations transform their culture. Whether it’s fostering innovation,
          celebrating milestones, or simply bringing people closer, we believe that a connected team is a stronger,
          happier, and more productive one.
        </p>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-32 text-center grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { num: "500+", label: "Successful Retreats" },
          { num: "50+", label: "Countries Served" },
          { num: "95%", label: "Plan to Return" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg py-8 px-6">
            <h2 className="text-4xl font-bold text-orange-600">{stat.num}</h2>
            <p className="text-lg font-medium mt-2">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-32 py-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-700">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {[
            { img: "/images/founder1.jpg", name: "Thomas Mazimann", role: "CEO" },
            { img: "/images/founder2.jpg", name: "Vincent Albouy", role: "CTO" }
          ].map((member, idx) => (
            <div key={idx} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={500}
                height={300}
                className="rounded-xl shadow-lg object-cover"
              />
              <p className="mt-2 font-semibold">
                {member.name} – <span className="text-orange-600">{member.role}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
