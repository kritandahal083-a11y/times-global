export const site = {
  name: "Times Global Data Center",
  shortName: "TGDC",
  tagline: "Powering Nepal's Digital Infrastructure",
  description:
    "Times Global Data Center delivers enterprise-grade colocation, managed hosting and secure data center infrastructure in Nepal, built for reliability, security and connectivity.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://timesglobaldatacenter.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@timesglobal.com.np",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "9802347734",
  phoneHref: "+9779802347734",
  address: "Dhumbarahi, Kathmandu, Nepal",
  region: "Dhumbarahi, Kathmandu, Nepal",
  hours: "Mon - Sat · 9:00 - 18:00 NPT",
  social: {
    linkedin: "https://www.linkedin.com/company/timesglobal/",
    facebook: "https://www.facebook.com/profile.php?id=61569411427618",
    twitter: "https://www.x.com",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Services", href: "/services" },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    title: "Colocation",
    slug: "colocation",
    icon: "server",
    blurb:
      "Deploy your IT equipment in our purpose-built facility with controlled power, cooling, connectivity and 24/7 monitoring.",
    items: [
      "Rack and cage colocation",
      "Secure 24/7 access",
      "Controlled environment",
    ],
  },
  {
    title: "Rack Space",
    slug: "rack-space",
    icon: "rack",
    blurb:
      "Flexible rack configurations from a single unit to dedicated racks and private cages, scaled as your estate grows.",
    items: ["Half & full racks", "Private cages", "Scalable layouts"],
  },
  {
    title: "Server Hosting",
    slug: "server-hosting",
    icon: "bolt",
    blurb:
      "Dedicated and managed server hosting in Nepal's most reliable data center environment, with hands-on support.",
    items: ["Dedicated servers", "Managed operating system", "24/7 monitoring"],
  },
  {
    title: "Network Connectivity",
    slug: "network-connectivity",
    icon: "network",
    blurb:
      "Redundant, low-latency connectivity with diverse carriers and peering options for enterprise-grade performance.",
    items: ["Diverse carrier routes", "Dedicated bandwidth", "Low-latency peering"],
  },
  {
    title: "Disaster Recovery",
    slug: "disaster-recovery",
    icon: "repeat-arrow",
    blurb:
      "A secure, off-site recovery environment that keeps your business running when it matters most.",
    items: ["Off-site failover", "Recovery site capacity", "Emergency response"],
  },
  {
    title: "Backup Infrastructure",
    slug: "backup-infrastructure",
    icon: "database",
    blurb:
      "Resilient backup infrastructure in a secured facility, protecting your data against loss and corruption.",
    items: ["On-site & off-site backup", "Secure storage", "Retention strategies"],
  },
  {
    title: "Managed Infrastructure",
    slug: "managed-infrastructure",
    icon: "gear",
    blurb:
      "Our engineers manage your hardware and infrastructure so your team can focus on the business.",
    items: ["Proactive monitoring", "Hardware lifecycle", "Remote hands"],
  },
  {
    title: "Enterprise Data Center Services",
    slug: "enterprise-data-center-services",
    icon: "building",
    blurb:
      "End-to-end data center services for enterprises, from architecture design to deployment and operations.",
    items: ["Solution design", "Migration support", "Ongoing operations"],
  },
] as const;

