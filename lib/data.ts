import type {
  FaqItem,
  HospitalSummary,
  NeedCardData,
  NeedDetail,
} from "./types";

// ---------- HOSPITAL SUMMARIES ----------

export const hospitals: HospitalSummary[] = [
  // Africa
  {
    slug: "tenwek",
    name: "Tenwek Hospital",
    location: "Bomet",
    country: "Kenya",
    region: "Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=80&auto=format&fit=crop",
    blurb:
      "361-bed teaching hospital. Founded 1937 by World Gospel Mission. “We Treat, Jesus Heals.”",
    beds: 361,
    founded: 1937,
    metricLabel: "Specialties",
    metricValue: "7",
    urgentNeeds: 3,
  },
  {
    slug: "kijabe",
    name: "Kijabe Hospital",
    location: "Kijabe",
    country: "Kenya",
    region: "Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop",
    blurb:
      "363-bed AIC referral hospital, founded 1915. One of East Africa's largest mission hospitals.",
    beds: 363,
    founded: 1915,
    metricLabel: "Open roles",
    metricValue: "8",
  },
  {
    slug: "galmi",
    name: "Galmi Hospital",
    location: "Galmi",
    country: "Niger",
    region: "Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=80&auto=format&fit=crop",
    blurb:
      "250-bed regional hospital, operated by SIM. Family medicine, OB, and general surgery.",
    beds: 250,
    founded: 1950,
    metricLabel: "Open roles",
    metricValue: "6",
    urgentNeeds: 2,
  },
  {
    slug: "bongolo",
    name: "Bongolo Hospital",
    location: "Lebamba",
    country: "Gabon",
    region: "Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900&q=80&auto=format&fit=crop",
    blurb:
      "PAACS surgical residency site. General surgery, family medicine, outpatient programs.",
    beds: 155,
    founded: 1977,
    metricLabel: "Open roles",
    metricValue: "4",
  },
  {
    slug: "mbingo",
    name: "Mbingo Baptist Hospital",
    location: "Mbingo",
    country: "Cameroon",
    region: "Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Multi-specialty hospital and training site with growing oncology and cardiac care.",
    beds: 280,
    founded: 1952,
    metricLabel: "Open roles",
    metricValue: "7",
  },
  {
    slug: "kibuye",
    name: "Kibuye Hope Hospital",
    location: "Kibuye",
    country: "Burundi",
    region: "Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Regional hospital serving central Burundi. Family medicine and pediatric programs.",
    beds: 180,
    founded: 1947,
    metricLabel: "Open roles",
    metricValue: "5",
  },
  {
    slug: "cure-kenya",
    name: "AIC-CURE International",
    location: "Kijabe",
    country: "Kenya",
    region: "Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Specialized children's orthopedic hospital. Pediatric clubfoot, cerebral palsy, trauma.",
    beds: 90,
    founded: 1998,
    metricLabel: "Open roles",
    metricValue: "3",
  },
  {
    slug: "soddo",
    name: "Soddo Christian Hospital",
    location: "Soddo",
    country: "Ethiopia",
    region: "Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1584467735815-f778f274e296?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Multi-specialty hospital in southern Ethiopia. General surgery and PAACS training.",
    beds: 220,
    founded: 2005,
    metricLabel: "Open roles",
    metricValue: "6",
  },
  {
    slug: "hope-togo",
    name: "Hospital of Hope",
    location: "Mango",
    country: "Togo",
    region: "Africa",
    imageUrl:
      "https://images.unsplash.com/photo-1605098293559-d6e0afaf21d4?w=900&q=80&auto=format&fit=crop",
    blurb:
      "ABWE-affiliated hospital serving northern Togo. Family medicine, surgery, obstetrics.",
    beds: 110,
    founded: 2015,
    metricLabel: "Open roles",
    metricValue: "3",
  },
  // Asia & ME
  {
    slug: "tansen",
    name: "Tansen Mission Hospital",
    location: "Tansen",
    country: "Nepal",
    region: "Asia & ME",
    imageUrl:
      "https://images.unsplash.com/photo-1613377859989-c4cce16dc8df?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Multi-specialty hospital in the Himalayan foothills. Family medicine and emergency care.",
    beds: 170,
    founded: 1954,
    metricLabel: "Open roles",
    metricValue: "4",
  },
  {
    slug: "cmc-vellore",
    name: "Christian Medical College",
    location: "Vellore",
    country: "India",
    region: "Asia & ME",
    imageUrl:
      "https://images.unsplash.com/photo-1624628639856-100bf817fd35?w=900&q=80&auto=format&fit=crop",
    blurb:
      "3,000-bed tertiary teaching hospital. One of South Asia's premier training institutions.",
    beds: 3000,
    founded: 1900,
    metricLabel: "Open roles",
    metricValue: "12",
  },
  {
    slug: "bach",
    name: "Bach Christian Hospital",
    location: "Qalandarabad",
    country: "Pakistan",
    region: "Asia & ME",
    imageUrl:
      "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=900&q=80&auto=format&fit=crop",
    blurb:
      "TEAM-affiliated hospital serving rural northern Pakistan. Family medicine and obstetrics.",
    beds: 75,
    founded: 1957,
    metricLabel: "Open roles",
    metricValue: "3",
    urgentNeeds: 2,
  },
  {
    slug: "lamb",
    name: "LAMB Hospital",
    location: "Parbatipur",
    country: "Bangladesh",
    region: "Asia & ME",
    imageUrl:
      "https://images.unsplash.com/photo-1523207911345-32501502db22?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Rural hospital and community health network. Primary care, OB, and pediatrics.",
    beds: 160,
    founded: 1976,
    metricLabel: "Open roles",
    metricValue: "5",
  },
  {
    slug: "bangalore-baptist",
    name: "Bangalore Baptist Hospital",
    location: "Bangalore",
    country: "India",
    region: "Asia & ME",
    imageUrl:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Multi-specialty teaching hospital serving urban and rural patients across Karnataka.",
    beds: 340,
    founded: 1973,
    metricLabel: "Open roles",
    metricValue: "4",
  },
  {
    slug: "annoor",
    name: "Annoor Sanatorium",
    location: "Mafraq",
    country: "Jordan",
    region: "Asia & ME",
    imageUrl:
      "https://images.unsplash.com/photo-1616587226157-48e49175ee20?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Specialized pulmonary and TB hospital serving the Middle East and refugee populations.",
    beds: 85,
    founded: 1957,
    metricLabel: "Open roles",
    metricValue: "2",
  },
  // Americas
  {
    slug: "loma-de-luz",
    name: "Hospital Loma de Luz",
    location: "Balfate",
    country: "Honduras",
    region: "Americas",
    imageUrl:
      "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Mission hospital on the north coast of Honduras. Family medicine, surgery, obstetrics.",
    beds: 60,
    founded: 1999,
    metricLabel: "Open roles",
    metricValue: "3",
    urgentNeeds: 2,
  },
  {
    slug: "diospi-suyana",
    name: "Hospital Diospi Suyana",
    location: "Curahuasi",
    country: "Peru",
    region: "Americas",
    imageUrl:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Multi-specialty hospital in the Peruvian Andes. Surgical, OB, and pediatric services.",
    beds: 98,
    founded: 2007,
    metricLabel: "Open roles",
    metricValue: "4",
  },
  {
    slug: "yojoa",
    name: "Hospital Yojoa",
    location: "Peña Blanca",
    country: "Honduras",
    region: "Americas",
    imageUrl:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Rural hospital in central Honduras. Family medicine and obstetrics for an underserved region.",
    beds: 25,
    founded: 1991,
    metricLabel: "Open roles",
    metricValue: "2",
  },
  {
    slug: "hhm",
    name: "Haiti Health Ministries",
    location: "Gressier",
    country: "Haiti",
    region: "Americas",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Family medicine and pediatric care. Long history serving central Haiti.",
    beds: 40,
    founded: 1985,
    metricLabel: "Open roles",
    metricValue: "2",
  },
  {
    slug: "shalom",
    name: "Hospital Shalom",
    location: "San Marcos",
    country: "Guatemala",
    region: "Americas",
    imageUrl:
      "https://images.unsplash.com/photo-1605091622677-fd9a3eaf5cdd?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Family medicine clinic and small hospital serving rural communities in western Guatemala.",
    beds: 35,
    founded: 1996,
    metricLabel: "Open role",
    metricValue: "1",
  },
  {
    slug: "esperanza",
    name: "Clinica Esperanza",
    location: "Roatán",
    country: "Honduras",
    region: "Americas",
    imageUrl:
      "https://images.unsplash.com/photo-1582719188390-bbe6f9d6e0c0?w=900&q=80&auto=format&fit=crop",
    blurb:
      "Roatán-based clinic providing family medicine and pediatric care to coastal communities.",
    beds: 22,
    founded: 2002,
    metricLabel: "Open roles",
    metricValue: "2",
  },
];

