import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Mail, Github, Linkedin, FileDown, Wrench, BrainCircuit,
  Workflow, Building2, Cpu, Zap, BadgeCheck, Sparkles, Globe
} from "lucide-react";

const fadeIn = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const projects = [
  {
    title: "Transcript Editor – Q&A Pipeline",
    tagline: "Streamlit + OpenAI API | Automated interview editing and formatting",
    bullets: [
      "Developed a web app for transcript editing using Streamlit and ChatGPT API.",
      "Built context-aware Q&A formatting with follow-up question tracking.",
      "Integrated fact-check prompts and proper noun validation for quality output."
    ],
    tags: ["AI", "Streamlit", "Python", "OpenAI"],
    link: "https://transcript-editor-7nisx28hrbmxccuy7jqujz.streamlit.app/",
  },
  {
    title: "Ops Automations – CRM to Slack Alerts",
    tagline: "Make.com + Airtable + Slack | Real-time workflow automation",
    bullets: [
      "Built automations to parse CRM data and send real-time alerts to Slack.",
      "Used Make.com to implement delays, retries, and conditional triggers.",
      "Documented flows for easy maintenance and handover."
    ],
    tags: ["Make.com", "Airtable", "Slack", "Automation"],
    link: "#",
  },
  {
    title: "Construction Estimating Toolkit",
    tagline: "Bluebeam + PlanSwift + Excel | Efficient takeoffs and proposals",
    bullets: [
      "Created accurate cost estimates from plans using Bluebeam and PlanSwift.",
      "Prepared BOQs and proposals aligned to client requirements.",
      "Managed RFQs and subcontractor coordination for competitive pricing."
    ],
    tags: ["Construction", "Estimating", "Bluebeam", "PlanSwift"],
    link: "#",
  }
];

const skills = [
  { icon: BrainCircuit, label: "AI / LLM Ops" },
  { icon: Workflow, label: "Make.com, Zapier, n8n" },
  { icon: Cpu, label: "Python, APIs" },
  { icon: Globe, label: "Web Apps" },
  { icon: Wrench, label: "Bluebeam, PlanSwift" },
  { icon: Building2, label: "Construction IQ" },
];

const badges = ["AI", "Automation", "Make.com", "Airtable", "Streamlit", "Python", "Bluebeam", "PlanSwift", "Excel", "Estimating"];

