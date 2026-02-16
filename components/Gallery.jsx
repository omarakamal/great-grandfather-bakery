"use client"; // For Next.js 13+ app directory, if using server components

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/images/pastry3.jpg",
];

import styles from './styles/Gallery.module.css'

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % images.length); // cycle 3 images
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.h2}>Photo Gallery</h2>
      <div className={styles.galleryGrid}>
        {visibleImages.map((img, index) => (
          <motion.div data-aos="fade-right" key={index} className={styles.galleryItem}   initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
            <img className={styles.galleryImg} src={img} alt={`Gallery ${index}`} />
          </motion.div>
        ))}
      </div>
      <style jsx>{`
 
      `}</style>
    </section>
  );
}
