"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function ContactForm() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        phone: string;
        news: string;
    }>({
        name: "",
        email: "",
        phone: "",
        news: "",
    });

    console.log(formData, `formData`);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();

        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);
    };

    const handleInputChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form className={styles.contactForm} noValidate onSubmit={handleSubmit}>
            {/* name */}
            <label htmlFor="name" className={styles.formLabel}>
                Name: <span className={styles.required}>*</span>
            </label>
            <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your names"
                className={styles.formInput}
                autoComplete="name"
                onChange={handleInputChange}
                value={formData.name}
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
                placeholder="example@domain.com"
                className={styles.formInput}
                autoComplete="email"
                inputMode="email"
                onChange={handleInputChange}
                value={formData.email}
            />

            {/* phone */}
            <label htmlFor="phone" className={styles.formLabel}>
                Telephone number <span className={styles.required}>*</span>
            </label>
            <input
                id="phone"
                name="phone"
                type="number"
                required
                placeholder="+49 123456789"
                className={styles.formInput}
                autoComplete="tel"
                inputMode="tel"
                pattern="^\\+?[0-9\\s\\-()]{7,}$"
                title="Please enter a valid phone number"
                onChange={handleInputChange}
                value={formData.phone}
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
                onChange={handleInputChange}
                value={formData.news}
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
                // onChange={handleInputChange}
            />

            {/* submit */}
            <button type="submit" className={styles.formSubmit}>
                SEND
            </button>
        </form>
    );
}
