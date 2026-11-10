
import "./App.css";

function App() {
  const baseUrl = import.meta.env.BASE_URL;

  const linkedinURL =
    "https://www.linkedin.com/in/kanishka-sinha-0b204a375/";

  const githubURL = "https://github.com/kanishka973";

  const skillGroups = [
    {
      title: "Frontend Development",
      subtitle: "Building modern user interfaces",
      skills: [
        { name: "HTML5", short: "HTML", type: "Markup Language", color: "orange" },
        { name: "CSS3", short: "CSS", type: "Styling", color: "blue" },
        { name: "JavaScript", short: "JS", type: "Programming", color: "yellow" },
        { name: "React.js", short: "⚛", type: "Frontend Library", color: "cyan" }
      ]
    },
    {
      title: "Backend & Programming",
      subtitle: "Logic, code and application development",
      skills: [
        { name: "Node.js", short: "NODE", type: "Runtime Environment", color: "green" },
        { name: "C / C++", short: "C++", type: "Programming", color: "indigo" }
      ]
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Exploring cloud infrastructure and tools",
      skills: [
        { name: "AWS EC2", short: "EC2", type: "Cloud Computing", color: "orange" },
        { name: "AWS S3", short: "S3", type: "Cloud Storage", color: "green" },
        { name: "Linux", short: "LIN", type: "Operating System", color: "yellow" },
        { name: "Git & GitHub", short: "GIT", type: "Version Control", color: "red" }
      ]
    }
  ];

  const education = [
    {
      year: "2026 – 2028",
      degree: "Master of Computer Applications (MCA)",
      college: "Graphic Era Deemed to be University",
      status: "CURRENTLY PURSUING",
      description:
        "Pursuing postgraduate studies in computer applications, software development and emerging technologies."
    },
    {
      year: "Completed – 2026",
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Arcade Business College, Patna",
      status: "COMPLETED",
      description:
        "Completed undergraduate studies with a foundation in computer applications, programming and technology."
    }
  ];

  const projects = [
    {
      number: "01",
      title: "AWS EC2 Deployment",
      category: "CLOUD COMPUTING",
      description:
        "Cloud server deployment and configuration using Amazon EC2.",
      technologies: ["AWS EC2", "Linux", "Cloud"]
    },
    {
      number: "02",
      title: "AWS S3 Website Hosting",
      category: "CLOUD STORAGE",
      description:
        "Static website hosting and object storage using Amazon S3.",
      technologies: ["AWS S3", "HTML", "CSS"]
    },
    {
      number: "03",
      title: "StudyMate AI",
      category: "AI WEB APPLICATION",
      description:
        "An AI learning platform featuring Notes Generator and Doubt Solver.",
      technologies: ["React", "Node.js", "AI"]
    }
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          KANISHKA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Let's Talk ↗
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">
            <span className="welcome-dot"></span>
            WELCOME TO MY DIGITAL WORLD
          </p>

          <h1>
            Hi, I'm <span>Kanishka</span>
          </h1>

          <h2>Creative Developer & Tech Enthusiast</h2>

          <p className="intro">
            I love building modern websites, exploring new technologies
            and creating digital experiences that make a difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

            {/* UPDATED RESUME PATH */}
            <a
              href={`${baseUrl}resume/resume.pdf`}
              download="Kanishka-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn resume-btn"
            >
              ↓ Download Resume
            </a>

            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              in LinkedIn ↗
            </a>

            <a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              GitHub ↗
            </a>
          </div>

          <div className="social-text">
            <span>WEB DEVELOPMENT</span>
            <span>•</span>
            <span>CLOUD TECHNOLOGY</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-glow"></div>

          <div className="profile-frame">
            {/* UPDATED PROFILE IMAGE PATH */}
            <img
              src={`${baseUrl}images/profile.jpg`}
              alt="Kanishka"
              className="profile-photo"
            />
          </div>

          <div className="floating-card">
            <span className="floating-star">✦</span>
            Passionate About Technology
          </div>

          <div className="image-decoration decoration-one"></div>
          <div className="image-decoration decoration-two"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-space" id="about">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="about-icon">✦</div>
            <h3>Who Am I?</h3>
            <p>
              Hello! I'm Kanishka, an enthusiastic technology learner
              interested in web development, programming and cloud computing.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">⌘</div>
            <h3>My Approach</h3>
            <p>
              I believe in continuous learning, problem-solving and building
              meaningful digital experiences through practical projects.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="about-section section-space" id="education">
        <div className="section-heading">
          <p>MY ACADEMIC BACKGROUND</p>
          <h2>
            Education <span>Journey</span>
          </h2>
          <div className="section-subtitle">
            My academic journey and educational qualifications.
          </div>
        </div>

        <div className="about-content">
          {education.map((item) => (
            <div className="about-card education-card" key={item.degree}>
              <div className="about-icon">🎓</div>
              <p>{item.year}</p>
              <h3>{item.degree}</h3>
              <p>{item.college}</p>
              <p>{item.description}</p>
              <div className="education-status">
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section section-space" id="skills">
        <div className="section-heading">
          <p>MY DIGITAL TOOLKIT</p>
          <h2>
            Skills & <span>Technologies</span>
          </h2>
          <div className="section-subtitle">
            Tools and technologies I am learning and exploring.
          </div>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-heading">
                <div className="skill-group-number">
                  0{index + 1}
                </div>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.subtitle}</p>
                </div>
              </div>

              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div className="tech-card" key={skill.name}>
                    <div className={`tech-icon ${skill.color}`}>
                      {skill.short}
                    </div>

                    <div className="tech-details">
                      <h3>{skill.name}</h3>
                      <p>{skill.type}</p>
                    </div>

                    <span className="tech-arrow">↗</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="skills-note">
          Continuously learning. Always building. Always improving.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="projects-section section-space" id="projects">
        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-icon">✦</span>
              </div>

              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technology-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                <span>PROJECT SHOWCASE</span>
                <span className="project-arrow">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-space" id="contact">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>
            Get In <span>Touch</span>
          </h2>
        </div>

        <div className="contact-card">
          <h3>Have a project in mind?</h3>
          <p>
            Let's connect and create something amazing together.
          </p>

          <p className="contact-email">
            sinhakanishka706@gmail.com
          </p>

          <a
            href="mailto:sinhakanishka706@gmail.com"
            className="primary-btn"
          >
            Send Me an Email ↗
          </a>

          <div style={{ marginTop: "22px" }}>
            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              in Connect on LinkedIn ↗
            </a>

            <a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
              style={{ marginLeft: "12px" }}
            >
              GitHub Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>
          KANISHKA<span>.</span>
        </h3>

        <p>Designed with creativity and passion.</p>
        <p>© 2026 Kanishka. All Rights Reserved.</p>

        <div style={{ marginTop: "12px" }}>
          <a
            href={linkedinURL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a78bfa",
              textDecoration: "none",
              marginRight: "18px"
            }}
          >
            LinkedIn ↗
          </a>

          <a
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a78bfa",
              textDecoration: "none"
            }}
          >
            GitHub ↗
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
