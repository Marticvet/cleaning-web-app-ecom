import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.shell} role="contentinfo">
      <div className={styles.panel}>
        <div className={styles.grid}>
          {/* Left: Contact */}
          <section className={styles.block} aria-labelledby="contact-title">
            <h2 id="contact-title" className={styles.h2}>Contact us</h2>
            <address className={styles.address}>
              <p><strong>Phone:</strong> <a href="tel:+4916097044182">+49-16097044182</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@deepcleaninghub.com">info@deepcleaninghub.com</a></p>
              <p><strong>Email:</strong> <a href="mailto:ana@deepcleaninghub.com">ana@deepcleaninghub.com</a></p>
              <p><strong>Email:</strong> <a href="mailto:office@deepcleaninghub.com">office@deepcleaninghub.com</a></p>
              <p><strong>Address:</strong> Alice Platz 7, Offenbach am Main, 63065</p>
            </address>
          </section>

          {/* Middle: Logo + blurb */}
          <section className={`${styles.block} ${styles.center}`} aria-labelledby="about-title">
            <div className={styles.logoWrap} aria-hidden="true">
              {/* replace /logo.svg with your real logo */}
              <Image src={"/images/Recording a movie-cuate.svg"} alt="" width={120} height={120} className={styles.logo}/>
            </div>
            <p id="about-title" className={styles.blurb}>
              At Deep Cleaning, we offer a comprehensive range of cleaning services
              tailored to the individual requirements of your premises.
            </p>
          </section>

          {/* Right: Socials */}
          <section className={`${styles.block} ${styles.right}`} aria-labelledby="social-title">
            <h2 id="social-title" className={styles.h2}>Get in touch</h2>
            <nav className={styles.socials} aria-label="Social media">
              <Link aria-label="Facebook" href="https://facebook.com" target="_blank">
                <span className={styles.iconCircle}>{facebook}</span>
              </Link>
              <Link aria-label="WhatsApp" href="https://wa.me/4916097044182" target="_blank">
                <span className={styles.iconCircle}>{whatsapp}</span>
              </Link>
              <Link aria-label="Instagram" href="https://instagram.com" target="_blank">
                <span className={styles.iconCircle}>{instagram}</span>
              </Link>
            </nav>
          </section>
        </div>

        <hr className={styles.hr} />

        <div className={styles.copy}>
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>Deep Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ——— inline SVGs (keep them here for zero deps) ——— */
const facebook = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.22.2 2.22.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22c4.78-.77 8.44-4.93 8.44-9.94z"/>
  </svg>
);
const whatsapp = (
  <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M19.1 17.6c-.3-.2-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1-.2.1-.3.1-.6 0-1.7-.8-2.8-1.5-3.9-3.5-.3-.5.3-.5.7-1.5.1-.2 0-.4 0-.6 0-.1-.6-1.5-.8-2.1-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.6.1-.9.4-.9.9-1.4 2.1-1.4 3.3 0 1.9 1.4 3.8 1.6 4 .2.3 2.8 4.3 6.9 6 .9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.1-.9 2.4-1.8.3-1 .3-1.8.2-2-.1-.2-.3-.3-.6-.5zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.4 1.7 6.2L3 29l6-1.6c1.7 1 3.7 1.6 5.9 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3z"/>
  </svg>
);
const instagram = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.8-.9a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z"/>
  </svg>
);
