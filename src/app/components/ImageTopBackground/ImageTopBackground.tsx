import styles from "./ImageTopBackground.module.css";
import Image from "next/image";

export default function ImageTopBackground({ srcPath, altText, headerText }: {srcPath: string; altText: string; headerText: string}) {
    return (
        <div className={styles.cleaningServicesImageContainer}>
            {/* <h1>Über uns</h1> */}

            <Image
                src={srcPath}
                alt={altText}
                fill // <-- fills the 40vh container
                priority
                sizes="100vw"
            />

            <h2>{headerText}</h2>
        </div>
    );
}
