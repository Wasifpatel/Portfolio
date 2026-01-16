import "./about.css";


const stack = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Python",
  "React", "Next.js", "Tailwind CSS", "CSS", "Node.js",
  "Express.js", "MongoDB", "MySQL", "LLM APIs",
  "AI Agents", "Tool Calling", "Git", "GitHub",
  "Docker", "Postman", "VS Code", "IntelliJ IDEA", "CI/CD Basics"
];

const About = () => {
  return (
    <section className="about section " id="about">
      <div className="about__wrapper">

        <div className="about__header">
          <h2 className="section__title">
            About
          </h2>
          <div className="about__line" />
        </div>

        <div className="about__content">

          {/* LEFT */}
          <div className="about__left">
            <p>
              <span className="about__dropcap">F</span>
              ull-stack web developer and B.Tech student focused on building
              modern, responsive, and reliable web applications. I enjoy
              transforming ideas into real products, creating seamless digital
              experiences that combine clean design with efficient functionality
              across all devices.
            </p>

            <p>
              I specialize in developing user-friendly interfaces and building
              scalable backend systems while continuously optimizing performance
              and usability. Alongside development, I actively explore new
              technologies and improve my problem-solving skills to deliver
              high-quality solutions.
            </p>

            <p>
              My technical stack includes React and Next.js for frontend
              development, along with backend tools such as Node.js, MongoDB,
              and PostgreSQL to create complete full-stack applications.
              I also leverage AI tools like ChatGPT, GitHub Copilot, and other
              modern technologies to enhance productivity and workflow.
            </p>

          </div>

          {/* RIGHT */}
          <div className="about__right">
            <h3 className="about__stack-title">
              <span>▸</span> Stack
            </h3>

            <div className="about__stack">
              {stack.map((item, index) => (
                <span key={index} className="about__chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
