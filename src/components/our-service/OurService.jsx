import "./ourservice.css";

function OurService() {
  return (
    <section className="our-service">
        <h2><span className="dash"></span>Our Services</h2>
        <div className="services">
            <div className="service">
                <img src="./lighting-icon.png" alt="" />
                <div className="r-flex">
                    <h4>Lighting Design</h4>
                    <small>Achieve the perfect balance of ambient, task and accent lighting for a functional atmosphere</small>
                </div>

            </div>
            <div className="service">
                <img src="./interior-icon.png" alt="" />
                <div className="r-flex">
                    <h4>Interior Design</h4>
                    <small>From concept to completion, we oversee every detail to bring your vision to life efficiently</small>
                </div>

            </div>
            <div className="service">
                <img src="./outdoor-icon.png" alt="" />
                <div className="r-flex">
                    <h4>Outdoor Design</h4>
                    <small>Achieve the perfect balance of ambient, task and accent lighting for a functional atmosphere</small>
                </div>

            </div>
        </div>
      
    </section>
  )
}

export default OurService