export function getHospital(slug: string) {
  return hospitals.find((h) => h.slug === slug);
}

export function getHospitalsByRegion(region: HospitalSummary["region"]) {
  return hospitals.filter((h) => h.region === region);
}

// ---------- NEEDS LIST DATA ----------

export const needs: NeedCardData[] = [
  {
    slug: "cholera-response-drc",
    title: "Cholera response, eastern DRC",
    location: "Vanga · DRC",
    blurb:
      "Thirty days of rehydration supplies and surge staff. Forty patients a day, treated outdoors.",
    imageUrl:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=80&auto=format&fit=crop",
    raised: 28400,
    goal: 46000,
    urgent: true,
    urgencyLabel: "Urgent · 12d left",
    category: "Response",
  },
  {
    slug: "solar-power-maternity",
    title: "Solar power for the maternity ward",
    location: "Loma de Luz · Honduras",
    blurb:
      "A battery bank that holds the wards through monthly grid outages. Three to four a month.",
    imageUrl:
      "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=900&q=80&auto=format&fit=crop",
    raised: 71400,
    goal: 84000,
    category: "Construction",
  },
  {
    slug: "galmi-maternity-floor",
    title: "A second floor for the maternity ward",
    location: "Galmi · Niger",
    blurb:
      "Eight new delivery rooms. Volume has tripled in five years.",
    imageUrl:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=80&auto=format&fit=crop",
    raised: 186000,
    goal: 215000,
    category: "Construction",
  },
  {
    slug: "tenwek-cath-lab",
    title: "Cardiac cath lab, expanded",
    location: "Tenwek · Kenya",
    blurb:
      "A hemodynamic monitoring upgrade, replacing a 2018 system at end of life.",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop",
    raised: 48200,
    goal: 78000,
    category: "Equipment",
  },
  {
    slug: "kapsowar-ultrasound",
    title: "An ultrasound the OB ward can rely on",
    location: "Kapsowar · Kenya",
    blurb:
      "Refurbished, two probes. The current unit is fourteen years old and failing.",
    imageUrl:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&q=80&auto=format&fit=crop",
    raised: 13800,
    goal: 14200,
    category: "Equipment",
  },
  {
    slug: "cmc-nicu-ventilator",
    title: "NICU ventilator replacement",
    location: "CMC Vellore · India",
    blurb:
      "One of three failed in February. The hospital is running on two; volume can't sustain that.",
    imageUrl:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=80&auto=format&fit=crop",
    raised: 18400,
    goal: 34000,
    urgent: true,
    urgencyLabel: "Urgent",
    category: "Equipment",
  },
  {
    slug: "tenwek-peds-anesthesia",
    title: "Pediatric anesthesia training, two years",
    location: "Tenwek · Kenya",
    blurb:
      "A Kenyan attending returns as the only pediatric anesthesiologist in the region.",
    imageUrl:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=900&q=80&auto=format&fit=crop",
    raised: 22800,
    goal: 30000,
    category: "Training",
  },
  {
    slug: "bongolo-anesthesia-machines",
    title: "Two refurbished anesthesia machines",
    location: "Bongolo · Gabon",
    blurb:
      "Replacing end-of-life Drager units in the main OR, with a one-year service contract.",
    imageUrl:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900&q=80&auto=format&fit=crop",
    raised: 31200,
    goal: 52000,
    category: "Equipment",
  },
  {
    slug: "tenwek-surgical-residents",
    title: "Three surgical residents, one year",
    location: "Tenwek · Kenya",
    blurb:
      "Tuition and supervision for PAACS-accredited residents in their final year.",
    imageUrl:
      "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?w=900&q=80&auto=format&fit=crop",
    raised: 11400,
    goal: 18000,
    category: "Training",
  },
  {
    slug: "togo-outpatient-expansion",
    title: "Outpatient clinic expansion",
    location: "Hospital of Hope · Togo",
    blurb:
      "A 240-square-meter extension. Volume has doubled since 2020.",
    imageUrl:
      "https://images.unsplash.com/photo-1605098293559-d6e0afaf21d4?w=900&q=80&auto=format&fit=crop",
    raised: 42000,
    goal: 124000,
    category: "Construction",
  },
  {
    slug: "tansen-visiting-surgeons",
    title: "Visiting surgeon support, four teams",
    location: "Tansen · Nepal",
    blurb:
      "A year of quarterly subspecialty teams — ortho, urology, plastics, ENT.",
    imageUrl:
      "https://images.unsplash.com/photo-1613377859989-c4cce16dc8df?w=900&q=80&auto=format&fit=crop",
    raised: 8200,
    goal: 24000,
    category: "Training",
  },
  {
    slug: "chogoria-chemistry-analyzer",
    title: "A working chemistry analyzer",
    location: "PCEA Chogoria · Kenya",
    blurb:
      "Refurbished, eighteen months of reagent. Cuts sepsis turnaround from hours to minutes.",
    imageUrl:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80&auto=format&fit=crop",
    raised: 9800,
    goal: 22000,
    category: "Equipment",
  },
];

