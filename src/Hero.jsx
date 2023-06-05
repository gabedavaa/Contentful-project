import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section>
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptas ut aperiam provident nihil harum culpa eaque minima quae
            fugit, voluptatem quidem sint nostrum? Expedita, at. Reiciendis ad
            dignissimos exercitationem!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
