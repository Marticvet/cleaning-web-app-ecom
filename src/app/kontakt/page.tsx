import Image from "next/image";
import ImageTopBackground from "../components/ImageTopBackground/ImageTopBackground";
import styles from "./page.module.css";

const src =
    "/images/whats-included-in-a-professional-house-cleaning-checklist-included-343704.jpg";
const alt = "Cleaning Services Image";
const headerText = "Book your deep cleaning service";

export default function KontaktPage() {
    return (
        <div className={styles.kontaktPageContainer}>
            <ImageTopBackground
                srcPath={src}
                altText={alt}
                headerText={headerText}
            />

            <div className={styles.kontaktFormContainer}>
                <div className={styles.leftKontaktFormContnaner}>
                    {/* Email 1 */}
                    <div className={styles.leftKontaktFormInnerContainer}>
                        <div className={styles.iconContainer}>
                            <Image
                                src="/images/email-file.png"
                                alt="This is email icon"
                                width={24}
                                height={24}
                            />
                        </div>
                        <h2>E-mail:</h2>
                        <h3>
                            <a
                                href="mailto:actualemail@gomc.com"
                                className={styles.contactLink}
                                aria-label="Send email to actualemail@gomc.com"
                            >
                                actualemail@gomc.com
                            </a>
                        </h3>
                    </div>

                    {/* Email 2 (kept as in your file) */}
                    <div className={styles.leftKontaktFormInnerContainer}>
                        <div className={styles.iconContainer}>
                            <Image
                                src="/images/email-file.png"
                                alt="This is email icon"
                                width={24}
                                height={24}
                            />
                        </div>
                        <h2>E-mail:</h2>
                        <h3>
                            <a
                                href="mailto:actualemail@gomc.com"
                                className={styles.contactLink}
                                aria-label="Send email to actualemail@gomc.com"
                            >
                                actualemail@gomc.com
                            </a>
                        </h3>
                    </div>

                    {/* Phone */}
                    <div className={styles.leftKontaktFormInnerContainer}>
                        <div className={styles.iconContainer}>
                            <Image
                                src="/images/contact.png"
                                alt="This is phone icon"
                                width={24}
                                height={24}
                            />
                        </div>
                        <h2>Phone:</h2>
                        <h3>
                            <a
                                href="tel:312312459981"
                                className={styles.contactLink}
                                aria-label="Call 312312459981"
                            >
                                312312459981
                            </a>
                        </h3>
                    </div>

                    {/* Location → opens maps */}
                    <div className={styles.leftKontaktFormInnerContainer}>
                        <div className={styles.iconContainer}>
                            <Image
                                src="/images/company.png"
                                alt="This is location icon"
                                width={24}
                                height={24}
                            />
                        </div>
                        <h2>Location:</h2>
                        <h3>
                            <a
                                href="https://maps.google.com/?q=Alicepl.%207,%2063065%20Offenbach%20am%20Main"
                                target="_blank"
                                rel="noopener"
                                className={styles.contactLink}
                                aria-label="Open location in Maps: Alicepl. 7, 63065 Offenbach am Main"
                            >
                                Alicepl. 7, 63065 Offenbach am Main
                            </a>
                        </h3>
                    </div>
                </div>

                <div className={styles.rightKontaktFormContnaner}>
                    <h2>Professional cleaning services</h2>

                    <p>
                        Are you looking for reliable cleaning services in
                        Offenbach am Main 63065? We&apos;re happy to help!
                        Whether you need a quote, have questions, or would like
                        to book a service – our expert team is just a message
                        away. We specialize in keeping your premises spotless
                        and hygienic.
                    </p>

                    <p>
                        Contact us today. Fill out the form below or contact us
                        directly using the contact details provided. Let&apos;s
                        get in touch and discuss how we can meet your cleaning
                        needs in Offenbach am Main. Your satisfaction is our
                        priority!
                    </p>

                    <form className={styles.contactForm} noValidate>
                        {/* name */}
                        <label htmlFor="name" className={styles.formLabel}>
                            name <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="name"
                            className={styles.formInput}
                            autoComplete="name"
                        />

                        {/* email */}
                        <label htmlFor="email" className={styles.formLabel}>
                            e-mail <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="e-mail"
                            className={styles.formInput}
                            autoComplete="email"
                            inputMode="email"
                        />

                        {/* phone */}
                        <label htmlFor="phone" className={styles.formLabel}>
                            Telephone number{" "}
                            <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+49 9192365654"
                            className={styles.formInput}
                            autoComplete="tel"
                            inputMode="tel"
                            pattern="^\\+?[0-9\\s\\-()]{7,}$"
                            title="Please enter a valid phone number"
                        />

                        {/* message */}
                        <label htmlFor="message" className={styles.formLabel}>
                            News <span className={styles.required}>*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="News"
                            className={styles.formTextarea}
                            rows={6}
                        />

                        {/* files */}
                        <label htmlFor="files" className={styles.formLabel}>
                            Upload documents
                        </label>
                        <input
                            id="files"
                            name="files"
                            type="file"
                            className={styles.formFile}
                            multiple
                        />

                        {/* submit */}
                        <button type="submit" className={styles.formSubmit}>
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