export const serviceDetails: Record<string, { description: string; features: { title: string; description: string }[]; benefits: string[] }> = {
  colocation: {
    description:
      "Host your servers, storage and networking equipment in our purpose-built facility in Dhumbarahi, Kathmandu. Our colocation services provide the physical infrastructure, power, cooling and connectivity your equipment needs, while you retain full control over your hardware and software.",
    features: [
      { title: "Rack and cage colocation", description: "From single rack units to full racks and private cages, choose the space that fits your deployment." },
      { title: "Redundant power", description: "N+1 / 2N power topology with UPS and diesel generator backup to every rack." },
      { title: "Precision cooling", description: "Controlled temperature and humidity optimized for dense IT workloads." },
      { title: "24/7 access", description: "Secure, logged access to your equipment around the clock." },
      { title: "Network connectivity", description: "Carrier-neutral facility with diverse peering and bandwidth options." },
      { title: "Physical security", description: "Multi-layer security with biometric access, CCTV and on-site personnel." },
    ],
    benefits: [
      "Reduce capital expenditure on facility infrastructure",
      "Scale your deployment as your business grows",
      "Benefit from enterprise-grade power and cooling without building your own",
      "Maintain full control over your hardware and software stack",
    ],
  },
  "rack-space": {
    description:
      "Flexible rack configurations from half-racks to full racks and private cages. Start with what you need today and scale as your estate grows, without the cost and complexity of building your own facility.",
    features: [
      { title: "Half and full racks", description: "Standard 19-inch racks available in half and full configurations." },
      { title: "Private cages", description: "Dedicated, enclosed space for sensitive or high-density deployments." },
      { title: "Scalable layouts", description: "Add racks or upgrade to a cage as your requirements evolve." },
      { title: "Power density options", description: "From standard 4kW to high-density 40kW per rack." },
      { title: "Cable management", description: "Structured cabling with dedicated pathways for power and data." },
    ],
    benefits: [
      "Pay only for the space you use, scale on demand",
      "No upfront investment in facility build-out",
      "Enterprise infrastructure at predictable monthly costs",
      "Flexible terms that grow with your business",
    ],
  },
  "server-hosting": {
    description:
      "Dedicated and managed server hosting in Nepal's most reliable data center. We provide the physical environment and optional managed services, so your servers run at peak performance with minimal operational overhead.",
    features: [
      { title: "Dedicated servers", description: "Your own hardware in our facility, fully isolated from other tenants." },
      { title: "Managed operating system", description: "Our team handles OS patching, updates and security hardening." },
      { title: "24/7 monitoring", description: "Real-time alerting on hardware, network and environmental metrics." },
      { title: "Remote hands", description: "On-site engineers available for hardware swaps, reboots and cabling." },
      { title: "Backup options", description: "On-site and off-site backup solutions for data protection." },
    ],
    benefits: [
      "Focus on your applications, not infrastructure maintenance",
      "Enterprise-grade uptime without an enterprise team",
      "Fast incident response from local, on-site engineers",
      "Hardware lifecycle management and replacement planning",
    ],
  },
  "network-connectivity": {
    description:
      "Redundant, low-latency connectivity with diverse carrier options and peering. Our carrier-neutral facility gives you the network performance your enterprise workloads demand, with the redundancy to keep you online.",
    features: [
      { title: "Diverse carrier routes", description: "Multiple physical paths to prevent single points of failure." },
      { title: "Dedicated bandwidth", description: "Guaranteed bandwidth allocations without contention." },
      { title: "Low-latency peering", description: "Direct peering with major ISPs and content providers in Nepal." },
      { title: "Cross-connects", description: "Physical cross-connects to carriers, clouds and partners within the facility." },
      { title: "DDoS protection", description: "Network-level protection against distributed denial-of-service attacks." },
    ],
    benefits: [
      "Maximize uptime with redundant network paths",
      "Reduce latency to your users and partners in Nepal",
      "Simplify your network architecture with a single facility connection",
      "Scale bandwidth without physical infrastructure changes",
    ],
  },
  "disaster-recovery": {
    description:
      "A secure, off-site recovery environment that keeps your business running when it matters most. Our disaster recovery services provide the infrastructure, connectivity and support you need to fail over quickly and recover with confidence.",
    features: [
      { title: "Off-site failover", description: "Pre-configured recovery environment ready to activate on demand." },
      { title: "Recovery site capacity", description: "Dedicated rack space and power reserved for your recovery workloads." },
      { title: "Emergency response", description: "Trained team available 24/7 to assist with failover and recovery operations." },
      { title: "Testing facilities", description: "Schedule regular DR tests in a controlled environment." },
      { title: "Network failover", description: "Pre-configured network paths for rapid DNS or routing changes." },
    ],
    benefits: [
      "Meet regulatory and compliance requirements for business continuity",
      "Minimize downtime and data loss during outages",
      "Test your recovery procedures without impacting production",
      "Recover with local support in your time zone",
    ],
  },
  "backup-infrastructure": {
    description:
      "Resilient backup infrastructure in a secured facility, protecting your data against loss, corruption and disaster. On-site and off-site options give you the redundancy your business requires.",
    features: [
      { title: "On-site backup", description: "Local backup storage within the same facility for fast recovery." },
      { title: "Off-site backup", description: "Geographically separate storage for disaster protection." },
      { title: "Secure storage", description: "Encrypted storage with strict access controls and audit trails." },
      { title: "Retention strategies", description: "Configurable retention policies to match your compliance requirements." },
      { title: "Backup monitoring", description: "Automated verification and alerting on backup job status." },
    ],
    benefits: [
      "Protect against data loss from hardware failure, human error or disaster",
      "Meet compliance requirements for data retention and recovery",
      "Recover quickly with local, high-speed backup infrastructure",
      "Simplify your backup strategy with a single trusted provider",
    ],
  },
  "managed-infrastructure": {
    description:
      "Our engineers manage your hardware and infrastructure so your team can focus on the business. From proactive monitoring to hardware lifecycle management, we handle the operational complexity of running infrastructure.",
    features: [
      { title: "Proactive monitoring", description: "24/7 monitoring with automated alerting and incident response." },
      { title: "Hardware lifecycle", description: "Procurement, deployment, maintenance and replacement planning." },
      { title: "Remote hands", description: "On-site engineers available for any physical task, any time." },
      { title: "Patch management", description: "OS and firmware updates applied on your schedule." },
      { title: "Reporting", description: "Regular operational reports on health, capacity and performance." },
    ],
    benefits: [
      "Reduce operational burden on your internal team",
      "Access specialized data center expertise without hiring",
      "Improve uptime with proactive monitoring and maintenance",
      "Plan hardware investments with capacity and lifecycle data",
    ],
  },
  "enterprise-data-center-services": {
    description:
      "End-to-end data center services for enterprises, from architecture design to deployment and ongoing operations. We partner with your team to design, build and run infrastructure that supports your business objectives.",
    features: [
      { title: "Solution design", description: "Custom architecture designed for your specific workloads and requirements." },
      { title: "Migration support", description: "Planning and execution for migrating workloads to our facility." },
      { title: "Ongoing operations", description: "Day-to-day management, monitoring and optimization of your infrastructure." },
      { title: "Capacity planning", description: "Forward-looking analysis to ensure your infrastructure scales with demand." },
      { title: "Compliance consulting", description: "Guidance on meeting regulatory and industry compliance requirements." },
    ],
    benefits: [
      "Single point of contact for all data center needs",
      "Accelerate deployment with experienced implementation teams",
      "Align infrastructure strategy with business objectives",
      "Reduce risk with proven methodologies and local expertise",
    ],
  },
};

