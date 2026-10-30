import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./App.css";

const currentYear = new Date().getFullYear();

const skills = [
  { name: "C Programming", level: 85, category: "PROGRAMMING" },
  { name: "Python", level: 80, category: "PROGRAMMING" },
  { name: "HTML & CSS", level: 85, category: "WEB DEVELOPMENT" },
  { name: "JavaScript", level: 70, category: "WEB DEVELOPMENT" },
  { name: "Electronics", level: 85, category: "CORE ENTC" },
  { name: "Communication Systems", level: 75, category: "CORE ENTC" },
];

const projects = [
  {
    number: "01",
    title: "Smart Expense Tracker",
    category: "PYTHON · STREAMLIT",
    description:
      "A dashboard concept for tracking expenses, monitoring budgets, visualizing spending patterns, and generating reports.",
    tags: ["Python", "Streamlit", "Pandas"],
    symbol: "₹",
  },
  {
    number: "02",
    title: "Smart Electronics System",
    category: "ENTC · EMBEDDED SYSTEMS",
    description:
      "An electronics project concept exploring sensors, microcontrollers, and intelligent monitoring.",
    tags: ["Electronics", "Sensors", "IoT"],
    symbol: "⌁",
  },
  {
    number: "03",
    title: "Interactive Portfolio",
    category: "WEB DEVELOPMENT",
    description:
      "A responsive personal portfolio featuring motion effects, modern interface design, and interactive sections.",
    tags: ["React", "Vite", "CSS"],
    symbol: "</>",
  },
];

const roles = [
  "ENTC ENGINEERING STUDENT",
  "TECHNOLOGY ENTHUSIAST",
  "CREATIVE PROBLEM SOLVER",
  "FUTURE INNOVATOR",
];

