"use client";

import { useRef } from "react";
import styles from "./SimpleCarousel.module.css";

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
    el.scrollBy({ left: el.clientWidth * dir, behavior: "smooth" });
  };

  return (
    <div className={styles.carousel}>
      <button className={`${styles.nav} ${styles.left}`} onClick={() => scroll(-1)}>‹</button>

      <div className={styles.track} ref={ref}>
        {imgs.map((src, i) => (
          <img key={i} src={src} alt="" className={styles.slide} />
        ))}
      </div>

      <button className={`${styles.nav} ${styles.right}`} onClick={() => scroll(1)}>›</button>
    </div>
  );
}