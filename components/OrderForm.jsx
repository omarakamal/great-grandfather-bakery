"use client";

import { useState } from "react";
import styles from "./styles/OrderForm.module.css";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    deliveryTime: "",
    deliveryDay: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Full Name: ${formData.fullName}
Address: ${formData.address}
Phone Number: ${formData.phone}
Delivery Day: ${formData.deliveryDay}
Delivery Time: ${formData.deliveryTime}

Order Details:
${formData.details}
    `;

    const encodedMessage = encodeURIComponent(message);

    // Replace with your bakery WhatsApp number (no +, no spaces)
    const whatsappNumber = "+966593322610";

    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>Place an Order</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              required
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Delivery Time</label>
            <input
              type="time"
              name="deliveryTime"
              required
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Delivery Day</label>
            <input
              type="date"
              name="deliveryDay"
              required
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Order Details</label>
            <textarea
              rows="4"
              name="details"
              required
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.button}>
            Send Order on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
