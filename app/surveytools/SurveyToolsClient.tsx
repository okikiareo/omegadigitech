"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./surveytools.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

// TODO: replace with the real WhatsApp waitlist invite link
const WHATSAPP_WAITLIST_URL = "https://chat.whatsapp.com/PLACEHOLDER";

/* -------------------------------------------------------------------------- */
/* Icons (inline, no external assets)                                        */
/* -------------------------------------------------------------------------- */

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 10.2l2.4 2.4L14 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2v11M3.5 9L8 13.5 12.5 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20V10M11 20V4M18 20v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function NairaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4v16M18 4v16M4 9h16M4 14h16M6 4l12 16M18 4L6 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3a9 9 0 00-7.75 13.5L3 21l4.6-1.23A9 9 0 1012 3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 8.7c.2-.5.4-.5.6-.5h.5c.15 0 .35 0 .5.4.2.5.65 1.65.7 1.8.05.15.1.3 0 .5-.1.2-.15.3-.3.45-.15.15-.3.35-.45.45-.15.15-.3.3-.15.6.15.3.7 1.2 1.5 1.9 1 .9 1.85 1.2 2.15 1.35.3.15.5.1.65-.05.15-.15.65-.75.85-1 .2-.25.4-.2.65-.1.25.1 1.6.75 1.9.9.3.15.45.2.5.35.1.15.1.85-.2 1.65-.3.8-1.6 1.5-2.2 1.55-.65.1-1.3.15-4.1-1.05-3.45-1.5-5.6-5.1-5.75-5.35-.15-.2-1.15-1.55-1.15-2.95 0-1.4.75-2.1 1-2.4z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Reveal-on-scroll wrapper                                                   */
/* -------------------------------------------------------------------------- */

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`stw-reveal${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Count-up stat                                                              */
/* -------------------------------------------------------------------------- */

function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1200,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Nav                                                                        */
/* -------------------------------------------------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`stw-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="stw-container stw-nav-inner">
        <a href="#" className="stw-logo">
          SurveyTools
        </a>
        <div className="stw-nav-right">
          <a href="#how-it-works" className="stw-nav-link stw-nav-link--hide-mobile">
            How It Works
          </a>
          <a
            href="https://chat.whatsapp.com/DZDnDKI87qJAVrJZHqRjQN?s=cl&p=a&ilr=0&amv=0"
            target="_blank"
            rel="noopener noreferrer"
            className="stw-nav-cta"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function SurveyToolsClient() {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} stw-root`}>
      <Nav />

      {/* Hero */}
      <header className="stw-hero">
        <div className="stw-container stw-hero-inner">
          <span className="stw-eyebrow stw-eyebrow--on-dark">Coming September 2026</span>
          <h1>Get your research data. Fast, verified, and analysis-ready.</h1>
          <p className="stw-hero-sub">
            SurveyTools connects Nigerian researchers with a verified pool of student
            respondents — and delivers cleaned, analysis-ready data. No WhatsApp begging.
            No separate SPSS bill.
          </p>
          <div className="stw-hero-actions">
            <a
              href={WHATSAPP_WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="stw-btn stw-btn--primary"
            >
              Join the Waitlist
            </a>
            <a href="#how-it-works" className="stw-btn stw-btn--ghost-dark">
              How It Works <ArrowDownIcon />
            </a>
          </div>

          <div className="stw-stat-rail">
            <div className="stw-stat">
              <div className="stw-stat-value">
                <CountUp value={8} />
              </div>
              <div className="stw-stat-label">Pilot customers</div>
            </div>
            <div className="stw-stat">
              <div className="stw-stat-value">
                <CountUp value={100} prefix="₦" suffix="K" />
              </div>
              <div className="stw-stat-label">Revenue generated</div>
            </div>
            <div className="stw-stat">
              <div className="stw-stat-value">
                <CountUp value={450000} />
              </div>
              <div className="stw-stat-label">Researchers in Nigeria</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* About */}
        <section className="stw-about">
          <div className="stw-container stw-about-grid">
            <Reveal>
              <div className="stw-about-copy">
                <span className="stw-eyebrow">About</span>
                <h2 className="stw-h2">Research data collection, rebuilt for African researchers</h2>
                <p>
                  SurveyTools is a research networking platform that simplifies and streamlines
                  data collection for researchers. The platform connects student researchers who
                  need survey responses with willing respondents who participate in exchange for
                  structured rewards.
                </p>
                <p>
                  Built by students, for researchers — SurveyTools understands the realities of
                  Nigerian campus research: tight deadlines, inadequate response rates, and the
                  hidden cost of manual data collection. We built the platform that should have
                  existed years ago.
                </p>
                <p>
                  When your survey goes live on SurveyTools, it reaches a verified pool of
                  student respondents matched to your target demographic. You get responses —
                  and we deliver the analysis alongside them.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="stw-flow">
                <div className="stw-flow-step">
                  <span className="stw-flow-dot" />
                  <span className="stw-flow-text">Researcher posts survey</span>
                </div>
                <div className="stw-flow-arrow">
                  <ArrowDownIcon />
                </div>
                <div className="stw-flow-step">
                  <span className="stw-flow-dot" />
                  <span className="stw-flow-text">SurveyTools matches respondents</span>
                </div>
                <div className="stw-flow-arrow">
                  <ArrowDownIcon />
                </div>
                <div className="stw-flow-step">
                  <span className="stw-flow-dot" />
                  <span className="stw-flow-text">Data + analysis delivered</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="stw-how">
          <div className="stw-container">
            <Reveal>
              <div className="stw-section-head">
                <span className="stw-eyebrow">How It Works</span>
                <h2 className="stw-h2">From survey to results in three steps</h2>
              </div>
            </Reveal>

            <div className="stw-how-grid">
              <Reveal>
                <div className="stw-how-card">
                  <span className="stw-how-num">01</span>
                  <h3>Post your survey</h3>
                  <p>
                    Upload your questionnaire or share your Google Form link. Tell us your
                    target demographic and we&rsquo;ll handle the matching.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="stw-how-card">
                  <span className="stw-how-num">02</span>
                  <h3>We recruit verified respondents</h3>
                  <p>
                    SurveyTools distributes your survey to verified, incentivised respondents
                    matched to your target. Rewards are paid automatically on completion.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="stw-how-card">
                  <span className="stw-how-num">03</span>
                  <h3>Receive your analysis</h3>
                  <p>
                    Receive cleaned data together with summary statistics, charts, heatmaps and
                    analysis ready for your research.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="stw-who">
          <div className="stw-container">
            <Reveal>
              <div className="stw-section-head">
                <span className="stw-eyebrow">Who It&rsquo;s For</span>
                <h2 className="stw-h2">Built for researchers. Rewarding for respondents.</h2>
              </div>
            </Reveal>

            <div className="stw-who-grid">
              <Reveal>
                <div className="stw-who-card">
                  <span className="stw-badge">
                    <CheckIcon /> Researchers
                  </span>
                  <h3 style={{ marginTop: 14 }}>For researchers</h3>
                  <p>
                    Whether you&rsquo;re a final-year undergraduate running your thesis survey,
                    a postgraduate researcher collecting data for your dissertation, or an
                    organisation running a community study — SurveyTools gives you access to a
                    verified respondent pool, fast turnaround, and complete data analysis in a
                    single transaction.
                  </p>
                  <ul className="stw-who-list">
                    <li><CheckIcon /> Target by faculty, department, level, state, and more</li>
                    <li><CheckIcon /> 200–500 verified responses</li>
                    <li><CheckIcon /> 48-hour average turnaround</li>
                    <li><CheckIcon /> Cleaned data + full analysis included</li>
                    <li><CheckIcon /> Export in multiple formats</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="stw-who-card stw-who-card--dark">
                  <span className="stw-badge">
                    <CheckIcon /> Respondents
                  </span>
                  <h3 style={{ marginTop: 14 }}>For respondents</h3>
                  <p>
                    Earn airtime, data, mobile money, or discount vouchers from partner
                    businesses by completing surveys from your phone. SurveyTools matches you to
                    relevant surveys and rewards are credited automatically after completion.
                  </p>
                  <ul className="stw-who-list">
                    <li><CheckIcon /> Complete surveys anytime</li>
                    <li><CheckIcon /> Earn airtime, data or vouchers</li>
                    <li><CheckIcon /> Instant rewards</li>
                    <li><CheckIcon /> Missions, levels and daily bonuses</li>
                    <li><CheckIcon /> No minimum commitment</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why SurveyTools */}
        <section className="stw-why">
          <div className="stw-container">
            <Reveal>
              <div className="stw-section-head">
                <span className="stw-eyebrow">Why SurveyTools</span>
                <h2 className="stw-h2">The only platform that checks every box for Nigerian researchers</h2>
              </div>
            </Reveal>

            <div className="stw-why-grid">
              {[
                { icon: <ShieldIcon />, title: "Verified respondents", body: "Every respondent is verified by institution, faculty, department and level of study." },
                { icon: <ChartIcon />, title: "Analysis included", body: "Receive cleaned datasets, summary statistics and advanced charts without paying separately for analysis." },
                { icon: <NairaIcon />, title: "Transparent naira pricing", body: "Flat pricing in naira with no hidden fees." },
                { icon: <ClockIcon />, title: "Fast turnaround", body: "Most surveys reach full response within 48 hours." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="stw-why-card">
                    <div className="stw-why-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Traction & Trust */}
        <section className="stw-traction">
          <div className="stw-container">
            <Reveal>
              <div className="stw-section-head">
                <span className="stw-eyebrow">Early Traction</span>
                <h2 className="stw-h2">Already trusted by researchers across Nigeria — and beyond</h2>
              </div>
            </Reveal>

            <Reveal>
              <div className="stw-traction-stats">
                <div className="stw-traction-stat">
                  <div className="stw-traction-value"><CountUp value={8} /></div>
                  <div className="stw-traction-label">Pilot customers</div>
                </div>
                <div className="stw-traction-stat">
                  <div className="stw-traction-value"><CountUp value={100} prefix="₦" suffix="K" /></div>
                  <div className="stw-traction-label">Revenue</div>
                </div>
                <div className="stw-traction-stat">
                  <div className="stw-traction-value"><CountUp value={1} /></div>
                  <div className="stw-traction-label">International customer (Ghana)</div>
                </div>
                <div className="stw-traction-stat">
                  <div className="stw-traction-value"><CountUp value={2} /></div>
                  <div className="stw-traction-label">Campus partnerships</div>
                </div>
              </div>
            </Reveal>

            <div className="stw-testimonials">
              <Reveal>
                <div className="stw-testimonial">
                  <blockquote>
                    &ldquo;SurveyTools understood the exact pain of final-year data collection. We
                    got our responses faster than we expected.&rdquo;
                  </blockquote>
                  <cite>— Researcher, OAU</cite>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="stw-testimonial">
                  <blockquote>
                    &ldquo;The platform gave us direct access to a student audience we couldn&rsquo;t
                    have reached any other way.&rdquo;
                  </blockquote>
                  <cite>— Partner Institution</cite>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section className="stw-waitlist">
          <div className="stw-container stw-waitlist-inner">
            <span className="stw-eyebrow stw-eyebrow--on-dark">Launching September 2026</span>
            <h2 className="stw-h2 stw-h2--on-dark">Be first when we launch.</h2>
            <p>
              Join our WhatsApp community to get early access, launch updates and exclusive
              benefits.
            </p>
            <div className="stw-waitlist-cta">
              <a
                href="https://chat.whatsapp.com/DZDnDKI87qJAVrJZHqRjQN?s=cl&p=a&ilr=0&amv=0"
                target="_blank"
                rel="noopener noreferrer"
                className="stw-btn stw-btn--primary"
              >
                <WhatsAppIcon /> Join the Waitlist on WhatsApp
              </a>
            </div>
            <p className="stw-waitlist-note">Free to join. No spam. Leave anytime.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="stw-footer">
        <div className="stw-container">
          <div className="stw-footer-grid">
            <div>
              <div className="stw-footer-brand">SurveyTools</div>
              <p className="stw-footer-tagline">
                Africa&rsquo;s research data platform.
                <br />
                A product of Omega Digital Technology Innovations.
              </p>
            </div>
            {/* <div>
              <h4>Quick Links</h4>
              <div className="stw-footer-links">
                <a href="#how-it-works">How It Works</a>
                <a href="#who-its-for">For Researchers</a>
                <a href="#who-its-for">For Respondents</a>
                <a href={WHATSAPP_WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                </a>
              </div>
            </div> */}
            <div>
              <h4>Contact</h4>
              <div className="stw-footer-links">
                <a href="mailto:help.surveytools@gmail.com">Email</a>
                <a href="https://www.linkedin.com/company/surveyproapp/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a href="https://chat.whatsapp.com/DZDnDKI87qJAVrJZHqRjQN?s=cl&p=a&ilr=0&amv=0" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href="https://www.instagram.com/surveytools_?igsh=c2trNGRtMTZ6MjU1" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://x.com/SurveyTools_App?s=09" target="_blank" rel="noopener noreferrer">Twitter/X</a>
              </div>
            </div>
          </div>
          <div className="stw-footer-bottom">
            © 2026 Omega Digital Technology Innovations. All rights reserved. SurveyTools v1.0
            launching September 2026.
          </div>
        </div>
      </footer>
    </div>
  );
}