const particles = Array.from({ length: 35 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 61 + 7) % 100}%`,
  delay: `${(index % 8) * 0.4}s`,
  duration: `${5 + (index % 6)}s`,
}));

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span className="section-line" />
      <span>{children}</span>
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a
        href="#home"
        className="brand"
        onClick={closeMenu}
        aria-label="Go to homepage"
      >
        <span className="brand-mark">P.</span>
        <span className="brand-name">
          PRANITI<span className="brand-dot">.</span>
        </span>
      </a>

      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {links.map(([label, href], index) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
            className="nav-link"
          >
            <span className="nav-index">0{index + 1}</span>
            {label}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-cta"
          onClick={closeMenu}
        >
          LET&apos;S TALK <span aria-hidden="true">↗</span>
        </a>
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1100;

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const nextProgress = Math.min(
        100,
        Math.round((elapsed / duration) * 100)
      );

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        window.clearInterval(interval);

        window.setTimeout(() => {
          setVisible(false);
        }, 250);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="loader-logo"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            P<span>.</span>
          </motion.div>

          <div className="loader-caption">INITIALIZING PORTFOLIO</div>

          <div className="loader-track">
            <motion.div
              className="loader-progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="loader-bottom">
            <span>PRANITI SATALGOAN</span>
            <span>{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function EngineeringVisual() {
  return (
    <div className="visual-wrap">
      <div className="visual-topline">
        <span>FIG. 001 / ENGINEERING CORE</span>
        <span className="live-indicator">
          <span /> LIVE SYSTEM
        </span>
      </div>

      <div className="visual-stage">
        <div className="visual-grid" />

        <motion.div
          className="orbit orbit-one"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <span className="orbit-node node-one" />
          <span className="orbit-node node-two" />
        </motion.div>

        <motion.div
          className="orbit orbit-two"
          animate={{ rotate: -360 }}
          transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
        >
          <span className="orbit-node node-three" />
        </motion.div>

        <motion.div
          className="orbit orbit-three"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="core-halo"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.55, 0.95, 0.55],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          className="core"
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="core-inner">
            <span className="core-symbol">P</span>
            <span className="core-subtitle">ENTC</span>
          </div>
        </motion.div>

        <motion.div
          className="float-card float-card-top"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="float-card-icon">⌁</span>
          <span>
            <strong>SIGNAL ACTIVE</strong>
            <small>Communication</small>
          </span>
        </motion.div>

        <motion.div
          className="float-card float-card-bottom"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="float-card-icon cyan-icon">⌘</span>
          <span>
            <strong>SYSTEM ONLINE</strong>
            <small>Innovation mode</small>
          </span>
        </motion.div>

        <span className="stage-coordinate coordinate-top">18° 31&apos; N</span>
        <span className="stage-coordinate coordinate-bottom">73° 51&apos; E</span>
      </div>

      <div className="visual-footer">
        <span>HARDWARE × SOFTWARE</span>
        <span className="visual-footer-center">DESIGNING TOMORROW</span>
        <span>IN PROGRESS</span>
      </div>
    </div>
  );
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero section-container" id="home">
      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            className="particle"
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="hero-copy">
        <motion.div
          className="availability-pill"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <span className="availability-dot" />
          OPEN TO LEARNING & COLLABORATION
        </motion.div>

        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          HELLO, WORLD! I&apos;M
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Praniti
          <br />
          <span className="gradient-text">Satalgoan</span>
          <span className="hero-period">.</span>
        </motion.h1>

        <motion.div
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <span className="role-bracket">&lt;</span>

          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              className="role-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>

          <span className="role-bracket">/&gt;</span>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          Exploring the intersection of electronics, communication, and code.
          I&apos;m passionate about turning curious ideas into meaningful
          technology.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <a className="button-primary" href="#projects">
            EXPLORE MY WORK <span aria-hidden="true">↗</span>
          </a>

          <a className="button-secondary" href="#about">
            MORE ABOUT ME <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <div>
            <span className="meta-number">01</span>
            <span className="meta-label">CURIOUS MIND</span>
          </div>

          <span className="meta-divider" />

          <div>
            <span className="meta-number">∞</span>
            <span className="meta-label">ROOM TO GROW</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <EngineeringVisual />
      </motion.div>

      <a href="#about" className="scroll-cue">
        <span className="scroll-line" />
        SCROLL TO EXPLORE
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}

function Marquee() {
  const items = [
    "ELECTRONICS",
    "INNOVATION",
    "COMMUNICATION",
    "CREATIVITY",
    "TECHNOLOGY",
    "PROBLEM SOLVING",
  ];

  return (
    <div className="marquee" aria-label="Areas of interest">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
            <span className="marquee-star">✳</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function About() {
  const facts = [
    { number: "01", title: "Curiosity first", text: "Always asking why." },
    { number: "02", title: "Learn by doing", text: "Ideas into experiments." },
    { number: "03", title: "Think differently", text: "Fresh perspectives matter." },
  ];

  return (
    <section className="section-container section-block" id="about">
      <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>

      <div className="about-layout">
        <Reveal className="about-heading">
          <h2 className="section-heading">
            Engineering
            <br />
            <span className="gradient-text">with curiosity.</span>
          </h2>

          <p className="about-lead">
            I believe the best solutions begin with a question.
          </p>
        </Reveal>

        <Reveal className="about-content" delay={0.15}>
          <p>
            I&apos;m <strong>Praniti Satalgoan</strong>, an Electronics and
            Telecommunication Engineering (ENTC) student interested in
            understanding how technology works and how it can make everyday
            life better.
          </p>

          <p>
            From electronic systems to software development, I enjoy exploring
            different ideas, building my skills, and learning through
            hands-on projects.
          </p>

          <p>
            My goal is to keep growing as an engineer, collaborate with
            creative people, and develop practical solutions to real-world
            problems.
          </p>

          <div className="about-facts">
            {facts.map((fact) => (
              <div className="fact-card" key={fact.number}>
                <span className="fact-number">{fact.number}</span>
                <strong>{fact.title}</strong>
                <span>{fact.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="quote-strip">
        <span className="quote-mark">&ldquo;</span>
        <p>
          The future belongs to those who stay curious and keep building.
        </p>
        <span className="quote-caption">MY APPROACH TO ENGINEERING</span>
      </Reveal>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-container section-block" id="skills">
      <SectionLabel number="02">TOOLS & TECHNOLOGIES</SectionLabel>

      <Reveal>
        <div className="skills-heading-row">
          <h2 className="section-heading">
            My learning
            <br />
            <span className="gradient-text">playground.</span>
          </h2>

          <p className="section-intro">
            A growing toolkit across programming, web development, and core
            electronics. These bars are illustrative self-assessments—adjust
            them to reflect your actual skills.
          </p>
        </div>
      </Reveal>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Reveal className="skill-card" key={skill.name} delay={index * 0.06}>
            <div className="skill-top">
              <div>
                <span className="skill-category">{skill.category}</span>
                <h3>{skill.name}</h3>
              </div>

              <span className="skill-percent">
                {String(skill.level).padStart(2, "0")}%
              </span>
            </div>

            <div
              className="skill-track"
              role="progressbar"
              aria-label={`${skill.name} self-assessed level`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={skill.level}
            >
              <motion.div
                className="skill-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.08 }}
              />
            </div>

            <span className="skill-index">SKILL / 0{index + 1}</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="skills-note">
        <span className="note-symbol">✳</span>
        <span>
          Always learning. Always experimenting. Always improving.
        </span>
      </Reveal>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-container section-block" id="projects">
      <SectionLabel number="03">SELECTED PROJECTS</SectionLabel>

      <Reveal>
        <div className="projects-heading-row">
          <h2 className="section-heading">
            Ideas into
            <br />
            <span className="gradient-text">experiences.</span>
          </h2>

          <p className="section-intro">
            A selection of work spanning software, electronics, and creative
            web experiences.
          </p>
        </div>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal
            className="project-card"
            key={project.number}
            delay={index * 0.12}
          >
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="project-art">
              <motion.div
                className="project-art-ring"
                animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 24 + index * 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <span className="project-art-symbol">{project.symbol}</span>

              <span className="project-art-label">CONCEPT / 0{index + 1}</span>
            </div>

            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="projects-disclaimer">
        PROJECT SHOWCASE — More experiments and case studies coming soon.
      </p>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "";

  async function copyEmail() {
    if (!email) {
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section className="section-container section-block contact-section" id="contact">
      <SectionLabel number="04">GET IN TOUCH</SectionLabel>

      <Reveal className="contact-panel">
        <div className="contact-orb contact-orb-one" />
        <div className="contact-orb contact-orb-two" />

        <div className="contact-content">
          <span className="contact-kicker">
            HAVE AN IDEA? LET&apos;S CONNECT.
          </span>

          <h2 className="contact-heading">
            Let&apos;s build
            <br />
            <span className="gradient-text">something cool.</span>
          </h2>

          <p className="contact-description">
            Interested in technology, creative projects, or learning
            together? I&apos;d love to connect and explore new possibilities.
          </p>

          <div className="contact-actions">
            {email ? (
              <a className="button-primary" href={`mailto:${email}`}>
                SEND ME AN EMAIL <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="button-primary button-disabled" aria-disabled="true">
                EMAIL COMING SOON
              </span>
            )}

            <button
              className="button-secondary copy-button"
              type="button"
              onClick={copyEmail}
              disabled={!email}
            >
              {email ? (copied ? "EMAIL COPIED ✓" : "COPY EMAIL") : "CONTACT DETAILS SOON"}
            </button>
          </div>

          {!email && (
            <p className="contact-email-note">
              Contact details will be added soon. In the meantime, connect
              through your preferred professional network.
            </p>
          )}
        </div>

        <div className="contact-side">
          <motion.div
            className="contact-symbol"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            P<span>.</span>
          </motion.div>

          <span className="contact-side-label">CURIOUS BY NATURE.</span>
          <span className="contact-side-label">ENGINEER IN PROGRESS.</span>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-container">
      <a href="#home" className="footer-brand">
        P<span>.</span>
      </a>

      <p>
        DESIGNED & BUILT BY <strong>PRANITI SATALGOAN</strong>
      </p>

      <a href="#home" className="back-to-top">
        BACK TO TOP ↑
      </a>

      <span className="footer-copyright">
        © {currentYear} · MADE WITH CURIOSITY
      </span>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Praniti Satalgoan | ENTC Portfolio";
  }, []);

  return (
    <>
      <Loader />

      <div className="site-background" aria-hidden="true">
        <div className="background-glow background-glow-one" />
        <div className="background-glow background-glow-two" />
        <div className="background-grid" />
      </div>

      <Navigation />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}