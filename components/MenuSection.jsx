export default function MenuSection() {
  return (
    <section className="container" style={{textAlign: 'center'}}>
      <h1>Our Menu</h1>

      <div style={{
        display: "grid",
        gap: "2rem",
        marginTop: "2rem"
      }}>
        <div>
          <h3>Small</h3>
          <p>BHD 2.5</p>
        </div>

        <div>
          <h3>Family Size</h3>
          <p>11 BHD</p>
        </div>

        <div>
          <h3>Family Deluxe Size</h3>
          <p>22 BHD</p>
        </div>

        <div>
          <h3>Delivery</h3>
          <p>BHD 2</p>
        </div>
      </div>
    </section>
  );
}
