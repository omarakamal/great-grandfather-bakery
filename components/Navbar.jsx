import Link from "next/link";
import styles from "./styles/Navbar.module.css";
import Image from 'next/image'
export default function Navbar() {
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

      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>

        <Link href="/about" className={styles.link}>
          About
        </Link>

        <Link href="/menu" className={styles.link}>
          Menu
        </Link>

        <Link href="/order" className={styles.orderBtn}>
          Order Now
        </Link>
      </div>
    </nav>
  );
}
