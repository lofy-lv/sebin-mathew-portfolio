import { Project, ProjectCategory } from "@/types";

export const projectCategories: { id: ProjectCategory; label: string; count: number }[] = [
  { id: "all", label: "All Projects", count: 34 },
  { id: "web-platform", label: "Web Platform", count: 12 },
  { id: "saas", label: "SaaS", count: 8 },
  { id: "mobile-app", label: "Mobile App", count: 5 },
  { id: "ai-automation", label: "AI & Automation", count: 5 },
  { id: "business-websites", label: "Business Websites", count: 4 },
];

export const projectsData: Project[] = [
  {
    id: "virtune-realtors",
    title: "Virtune Realtors",
    category: "ai-automation",
    categoryLabel: "AI & Automation",
    status: "shipped",
    description:
      "Architected generative real-estate recommendation engine with vector embeddings. Automated multi-criteria lead scoring and property indexing pipeline reducing broker triage latency by 68%.",
    tags: ["Next.js", "Vector DB", "Python FastAPI", "Tailwind"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGZWSh7UV7ub0FTMfTR8MGkBRMRf0QL7QsKniGILJ2d8WvfMDPKwN4FtptmdaiOggrgDdsPeN406n11JeiJuL6c8TxS8u0y6RBxY6Ub1JcUBHR27dy8YABpFKJWur1Pod8qZuccXQ2DgBhVox0610xrdNRoeREUOqIZb9FE7Q0M-j7k-ct-_6ODGAfe7oPf3VKZbTvGBftR_iqyyd_Gt6OWeETcFaO4nV6if23rQTv",
    liveUrl: "https://virtunerealtors.com",
    metrics: "60% faster agent matchmaking",
    featured: true,
  },
  {
    id: "connective-india",
    title: "Connective India",
    category: "web-platform",
    categoryLabel: "Web Platform",
    status: "shipped",
    description:
      "MSME ecosystem facilitating enterprise discovery and vendor procurement. Led sprint ceremonies, PRD specifications, and microservice decoupled architecture serving 14,000+ business entities.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIkx7AGrkVTJraK71WMD6Fs-64fkZ_waQBCCV96t4ZiK4auFKfXXyit3xyocSjsPje4EHY-XOs0Beau4jHLY6JH05zGdTGP6pnG8WAit01k1I23Df676GS-Cvg0NSjQM0Bk_eycQudi_PnvyTmCYexfMDv6NHP1KhTluUWMClZAmcTM9fjlajrkeJG6tstiNeirhbii_sswfrFkpBszdbXPvJ6u8Z6dOfEgUntuGGV",
    liveUrl: "https://connectiveindia.com",
    metrics: "14,000+ business entities",
    featured: true,
  },
  {
    id: "manvish-online",
    title: "Manvish Online",
    category: "saas",
    categoryLabel: "SaaS",
    status: "shipped",
    description:
      "Governed product discovery & full-cycle roadmap for a multi-tenant B2B vendor engine. Built automated partner commission math, multi-tenant RBAC permissions, and dispute resolution workflows.",
    tags: ["Multi-Tenant", "RBAC", "Next.js", "MongoDB"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBshzsvEtiE75K6FmlVVgd105hic_zDxti1KVjftr6CfxIvUxN0Mf17nCnBErPxknOBCs0bnjWDJx9qU5MkuHXL_gghKr3bYNTwebdapbqIrBDrSEgEu38YCLHFcMMlZAFIUWlsEmg8Zs9kPxT9nDv-mGwimGFiZ-6b43tW6peVi6uyD1AoTVYh5tS3XnjgpE7RUGN6sYp87kfwjQzac2Egc69I4-kH6eCPe4D0zchR",
    liveUrl: "https://manvishonline.in",
    metrics: "Multi-vendor automated reconciliation",
    featured: true,
  },
  {
    id: "creative-stitching",
    title: "Creative Stitching",
    category: "mobile-app",
    categoryLabel: "Mobile App",
    status: "shipped",
    description:
      "Led requirement elicitation and product delivery for an EdTech video LMS built in Flutter. Integrated encrypted DRM video pipelines and payment webhooks for instantaneous course unlocks.",
    tags: ["Flutter", "Video DRM", "Razorpay", "Firebase"],
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrCIYQyLYiK3h31FiCoYtULsQitmPvpGfycwrK7LF06xuOAwEPfw7oS_XhKv-shY1vomGP4Yf3OrvriGjCafphXM1opaBGp3CrkOePm18gcfoeC8kA1gqHIHA9EkJnc1LDFPAGsVwJ0m0Gr-U6nYBjzN4SfJ1pOfOq0vtBEm4h4kX7JzH79camAUsaRWwRQ9scgr11wIXoSBImK1Cxg-QgE8vbWOyks1KPw2rng9GZNhmw",
    liveUrl: "https://creativestitching.in",
    metrics: "Encrypted DRM video streams",
    featured: true,
  },
  {
    id: "millijobs-portal",
    title: "MilliJobs Portal",
    category: "web-platform",
    categoryLabel: "Web Platform",
    status: "shipped",
    description:
      "Steered recruitment pipeline optimization and search query index restructuring, cutting database wait states by 46% during high-volume applicant intake spikes.",
    tags: ["Elasticsearch", "Express", "React", "Redis"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj9etwM9Lxjx1Zw_zgsucvhh-tZNifL0eitE0KEBFGE4aONiOtBC9ar8xhK_kDAQYhBpAH0e3TZOGzTeuMvPN-X4rqoTBK4GbP1YQ2POzzrkx0RAxCmx9hXM-X4__nJ0ekANacIrJ9oL2s_DyO2WaFT5sIcUWwxqoe6WrSD5P0EkkIsXiKQTsFxH2K01g0aDBAsEXr-4hNR_A_aF_z52L-xzkKyREo0Z1prnR6qW_E",
    liveUrl: "https://millijobs.com",
    metrics: "45% reduction in search latency",
    featured: true,
  },
  {
    id: "keralaplots",
    title: "KeralaPlots Marketplace",
    category: "web-platform",
    categoryLabel: "Web Platform",
    status: "shipped",
    description:
      "Managed product lifecycle from technical specifications to commercial launch for a geo-indexed real estate marketplace serving licensed builders and land purchasers.",
    tags: ["GeoSpatial", "Next.js", "Mapbox", "Stripe Tiering"],
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrApZ3mKiYNNQJTWXEQPimTNmMXuTV3UHWrEn3STvLoh0w_dq3ezAaaMBcNqP8QT9tqOH3vA5GFQb7WdAUmRANilhZLtMWsLaPFpmPk05xTMyu-4jykSapv8GuGe2DsCh62rc7UKzaxZMHjkeJESombP9CfmeNFQa_6ICBz6oRpAwip9t-N4EMfji1XDqc70uBV9KvrSK3q8HuS6u_il-NXaV0rXDP132vOYEydTyhBi2Q",
    liveUrl: "https://keralaplots.com",
    metrics: "Tiered subscription builder listings",
    featured: true,
  },
  {
    id: "neethus-study-abroad",
    title: "Neethu's Study Abroad",
    category: "web-platform",
    categoryLabel: "Web Platform",
    status: "shipped",
    description:
      "Governed high-concurrency medical exam simulation portal with timed randomized block questions, anti-cheat session heartbeats, and zero session dropouts across thousands of clinical candidates.",
    tags: ["Real-Time WS", "Node.js", "PostgreSQL", "AWS Autoscaling"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPG_GyRDc3qtIH36YJOeCfoHNSiAEYfHsAdEDnSV97bNXx9HgQpwx7x_skm2OWzi14vIjdrn-_9KlVNlJeJ1SnZzVuau1MWM-6KJyCd3Om0NkKopYqpM-r34BKoC-UDXpXEvhX9HrZ8P_bNalXJ5gukgGo3bCmzbuElhoS0LXoQUI0K6UWWqNF18iIxMGuCPD5V3voYEPKOjErQVdJe8F0kHwutk9RgYtZoGpGed1E",
    liveUrl: "https://neethusstudyabroad.com",
    metrics: "Zero session dropouts under peak load",
    featured: true,
  },
  {
    id: "tribe-salon",
    title: "Tribe Salon",
    category: "business-websites",
    categoryLabel: "Business Websites",
    status: "shipped",
    description:
      "Luxury salon digital presence featuring live multi-seat appointment booking, stylist schedule synching, automated WhatsApp reminder dispatch, and POS payment integration.",
    tags: ["Next.js", "Twilio API", "Tailwind", "Supabase"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApIcSt0kmT4NzB-rD1GL92CoarEE57RCXpH4sf1uOejZcISNVm_shPi_dnDjtb7fW3dJEUDt4Er4R5O2XBXIKGUz4Ob9h-QTM8P6tVlIeCMOq-F2CNhHOKOq05I7Wu59XpqfnlcpgCO67hlvh8qQU3EZXkhs4wIPIWoZrGBojOm-e9DaTdjspL4vV9aEbwTHd8dEF1BHwSuYi3WBfeY9G5gbNH8ddzqbcZ57Hxp-tv",
    liveUrl: "https://tribesalon.in",
    metrics: "Multi-seat live appointment sync",
    featured: true,
  },
  {
    id: "aura-airport-hotel",
    title: "Aura Airport Hotel",
    category: "web-platform",
    categoryLabel: "Web Platform",
    status: "shipped",
    description:
      "Transit hospitality direct reservation engine with dynamic room tariff calculator, real-time availability checks, and integrated airline arrival delayed-checkin accommodation workflows.",
    tags: ["Next.js", "Booking Engine", "Stripe", "Channel Mgr"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2UgriEUmXwzlIh4cdEAFHChQ3P1fM1FoJbhKsAKm5csHR8bOku8Qb60f2BKri1Mpra74lBrnVWXefcyuNOf6vnL44Lfv92ipvrOhiNIg7zGSvx2CW3VvO-lF0W8Hru7Zawm4OjRjrr3_RxQUow5GDPqJUTAjWIPbyAE8H0hwtBsy4-nYwejyRmQ9bz1AyRebvEH6BhGMiYN4r2KQ00c14WQdU8Iho-ZZzikF6iD_J",
    liveUrl: "https://auraairporthotel.com",
    metrics: "Dynamic room pricing & channel sync",
  },
  {
    id: "drks-aesthetics",
    title: "DRKS Aesthetics",
    category: "saas",
    categoryLabel: "SaaS",
    status: "ongoing",
    description:
      "Spearheading active release cycle for a clinical SaaS CRM with automated patient intake forms, encrypted medical photo archives, and doctor prescription dispatch logs.",
    tags: ["HIPAA-Ready", "Next.js", "S3 Encrypted", "Prisma"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBi-nDIvvvv6XEs7Ed9Nvkav2rUOXnXhsuQzVRSY4JLtzBtSyXoNeJC9jevi2G5zOzWrg5Cz6-BTPavHGb0wgqQ_b_zYXmcM6w_KZjCfksMhS3ucYeydyR22qzb1eO38ebJfbmtVW2z_wOYvNhXlgOoYZmaqbQrfkgixKJCu6iTldAWRsp08vhXXZ9WK7KA6RQW85U9dGUa0Al3WYhfxiVkbBMU_LcCDAoq7_9J-puR",
    liveUrl: "https://drksaesthetics.com",
    metrics: "Encrypted patient intake pipeline",
  },
  {
    id: "gaspetworld",
    title: "GasPetWorld Platform",
    category: "web-platform",
    categoryLabel: "Web Platform",
    status: "shipped",
    description:
      "High-availability e-commerce platform with automated logistics route optimization and inventory synchronization across regional warehouses.",
    tags: ["MERN", "Redis", "Logistics API", "Tailwind"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIkx7AGrkVTJraK71WMD6Fs-64fkZ_waQBCCV96t4ZiK4auFKfXXyit3xyocSjsPje4EHY-XOs0Beau4jHLY6JH05zGdTGP6pnG8WAit01k1I23Df676GS-Cvg0NSjQM0Bk_eycQudi_PnvyTmCYexfMDv6NHP1KhTluUWMClZAmcTM9fjlajrkeJG6tstiNeirhbii_sswfrFkpBszdbXPvJ6u8Z6dOfEgUntuGGV",
    liveUrl: "https://gaspetworld.com",
    metrics: "Sub-second product search",
  },
  {
    id: "harmanmotors",
    title: "Harman Motors",
    category: "business-websites",
    categoryLabel: "Business Websites",
    status: "shipped",
    description:
      "Automotive showcase and financing lead-capture portal featuring dynamic vehicle comparison specs, EMI calculator, and dealer inquiry routing.",
    tags: ["Next.js", "Lead Gen", "Calculator API", "Tailwind"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApIcSt0kmT4NzB-rD1GL92CoarEE57RCXpH4sf1uOejZcISNVm_shPi_dnDjtb7fW3dJEUDt4Er4R5O2XBXIKGUz4Ob9h-QTM8P6tVlIeCMOq-F2CNhHOKOq05I7Wu59XpqfnlcpgCO67hlvh8qQU3EZXkhs4wIPIWoZrGBojOm-e9DaTdjspL4vV9aEbwTHd8dEF1BHwSuYi3WBfeY9G5gbNH8ddzqbcZ57Hxp-tv",
    liveUrl: "https://harmanmotors.in",
    metrics: "3x lead conversion uplift",
  },
  {
    id: "signaturehardwares",
    title: "Signature Hardwares",
    category: "business-websites",
    categoryLabel: "Business Websites",
    status: "shipped",
    description:
      "Architectural hardware catalog with PDF quotation generator, bulk enquiry carts, and automated WhatsApp sales routing.",
    tags: ["React", "PDF Kit", "WhatsApp API", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBshzsvEtiE75K6FmlVVgd105hic_zDxti1KVjftr6CfxIvUxN0Mf17nCnBErPxknOBCs0bnjWDJx9qU5MkuHXL_gghKr3bYNTwebdapbqIrBDrSEgEu38YCLHFcMMlZAFIUWlsEmg8Zs9kPxT9nDv-mGwimGFiZ-6b43tW6peVi6uyD1AoTVYh5tS3XnjgpE7RUGN6sYp87kfwjQzac2Egc69I4-kH6eCPe4D0zchR",
    liveUrl: "https://signaturehardwares.com",
    metrics: "Instant quotation download generator",
  },
  {
    id: "comorin-solar",
    title: "Comorin Solar",
    category: "web-platform",
    categoryLabel: "Web Platform",
    status: "shipped",
    description:
      "Clean energy feasibility calculator, rooftop solar estimator, and governmental subsidy guidance portal with real-time solar ROI simulation.",
    tags: ["React", "ROI Calculator", "Express", "Tailwind"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGZWSh7UV7ub0FTMfTR8MGkBRMRf0QL7QsKniGILJ2d8WvfMDPKwN4FtptmdaiOggrgDdsPeN406n11JeiJuL6c8TxS8u0y6RBxY6Ub1JcUBHR27dy8YABpFKJWur1Pod8qZuccXQ2DgBhVox0610xrdNRoeREUOqIZb9FE7Q0M-j7k-ct-_6ODGAfe7oPf3VKZbTvGBftR_iqyyd_Gt6OWeETcFaO4nV6if23rQTv",
    liveUrl: "https://comorinsolar.com",
    metrics: "Dynamic rooftop solar ROI calculator",
  },
];
