"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  X
} from "lucide-react";
import { content, Lang } from "@/lib/content";

type Venture = {
  name: string;
  logo: string;
  role: string;
  metric?: string;
  summary: string;
  did: readonly string[];
  impact: readonly string[];
};

const links = {
  linkedin: "https://www.linkedin.com/in/peter-rojas-beltran/",
  github: "https://github.com/peterrojasbeltran",
  email: "mailto:pitersino2.prb@gmail.com",
  whatsapp: "https://wa.me/51983447481"
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const t = content[lang];

  const whatsappMessage =
    lang === "en"
      ? "Hi Peter, I saw your website and would like to connect."
      : "Hola Peter, vi tu página web y me gustaría conversar contigo.";
  const whatsappHref = `${links.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  const navItems = [
    ["about", t.nav.about],
    ["experience", t.nav.experience],
    ["projects", t.nav.projects],
    ["services", t.nav.services],
    ["ventures", t.nav.ventures],
    ["contact", t.nav.contact]
  ];

  return (
    <main>
      <header className="site-header">
        <a href="#" className="brand">
          <span className="brand-mark">PR</span>
          <span>Peter Rojas</span>
        </a>

        <nav className="desktop-nav">
          {navItems.map(([href, label]) => (
            <a key={href} href={`#${href}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "es" : "en")}>
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button className="mobile-menu-button" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
          {navItems.map(([href, label]) => (
            <a key={href} href={`#${href}`} onClick={() => setMobileOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{t.hero.badge}</div>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                {t.hero.primary}
                <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href={links.github} target="_blank" rel="noreferrer">
                {t.hero.secondary}
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="hero-photo-card">
            <Image
              src="/images/peter-profile.jpeg"
              alt="Peter Rojas"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 42vw"
              style={{ objectFit: "cover" }}
            />
            <div className="photo-caption">
              <strong>Peter Rojas</strong>
              <span>CTO • AI • Cloud/Data • Business Execution</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section light">
        <div className="section-header">
          <span>{t.about.kicker}</span>
          <h2>{t.about.title}</h2>
          <p>{t.about.body}</p>
        </div>
        <div className="highlight-grid">
          {t.about.highlights.map((item) => (
            <div className="highlight-card" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <span>{t.experience.kicker}</span>
          <h2>{t.experience.title}</h2>
          <p>{t.experience.intro}</p>
        </div>

        <div className="experience-list">
          {t.experience.items.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.role}`}>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p className="period">{item.period}</p>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="achievement-grid">
          {t.experience.achievements.map((item) => (
            <div className="achievement-card" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section light companies-section">
        <div className="section-header">
          <span>{lang === "en" ? "Credibility" : "Credibilidad"}</span>
          <h2>{lang === "en" ? "Companies I’ve worked with." : "Empresas con las que he trabajado."}</h2>
          <p>
            {lang === "en"
              ? "Enterprise and regional experience across technology, retail, healthcare and software environments."
              : "Experiencia enterprise y regional en tecnología, retail, salud y software."}
          </p>
        </div>
        <div className="companies-grid">
          {["Globant", "Tottus", "Belcorp", "Auna", "Teamcore", "Sapiens"].map((company) => (
            <div className="company-pill" key={company}>{company}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="section light">
        <div className="section-header">
          <span>{t.projects.kicker}</span>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.intro}</p>
        </div>
        <div className="card-grid">
          {t.projects.items.map((project) => (
            <article className="clean-card" key={project.name}>
              <span className="tag">{project.tag}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="section">
        <div className="section-header">
          <span>{t.how.kicker}</span>
          <h2>{t.how.title}</h2>
        </div>
        <div className="how-grid">
          {t.how.items.map((item, index) => (
            <article className="how-card" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-header">
          <span>{t.services.kicker}</span>
          <h2>{t.services.title}</h2>
        </div>
        <div className="card-grid">
          {t.services.items.map((service) => (
            <article className="dark-card" key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ventures" className="section light">
        <div className="section-header">
          <span>{t.ventures.kicker}</span>
          <h2>{t.ventures.title}</h2>
          <p>{t.ventures.intro}</p>
        </div>
        <div className="card-grid">
          {t.ventures.items.map((venture) => (
            <button
              className="venture-card"
              key={venture.name}
              onClick={() => setSelectedVenture(venture)}
            >
              {"logo" in venture && (
                <div className="venture-logo-wrap">
                  <Image
                    src={venture.logo}
                    alt={`${venture.name} logo`}
                    width={180}
                    height={80}
                    sizes="160px"
                  />
                </div>
              )}
              <span>{venture.role}</span>
              <h3>{venture.name}</h3>
              <p>{venture.summary}</p>
              {"metric" in venture && <strong className="venture-metric">{venture.metric}</strong>}
              <small>{lang === "en" ? "View case details" : "Ver detalle"}</small>
            </button>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-header">
          <span>{t.skills.kicker}</span>
          <h2>{t.skills.title}</h2>
        </div>
        <div className="skills-grid">
          {t.skills.groups.map((group) => (
            <div className="skill-group" key={group.name}>
              <h3>{group.name}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section light">
        <div className="section-header">
          <span>{t.testimonials.kicker}</span>
          <h2>{t.testimonials.title}</h2>
        </div>
        <div className="testimonial-grid">
          {t.testimonials.items.map((item) => (
            <article className="testimonial-card" key={item.quote}>
              <p className="testimonial-quote">“{item.quote}”</p>
              {"detail" in item && <p className="testimonial-detail">{item.detail}</p>}
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <span>{t.contact.kicker}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.body}</p>
        </div>
        <div className="contact-actions">
          <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />{t.contact.linkedin}</a>
          <a href={links.github} target="_blank" rel="noreferrer"><Github size={18} />{t.contact.github}</a>
          <a href={links.email}><Mail size={18} />{t.contact.email}</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} />{t.contact.whatsapp}</a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Peter Rojas — v1.7.5</span>
        <span>CTO • AI Engineering • Cloud/Data Architecture</span>
      </footer>

      {selectedVenture && (
        <div className="modal-backdrop" onClick={() => setSelectedVenture(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" aria-label="Close modal" onClick={() => setSelectedVenture(null)}>
              <X size={22} />
            </button>
            {"logo" in selectedVenture && (
              <div className="modal-logo-wrap">
                <Image
                  src={selectedVenture.logo}
                  alt={`${selectedVenture.name} logo`}
                  width={220}
                  height={100}
                  sizes="190px"
                />
              </div>
            )}
            <span className="tag">{selectedVenture.role}</span>
            <h3>{selectedVenture.name}</h3>
            <p>{selectedVenture.summary}</p>

            <div className="modal-section">
              <h4>{lang === "en" ? "What I did" : "Qué hice"}</h4>
              <ul>
                {selectedVenture.did.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4>{lang === "en" ? "Business / Tech Impact" : "Impacto negocio / tecnología"}</h4>
              <ul>
                {selectedVenture.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <a className="modal-cta" href="#contact" onClick={() => setSelectedVenture(null)}>
              {lang === "en" ? "Talk about this experience" : "Conversemos sobre esta experiencia"}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