// ---------- NEED DETAIL ----------
// Featured detail page used at /needs/[slug]. Other slugs fall back here
// with a derived title for the demo.

const sharedFaqs: FaqItem[] = [
  {
    question: "What if it doesn't reach goal?",
    answer:
      "If a need times out without funding (we cap at 120 days unless the hospital extends), donors are given three options: redirect to the hospital's general fund, redirect to another need, or refund. Most needs fund within 60 days.",
    defaultOpen: true,
  },
  {
    question: "What if it overshoots?",
    answer:
      "Anything raised beyond goal goes into the hospital's general fund with donor consent given at the time of giving. You can opt to have any overage refunded or directed elsewhere.",
  },
  {
    question: "When is my gift tax-deductible?",
    answer:
      "At the moment you give. You receive a receipt from Giving Tree Projects (501(c)(3)) for the full amount, dated when your gift was made. The receipt does not depend on the need fully funding.",
  },
  {
    question: "How do I know it actually got there?",
    answer:
      "Every disbursement triggers a public update on this page — photos, narrative, financial reconciliation. At project close, a full reconciliation is published comparing planned versus actual spend, line by line.",
  },
];

export const needDetails: Record<string, NeedDetail> = {
  "solar-power-maternity": {
    slug: "solar-power-maternity",
    title: "Solar power for the",
    titleHighlight: "maternity ward",
    hospitalSlug: "loma-de-luz",
    hospitalName: "Hospital Loma de Luz",
    hospitalLocation: "Balfate",
    hospitalCountry: "Honduras",
    category: "Construction",
    heroImageUrl:
      "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=1800&q=80&auto=format&fit=crop",
    lede: "A battery bank that holds the surgical and maternity wards through monthly grid outages.",
    whyHeadline:
      "In April 2025, a fourteen-minute outage during a complicated delivery led to a near-miss.",
    whyParagraphs: [
      "Hospital Loma de Luz sits on the north coast of Honduras, where the grid loses power three or four times a month. The diesel generator takes ninety seconds to come online, and the maternity ward — neonatal warmers, fetal monitors, the OR next door — can't tolerate a ninety-second gap.",
      "The fix is a 96 kWh battery bank with smart inverters, sized for eighteen hours of uninterrupted draw across maternity, an adjacent OR, and pediatric ICU. **Switchover is sub-second.** Equipment doesn't reset.",
    ],
    budget: [
      {
        name: "Battery bank, 96 kWh",
        detail: "Four LFP modules with management system",
        amount: 48000,
      },
      {
        name: "Smart inverters & switchover",
        detail: "Two hybrid inverters with auto-transfer",
        amount: 12800,
      },
      {
        name: "Installation & commissioning",
        detail: "Three weeks · Soluciones Solares HN",
        amount: 11200,
      },
      {
        name: "Freight & customs",
        detail: "Door-to-door from US distributor",
        amount: 5800,
      },
      {
        name: "Electrical panel upgrades",
        detail: "Two sub-panels for ward circuits",
        amount: 2400,
      },
      {
        name: "Training & service",
        detail: "One year remote monitoring",
        amount: 1600,
      },
      {
        name: "Contingency",
        detail: "Three percent reserve",
        amount: 2200,
      },
    ],
    budgetTotal: 84000,
    budgetNote:
      "Quotes attached for each. Any contingency left over rolls into the hospital's general fund with donor consent.",
    timeline: [
      {
        date: "Jan 28, 2026 · Done",
        title: "Submitted, vetted, listed",
        description:
          "Hospital proposal received with quotes. Network team reviewed scope, pricing, partner credentials.",
        state: "done",
      },
      {
        date: "Now · 85% funded",
        title: "Funding",
        description:
          "$71,400 of $84,000 raised across 312 donors. Fully funded within five days at current pace.",
        state: "current",
      },
      {
        date: "Est. May 25",
        title: "Equipment ordered · 40% releases",
        description:
          "First disbursement on full funding. Quote locked, equipment ordered.",
        state: "future",
      },
      {
        date: "Est. July 28",
        title: "Equipment on site · 40% releases",
        description:
          "Second disbursement on customs clearance and on-site delivery. Photos posted.",
        state: "future",
      },
      {
        date: "Est. Aug 22",
        title: "Commissioned · final 20% releases",
        description:
          "Third disbursement on commissioning and first successful grid-outage test.",
        state: "future",
      },
      {
        date: "Aug 22, 2027",
        title: "One-year report",
        description:
          "Outcomes — uptime data, diesel savings, lessons. Posted publicly.",
        state: "future",
      },
    ],
    updates: [
      {
        date: "May 2, 2026",
        title: "85% funded — equipment quote re-confirmed",
        paragraphs: [
          "Reconfirmed pricing with our vendor in Tegucigalpa given recent currency movement. Quote held. Install partner confirmed availability for August.",
          "Yesterday we lost grid power for two hours during an OB triage. Generator handled it, but a cesarean had to wait until power was stabilized — exactly the situation this need addresses.",
        ],
        author: "Dr. Andrés Velasquez",
        role: "Medical Director",
      },
      {
        date: "Apr 14, 2026",
        title: "Site preparation underway",
        paragraphs: [
          "While funding continues, we've started prep that doesn't require equipment. Cleared the room next to the existing solar inverter house. Electrical engineer mapped the ward circuits this week.",
        ],
        photoUrl:
          "https://images.unsplash.com/photo-1605098293559-d6e0afaf21d4?w=1200&q=80&auto=format&fit=crop",
        author: "Mateo Ortiz",
        role: "Hospital Engineer",
      },
    ],
    faqs: sharedFaqs,
    raised: 71400,
    goal: 84000,
    donors: 312,
    estimatedClose: "~5d",
  },

  "cholera-response-drc": {
    slug: "cholera-response-drc",
    title: "Cholera response,",
    titleHighlight: "eastern DRC",
    hospitalSlug: "tenwek",
    hospitalName: "Vanga Evangelical Hospital",
    hospitalLocation: "Vanga",
    hospitalCountry: "DRC",
    category: "Response",
    urgent: true,
    urgencyLabel: "Urgent · 12d left",
    heroImageUrl:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1800&q=80&auto=format&fit=crop",
    lede: "Thirty days of rehydration supplies and surge staff. Forty patients a day, treated outdoors.",
    whyHeadline:
      "When a cholera outbreak hits, the gap between supply and patients is measured in hours.",
    whyParagraphs: [
      "The local clinic is treating forty patients a day outdoors. Existing stocks of IV fluids and ORS run out in 72 hours at current burn rate.",
      "This need funds **thirty days of rehydration supplies, two surge nurses, and a logistics line** to keep them flowing from Kinshasa.",
    ],
    budget: [
      {
        name: "IV fluids & ORS · 30 days",
        detail: "Calculated for 1,200 patients",
        amount: 18000,
      },
      {
        name: "Two surge nurses · 4 weeks",
        detail: "Including local stipends",
        amount: 9200,
      },
      {
        name: "Logistics · Kinshasa to Vanga",
        detail: "Weekly truck rotations",
        amount: 8600,
      },
      {
        name: "Temporary triage shelter",
        detail: "Tarpaulin, tables, chairs",
        amount: 3400,
      },
      {
        name: "Diagnostic supplies",
        detail: "Stool kits and reagents",
        amount: 4600,
      },
      {
        name: "Contingency",
        detail: "Five percent reserve",
        amount: 2200,
      },
    ],
    budgetTotal: 46000,
    timeline: [
      {
        date: "Apr 30, 2026 · Done",
        title: "Outbreak confirmed and need filed",
        description: "Local lab confirmation. Hospital filed the need within 24 hours.",
        state: "done",
      },
      {
        date: "Now · 62% funded",
        title: "Funding",
        description: "$28,400 of $46,000 raised. 12 days left before supplies run out.",
        state: "current",
      },
      {
        date: "Est. May 18",
        title: "Supplies in transit",
        description: "First shipment leaves Kinshasa on full funding.",
        state: "future",
      },
      {
        date: "Est. Jun 15",
        title: "Surge concluded · close out",
        description: "Final reporting, lessons, line-by-line reconciliation.",
        state: "future",
      },
    ],
    updates: [
      {
        date: "May 7, 2026",
        title: "Forty-two patients yesterday",
        paragraphs: [
          "Volume is climbing. We're maintaining a 0% mortality rate so far but supplies are tight. Thank you to the 184 donors who've given in the last five days.",
        ],
        author: "Dr. Joseph Mbutu",
        role: "Clinic Director, Vanga",
      },
    ],
    faqs: sharedFaqs,
    raised: 28400,
    goal: 46000,
    donors: 184,
    estimatedClose: "12d left",
  },
};

