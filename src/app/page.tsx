
// File: app/page.tsx
import Hero from "./components/Hero";
import LogoScroller from "./components/LogoScroller";
import VenueScroller from "./components/VenueScroller";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoScroller />
      <VenueScroller />
      
    </>
  );
}
