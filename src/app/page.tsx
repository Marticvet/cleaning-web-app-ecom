import SimpleCarousel from "./components/SimpleCarousel/SimpleCarousel";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

type Service = {
    imgSrc: string;
    title: string;
};
const services: Service[] = [
    {
        imgSrc: "/images/beach house-cuate.svg",
        title: "Office Assembly",
    },
    {
        imgSrc: "/images/cleaning service-pana.svg",
        title: "Cleaning",
    },
    {
        imgSrc: "/images/Furniture store-bro.svg",
        title: "Furniture Assembly",
    },
    {
        imgSrc: "/images/House restyling-cuate.svg",
        title: "Furniture Disassembly",
    },
    {
        imgSrc: "/images/Free shipping-amico.svg",
        title: "Bedroom Moving",
    },
    {
        imgSrc: "/images/Logistics-rafiki.svg",
        title: "Office Moving",
    },
    {
        imgSrc: "/images/Living room-pana.svg",
        title: "Dining Room Moving",
    },
    {
        imgSrc: "/images/Moving-cuate.svg",
        title: "Living Room Moving",
    },
];

export default function Home() {
    return (
        <div className={styles.homeWrapper}>
            <SimpleCarousel />
            <div className={styles.servicesWrapper}>
                {services.map((service) => {
                    return (
                        <div
                            key={service.title}
                            className={styles.serviceCardWrapper}
                        >
                            <Link href={"/kontakt"}>
                                <div className={styles.media}>
                                    <Image
                                        src={service.imgSrc}
                                        width={300}
                                        height={300}
                                        alt={service.title}
                                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 280px"
                                    />
                                </div>
                            </Link>
                            <h2>{service.title}</h2>
                            <Link href={""}>View Service</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
