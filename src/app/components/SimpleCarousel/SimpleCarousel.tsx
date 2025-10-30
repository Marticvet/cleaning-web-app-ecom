"use client";

import { useRef, useEffect } from "react";

export default function SimpleCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const imgs = [
    "/images/cleaning.svg",
    "/images/Furniture store-bro.svg",
    "/images/House restyling-cuate.svg",
  ];

  const scroll = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const amount = el.clientWidth * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  // ✅ Auto slide every 5 seconds
  useEffect(() => {
    const id = setInterval(() => scroll(1), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="carousel">
      <button className="nav left" aria-label="Previous" onClick={() => scroll(-1)}>
        ‹
      </button>

      <div className="track" ref={ref}>
        {imgs.map((src, i) => (
          <img key={i} src={src} alt="" className="slide" />
        ))}
      </div>

      <button className="nav right" aria-label="Next" onClick={() => scroll(1)}>
        ›
      </button>

      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          height: clamp(320px, 60vh, 720px);
          overflow: hidden;
          border-radius: 16px;
        }
        .track {
          display: flex;
          height: 100%;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .track::-webkit-scrollbar {
          display: none;
        }
        .slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          object-fit: contain;
          scroll-snap-align: center;
          background: white;
        }
        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.45);
          color: #fff;
          font-size: 28px;
          cursor: pointer;
          display: grid;
          place-items: center;
          z-index: 2;
        }
        .nav:hover { background: rgba(0,0,0,0.6); }
        .left { left: 12px; }
        .right { right: 12px; }
      `}</style>
    </div>
  );
}
