import { useRef, useState } from "react";
import { profile, projects, skills, education, experience } from "./content.js";

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
const navItems = [
  ["about", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["background", "Background"],
  ["contact", "Contact"],
];
const Arrow = () => <span aria-hidden="true">↗</span>;

function LinkButton({
  href,
  children,
  className = "",
  external = false,
  ...props
}) {
  if (!href)
    return (
      <button
        type="button"
        disabled
        className={`button unavailable ${className}`}
      >
        {children} unavailable
      </button>
    );
  return (
    <a
      className={`button ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {external && (
        <>
          <Arrow />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const navigate = (id) => {
    setOpen(false);
    document.getElementById(id)?.focus({ preventScroll: true });
  };
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#home" aria-label="Lim Johern, home">
          JL<span>.</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => navigate(id)}>
              {label}
            </a>
          ))}
          <a
            href="#resume"
            className="nav-resume"
            onClick={() => navigate("resume")}
          >
            Resume <Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionTitle({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-card ${project.featured ? "featured" : ""}`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project-top">
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="eyebrow">{project.category}</span>
        <span className="project-date">{project.date}</span>
      </div>
      <div className="project-body">
        <div className="project-copy">
          {project.featured && (
            <span className="featured-label">FINAL YEAR PROJECT</span>
          )}
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          <ul className="tags" aria-label="Technology stack">
            {project.stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.stackNote && (
            <p className="small-note">{project.stackNote}</p>
          )}
        </div>
        {project.featured && (
          <aside className="project-index" aria-label="Project focus">
            <span>01 / FOCUS</span>
            <p>
              Computer vision.
              <br />
              Mobile experience.
              <br />
              <em>Everyday utility.</em>
            </p>
            <span>MEDISNAP — 2026</span>
          </aside>
        )}
      </div>
      <div className="project-actions">
        <LinkButton href={project.github} external>
          GitHub
        </LinkButton>
        <LinkButton href={project.demo} external>
          Demo
        </LinkButton>
      </div>
      <details>
        <summary>
          Explore project <span aria-hidden="true" className="details-symbol" />
        </summary>
        <div className="project-details">
          <p className="source-note">{project.source}</p>
          <dl>
            {Object.entries(project.details).map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </details>
    </article>
  );
}

export default function App() {
  const resumeHref =
    profile.resume.available && profile.resume.file
      ? asset(profile.resume.file)
      : null;
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section
          className="hero container"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-main">
            <p className="availability">
              <span aria-hidden="true" />
              {profile.availability}
            </p>
            <h1 id="hero-title">
              Hi, I’m
              <br />
              <span>{profile.name}</span>
              <span className="hero-period">.</span>
            </h1>
            <p className="hero-role">
              {profile.role} <span>· {profile.institution}</span>
            </p>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions">
              <LinkButton className="primary" href="#projects">
                View Projects <span aria-hidden="true">↓</span>
              </LinkButton>
              <LinkButton
                href={resumeHref}
                download={profile.resume.downloadName}
              >
                Resume
              </LinkButton>
              <a className="text-link" href="#contact">
                Contact <Arrow />
              </a>
            </div>
          </div>
          <aside className="hero-aside">
            <div className="edition">
              PORTFOLIO <span>2026</span>
            </div>
            <div className="hero-type" aria-hidden="true">
              Think.
              <br />
              Build.
              <br />
              <em>Refine.</em>
            </div>
            <div className="hero-aside-bottom">
              <p>SOFTWARE / MOBILE / AI</p>
              <p>{profile.location}</p>
            </div>
          </aside>
          <div className="hero-bottom">
            <span>A selection of work & ideas</span>
            <a href="#projects">
              Explore below <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          id="about"
          tabIndex={-1}
          className="section about-section"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div>
              <p className="eyebrow">
                <span>01</span> A LITTLE ABOUT ME
              </p>
              <h2 id="about-title">
                Curiosity, translated
                <br />
                into code.
              </h2>
            </div>
            <div>
              <p className="about-copy">{profile.about}</p>
              <ul className="interest-list">
                {profile.interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="projects"
          tabIndex={-1}
          className="section container"
          aria-label="Selected projects"
        >
          <SectionTitle
            number="02"
            eyebrow="SELECTED WORK"
            title="Ideas put into practice."
            description="Academic and personal projects across mobile, web and applied AI. Open a project for its approach and development notes."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section
          id="skills"
          tabIndex={-1}
          className="section skills-section"
          aria-label="Skills"
        >
          <div className="container">
            <SectionTitle
              number="03"
              eyebrow="MY TOOLKIT"
              title="Tools for the task."
              description="Languages, frameworks and areas of exploration. Always learning, always building."
            />
            <div className="skills-grid">
              {skills.map((group, index) => (
                <div className="skill-group" key={group.name}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.name}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="background"
          tabIndex={-1}
          className="section container"
          aria-label="Education and experience"
        >
          <SectionTitle
            number="04"
            eyebrow="THE JOURNEY"
            title="Learning. Then doing."
          />
          <div className="background-grid">
            <div>
              <h3 className="column-label">Education</h3>
              {education.map((item) => (
                <article className="education-item" key={item.qualification}>
                  <p className="eyebrow">{item.dates}</p>
                  <h4>{item.qualification}</h4>
                  <p>
                    {item.institution}
                    <br />
                    {item.location}
                  </p>
                  <p className="small-note">{item.note}</p>
                </article>
              ))}
            </div>
            <div className="experience-card">
              <h3 className="column-label">Experience / Internship</h3>
              <h4>{experience.title}</h4>
              <p>{experience.description}</p>
              <div className="internship-window">
                <span className="eyebrow">INTERNSHIP AVAILABILITY</span>
                <p>{profile.internshipDates}</p>
              </div>
              <p className="small-note">{experience.note}</p>
              <a className="text-link" href="#contact">
                Let’s connect <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          id="resume"
          tabIndex={-1}
          className="container resume-section"
          aria-labelledby="resume-title"
        >
          <div>
            <p className="eyebrow">THE FULL PICTURE</p>
            <h2 id="resume-title">A little more on paper.</h2>
            <p>
              My education, technical skills and project experience, in one
              place.
            </p>
          </div>
          <LinkButton
            className="primary"
            href={resumeHref}
            download={profile.resume.downloadName}
          >
            {resumeHref ? (
              <>
                Download Resume <span aria-hidden="true">↓</span>
                <span className="file-label">PDF</span>
              </>
            ) : (
              "Resume coming soon — download"
            )}
          </LinkButton>
        </section>

        <section
          id="contact"
          tabIndex={-1}
          className="section container contact-section"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">
            <span>05</span> SAY HELLO
          </p>
          <div className="contact-heading">
            <h2 id="contact-title">
              Let’s build
              <br />
              <em>what’s next.</em>
            </h2>
            <p>
              Have an internship or graduate opportunity in mind? I’d love to
              hear about your team and the problems you’re working on.
            </p>
          </div>
          <div className="contact-links">
            <LinkButton
              className="email-link"
              href={profile.email ? `mailto:${profile.email}` : null}
            >
              {profile.email || "Email"} <Arrow />
            </LinkButton>
            <div className="social-links">
              <LinkButton href={profile.github} external>
                GitHub
              </LinkButton>
              <LinkButton href={profile.linkedin} external>
                LinkedIn
              </LinkButton>
              <LinkButton
                href={profile.phoneHref ? `tel:${profile.phoneHref}` : null}
              >
                {profile.phone || "Phone"}
              </LinkButton>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home" aria-label="Back to top">
          JL<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with React &
          curiosity.
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
