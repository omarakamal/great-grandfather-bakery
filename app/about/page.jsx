export const metadata = {
  title: "About Us - Great Grandfather Bakery",
  description: "The best Banana Pudding made locally in bahrain",
  keywords: ["dessert","banana","pudding","sweets","bahrain","manama"]
};

import './about.css'
export default function About() {
  return (
    <section className="container about-container">
      <img src="/logo.png" alt="" />
      <h1>About Us</h1>

      <p className="about-body" style={{ marginTop: "1rem" }}>
        At just 16 years old, I am bringing back the dream my great grandfather
        once started. His bakery was more than a place for bread and cakes—it
        was a part of our community’s life. Generations later, the ovens grew
        silent, but his agirit never faded.<br></br> <br></br> Today, I am making it alive again in
        my own—through sweet creations made with love, care, and heart. This is
        not just dessert, it’s a legacy reborn.{" "}
      </p>
    </section>
  );
}
