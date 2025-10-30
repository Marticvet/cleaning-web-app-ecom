"use client";

import { useRef, useEffect } from "react";
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
        const amount = el.clientWidth * dir;
        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    // Auto slide every 5 seconds
    useEffect(() => {
        const id = setInterval(() => scroll(1), 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className={styles.carousel}>
            <button
             className={`${styles.nav} ${styles.left}`}
                aria-label="Previous"
                onClick={() => scroll(-1)}
            >
                ‹
            </button>

            <div className={styles.track} ref={ref}>
                {imgs.map((src, i) => (
                    <img key={i} src={src} alt="" className={styles.slide} />
                ))}
            </div>

            <button
                className={`${styles.nav} ${styles.right}`}
                aria-label="Next"
                onClick={() => scroll(1)}
            >
                ›
            </button>
        </div>
    );
}
