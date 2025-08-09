import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "./components/BootstrapClient";
import "./globals.css";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";

export const metadata = {
  title: "Event manager",
  description: "Replicating eventmanager.com with Next.js + Bootstrap",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <BootstrapClient />
      <body className="d-flex flex-column min-vh-100">
        <Navbar />
        <LoginModal />
        <main style={{ paddingTop: "80px" }} className="flex-fill">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
