import Image from "next/image";

export default function Hero() {
  return (
    <section className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-3">
              <div className="me-2">
                <Image src="/users.png" alt="Users" width={60} height={30} />
              </div>
              <span className="text-muted">Over 100,000 participants with event manager</span>
            </div>
            <h1 className="display-4 fw-bold">
              <span className="bg-warning px-2">Choosing Events</span><br />
              <span className="text-dark">made simple</span>
            </h1>
            <p className="text-muted my-4">
              Planning your next big event? Let Event Manager handle everything from venue to vibe — seamlessly and stress-free
            </p>
           
            <div className="d-flex align-items-center">
              <span className="text-warning me-2">★★★★★</span>
              <span className="fw-bold text-dark">Rated 4.8</span>
              <span className="text-muted ms-1">by 3600 users</span>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/baH0sXK4Y6o"
                title="TeamOut Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