export const infrastructureHighlights = [
  {
    icon: "power",
    title: "Power Infrastructure",
    blurb:
      "Utility feeds backed by uninterruptible power supply (UPS) systems and diesel generators, with redundant power distribution paths to every rack.",
  },
  {
    icon: "cooling",
    title: "Precision Cooling",
    blurb:
      "Precision cooling units maintain a stable, controlled environment for dense IT workloads across the facility.",
  },
  {
    icon: "bolt",
    title: "Backup Generators",
    blurb:
      "On-site diesel generators provide full backup power, keeping critical infrastructure running through any utility outage.",
  },
  {
    icon: "shield",
    title: "Physical Security",
    blurb:
      "Multi-layer security with CCTV coverage, access control, and 24/7 on-site monitoring personnel.",
  },
  {
    icon: "fire",
    title: "Fire Detection & Suppression",
    blurb:
      "Early-warning detection systems and gaseous suppression protect critical infrastructure and equipment.",
  },
  {
    icon: "monitor",
    title: "24/7 Monitoring",
    blurb:
      "Facility-wide environmental, electrical and security monitoring with trained staff responding around the clock.",
  },
] as const;

export const securityHighlights = [
  {
    icon: "lock",
    title: "Layered access model",
    blurb:
      "Mantrap entry points, biometric verification and tiered authorization separate public zones from sensitive infrastructure.",
  },
  {
    icon: "shield",
    title: "Security operations",
    blurb:
      "Trained security and operations personnel staff the facility continuously, with documented incident procedures.",
  },
];

