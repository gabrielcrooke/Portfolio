export default function HeroSection() {
  return (
    <section id="hereSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Gabriel</p>
          <h1 className="hero--section--title">
            <span className="here--section--title--color">Software Quality Assurance</span>
            <br />
            Manual | Automation
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Aliquid quod nam officia nostrum odit!
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>

  );
}
