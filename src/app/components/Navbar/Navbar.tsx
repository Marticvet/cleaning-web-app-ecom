// import "./navbar.module.css";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbarWrapper}>
            <div>Logo</div>
            <div className={styles.navButtonsWrapper}>
                <Link className={styles.navButton} href={"/"}>Home</Link>
                <Link className={styles.navButton} href={"/ueber-uns"}>Über uns</Link>
                <Link className={styles.navButton} href={"/leistungen"}>Leistungen</Link>
                <Link className={styles.navButton} href={"/kontakt"}>Kontakt</Link>
            </div>
        </div>
    );
}
