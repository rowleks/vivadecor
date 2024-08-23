import Faq from "../faq/Faq";
import "./brilliance.css";

function Brilliance() {
  return (
    <section className="brilliance">
        <img src="./image3.png" alt="" />
        <div className="r-side">
            <h2>Designing Your Dream With Brilliance</h2>
            <small>Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience</small>
            <Faq />
            <span className="p-btn">Learn more</span>
        </div>
      
    </section>
  )
}

export default Brilliance
