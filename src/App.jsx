import './App.css'

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Deepika<span>.</span></h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>Hi, I'm <span>Arugalla Deepika</span></h1>

          <h2>Full Stack Developer</h2>

          <p className="description">
            I am a Computer Science student passionate about
            web development, problem solving and creating
            innovative digital solutions.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
<section id="about" className="section">
  <h2>About <span>Me</span></h2>

  <p className="about-intro">
    Hello! I'm Arugalla Deepika, a passionate Computer Science
    and Engineering student with a strong interest in Full Stack
    Development, UI/UX Design, and emerging technologies.
  </p>

  <p className="about-highlight">
    My goal is to become a skilled Full Stack Developer and
    contribute to building innovative technology that creates
    a meaningful impact.
  </p>
</section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>My <span>Skills</span></h2>

        <div className="card-container">
          <div className="card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>Node.js, Express.js, Java, Spring Boot</p>
          </div>

          <div className="card">
            <h3>Database</h3>
            <p>MongoDB, MySQL</p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>My <span>Projects</span></h2>

        <div className="card-container">
          <div className="card">
            <h3>WeaveMart</h3>
            <p>
              An e-commerce platform connecting handloom weavers
              directly with customers.
            </p>
            <p className="tech">React | Node.js | MongoDB</p>
          </div>

          <div className="card">
            <h3>SkillBridge</h3>
            <p>
               SkillBridge is an AI-powered platform designed to bridge the gap between students' existing technical skills and industry requirements.
            </p>
            <p className="tech">Web Development | AI</p>
          </div>

          <div className="card">
            <h3>Vidyapedia</h3>
            <p>
              A platform designed to help students explore
              colleges and educational opportunities.
            </p>
            <p className="tech">HTML | CSS | JavaScript</p>
          </div>
        </div>
      </section>
      {/* Coding Activity Section */}
      <section id="coding" className="section">
        <h2>Coding <span>Activity</span></h2>

        <div className="card-container">

          <div className="card">
          <h3>CodeChef</h3>

          <p>Competitive Programming</p>

          <h2>🔥 Your Streak</h2>

          <p>Daily Coding Practice</p>

          <a
          href="https://www.codechef.com/users/vvit25bq5a0504"
          target="_blank"
          rel="noreferrer"
          className="btn"
          >
            View CodeChef Profile →
          </a>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="section">
        <h2>My <span>Education</span></h2>
        <div className="card">
          <h3>Diploma in Computer Science</h3>
          <p>Computer Engineering</p>
          <p>St.Mary's Women's Engineering College</p>
        </div>
        <div className="card">
          <h3>Bachelor of Technology</h3>
          <p>Computer Science and Engineering</p>
          <p>Vasireddy Venkatadri Institute of Technology</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact <span>Me</span></h2>

        <p>Email:arugalladeepika@gmail.com</p>

        <div className="social-links">
          <a href="https://github.com/arugalladeepika-sys/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/arugalladeepika/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Arugalla Deepika. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App