const isExternal = (url) => url && url !== "#" && !url.startsWith("#");

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-white/80 selection:text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-xl bg-white" />
            <span className="font-semibold tracking-tight">Jephson Co</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact">
              <Button className="rounded-2xl px-4 h-9">Let’s talk</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-start gap-8">
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Civil Engineer → AI & Automations
              <span className="block text-neutral-400 text-xl md:text-2xl mt-3 font-normal">
                I build reliable, clean systems that feel like they shipped from Cupertino.
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="max-w-2xl text-neutral-300">
              I bridge engineering discipline with modern workflow automation. From parsing messy operational data to orchestrating low-code tools and custom scripts, I ship 
              solutions that reduce manual work and raise quality.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3">
              {/* View Work → scroll to Work section */}
              <a href="#work">
                <Button className="rounded-2xl h-10 px-5">View Work</Button>
              </a>

              {/* Hire Me → open email */}
              <a href="mailto:jephsonco.automations@gmail.com?subject=Project%20Inquiry%20from%20Portfolio">
                <Button variant="secondary" className="rounded-2xl h-10 px-5">Hire Me</Button>
              </a>

              {/* Resume → open PDF in new tab */}
              <a href="/Jephson_Co_Resume.pdf" target="_blank" rel="noreferrer">
                <Button variant="ghost" className="rounded-2xl h-10 px-3">
                  <FileDown className="w-4 h-4 mr-2" />Resume
                </Button>
              </a>
            </motion.div>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 pt-3">
              {badges.map((b) => (
                <span key={b} className="text-xs md:text-[13px] rounded-full border border-white/10 px-3 py-1 text-neutral-300">{b}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="border-y border-white/10 bg-neutral-900/20">
        <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 md:grid-cols-6 gap-4">
          {skills.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-neutral-300">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <s.icon className="w-5 h-5" />
              </div>
              <span className="text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-20">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <motion.h2 variants={fadeIn} className="text-2xl md:text-4xl font-semibold tracking-tight mb-6">Selected Work</motion.h2>
          <motion.p variants={fadeIn} className="text-neutral-300 max-w-2xl mb-10">
            A mix of AI-assisted tooling and pragmatic automation. Designed to be maintainable, documented, and hand-off friendly.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group">
                <Card className="rounded-3xl bg-neutral-900/40 border-white/10 hover:bg-neutral-900/60 transition overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                        <p className="text-neutral-400 mt-1">{p.tagline}</p>
                      </div>
                      <Sparkles className="w-5 h-5 text-neutral-400" />
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-300 list-disc list-inside">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-neutral-300">{t}</span>
                      ))}
                    </div>
                    <div className="mt-5">
                      {p.link && (
                        <a
                          href={p.link}
                          className="inline-flex items-center text-sm text-white/90 hover:opacity-80"
                          {...(isExternal(p.link) ? { target: "_blank", rel: "noreferrer" } : {})}
                        >
                          View details <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6">About</h2>
            <p className="text-neutral-300 leading-relaxed">
              I’m Jephson, a Civil Engineer who builds AI-augmented workflows. My background spans estimating, RFQs, supplier coordination, and site constraints—ground truth that keeps my automations practical. I work across Make, Zapier, n8n, Airtable, and custom Python to connect CRMs, docs, and messaging.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              I value clarity, reliability, and calm interfaces. Expect readable configs, versioned blueprints, and documentation your team can own.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge icon={Zap} text="Impact-first" />
              <Badge icon={BadgeCheck} text="Documented" />
              <Badge icon={Cpu} text="API-native" />
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="rounded-3xl bg-neutral-900/40 border-white/10">
              <div className="p-6">
                <h3 className="font-semibold tracking-tight">Quick Facts</h3>
                <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
                  <li>• Based in PH, remote-ready across time zones.</li>
                  <li>• Civil Engineering foundation → dependable systems thinking.</li>
                  <li>• Tooling: Make, Zapier, Airtable, n8n, Python, OpenAI, Streamlit.</li>
                  <li>• Sectors: Construction, PropTech, B2B SaaS, Operations.</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Social href="mailto:jephsonco.automations@gmail.com" label="Email" Icon={Mail} />
                  <Social href="https://github.com/jephsonco" label="GitHub" Icon={Github} />
                  <Social href="https://linkedin.com/in/jephsonco" label="LinkedIn" Icon={Linkedin} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Workflow className="w-5 h-5" />}
            title="Workflow Automations"
            points={[
              "Design and build in Make/Zapier/n8n",
              "SLA timers, retries, and error routes",
              "Dashboards + docs for handover",
            ]}
          />
          <ServiceCard
            icon={<BrainCircuit className="w-5 h-5" />}
            title="AI-Assisted Tools"
            points={[
              "LLM prompts & retrieval flows",
              "Document parsing and Q&A prep",
              "Human-in-the-loop review",
            ]}
          />
          <ServiceCard
            icon={<Building2 className="w-5 h-5" />}
            title="Estimating Systems"
            points={[
              "Reusable BOQ templates",
              "Supplier/RFQ coordination",
              "Cost-checks and scope alignment",
            ]}
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4">
        <Card className="rounded-3xl bg-gradient-to-tr from-neutral-900/60 to-neutral-800/40 border-white/10 overflow-hidden">
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Let’s build something calm, fast, and dependable.</h3>
              <p className="text-neutral-300 mt-2">Send a brief, or just a problem statement. I’ll propose a path and timeline.</p>
            </div>
            {/* Make CTA email too */}
            <a href="mailto:jephsonco.automations@gmail.com?subject=Project%20Inquiry%20from%20Portfolio">
              <Button className="rounded-2xl h-10 px-5">
                Start a Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </Card>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6">Contact</h2>
        <p className="text-neutral-300 mb-8 max-w-2xl">
          Email works best. Share your current stack and the outcome you want—automation targets, response times, or a demo you’d like to see.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:jephsonco.automations@gmail.com">
            <Button className="rounded-2xl h-10 px-5"><Mail className="w-4 h-4 mr-2" />jephsonco.automations@gmail.com</Button>
          </a>
          <a href="https://linkedin.com/in/jephsonco" target="_blank" rel="noreferrer">
            <Button variant="secondary" className="rounded-2xl h-10 px-5"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</Button>
          </a>
          <a href="https://github.com/jephsonco" target="_blank" rel="noreferrer">
            <Button variant="ghost" className="rounded-2xl h-10 px-5"><Github className="w-4 h-4 mr-2" />GitHub</Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Jephson Co. Crafted with calm energy.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard(props) {
  const { icon, title, points } = props;
  return (
    <Card className="rounded-3xl bg-neutral-900/40 border-white/10">
      <div className="p-6">
        <div className="flex items-center gap-2 text-neutral-300">
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">{icon}</div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        </div>
        <ul className="mt-4 space-y-2 text-neutral-300 text-sm list-disc list-inside">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function Social(props) {
  const { href, label, Icon } = props;
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <button className="inline-flex items-center rounded-2xl h-9 px-3 border border-white/20 text-neutral-200 hover:bg-white/5">
        <Icon className="w-4 h-4 mr-2" /> {label}
      </button>
    </a>
  );
}

function Badge(props) {
  const { icon: IconComp, text } = props;
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
      <IconComp className="w-4 h-4" /> {text}
    </div>
  );
}

// Minimal Card & Button components (replace shadcn/ui)
function Card(props) {
  const { className = "", children } = props;
  return <div className={"border " + className}>{children}</div>;
}

function Button(props) {
  const { variant = "primary", className = "", children } = props;
  const base = "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-white/20";
  const styles = {
    primary: "bg-white text-neutral-900 hover:bg-neutral-200",
    secondary: "bg-neutral-800 text-white border border-white/10 hover:bg-neutral-700",
    ghost: "bg-transparent text-white border border-white/10 hover:bg-white/5",
  };
  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
}
