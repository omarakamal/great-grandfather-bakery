"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Sweet Haven Desserts Logo"
          width={50}
          height={40}
          priority
        />
        Great Grandfather Bakery
      </div>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.links} ${
          menuOpen ? styles.mobileOpen : ""
        }`}
      >
        <Link href="/" className={styles.link} onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link href="/about" className={styles.link} onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link href="/menu" className={styles.link} onClick={() => setMenuOpen(false)}>
          Menu
        </Link>

        <Link href="/order" className={styles.orderBtn} onClick={() => setMenuOpen(false)}>
          Order Now
        </Link>
      </div>
    </nav>
  );
}
