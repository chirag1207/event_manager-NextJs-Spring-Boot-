export default function FeatureCards() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5">Why Choose Us</h2>
      <div className="row g-4">
        {[
          { title: "Curated Experiences", desc: "Hand-picked team activities tailored for your company." },
          { title: "Easy Booking", desc: "Book events online in just a few clicks." },
          { title: "Nationwide Options", desc: "Activities in every major U.S. city." }
        ].map((card, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}