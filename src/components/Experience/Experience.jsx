import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
    <div className="experience__wrapper">
      <h2 className="section__title">
        Experience
      </h2>

      <div className="experience__container">

        {/* Experience Item 1 */}
        <div className="experience__item">
          <div className="experience__left">
            <h3 className="experience__role">Full Stack Developer Intern</h3>
            <span className="experience__company">IIT Bombay </span>

            <p className="experience__description">
              Collaborated in a team to build a scalable full-stack web platform, contributing to both backend architecture and
              frontend design.
              Engineered RESTful APIs and optimized MongoDB queries using Node.js and Express.js, improving response time
              by 30 percent while implementing centralized SSO-based authentication.
            </p>

            <div className="experience__tags">
              <span>Full Stack Development</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>REST APIs</span>
              <span>AI Integration</span>
              <span>System Design</span>
            </div>
          </div>

          <div className="experience__right">
            <span className="experience__date">Jun 2025 – Oct 2025</span>
            <span className="experience__type">Remote</span>
          </div>
        </div>

        <hr />

        {/* Experience Item 2 */}
        <div className="experience__item">
          <div className="experience__left">
            <h3 className="experience__role">React Developer Intern</h3>
            <span className="experience__company">Softron</span>

            <p className="experience__description">
              I developed responsive web applications using React.js and integrated REST APIs to deliver smooth user experiences.
              I also explored Next.js for server-side rendering to improve application performance and SEO.
            </p>

            <div className="experience__tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>REST APIs</span>
              <span>Responsive Design</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

          <div className="experience__right">
            <span className="experience__date">May 2024 – Jun 2024</span>
            <span className="experience__type">Remote</span>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default Experience;
