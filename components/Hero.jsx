import styles from './styles/Hero.module.css'
import Link from "next/link";

export default function Hero() {
  return (
<section className={styles.hero}>
  <div className={styles.heroContent}>
    <h1 className={styles.heroHeader}>Freshly Baked Delights Every Day</h1>
    <p className={styles.heroP}>Indulge in our handcrafted breads, pastries, and cakes made with love.</p>
    <Link href="/order" className={styles.btn}>Order Now</Link>
  </div>
</section>
  );
}