export function getNeedDetail(slug: string): NeedDetail | undefined {
  return needDetails[slug];
}

// Hospital open needs (used on hospital detail)
export const tenwekActiveNeeds = [
  needs.find((n) => n.slug === "tenwek-cath-lab")!,
  needs.find((n) => n.slug === "tenwek-surgical-residents")!,
  needs.find((n) => n.slug === "tenwek-peds-anesthesia")!,
];

// Hospital long-form copy — used on the hospital detail page.
export interface HospitalDetailContent {
  slug: string;
  motto: string;
  origin: string[];
  galleryUrls: string[];
  capacityIntro: string;
  bigNumbers: {
    label: string;
    /** Numeric target — used for the count-up. */
    value: number;
    /** Display format. Default integer with commas. */
    formatKind?: "default" | "k" | "m";
    /** Optional suffix to append (e.g. "+"). */
    suffix?: string;
  }[];
  capacityInfo: { key: string; value: string }[];
  servicesIntro: string;
  services: string[];
  outpatientTags: string[];
  trainingParagraphs: string[];
  trainingInfo: { key: string; value: string }[];
  needsParagraph: string;
  staffNeeds: string[];
  tracksNote: string;
  hospitalNeedsIntro: string;
  logistics: { title: string; body: string }[];
  agencies: { name: string; desc: string }[];
  spiritualParagraphs: string[];
  faqs: FaqItem[];
  glance: { key: string; value: string }[];
}

