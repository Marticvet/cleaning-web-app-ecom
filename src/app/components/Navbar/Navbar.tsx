"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const headerRef = useRef<HTMLElement | null>(null);
    const toggle = () => setOpen((v) => !v);
    const close = () => setOpen(false);

    // Close when screen expands to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 993) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Close on outside click (only when menu is open)
    useEffect(() => {
        if (!open) return;

        const onClick = (e: MouseEvent) => {
            const root = headerRef.current;
            if (!root) return;
            // If click is outside the header (which contains button + menu), close it
            if (!root.contains(e.target as Node)) setOpen(false);
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("click", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("click", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <header className={styles.navbarWrapper} ref={headerRef}>
            <div className={styles.brand}>
                <Link href="/">
                <Image src={"/images/cleaning-tools.png"} alt="This is company's logo" width={32} height={32}/>
                </Link>
            </div>

            {/* Desktop links */}
            <nav className={styles.navButtonsWrapper} aria-label="Main">
                <Link className={styles.navButton} href="/">
                    Home
                </Link>
                <Link className={styles.navButton} href="/ueber-uns">
                    Über uns
                </Link>
                <Link className={styles.navButton} href="/leistungen">
                    Leistungen
                </Link>
                <Link className={styles.navButton} href="/kontakt">
                    Kontakt
                </Link>
            </nav>

            {/* Hamburger (visible < 993px via CSS) */}
            <button
                className={styles.hamburger}
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={(e) => {
                    e.stopPropagation(); // prevent outside-click handler from firing
                    toggle();
                }}
            >
                <svg
                    className={styles.hamburgerIcon}
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    aria-hidden="true"
                >
                    <path
                        d="M3 6h18M3 12h18M3 18h18"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            {/* Mobile menu */}
            <nav
                id="mobile-menu"
                className={`${styles.mobileMenu} ${open ? styles.open : ""}`}
                aria-label="Mobile"
                onClick={(e) => e.stopPropagation()} // clicks inside menu don't close it
            >
                <Link className={styles.mobileLink} href="/" onClick={close}>
                    Home
                </Link>
                <Link
                    className={styles.mobileLink}
                    href="/ueber-uns"
                    onClick={close}
                >
                    Über uns
                </Link>
                <Link
                    className={styles.mobileLink}
                    href="/leistungen"
                    onClick={close}
                >
                    Leistungen
                </Link>
                <Link
                    className={styles.mobileLink}
                    href="/kontakt"
                    onClick={close}
                >
                    Kontakt
                </Link>
            </nav>

            {/* Backdrop (click to close) */}
            {open && (
                <div
                    className={styles.scrim}
                    onClick={close}
                    aria-hidden="true"
                />
            )}
        </header>
    );
}
