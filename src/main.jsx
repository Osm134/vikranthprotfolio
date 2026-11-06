import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  TrendingUp,
  Users,
  Target,
  IndianRupee,
  Search,
  BarChart3,
  Megaphone,
  Globe,
  Sparkles,
  GraduationCap,
  BriefcaseBusiness,
  ExternalLink,
  CheckCircle2,
  Layers,
  MousePointerClick,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import "./style.css";

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const fadeScale = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const staggerSlow = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const months = [
  { month: "Jan", spend: 40000, leads: 186, revenue: 335600 },
  { month: "Feb", spend: 64000, leads: 296, revenue: 371432 },
  { month: "Mar", spend: 22000, leads: 339, revenue: 317151 },
  { month: "Apr", spend: 34000, leads: 639, revenue: 252795 },
  { month: "May", spend: 51000, leads: 743, revenue: 411059 },
  { month: "Jun", spend: 43000, leads: 453, revenue: 208280 },
  { month: "Jul", spend: 40000, leads: 493, revenue: 207713 },
  { month: "Aug", spend: 20000, leads: 233, revenue: 352313 },
  { month: "Sep", spend: 0, leads: 0, revenue: 0 },
];
const money = (n) => "₹" + Number(n).toLocaleString("en-IN");

const skillGroups = [
  {
    title: "Digital Marketing",
    icon: Megaphone,
    skills: [
      "SEO",
      "SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
    ],
  },
  {
    title: "Marketing Skills",
    icon: Target,
    skills: [
      "Lead Generation",
      "Competitor Analysis",
      "Conversion Optimization",
    ],
  },
  {
    title: "Advertising Platforms",
    icon: MousePointerClick,
    skills: ["Google Ads", "Meta Ads Manager"],
  },
  {
    title: "Analytics & Tracking",
    icon: BarChart3,
    skills: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Google Search Console",
      "Facebook Insights",
    ],
  },
  {
    title: "SEO Tools",
    icon: Search,
    skills: [
      "Ahrefs",
      "SEMrush",
      "Ubersuggest",
      "Yoast SEO",
      "Google Keyword Planner",
    ],
  },
  {
    title: "Creative Tools",
    icon: Layers,
    skills: [
      "Canva",
      "Adobe Photoshop",
      "Adobe Creative Suite",
      "CapCut",
      "Filmora",
    ],
  },
  {
    title: "AI Tools",
    icon: Sparkles,
    skills: ["ChatGPT", "Jasper", "Copy.ai"],
  },
];
const experiences = [
  {
    company: "VJC Overseas",
    location: "Hyderabad, India",
    role: "Digital Marketing Team Lead",
    date: "December 2025 — Present",
    current: true,
    tags: ["SEO", "Google Ads", "Meta Ads", "Analytics", "Leadership"],
    bullets: [
      "Led SEO, social media, PPC, and email marketing activities.",
      "Managed a team of 5 digital marketing professionals.",
      "Managed Google Ads and Meta Ads campaigns; monitored advertising expenditure, leads, and reported revenue.",
      "Improved campaign ROI through ad optimization and increased LinkedIn engagement through content strategy.",
      "Monitored campaign performance using Google Analytics.",
      "Worked on SEO optimization for vjcoverseas.com, including SEO audits and on-page, off-page, and Local SEO improvements.",
      "Coordinated landing page development and website modifications with the IT team.",
      "Coordinated lead feedback with Hyderabad and Bangalore sales teams.",
      "Worked with Google Analytics 4, Google Tag Manager, and Google Search Console.",
      "Created and coordinated promotional posters and reels for VJC Overseas and Kavlven IT.",
      "Conducted daily training sessions for digital marketing interns and guided the Digital Marketing Executive on Canva and advertising activities.",
    ],
  },
  {
    company: "GV Media House Pvt Ltd",
    location: "Hyderabad, India",
    role: "Digital Marketing Executive",
    date: "November 2021 — December 2025",
    tags: ["Social Media", "Content", "SEO", "Paid Ads"],
    bullets: [
      "Managed social media accounts across multiple platforms.",
      "Scheduled and published marketing content.",
      "Monitored audience engagement and customer interactions.",
      "Prepared social media performance reports.",
      "Assisted with SEO, content marketing, and paid advertising.",
    ],
  },
  {
    company: "Ideas Factory Pvt Ltd",
    location: "Hyderabad, India",
    role: "Social Media Marketing",
    date: "March 2017 — November 2021",
    tags: ["Social Media", "YouTube", "Content Planning"],
    bullets: [
      "Managed multiple social media pages and YouTube channels, ensuring consistent content publishing and audience engagement.",
      "Created and managed YouTube channels, including video uploads, titles, descriptions, tags, and thumbnails.",
      "Planned content calendars and scheduled posts across social media platforms to maintain a consistent publishing strategy.",
      "Monitored YouTube and social media analytics, tracking views, reach, engagement, and audience growth.",
      "Coordinated content creation and page management activities to improve online visibility and maintain brand consistency.",
    ],
  },
];
const projects = [
  {
    no: "01",
    category: "PAID SOCIAL · CAMPAIGN STRATEGY",
    title: "Social Media Marketing Campaign",
    desc: "Designed and executed a 4-week campaign for a lifestyle brand, using audience targeting and A/B testing to improve engagement.",
    metric: "45%",
    metricLabel: "Engagement improvement",
    tools: ["Meta Ads Manager", "Canva", "ChatGPT", "Facebook Insights"],
    visual: "social",
    details: [
      "Campaign planning and audience segmentation",
      "Creative development and content scheduling",
      "A/B testing and engagement monitoring",
    ],
  },
  {
    no: "02",
    category: "SEO · ORGANIC VISIBILITY",
    title: "SEO Optimization Project",
    desc: "Conducted keyword research and implemented on-page SEO to improve organic visibility and website performance.",
    metric: "SEO",
    metricLabel: "End-to-end optimization workflow",
    tools: ["SEMrush", "Google Search Console", "Ubersuggest", "Yoast SEO"],
    visual: "seo",
    details: [
      "Keyword research and website audit",
      "On-page optimization and content refinement",
      "Search visibility and performance monitoring",
    ],
  },
  {
    no: "03",
    category: "PAID SEARCH · PERFORMANCE",
    title: "Google Ads Campaign",
    desc: "Created and optimized Search and Display campaigns, refining campaign structure and targeting.",
    metric: "5.2%",
    metricLabel: "Click-through rate (CTR)",
    tools: ["Google Ads", "Google Analytics 4", "Google Keyword Planner"],
    visual: "ads",
    details: [
      "Search and Display campaign setup",
      "Keyword planning and ad optimization",
      "Campaign performance monitoring",
    ],
  },
  {
    no: "04",
    category: "CREATIVE · AI WORKFLOW",
    title: "Content Creation & AI Integration",
    desc: "Developed social media creatives and advertising copy, using AI tools to accelerate content generation.",
    metric: "AI +",
    metricLabel: "Creative production workflow",
    tools: ["Canva", "ChatGPT", "Adobe Photoshop"],
    visual: "creative",
    details: [
      "Social media creative concepts",
      "Advertising copy development",
      "AI-assisted ideation and content workflow",
    ],
  },
];
function IconTile({ name }) {
  const map = {
    "Google Ads": ["googleads", "G"],
    "Meta Ads Manager": ["meta", "M"],
    "Google Analytics": ["googleanalytics", "GA"],
    "Google Analytics 4": ["googleanalytics", "GA"],
    "Google Tag Manager": ["googletagmanager", "GTM"],
    "Google Search Console": ["googlesearchconsole", "GSC"],
    Ahrefs: ["ahrefs", "aH"],
    SEMrush: ["semrush", "S"],
    Ubersuggest: ["ubersuggest", "U"],
    "Yoast SEO": ["yoast", "Y"],
    Canva: ["canva", "C"],
    "Adobe Photoshop": ["adobephotoshop", "Ps"],
    "Adobe Creative Suite": ["adobe", "A"],
    CapCut: ["capcut", "CC"],
    Filmora: ["filmora", "F"],
    ChatGPT: ["openai", "✳"],
    Jasper: ["jasper", "J"],
    "Copy.ai": ["copydotai", "C"],
    "Facebook Insights": ["facebook", "f"],
    "Google Keyword Planner": ["googleads", "G"],
  };
  const colors = {
    "Google Ads": "#fbbc04",
    "Meta Ads Manager": "#6d8cff",
    "Google Analytics": "#f9ab00",
    "Google Analytics 4": "#f9ab00",
    "Google Tag Manager": "#8ab4f8",
    "Google Search Console": "#79a7ff",
    Ahrefs: "#f39b36",
    SEMrush: "#ff642d",
    Ubersuggest: "#22b573",
    "Yoast SEO": "#a4286a",
    Canva: "#36c5d8",
    "Adobe Photoshop": "#31a8ff",
    "Adobe Creative Suite": "#ed1c24",
    CapCut: "#e9eef8",
    Filmora: "#00b7a8",
    ChatGPT: "#74aa9c",
    Jasper: "#8b75ff",
    "Copy.ai": "#a78bfa",
    "Facebook Insights": "#6d8cff",
    "Google Keyword Planner": "#fbbc04",
  };
  const [slug, fallback] = map[name] || ["", name.slice(0, 1)];
  return (
    <span
      className="brand-icon"
      style={{ "--brand": colors[name] || "#8aa5ff" }}
    >
      {slug && (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt=""
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
      <i>{fallback}</i>
    </span>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#home"],
    ["Experience", "#experience"],
    ["Case Studies", "#case-studies"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="header">
      <a className="brand" href="#home">
        <span className="brand-mark">RV</span>
        <span>
          RUNKU VIKRANTH<small>DIGITAL MARKETING</small>
        </span>
      </a>
      <button
        className="mobile-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact">
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
function SectionHead({ eyebrow, title, desc }) {
  return (
    <motion.div className="section-head" variants={fade}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </motion.div>
  );
}
function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div className="status-pill" variants={fade}>
            <span className="pulse" /> DIGITAL MARKETING PROFESSIONAL
          </motion.div>
          <motion.p className="hero-kicker" variants={fade}>
            Strategy. Performance. Growth.
          </motion.p>
          <motion.h1 variants={fade}>
            RUNKU
            <br />
            <span>VIKRANTH</span>
            <i>.</i>
          </motion.h1>
          <motion.h2 variants={fade}>Digital Marketing Team Lead</motion.h2>
          <motion.p className="hero-desc" variants={fade}>
            I build data-informed digital experiences that connect brands with
            the right audiences — through SEO, performance marketing, content
            strategy, and collaborative leadership.
          </motion.p>
          <motion.div className="hero-tags" variants={fade}>
            <span>SEO Specialist</span>
            <b>·</b>
            <span>Performance Marketer</span>
            <b>·</b>
            <span>Digital Strategist</span>
          </motion.div>
          <motion.div className="hero-actions" variants={fade}>
            <a className="btn primary" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a
              className="btn secondary"
              href="/Runku_Vikranth_Resume.pdf"
              download
            >
              Download resume <Download size={16} />
            </a>
          </motion.div>
          <motion.div className="hero-contact" variants={fade}>
            <span>
              <MapPin size={14} /> Hyderabad, India
            </span>
            <span>
              <BriefcaseBusiness size={14} /> 8+ years experience
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <img
                className="portrait-img"
                src="/portrait.jpg"
                alt="Runku Vikranth — Digital Marketing Team Lead"
              />
            </div>
          </div>
          <div className="float-card float-seo">
            <Search size={16} />
            <span>SEO Strategy</span>
          </div>
          <div className="float-card float-ads">
            <Target size={16} />
            <span>Paid Media</span>
          </div>
          <div className="experience-stamp">
            <strong>
              8<span>+</span>
            </strong>
            <small>
              YEARS OF
              <br />
              EXPERIENCE
            </small>
          </div>
          <div className="hero-art-caption">
            MARKETING WITH
            <br />
            <em>MEASURABLE INTENT</em>
          </div>
        </motion.div>
      </div>
      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
        <span>01 / 07</span>
      </div>
    </section>
  );
}
function Stats() {
  const stats = [
    {
      value: "₹6.72L",
      label: "Ad budget / spend",
      desc: "Combined reported campaign spend",
      icon: IndianRupee,
    },
    {
      value: "8,182",
      label: "Reported leads",
      desc: "Across January–September 2026",
      icon: Users,
    },
    {
      value: "₹64.56L",
      label: "Reported revenue",
      desc: "Excluding GST; attribution not independently verified",
      icon: TrendingUp,
    },
    {
      value: "₹82.13",
      label: "Average CPL",
      desc: "Reported average cost per lead",
      icon: Target,
    },
    {
      value: "8+",
      label: "Years experience",
      desc: "Across digital and social marketing",
      icon: BriefcaseBusiness,
    },
    {
      value: "5",
      label: "Team members",
      desc: "Digital marketing professionals managed",
      icon: Users,
    },
  ];
  return (
    <section className="stats-section">
      <div className="section-wrap">
        <motion.div
          className="stats-intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fade}
        >
          <span className="eyebrow">IMPACT AT A GLANCE</span>
          <h2>
            Numbers with
            <br />
            <em>business context.</em>
          </h2>
          <p>
            Selected figures from the VJC Overseas performance report and
            professional experience. Reported revenue is not presented as
            verified ad-attributed revenue.
          </p>
        </motion.div>
        <motion.div
          className="stats-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {stats.map((s, i) => (
            <motion.div
              className="stat-card"
              key={s.label}
              variants={fadeScale}
            >
              <div className="stat-icon">
                <s.icon size={19} />
              </div>
              <strong>{s.value}</strong>
              <b>{s.label}</b>
              <p>{s.desc}</p>
              <span className="stat-index">0{i + 1}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
function Experience() {
  return (
    <section className="section-wrap section-pad" id="experience">
      <SectionHead
        eyebrow="THE JOURNEY"
        title="Experience that compounds."
        desc="A career built across social media, digital campaigns, organic visibility, and team leadership."
      />
      <motion.div
        className="timeline"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerSlow}
      >
        {experiences.map((e, i) => (
          <motion.article
            className="timeline-item"
            key={e.company}
            variants={slideLeft}
          >
            <div className="timeline-marker">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="experience-card">
              <div className="exp-top">
                <div>
                  <span className="exp-company">{e.company}</span>
                  <span className="exp-location">
                    <MapPin size={13} />
                    {e.location}
                  </span>
                </div>
                <span className={e.current ? "date current" : "date"}>
                  {e.date}
                </span>
              </div>
              <h3>{e.role}</h3>
              <div className="tag-row">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <ul className="responsibilities">
                {e.bullets.map((b) => (
                  <li key={b}>
                    <CheckCircle2 size={15} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {i === 0 && (
                <a className="text-link" href="#vjc-case-study">
                  Explore VJC case studies <ArrowRight size={16} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
function VJCCaseStudy() {
  const [filter, setFilter] = useState("all");
  const data =
    filter === "all"
      ? months
      : months.filter((m) =>
          filter === "active" ? m.spend > 0 : m.spend === 0,
        );
  return (
    <section className="case-section" id="case-studies">
      <div className="section-wrap">
        <SectionHead
          eyebrow="FEATURED CASE STUDY · 01"
          title="VJC Overseas — advertising performance."
          desc="A monthly view of reported campaign spend, leads, and revenue excluding GST for January–September 2026."
        />
        <div className="case-banner" id="vjc-case-study">
          <div>
            <span className="case-label">DIGITAL ADVERTISING PERFORMANCE</span>
            <h3>
              From campaign activity
              <br />
              to performance visibility.
            </h3>
            <p>
              Campaign monitoring, lead generation, budget management,
              performance reviews, and campaign optimization.
            </p>
            <div className="case-meta">
              <span>VJC Overseas</span>
              <span>JAN — SEP 2026</span>
              <span>HYDERABAD</span>
            </div>
          </div>
          <div className="case-graphic">
            <div className="graphic-ring">
              <span>2026</span>
              <small>
                CAMPAIGN
                <br />
                REPORT
              </small>
            </div>
            <div className="graphic-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <div className="report-totals">
          <div>
            <small>TOTAL AD SPEND</small>
            <strong>₹3,14,000</strong>
          </div>
          <div>
            <small>REPORTED LEADS</small>
            <strong>3,382</strong>
          </div>
          <div>
            <small>REPORTED REVENUE*</small>
            <strong>₹28,56,343</strong>
          </div>
          <div>
            <small>AVERAGE CPL</small>
            <strong>₹92.84</strong>
          </div>
        </div>
        <div className="chart-toolbar">
          <div>
            <span className="eyebrow">CAMPAIGN BREAKDOWN</span>
            <h3>Monthly performance</h3>
          </div>
          <div className="filter-group">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All months
            </button>
            <button
              className={filter === "active" ? "active" : ""}
              onClick={() => setFilter("active")}
            >
              Campaign months
            </button>
            <button
              className={filter === "zero" ? "active" : ""}
              onClick={() => setFilter("zero")}
            >
              Zero activity
            </button>
          </div>
        </div>
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-title">
              <span>01 / LEAD GENERATION</span>
              <strong>Leads by month</strong>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#253047"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  stroke="#8390a7"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis stroke="#8390a7" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#111a2b",
                    border: "1px solid #293750",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                />
                <Bar dataKey="leads" fill="#55b7ff" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-card">
            <div className="chart-title">
              <span>02 / MEDIA INVESTMENT</span>
              <strong>Ad spend by month</strong>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#253047"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  stroke="#8390a7"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#8390a7"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => "₹" + v / 1000 + "k"}
                />
                <Tooltip
                  formatter={(v) => money(v)}
                  contentStyle={{
                    background: "#111a2b",
                    border: "1px solid #293750",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                />
                <Bar dataKey="spend" fill="#8d83ff" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-card wide">
            <div className="chart-title">
              <span>03 / REVENUE REPORTED</span>
              <strong>Monthly revenue excluding GST</strong>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#253047"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  stroke="#8390a7"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#8390a7"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => "₹" + Math.round(v / 1000) + "k"}
                />
                <Tooltip
                  formatter={(v) => money(v)}
                  contentStyle={{
                    background: "#111a2b",
                    border: "1px solid #293750",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#58d6b0"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#58d6b0" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-card wide">
            <div className="chart-title">
              <span>04 / SPEND VS REVENUE</span>
              <strong>Monthly comparison</strong>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#253047"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  stroke="#8390a7"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#8390a7"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => "₹" + Math.round(v / 1000) + "k"}
                />
                <Tooltip
                  formatter={(v) => money(v)}
                  contentStyle={{
                    background: "#111a2b",
                    border: "1px solid #293750",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="spend"
                  name="Ad spend"
                  fill="#8d83ff"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="revenue"
                  name="Revenue excl. GST"
                  fill="#58d6b0"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="data-table-wrap">
          <div className="table-heading">
            <h4>Monthly report data</h4>
            <span>INR · Jan–Sep 2026</span>
          </div>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Ad spend</th>
                  <th>Leads</th>
                  <th>Revenue excl. GST</th>
                </tr>
              </thead>
              <tbody>
                {months.map((m) => (
                  <tr key={m.month}>
                    <td>{m.month}</td>
                    <td>{money(m.spend)}</td>
                    <td>{m.leads.toLocaleString("en-IN")}</td>
                    <td>{money(m.revenue)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>₹3,14,000</td>
                  <td>3,382</td>
                  <td>₹28,56,343</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <p className="disclaimer">
          * Revenue is shown as reported, excluding GST. It is not represented
          as independently audited or wholly attributable to advertising.
          September is recorded as zero spend, zero leads, and zero revenue. No
          conversion rate, ROAS, impressions, or clicks are inferred.
        </p>
      </div>
    </section>
  );
}
function SEOCase() {
  const steps = [
    ["01", "Research", "Keyword research and search intent mapping"],
    ["02", "Audit", "Website and technical SEO audit"],
    ["03", "Optimize", "On-page, content, off-page and Local SEO"],
    ["04", "Measure", "Search Console and GA4 monitoring"],
  ];
  return (
    <section className="section-wrap section-pad seo-section">
      <div className="seo-layout">
        <div className="seo-copy">
          <span className="eyebrow">FEATURED CASE STUDY · 02</span>
          <h2>
            Making search
            <br />
            <em>work harder.</em>
          </h2>
          <p className="lead">Website SEO Optimization — VJC Overseas</p>
          <p>
            SEO work focused on strengthening website structure, content
            relevance, local discovery, and performance measurement for the
            official VJC Overseas website.
          </p>
          <a
            className="text-link"
            href="https://vjcoverseas.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit vjcoverseas.com <ExternalLink size={15} />
          </a>
          <div className="seo-tool-row">
            {[
              "SEMrush",
              "Ahrefs",
              "Google Search Console",
              "Google Analytics 4",
              "Google Tag Manager",
              "Yoast SEO",
              "Ubersuggest",
            ].map((t) => (
              <span key={t}>
                <IconTile name={t} />
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="seo-panel">
          <div className="seo-panel-top">
            <div>
              <span>SEO WORKFLOW</span>
              <strong>Visibility, built step by step.</strong>
            </div>
            <Globe size={23} />
          </div>
          <div className="workflow">
            {steps.map((s, i) => (
              <div className="workflow-step" key={s[0]}>
                <div className="workflow-num">{s[0]}</div>
                <div>
                  <strong>{s[1]}</strong>
                  <p>{s[2]}</p>
                </div>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
          <div className="seo-pill-grid">
            <span>ON-PAGE SEO</span>
            <span>OFF-PAGE SEO</span>
            <span>TECHNICAL SEO</span>
            <span>LOCAL SEO</span>
          </div>
        </div>
      </div>
      <div className="seo-bottom-note">
        <span>
          <CheckCircle2 size={16} /> Website SEO audit
        </span>
        <span>
          <CheckCircle2 size={16} /> Landing page coordination with IT
        </span>
        <span>
          <CheckCircle2 size={16} /> GA4, GTM & Search Console monitoring
        </span>
      </div>
      <p className="disclaimer">
        This case study describes the work performed. No unverified ranking,
        backlink, traffic-growth, or keyword-position metrics are claimed.
      </p>
    </section>
  );
}
function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-wrap">
        <SectionHead
          eyebrow="TOOLS OF THE TRADE"
          title="A connected marketing toolkit."
          desc="A practical mix of strategy, media platforms, measurement, creative production, and AI-assisted workflows."
        />
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {skillGroups.map((g, i) => (
            <motion.div
              className="skill-group"
              key={g.title}
              variants={fadeScale}
            >
              <div className="skill-group-head">
                <span className="skill-group-icon">
                  <g.icon size={18} />
                </span>
                <div>
                  <small>0{i + 1} / CAPABILITY</small>
                  <h3>{g.title}</h3>
                </div>
              </div>
              <div className="skill-list">
                {g.skills.map((s) => (
                  <div className="skill-chip" key={s}>
                    <IconTile name={s} />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section className="section-wrap section-pad" id="projects">
      <SectionHead
        eyebrow="SELECTED WORK"
        title="Projects, with a point of view."
        desc="Campaigns and workflows that show how strategy turns into execution. Outcomes are stated only where figures were supplied."
      />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.article
            className={"project-card project-" + p.visual}
            key={p.no}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={fade}
          >
            <div className="project-visual">
              <div className="project-visual-top">
                <span>CASE FILE / {p.no}</span>
                <span>{p.category}</span>
              </div>
              {p.visual === "social" ? (
                <div className="social-mock">
                  <div className="mock-window">
                    <div className="mock-head">
                      <i />
                      <i />
                      <i />
                      <span>CAMPAIGN OVERVIEW</span>
                    </div>
                    <div className="mock-content">
                      <div className="mock-graph">
                        <b>Engagement</b>
                        <strong>+45%</strong>
                        <div className="bars">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                      <div className="mock-circle">
                        SOCIAL
                        <br />
                        GROWTH
                      </div>
                    </div>
                  </div>
                </div>
              ) : p.visual === "seo" ? (
                <div className="seo-mock">
                  <Search size={34} />
                  <div className="seo-search-line" />
                  <div className="seo-result">
                    <b>VJC Overseas</b>
                    <span>Website optimization workflow</span>
                    <i />
                    <i />
                  </div>
                  <div className="seo-metrics">
                    <span>ON-PAGE</span>
                    <span>TECHNICAL</span>
                    <span>LOCAL</span>
                  </div>
                </div>
              ) : p.visual === "ads" ? (
                <div className="ads-mock">
                  <div className="ads-label">CAMPAIGN CTR</div>
                  <strong>
                    5.2<span>%</span>
                  </strong>
                  <div className="ads-line">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <small>SEARCH + DISPLAY</small>
                </div>
              ) : (
                <div className="creative-mock">
                  <div className="creative-poster">
                    <span>
                      IDEAS INTO
                      <br />
                      <b>IMPACT.</b>
                    </span>
                    <small>CONTENT STUDIO / 2026</small>
                  </div>
                  <div className="creative-mini">
                    <span>AI</span>
                    <span>DESIGN</span>
                    <span>COPY</span>
                  </div>
                </div>
              )}
            </div>
            <div className="project-body">
              <div className="project-number">
                {p.no} <span>— {p.category}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-outcome">
                <strong>{p.metric}</strong>
                <span>{p.metricLabel}</span>
              </div>
              <div className="project-details">
                <b>MY WORK</b>
                {p.details.map((d) => (
                  <span key={d}>
                    <CheckCircle2 size={14} />
                    {d}
                  </span>
                ))}
              </div>
              <div className="project-tools">
                <b>TOOLS</b>
                <div>
                  {p.tools.map((t) => (
                    <span key={t}>
                      <IconTile name={t} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a className="project-link" href="#case-studies">
                View case study <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
function Leadership() {
  const items = [
    [
      "01",
      "Team leadership",
      "Managed a team of 5 digital marketing professionals.",
    ],
    [
      "02",
      "Training & mentoring",
      "Conducted daily intern training and guided the Digital Marketing Executive.",
    ],
    [
      "03",
      "Sales collaboration",
      "Coordinated lead feedback with Hyderabad and Bangalore sales teams.",
    ],
    [
      "04",
      "Cross-functional execution",
      "Collaborated with IT and MIS teams, and supported creative production and marketing execution.",
    ],
  ];
  return (
    <section className="leadership-section">
      <div className="section-wrap leadership-layout">
        <div>
          <span className="eyebrow">HOW I WORK</span>
          <h2>
            Good marketing
            <br />
            is a <em>team sport.</em>
          </h2>
          <p>
            Connecting specialists, systems, and customer-facing teams to keep
            campaigns moving with clarity.
          </p>
        </div>
        <div className="leadership-list">
          {items.map(([n, t, d]) => (
            <div className="leadership-item" key={n}>
              <span>{n}</span>
              <div>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
              <ArrowUpRight size={17} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Education() {
  return (
    <section className="section-wrap section-pad" id="education">
      <SectionHead eyebrow="FOUNDATIONS" title="Education & credentials." />
      <div className="education-grid">
        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={25} />
          </div>
          <div>
            <span className="eyebrow">BACHELOR'S DEGREE</span>
            <h3>Bachelor of Technology — Engineering</h3>
            <p>Aditya Institute of Technology and Management, Tekkali</p>
            <div className="education-score">
              <strong>74%</strong>
              <span>Academic score</span>
            </div>
          </div>
        </div>
        <div className="education-side">
          <div className="credential-card">
            <span className="eyebrow">CERTIFICATION · 2025</span>
            <h3>AI Powered Digital Marketing Program</h3>
            <p>Alkemy Edtech</p>
            <Sparkles size={21} />
          </div>
          <div className="language-card">
            <span className="eyebrow">LANGUAGES</span>
            <div>
              <b>English</b>
              <b>Telugu</b>
              <b>Hindi</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <span className="eyebrow">THE NEXT CHAPTER</span>
        <h2>
          Let's build something
          <br />
          that <em>drives growth.</em>
        </h2>
        <p>
          Open to professional opportunities, digital marketing leadership
          roles, SEO projects, and performance marketing collaborations.
        </p>
        <div className="contact-actions">
          <a className="btn primary" href="mailto:myspacevikkir@gmail.com">
            Email me <ArrowUpRight size={17} />
          </a>
          <a className="btn secondary" href="tel:+919849989733">
            Call me <Phone size={16} />
          </a>
          <a
            className="btn secondary whatsapp-btn"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp me <WhatsAppIcon size={15} />
          </a>
          <a
            className="btn secondary"
            href="/Runku_Vikranth_Resume.pdf"
            download
          >
            Download resume <Download size={16} />
          </a>
        </div>
        <div className="contact-details">
          <a href="mailto:myspacevikkir@gmail.com">
            <Mail size={16} /> myspacevikkir@gmail.com
          </a>
          <a href="tel:+919849989733">
            <Phone size={16} /> +91 9849989733
          </a>
          <span>
            <MapPin size={16} /> Hyderabad, Telangana, India
          </span>
        </div>
      </div>
      <footer className="footer">
        <div className="section-wrap">
          <a className="brand" href="#home">
            <span className="brand-mark">RV</span>
            <span>
              RUNKU VIKRANTH<small>DIGITAL MARKETING</small>
            </span>
          </a>
          <span>
            © {new Date().getFullYear()} Runku Vikranth. All rights reserved.
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </section>
  );
}
const WHATSAPP_URL =
  "https://wa.me/919849989733?text=" +
  encodeURIComponent(
    "Hi Runku, I found your portfolio and would like to connect.",
  );
function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <WhatsAppIcon size={26} />
      <span className="whatsapp-tooltip">Chat with me</span>
    </a>
  );
}
function App() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".section-wrap, .case-section, .skills-section, .stats-section, .leadership-section, .contact-section",
    );
    els.forEach((el) => el.classList.add("ready"));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <VJCCaseStudy />
        <SEOCase />
        <Skills />
        <Projects />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <WhatsAppFloat />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
