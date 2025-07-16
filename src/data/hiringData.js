// hiringData.js
const hiringData = [
  {
    id: 1,
    icon: "📢",
    title: "Social Media Manager",
    summary: "Lead brand presence across social platforms. Plan, post, and analyze.",
    details: [
      "Deep knowledge of social media trends & algorithms",
      "Tools: Later, Buffer, Notion, Meta Business Suite",
      "Strong communication and team coordination"
    ],
    experience: "1–2 years preferred (Freshers with strong portfolios can apply)",
    location: "Remote / Hybrid",
    type: "Part-time or Full-time"
  },
  {
    id: 2,
    icon: "✍",
    title: "Content Strategist & Copywriter",
    summary: "Write content that sells — captions, blogs, landing pages, and ads.",
    details: [
      "SEO knowledge",
      "Strong grammar, storytelling & research abilities",
      "Experience with Grammarly, Surfer SEO"
    ],
    experience: "1–3 years in content writing or digital marketing",
    location: "Remote",
    type: "Project-based / Retainer"
  },
  {
    id: 3,
    icon: "🎨",
    title: "Graphic Designer",
    summary: "Create visually stunning content for social media and ads.",
    details: [
      "Tools: Canva, Photoshop, Illustrator, Figma",
      "Creative thinking & attention to detail",
      "Basic animation/video editing is a plus"
    ],
    experience: "1+ year or a strong portfolio",
    location: "Remote",
    type: "Freelance or Full-time"
  },
  {
    id: 4,
    icon: "🎬",
    title: "Video Editor & Reels Creator",
    summary: "Edit Reels, product videos, brand films, and ad creatives.",
    details: [
      "Tools: CapCut, Premiere Pro, After Effects",
      "Trend awareness & storytelling",
      "Fast turnaround on edits"
    ],
    experience: "6 months to 2 years (Showreel/portfolio required)",
    location: "Remote",
    type: "Freelance / Retainer"
  },
  {
    id: 5,
    icon: "🔍",
    title: "SEO Specialist",
    summary: "Boost Google rankings through keyword research & backlink strategies.",
    details: [
      "Tools: Ahrefs, SEMrush, Google Search Console",
      "Knowledge of on-page & off-page SEO",
      "Analytical mindset"
    ],
    experience: "1–3 years in SEO roles",
    location: "Remote",
    type: "Freelance / Contract"
  },
  {
    id: 6,
    icon: "📈",
    title: "Meta Ads & Performance Marketing Expert",
    summary: "Create and manage high-converting campaigns on Meta, Google, and YouTube.",
    details: [
      "Meta Ads Manager, Google Ads, UTM tracking",
      "Conversion-focused ad copy & creatives",
      "A/B testing, retargeting, lookalike audiences"
    ],
    experience: "2+ years with case studies",
    location: "Remote",
    type: "Retainer / Performance-based"
  },
  {
    id: 7,
    icon: "🧠",
    title: "Marketing Strategist",
    summary: "Lead client strategies from ideation to scale.",
    details: [
      "Deep understanding of branding, consumer psychology",
      "Strong analytical & creative skills",
      "Ability to lead and manage multi-role teams"
    ],
    experience: "3–5 years preferred (agency experience is a plus)",
    location: "Remote",
    type: "Part-time / Project-based"
  },
  {
    id: 8,
    icon: "🤝",
    title: "Client Success & Account Manager",
    summary: "Bridge between team and client. Ensure smooth execution.",
    details: [
      "Excellent communication & relationship management",
      "Project management tools: Trello, Notion, Slack",
      "Deadline-oriented & client-first attitude"
    ],
    experience: "1–2 years in a client-facing role",
    location: "Hybrid (preferred) / Remote",
    type: "Full-time"
  },
  {
    id: 9,
    icon: "📊",
    title: "Data & Analytics Specialist",
    summary: "Monitor KPIs, analyze campaign data, and provide actionable insights.",
    details: [
      "Google Analytics, Looker Studio, Meta Insights",
      "Strong Excel/Sheets knowledge, data visualization",
      "Conversion tracking, pixel setup"
    ],
    experience: "1–2 years in analytics or performance marketing",
    location: "Remote",
    type: "Freelance / Full-time"
  },
  {
    id: 10,
    icon: "💻",
    title: "Website Designer (UI/UX)",
    summary: "Design sleek, conversion-optimized websites and landing pages.",
    details: [
      "Tools: Figma, Adobe XD, Webflow, WordPress",
      "UI/UX principles & mobile-first design",
      "Collaboration with developers & marketers"
    ],
    experience: "1+ year or strong portfolio",
    location: "Remote",
    type: "Freelance / Full-time"
  },
  {
    id: 11,
    icon: "👨‍💻",
    title: "Frontend Developer",
    summary: "Build high-performance websites and landing pages.",
    details: [
      "HTML, CSS, JavaScript, Webflow/WordPress",
      "API integrations, GTM setup, CRM tools",
      "SEO-friendly development"
    ],
    experience: "1–3 years in frontend/web development",
    location: "Remote",
    type: "Full-time / Contract"
  },
  {
    id: 12,
    icon: "📝",
    title: "Email Marketing Specialist",
    summary: "Craft email sequences for lead generation and product launches.",
    details: [
      "Tools: Mailchimp, Klaviyo, ConvertKit",
      "Copywriting + segmentation strategy",
      "A/B testing and CTR optimization"
    ],
    experience: "1+ year with proven campaigns",
    location: "Remote",
    type: "Project-based / Retainer"
  },
  {
    id: 13,
    icon: "🎯",
    title: "Funnel Builder & CRO Expert",
    summary: "Build and optimize high-converting funnels and landing pages.",
    details: [
      "Funnel structure knowledge",
      "Tools: ClickFunnels, GoHighLevel, Leadpages",
      "A/B testing, Hotjar analytics"
    ],
    experience: "2+ years preferred",
    location: "Remote",
    type: "Freelance / Retainer"
  },
  {
    id: 14,
    icon: "📽",
    title: "Creative Director",
    summary: "Lead visual storytelling, content themes, and creative campaigns.",
    details: [
      "Strong design + video background",
      "Leadership & team communication",
      "Creative campaign ideation"
    ],
    experience: "4+ years in creative direction or agency work",
    location: "Remote / Hybrid",
    type: "Full-time"
  },
  {
    id: 15,
    icon: "🗣",
    title: "Brand Strategist",
    summary: "Define and refine brand voice, positioning, and identity.",
    details: [
      "Consumer psychology, brand architecture",
      "Research & storytelling",
      "Collaboration with content/design teams"
    ],
    experience: "2+ years in branding or strategy",
    location: "Remote",
    type: "Part-time / Project-based"
  },
  {
    id: 16,
    icon: "🤖",
    title: "AI Prompt Engineer / Automation Specialist",
    summary: "Create AI-driven content and automate repetitive marketing tasks.",
    details: [
      "Prompt writing, automation logic",
      "Tools: ChatGPT, Jasper, Zapier/Make",
      "Content optimization with AI"
    ],
    experience: "Beginner–Intermediate (rapid learners welcome)",
    location: "Remote",
    type: "Freelance / Retainer"
  },
  {
    id: 17,
    icon: "🛒",
    title: "E-commerce Marketing Specialist",
    summary: "Manage campaigns and product optimization for online stores.",
    details: [
      "Meta & Google Shopping Ads",
      "Shopify/Marketplace familiarity",
      "Upsell, funnel, retargeting strategies"
    ],
    experience: "2+ years in e-commerce marketing",
    location: "Remote",
    type: "Contract / Full-time"
  },
  {
    id: 18,
    icon: "🌍",
    title: "PR & Influencer Marketing Manager",
    summary: "Build collaborations with influencers and media outlets.",
    details: [
      "Outreach strategy, negotiation",
      "Influencer platforms (Upfluence, Heepsy)",
      "PR pitching & press kit building"
    ],
    experience: "1–2 years in influencer or PR domain",
    location: "Remote",
    type: "Project-based / Full-time"
  }
];

export default hiringData;
