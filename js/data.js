/* Single place to edit studio details. */
const SITE = {
  name: "Kalyani Architects",
  tagline: "Interior design studio",
  whatsapp: "910000000000", // country code + number, no "+"
  whatsappMessage: "Hello, I would like to discuss an interior project.",
  nav: [
    { key: "home", label: "Home", href: "index.html" },
    { key: "about", label: "About", href: "about.html" },
    { key: "projects", label: "Projects", href: "projects.html" },
    { key: "services", label: "Services", href: "services.html" },
    { key: "contact", label: "Contact Us", href: "contact.html" }
  ],
  hero: {
    caption: "Styling & lighting",
    image: "assets/images/hero.jpg",
    imageAlt: "Sculptural armchair in a calm interior",
    captionLeft: "We are Kalyani",
    captionRight: "Interior design studio"
  },
  about: {
    label: "About us",
    text: "We design interiors that balance function with feeling. From first sketch to final styling, every space is shaped around how you live.",
    button: "Learn more",
    image: "assets/images/about.jpg",
    imageAlt: "Minimal ceramic vase on a stone plinth"
  },
  pages: { home: "index.html", about: "about.html", services: "services.html", projects: "projects.html", contact: "contact.html" },
  form: { endpoint: "https://api.web3forms.com/submit", accessKey: "YOUR_ACCESS_KEY_HERE" },
  contact: { email: "hello@example.com", phone: "+91 00000 00000", address: "Studio address, City, State", hours: "Monday to Saturday, 10:00 to 18:00", replyTime: "We reply within two working days." },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" }
  ],
  footerText: "Interior architecture for homes and workplaces.",
  services: {
    intro: "From first sketch to final styling, one team looks after the whole project.",
    items: [
      { title: "Space planning", text: "Layouts that fit how you move, work and entertain." },
      { title: "Residential interiors", text: "Apartments and homes designed room by room, down to the handles." },
      { title: "Commercial interiors", text: "Offices, clinics and shops built around your brand and daily flow." },
      { title: "Styling and furnishing", text: "Furniture, lighting and finishing touches sourced and installed." }
    ]
  },
  projects: [
    { slug: "oak-and-linen-residence", title: "Oak and Linen Residence", type: "Residential", location: "Mumbai", year: 2025, text: "Warm timber living room with built-in storage.", image: "assets/images/projects/project-1.jpg", alt: "Living room with oak joinery and linen sofa", link: "projects.html#oak-and-linen-residence" },
    { slug: "glass-and-brass-kitchen", title: "Glass and Brass Kitchen", type: "Residential", location: "Pune", year: 2025, text: "Compact kitchen with metal profiles and frosted glass.", image: "assets/images/projects/project-2.jpg", alt: "Kitchen with brass island and glass panels", link: "projects.html#glass-and-brass-kitchen" },
    { slug: "stone-court-office", title: "Stone Court Office", type: "Commercial", location: "Bengaluru", year: 2024, text: "Open-plan workplace with acoustic panels and soft lighting.", image: "assets/images/projects/project-3.jpg", alt: "Open-plan office with stone floor", link: "projects.html#stone-court-office" },
    { slug: "clay-suite", title: "Clay Suite", type: "Residential", location: "Hyderabad", year: 2024, text: "Bedroom in plaster and walnut with low, warm lighting.", image: "assets/images/projects/project-4.jpg", alt: "Bedroom with plaster walls and walnut headboard", link: "projects.html#clay-suite" },
    { slug: "quarter-clinic", title: "Quarter Clinic", type: "Commercial", location: "Chennai", year: 2024, text: "Calm reception and consulting rooms in pale oak.", image: "assets/images/projects/project-5.jpg", alt: "Clinic reception with oak desk", link: "projects.html#quarter-clinic" },
    { slug: "brewhouse-cafe", title: "Brewhouse Cafe", type: "Commercial", location: "Goa", year: 2023, text: "Corner cafe with a terrazzo counter and warm pendants.", image: "assets/images/projects/project-6.jpg", alt: "Cafe counter in terrazzo", link: "projects.html#brewhouse-cafe" },
    { slug: "terrace-apartment", title: "Terrace Apartment", type: "Residential", location: "Ahmedabad", year: 2023, text: "Light-filled apartment opening onto a planted terrace.", image: "assets/images/projects/project-7.jpg", alt: "Apartment living area opening to a terrace", link: "projects.html#terrace-apartment" },
    { slug: "linen-studio-store", title: "Linen Studio Store", type: "Commercial", location: "Delhi", year: 2023, text: "Boutique retail space with movable oak display units.", image: "assets/images/projects/project-8.jpg", alt: "Boutique store with oak display units", link: "projects.html#linen-studio-store" }
  ],
  clients: [
    { name: "Northfield Developers", logo: "assets/images/clients/client-1.svg" },
    { name: "Aarav Hospitality", logo: "assets/images/clients/client-2.svg" },
    { name: "Meridian Clinics", logo: "assets/images/clients/client-3.svg" },
    { name: "Studio Lumen", logo: "assets/images/clients/client-4.svg" },
    { name: "Haven Living", logo: "assets/images/clients/client-5.svg" },
    { name: "Orchard Retail", logo: "assets/images/clients/client-6.svg" },
    { name: "Brightside Cafe", logo: "assets/images/clients/client-7.svg" },
    { name: "Crestline Group", logo: "assets/images/clients/client-8.svg" }
  ],
  aboutPage: {
    intro: "We are a small interior architecture studio. We design homes and workplaces around light, material and the way people actually live.",
    image: "assets/images/about/studio.jpg",
    imageAlt: "Studio team reviewing material samples at a table",
    story: [
      "The studio began as a two-person practice drawing kitchens and wardrobes for friends. Today we design full homes, clinics, cafes and offices, but the way we work has not changed: we start by watching how a space is used.",
      "A small team stays with each project from the first sketch to the day the last lamp is switched on. That means fewer handovers, clearer drawings and interiors that look like the design we showed you."
    ],
    principles: [
      { title: "Light comes first", text: "We plan around daylight and layer warm artificial light so rooms feel calm at every hour." },
      { title: "Honest materials", text: "Oak, stone, lime plaster and brass, used for what they do well and left to age gracefully." },
      { title: "Built to be lived in", text: "Storage, seating and circulation are designed for daily routines, not for photographs." }
    ],
    founder: {
      name: "Founder name", role: "Principal architect", image: "assets/images/team/founder.jpg",
      bio: "Trained as an architect, leads every concept presentation and visits each site in person. Believes a good interior should feel quiet and work hard."
    },
    team: [
      { name: "Team member", role: "Senior interior designer", image: "assets/images/team/team-1.jpg" },
      { name: "Team member", role: "Project manager", image: "assets/images/team/team-2.jpg" },
      { name: "Team member", role: "Design associate", image: "assets/images/team/team-3.jpg" }
    ]
  },
  servicesPage: {
    intro: "Four services that can be taken together or one at a time.",
    blocks: [
      { title: "Space planning", text: "Layouts that fit how you move, work and entertain, drawn before a single wall is touched.", included: ["Site survey and measurements", "Furniture and circulation layouts", "Lighting and electrical points plan"], image: "assets/images/services/service-1.jpg", alt: "Hand-drawn floor plan with furniture layout" },
      { title: "Residential interiors", text: "Apartments and homes designed room by room, with joinery and finishes that belong together.", included: ["Full-home concept and detailing", "Custom joinery and storage", "Material and finish selection"], image: "assets/images/services/service-2.jpg", alt: "Living room with built-in oak joinery" },
      { title: "Commercial interiors", text: "Offices, clinics and shops shaped around your brand, your team and the way customers move.", included: ["Workplace, clinic and retail layouts", "Brand-led design and signage", "Coordination with your contractors"], image: "assets/images/services/service-3.jpg", alt: "Open-plan office with acoustic panels" },
      { title: "Styling and furnishing", text: "The last 10 percent that makes a space feel finished: furniture, lighting, art and soft furnishings.", included: ["Furniture and lighting sourcing", "Curtains, rugs and accessories", "Styled handover day"], image: "assets/images/services/service-4.jpg", alt: "Styled shelf with ceramics and books" }
    ],
    process: [
      { title: "Brief", text: "We visit the space and learn how you use it." },
      { title: "Concept", text: "Layouts, mood and materials, shared for your feedback." },
      { title: "Detail", text: "Drawings and specifications builders can price and build from." },
      { title: "Delivery", text: "Site visits, quality checks and a styled handover." }
    ],
    faq: [
      { q: "How long does a project take?", a: "Most homes take 3 to 6 months from brief to handover, depending on size and scope. Commercial projects are scheduled around your opening date." },
      { q: "How do you charge?", a: "A fixed design fee based on scope, agreed after our first meeting. Build and furnishing costs are quoted separately." },
      { q: "Can you work with my own contractor?", a: "Yes. We can coordinate with your contractor or recommend teams we have worked with before." },
      { q: "Do you take projects outside the city?", a: "Yes. Site visits are planned in blocks to keep travel efficient, and travel is billed at cost." },
      { q: "What should I bring to the first meeting?", a: "A floor plan if you have one, photos of the space, your rough budget and a few images you like." }
    ]
  }
};
