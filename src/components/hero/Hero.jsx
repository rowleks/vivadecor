import "./hero.css";

function Hero() {
  return (
    <section className="hero">
        <div className="hero-top">
            <div className="texts">
                <h1>Interior Design</h1>
                <p className="desc">Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge 
                modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication</p>
            </div>
            <img className="hero-img1" src="./image1.png" alt="" />

        </div>
        <div className="hero-bottom">
            <div className="left">
                <span className="p-btn">Start Project</span>
                <div className="numbers">
                    <div className="number">
                        <h2>400+</h2>
                        <small>Project Complete</small>
                    </div>
                    <div className="number">
                        <h2>600+</h2>
                        <small>Satisfied Clients</small>
                    </div>
                    <div className="number">
                        <h2>100+</h2>
                        <small>Unique Styles</small>
                    </div>
                </div>
            </div>

            <div className="right">
                <img className="hero-img2" src="./image2.png" alt="" />

                <span className="design"></span>
            </div>

            <div className="down-arrow">
                <img src="./down-arrow.png" alt="" />
            </div>

        </div>
    </section>
  )
}

export default Hero
