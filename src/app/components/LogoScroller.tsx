"use client";

import Image from "next/image";

export default function LogoScroller() {
  const logos = [
    "/images/adobe.png",
    "/images/dunkin.png",
    "/images/fox.png",
    "/images/george.png",
    "/images/google.png",
    "/images/harvard.png",
    "/images/iphone.jpeg",
    "/images/microsoft.jpg",
    "/images/netflix.png",
    "/images/prime.png",
    "/images/samsung.png",
    "/images/Starbucks.png",
    "/images/target.jpeg",
    "/images/UMCP-color.png",
    "/images/walmart.png",
  ];

  const duplicated = [...logos, ...logos];

  return (
    <section className="bg-light py-4 overflow-hidden">
      <div className="container-fluid">
        <div className="logo-track">
          {duplicated.map((src, idx) => (
            <div className="mx-4" key={idx}>
              <Image
                src={src}
                alt={`Logo ${idx}`}
                width={100}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-track {
          display: flex;
          flex-wrap: nowrap;
          animation: scroll 30s linear infinite;
          min-width: 200%;
          align-items: center;
          white-space: nowrap;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
