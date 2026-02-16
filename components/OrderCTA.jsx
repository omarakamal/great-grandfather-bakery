import Link from "next/link";
import styles from './styles/OrderCTA.module.css'

export default function OrderCTA() {
  return (
    <section className={`container ${styles.orderContainer}`} style={{ textAlign: "center" }}>
      <h2 className="orderHeader">Ready to Order?</h2>
      <Link href="/order" className={`btn ${styles.orderLink}`}>
        Order Now
      </Link>
    </section>
  );
}