export const infrastructureSystems = [
  {
    group: "Facility",
    items: [
      {
        icon: "rack",
        title: "Data Center Racks",
        blurb:
          "Purpose-built server racks and cabinets in a controlled environment, available as shared, dedicated and caged configurations.",
      },
      {
        icon: "building",
        title: "Controlled Environment",
        blurb:
          "Maintained temperature and humidity conditions optimized for continuous IT equipment operation.",
      },
    ],
  },
  {
    group: "Power",
    items: [
      {
        icon: "bolt",
        title: "Power Distribution",
        blurb: "Utility power delivered through redundant distribution paths to every rack and cabinet.",
      },
      {
        icon: "power",
        title: "UPS Systems",
        blurb: "Uninterruptible power supply systems provide seamless battery ride-through for every load in the facility.",
      },
      {
        icon: "gear",
        title: "Generators",
        blurb: "Diesel generators provide extended power autonomy during prolonged utility outages.",
      },
    ],
  },
  {
    group: "Cooling",
    items: [
      {
        icon: "cooling",
        title: "Precision Cooling",
        blurb: "Precision cooling units maintain stable temperature control for dense, high-performance workloads.",
      },
    ],
  },
  {
    group: "Security",
    items: [
      {
        icon: "monitor",
        title: "CCTV Surveillance",
        blurb:
          "High-definition video coverage across the facility recorded 24/7 for monitoring and investigation.",
      },
      {
        icon: "shield",
        title: "Physical Security",
        blurb:
          "Controlled entry points, biometric access and layered physical barriers protect the facility perimeter.",
      },
    ],
  },
  {
    group: "Network",
    items: [
      {
        icon: "network",
        title: "Network Infrastructure",
        blurb:
          "Redundant switching and routing infrastructure with diverse carrier connectivity for enterprise availability.",
      },
      {
        icon: "globe",
        title: "Connectivity & Peering",
        blurb:
          "Local and international connectivity options with controlled peering for low-latency performance.",
      },
    ],
  },
  {
    group: "Operations",
    items: [
      {
        icon: "repeat-arrow",
        title: "Redundancy",
        blurb:
          "Power, cooling and network paths engineered with N+1 / 2N topology so no single component is a point of failure.",
      },
      {
        icon: "monitor",
        title: "24/7 Monitoring",
        blurb:
          "Electrical, environmental and security telemetry monitored around the clock with proactive alerting.",
      },
    ],
  },
];

export const infrastructureStats = [
  { value: "Tier III", label: "Fault-tolerant facility design" },
  { value: "N+1", label: "Power redundancy topology" },
  { value: "Dual", label: "Network paths per service" },
  { value: "24/7", label: "On-site operations & monitoring" },
] as const;

export const facilityPhotos = [
  {
    src: "/images/hero-6.webp",
    alt: "Server rack aisle inside the Times Global data hall",
    title: "The data hall",
    caption: "Rack aisles under controlled lighting, built for dense IT workloads.",
  },
  {
    src: "/images/e.jpg",
    alt: "Rows of customer server racks",
    title: "Server rows",
    caption: "Customer equipment hosted in a secured, controlled environment.",
  },
  {
    src: "/images/manik2.jpeg",
    alt: "Engineer working at an open server rack",
    title: "Engineers on site",
    caption: "On-site engineers handle hardware, cabling and maintenance around the clock.",
  },
  {
    src: "/images/door.jpg",
    alt: "Secure access doors to the data floor",
    title: "Secure access",
    caption: "Controlled entry points separate public zones from the data floor.",
  },
  {
    src: "/images/who-we-are-bg.webp",
    alt: "Times Global data center overview",
    title: "Facility overview",
    caption: "A look inside the Times Global data center environment.",
  },
  {
    src: "/images/qw.webp",
    alt: "Backup generators at the facility",
    title: "Backup generators",
    caption: "On-site generators extend power autonomy through utility outages.",
  },
  {
    src: "/images/i.webp",
    alt: "Fire suppression cylinders on the data floor",
    title: "Fire suppression",
    caption: "Early-warning detection and gaseous suppression protect critical equipment.",
  },
  {
    src: "/images/h.webp",
    alt: "Times Global Data Center facility building",
    title: "The facility",
    caption: "Our data center in Dhumbarahi, Kathmandu.",
  },
] as const;

