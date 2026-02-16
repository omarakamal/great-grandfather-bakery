export default function OrderForm() {
  return (
    <section className="container">
      <h1>Place an Order</h1>

      <form style={{ marginTop: "2rem", display: "grid", gap: "1rem" }}>
        <input placeholder="Full Name" required />
        <input placeholder="Phone Number" required />
        <textarea placeholder="Order Details" rows="4" required />
        <button type="submit">Submit Order</button>
      </form>
    </section>
  );
}
