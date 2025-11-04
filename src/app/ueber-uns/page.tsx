import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function UeberUnsPage() {
    return (
        <div className={styles.ueberUnsWrapper}>
            <h1>Über uns</h1>

            <div className={styles.cleaningServicesImageContainer}>
                <Image
                    src="/images/cleaning service-cuate.svg"
                    alt="Cleaning Services Image"
                    fill // <-- fills the 40vh container
                    priority
                    sizes="100vw"
                />

                <h2>
                    Transform your house into your dream home with our expert
                    services.
                </h2>
            </div>

            <div className={styles.ourStoryContainer}>
                <div className={styles.leftInnerContainer}>
                    <div className={styles.firstLeftInnerContainer}>
                        <Image
                            src="/images/cleaning service-cuate.svg"
                            alt="Cleaning Services Image"
                            height={250}
                            width={250}
                        />
                    </div>
                    <div className={styles.secondLeftInnerContainer}>
                        <Image
                            src="/images/cleaning service-cuate.svg"
                            alt="Cleaning Services Image"
                            height={250}
                            width={250}
                        />
                    </div>
                </div>

                <div className={styles.rightInnerContiner}>
                    <h6>OUR STORY</h6>
                    <h2>
                        Erleben Sie die Glückseligkeit eines makellosen
                        Zuhauses: Entdecken Sie die Magie der Tiefenreinigung
                    </h2>
                    <p>
                        Bei Deep Cleaning engagieren wir uns mit Leidenschaft
                        für außergewöhnliche Reinigungsdienste in Frankfurt und
                        sorgen dafür, dass Ihre Räume mit größter Sorgfalt und
                        Aufmerksamkeit behandelt werden. Ob Ihr geliebtes
                        Zuhause, ein einladendes Hotel, glänzende Glasflächen
                        oder öffentliche Straßen in Offenbach am Main – wir
                        gehen jede Aufgabe mit Präzision, Professionalität und
                        Hingabe an.
                    </p>

                    <Link href={"/kontakt"}>CONTACT NOW</Link>
                </div>
            </div>
        </div>
    );
}