export const securityLayers = [
  {
    icon: "shield",
    title: "Physical Security",
    blurb:
      "Multi-tier facility access with controlled entry points, biometric verification and managed visitor protocols.",
  },
  {
    icon: "monitor",
    title: "CCTV Monitoring",
    blurb:
      "High-definition camera coverage across the facility, recorded and monitored 24/7 with retention for investigations.",
  },
  {
    icon: "lock",
    title: "Access Control",
    blurb:
      "Role-based credentials and audit trails ensure only authorized personnel reach sensitive zones.",
  },
  {
    icon: "building",
    title: "Visitor Management",
    blurb:
      "Every visitor is registered, verified and escorted, no exceptions to the security perimeter.",
  },
  {
    icon: "network",
    title: "Network Security",
    blurb:
      "Segmented network architecture, perimeter protection and continuous monitoring guard customer workloads.",
  },
  {
    icon: "cloud",
    title: "Infrastructure Monitoring",
    blurb:
      "Environmental, electrical and network telemetry is tracked around the clock with proactive alerting.",
  },
  {
    icon: "power",
    title: "Power Redundancy",
    blurb:
      "N+1 power topology with UPS and generator backup protects against utility disruptions.",
  },
  {
    icon: "gear",
    title: "Operational Security",
    blurb:
      "Documented procedures, staff vetting and maintenance schedules underpin every operational task.",
  },
] as const;

export const whyUs = [
  {
    title: "Purpose-built for Nepal",
    blurb:
      "Infrastructure engineered for local conditions, local regulatory context and the connectivity realities of Nepal.",
  },
  {
    title: "Enterprise-grade reliability",
    blurb:
      "Redundant power, cooling and network paths designed to keep your workloads online.",
  },
  {
    title: "Security-first operations",
    blurb:
      "Physical and logical security woven into every layer of the facility and its operations.",
  },
  {
    title: "Responsive local support",
    blurb:
      "A team in your time zone that understands your infrastructure and responds fast.",
  },
] as const;

export const aboutPrinciples = [
  {
    icon: "shield",
    title: "Security as a foundation",
    blurb: "Every operational decision starts with protecting our customers infrastructure.",
  },
  {
    icon: "uptime",
    title: "Reliability by design",
    blurb: "Redundant systems and disciplined operations keep workloads online.",
  },
  {
    icon: "server",
    title: "Engineering discipline",
    blurb: "Documented procedures, routine maintenance and continuous improvement.",
  },
  {
    icon: "clock",
    title: "24/7 operational focus",
    blurb: "A team that watches, maintains and responds around the clock.",
  },
];

export const aboutPillars = [
  {
    icon: "building",
    title: "Infrastructure",
    blurb:
      "A purpose-built facility with redundant power, precision cooling, multi-carrier connectivity and physical security engineered for enterprise workloads.",
  },
  {
    icon: "shield",
    title: "Security",
    blurb:
      "Multi-tier access control, CCTV coverage, visitor management and segmented networks protect every layer of the facility.",
  },
];

export const aboutStatements = [
  {
    kicker: "Our Mission",
    body: "To provide Nepali organizations with world-class, secure and reliable data center infrastructure, so they can compete in a digital economy with total confidence in their foundation.",
  },
  {
    kicker: "Our Vision",
    body: "To be the trusted data center partner of choice in Nepal, recognized for reliability, security and operational excellence across the region.",
  },
] as const;

export const contactInfo = {
  email: site.email,
  phone: site.phone,
  phoneHref: site.phoneHref,
  address: site.address,
  hours: site.hours,
} as const;
