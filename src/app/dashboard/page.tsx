export default function DashboardHome() {
  const memberStats = {
    fullName: "Chirag Narkar",
    registeredEvents: 4,
    upcomingEvents: 2,
    pastEvents: 2,
    lastLogin: "August 6, 2025",
    memberSince: "January 15, 2024",
  };

  return (
    <div className="p-4" style={{ paddingTop: "100px" }}>
      <h2 className="mb-3">Welcome back, {memberStats.fullName} 👋</h2>
      <p>Use the sidebar to navigate through your events and personal profile.</p>

      <hr className="my-4" />

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Events Registered</h5>
              <p className="card-text display-6">{memberStats.registeredEvents}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Upcoming Events</h5>
              <p className="card-text display-6">{memberStats.upcomingEvents}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Past Events</h5>
              <p className="card-text display-6">{memberStats.pastEvents}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h5>Account Details</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Last Login: {memberStats.lastLogin}</li>
          <li className="list-group-item">Member Since: {memberStats.memberSince}</li>
        </ul>
      </div>
    </div>
  );
}
