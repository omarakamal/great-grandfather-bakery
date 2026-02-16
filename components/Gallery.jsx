"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./styles/Gallery.module.css";

const images = [
  "/gallery/bread1.jpg",
  "/gallery/bread2.jpg",
  "/gallery/bread3.jpg",
  "/gallery/bread4.jpg",
  "/gallery/bread5.jpg",
  "/gallery/bread6.jpg",
  "/gallery/bread7.jpg",
  "/gallery/bread8.jpg",
  "/gallery/bread9.jpg",
];

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % images.length);
    }, 5000);
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
        <AnimatePresence mode="wait">
          {visibleImages.map((img) => (
            <motion.div
              key={img} // 🔥 important: unique key per image
              className={styles.galleryItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={img}
                alt="Bakery product"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.galleryImg}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