export const tenwekDetail: HospitalDetailContent = {
  slug: "tenwek",
  motto: "We Treat, Jesus Heals.",
  origin: [
    "Tenwek Hospital was established in 1937 by the World Gospel Mission in collaboration with the Africa Gospel Church. What began as a small dispensary has grown into a major medical and teaching facility serving a vast region in southwestern Kenya and beyond.",
    "The hospital is governed by the Africa Gospel Church in partnership with the World Gospel Mission. Its mission integrates compassionate, Christ-centered medical care with spiritual ministry — addressing the physical, emotional, and spiritual needs of every patient.",
  ],
  galleryUrls: [
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?w=600&q=80&auto=format&fit=crop",
  ],
  capacityIntro:
    "A referral hospital with comprehensive facilities. In a recent six-month period, the hospital treated more than 35,000 outpatients and performed approximately 2,000 surgeries.",
  bigNumbers: [
    { label: "Beds", value: 361 },
    { label: "Operating rooms · with recovery", value: 6 },
    {
      label: "Outpatients · 6 months",
      value: 35000,
      formatKind: "k",
      suffix: "+",
    },
  ],
  capacityInfo: [
    { key: "Imaging", value: "64-slice Siemens CT scanner, X-ray, ultrasound" },
    { key: "Laboratory", value: "Fully equipped clinical laboratory" },
    {
      key: "Specialty units",
      value: "Eye and dental clinic building · Wound and burn unit",
    },
    { key: "Education", value: "Tenwek Hospital College of Health Sciences" },
  ],
  servicesIntro:
    "A comprehensive range of medical services across inpatient and outpatient care, with specialized units in burn treatment, dental, and palliative care.",
  services: [
    "General Surgery",
    "Internal Medicine",
    "Pediatrics",
    "Obstetrics & Gynecology",
    "Orthopedics",
    "Ophthalmology",
    "Burn Treatment",
    "Dental Care",
    "Palliative Care",
  ],
  outpatientTags: [
    "Maternal & child health",
    "Surgical",
    "Orthopedic",
    "Eye",
    "Dental",
    "Endoscopy",
    "Diabetes",
    "HIV",
    "Tuberculosis",
  ],
  trainingParagraphs: [
    "Tenwek is a key training site for healthcare professionals in Kenya. Residency programs in family practice, general surgery, and orthopedic surgery operate in partnership with **Kabarak University** and the **Pan-African Academy of Christian Surgeons** (PAACS).",
    "The hospital provides internship training for medical and clinical officers, and is home to the Tenwek Hospital International School of Chaplaincy.",
  ],
  trainingInfo: [
    {
      key: "Residencies",
      value: "Family Practice · General Surgery · Orthopedic Surgery",
    },
    { key: "Internships", value: "Medical and clinical officer training" },
    {
      key: "Chaplaincy",
      value: "Tenwek Hospital International School of Chaplaincy",
    },
    { key: "Partners", value: "Kabarak University · PAACS" },
  ],
  needsParagraph:
    "Tenwek currently has standing needs in the following specialties. Both long-term and short-term placements are welcomed.",
  staffNeeds: [
    "General Surgery",
    "Pediatrics",
    "Orthopedic Surgery",
    "Obstetrics & Gynecology",
    "Family Medicine",
    "Anesthesia Providers",
    "Nursing Educators",
  ],
  tracksNote:
    "**Placements available across long-term, short-term, and resident elective tracks.** Apply through us — we route to the hospital and the appropriate sending agency.",
  hospitalNeedsIntro:
    "Hospital-submitted, vetted, and scoped. Click any need for the full page.",
  logistics: [
    {
      title: "Housing",
      body: "Volunteers are accommodated in **guesthouses or vacant missionary homes** on the hospital compound. Accommodations include electricity, running water, and cooking facilities.",
    },
    {
      title: "Food",
      body: "Meals are provided initially by the missionaries. Volunteers can later prepare their own meals. Grocery trips are organized **twice a month**; fresh produce is available from local markets.",
    },
    {
      title: "Travel",
      body: "Fly into **Nairobi**, then drive approximately four hours to Bomet. The hospital is 150 miles northwest of Nairobi and five miles east of Bomet town. The Tenwek logistics team assists with arrangements.",
    },
    {
      title: "Languages",
      body: "**English** and **Swahili** are Kenya's official languages. Medical staff are proficient in English and records are maintained in English. Translation services are available.",
    },
    {
      title: "Climate",
      body: "Highland location at **6,800 feet**, moderate and pleasant year-round. Cool season 51–70°F; warm season 52–79°F. Two rainy seasons: March–May and October–December.",
    },
    {
      title: "Time difference",
      body: "**+8 hours** ahead of US Eastern Standard Time, **+7 hours** during daylight saving time.",
    },
  ],
  agencies: [
    { name: "WMM", desc: "World Medical Mission" },
    { name: "Serge", desc: "Long-term placements" },
    { name: "CMDA", desc: "Networking & care" },
    { name: "PAACS", desc: "Surgical residency" },
  ],
  spiritualParagraphs: [
    "Tenwek integrates medical care with spiritual outreach. The hospital hosts both long-term and short-term medical mission trips, and trains and mentors local Christian healthcare professionals to serve their communities.",
    "The hospital primarily serves the **Kipsigis people**, who are largely agriculturalists. The region is predominantly Christian, with a mix of Protestant and Catholic communities.",
  ],
  faqs: [
    {
      question: "How do I get to Tenwek?",
      answer:
        "Fly into Nairobi, then drive about four hours to Bomet. The hospital is 150 miles northwest of Nairobi. The Tenwek logistics team assists with travel arrangements.",
      defaultOpen: true,
    },
    {
      question: "Where will I stay?",
      answer:
        "Volunteers stay in guesthouses or vacant missionary homes on the hospital compound. All accommodations include electricity, running water, and cooking facilities. Meals are provided initially by the missionaries; later you can prepare your own.",
    },
    {
      question: "What languages will I need?",
      answer:
        "English is sufficient for clinical work — Kenyan medical staff are proficient and records are kept in English. Swahili helps for patient interaction; the local tribal language is Kipsigis. Translation is available.",
    },
    {
      question: "What's the climate like?",
      answer:
        "Tenwek's highland location at 6,800 feet gives it a moderate, pleasant climate. Cool season runs 51–70°F; warm season 52–79°F. Two rainy seasons (March–May and October–December) bring an annual average of 55 inches of rain.",
    },
    {
      question: "What kinds of cases will I see?",
      answer:
        "Common conditions include infectious diseases, trauma, chronic respiratory and cardiovascular illness, and surgical emergencies. The hospital also addresses maternal and child health, HIV/AIDS, and tuberculosis. Specialized programs include burn treatment and eye surgery.",
    },
  ],
  glance: [
    { key: "Country", value: "Kenya" },
    { key: "Town", value: "Bomet · 5 mi E of Bomet town" },
    { key: "Founded", value: "1937" },
    { key: "Beds", value: "361" },
    { key: "Operator", value: "Africa Gospel Church & World Gospel Mission" },
    { key: "Motto", value: "“We Treat, Jesus Heals”" },
    { key: "Elevation", value: "6,800 ft · Highlands" },
    { key: "Languages", value: "English, Swahili, Kipsigis" },
    { key: "Time zone", value: "UTC+3 · EAT" },
  ],
};

export const hospitalDetails: Record<string, HospitalDetailContent> = {
  tenwek: tenwekDetail,
};

export function getHospitalDetail(slug: string) {
  return hospitalDetails[slug];
}
