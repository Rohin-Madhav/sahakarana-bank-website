import { useState } from "react";
import { Link } from "react-router-dom";
import familyImage from "../assets/Family-Savings.webp";
import interestRatesImage from "../assets/interest-rates-reference.png";
import awardsTrophyImage from "../assets/awards-trophy-reference.png";
import educationImage from "../assets/social-initiative-1.webp";
import healthcareImage from "../assets/social-initiative-2.webp";
import environmentImage from "../assets/social-initiative-3.webp";
import communityImage from "../assets/social-initiative-4.webp";
import qualityPolicyImage from "../assets/quality-policy.png";
import whoWeAreImage from "../assets/who we are.webp";

import {
  ArrowRight,
  ArrowUpRight,
  HandCoins,
  Landmark,
  ShieldCheck,
  Smartphone,
  CreditCard,
  LockKeyhole,
  ArrowLeftRight,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  Building2,
  CircleCheck,
} from "lucide-react";

const deposits = [
  {
    title: "Savings Bank Deposits",
    icon: HandCoins,
    description: "Build your savings with convenient banking services.",
  },
  {
    title: "Current Deposits",
    icon: Landmark,
    description: "Flexible banking for businesses and organizations.",
  },
  {
    title: "Fixed Deposits",
    icon: CreditCard,
    description: "Explore deposit options for your financial goals.",
  },
  {
    title: "Daily Deposits",
    icon: HandCoins,
    description: "Save regularly with a convenient deposit scheme.",
  },
  {
    title: "Recurring Deposits",
    icon: CalendarDays,
    description: "Develop a disciplined savings habit.",
  },
  {
    title: "Other Deposits",
    icon: ShieldCheck,
    description: "Discover additional savings options.",
  },
];

const facilities = [
  {
    title: "Mobile Banking",
    icon: Smartphone,
    description:
      "Access available banking services conveniently from your mobile.",
  },
  {
    title: "ATM & CDM",
    icon: CreditCard,
    description: "Explore available cash withdrawal and deposit facilities.",
  },
  {
    title: "Customer Kiosk",
    icon: Building2,
    description: "Convenient self-service options, subject to availability.",
  },
  {
    title: "Locker Facility",
    icon: LockKeyhole,
    description: "Enquire about available locker facilities.",
  },
  {
    title: "NEFT / RTGS",
    icon: ArrowLeftRight,
    description: "Learn about available electronic fund transfer services.",
  },
  {
    title: "Customer Support",
    icon: Users,
    description: "Contact our team for banking information and assistance.",
  },
];

const initiatives = [
  {
    title: "Neethi Consumer Store",
    category: "Consumer Services",
    location: "Orkkatteri",
    phone: "0496 2544323",
    icon: Building2,
  },
  {
    title: "Neethi Medical Store",
    category: "Healthcare",
    location: "Azhiyur Chungam",
    phone: "7736706770",
    icon: ShieldCheck,
  },
  {
    title: "Neethi Medical Lab",
    category: "Diagnostic Services",
    location: "Orkkatteri",
    phone: "9446267220",
    icon: CircleCheck,
  },
  {
    title: "Education Support",
    image: educationImage,
    description:
      "Supporting learning opportunities and a brighter future for children in our community.",
    icon: Users,
  },
  {
    title: "Healthcare Access",
    image: healthcareImage,
    description:
      "Encouraging healthier communities through awareness and essential care.",
    icon: ShieldCheck,
  },
  {
    title: "Environmental Care",
    image: environmentImage,
    description:
      "Promoting a greener tomorrow through tree planting and environmental awareness.",
    icon: HandCoins,
  },
  {
    title: "Community Development",
    image: communityImage,
    description:
      "Creating opportunities and supporting local community development.",
    icon: Landmark,
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#008BA5]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#00516A] md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-7 text-[#52727D] md:text-base ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function SectionLink({ to, children = "Explore More" }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 font-semibold text-[#008BA5] transition hover:gap-3"
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

export default function Home() {
  const [activeDeposit, setActiveDeposit] = useState(-1);
  return (
    <main className="overflow-hidden bg-white font-sans text-[#234956]">
      {/* HERO â€” full-width family background */}

      <section className="relative isolate overflow-hidden bg-[#00303F]">
        {/* Background family image */}
        <img
          src={familyImage}
          alt="Family saving together for their future"
          fetchPriority="high"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[72%_center] md:object-center"
        />

        {/* Mobile scrim (top-to-bottom) */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#00303F]/90 via-[#00303F]/70 to-[#00303F]/90 md:hidden" />

        {/* Desktop scrim (left-to-right, smooth fade, no hard edge) */}
        <div className="absolute inset-y-0 left-0 -z-20 hidden w-[68%] bg-gradient-to-r from-[#00303F] via-[#00303F]/85 to-transparent md:block" />

        {/* Soft teal glow accents */}
        <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-[#008BA5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full border border-[#58C6D5]/20" />
        <div className="pointer-events-none absolute -left-10 -top-10 -z-10 h-72 w-72 rounded-full border border-[#58C6D5]/10" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-5 pb-36 pt-20 md:min-h-[680px] md:px-8 md:pb-44 md:pt-24">
          <div className="max-w-2xl text-white">
            {/* Headline */}

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Your Trusted Partner
              <span className="block bg-gradient-to-r from-[#58C6D5] to-[#9BE7F0] bg-clip-text text-transparent">
                in Every Step of Life
              </span>
            </h1>

            {/* Tagline */}
            <div className="mt-6 border-l-4 border-[#58C6D5] pl-4">
              <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                Banking for Today
              </p>
              <p className="text-lg font-semibold text-white/80 sm:text-xl md:text-2xl">
                Building a Better Tomorrow
              </p>
            </div>
       

{/* ISO certification badge */}
<div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-[#58C6D5]/30 bg-[#00516A]/45 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-5">
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#58C6D5]/15">
    <Award
      size={29}
      strokeWidth={2.2}
      className="text-[#58C6D5]"
      aria-hidden="true"
    />
  </div>

  <div className="leading-tight">
    <p className="text-sm font-bold tracking-wide text-white sm:text-base">
      ISO 9001:2015
    </p>
    <p className="mt-1 text-xs font-medium text-[#B8EDF3] sm:text-sm">
      Certified Bank
    </p>
  </div>
</div>


          </div>
        </div>
      </section>

      {/* Spacing for the overlapping updates card */}
      <div className="h-24 bg-[#F4FAFC] sm:h-28 md:h-32" />

      {/* LATEST UPDATES */}

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-4 overflow-hidden rounded-xl border border-gray-100 bg-white p-5 shadow-lg md:flex-row md:items-center md:gap-8 md:px-8 md:py-6">
          {/* Fixed heading */}
          <h2 className="shrink-0 text-2xl font-bold tracking-tight text-[#003F53] md:text-3xl">
            Latest Updates
          </h2>

          <div className="hidden h-10 w-px shrink-0 bg-gray-200 md:block" />
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-2 text-sm leading-6 text-gray-600">
            <span className="font-semibold text-[#00516A]">Bank Updates:</span>
            <span>Explore our banking services and announcements.</span>
            <Link
              to="/news-events"
              className="font-semibold text-[#008BA5] hover:underline"
            >
              View all â†’
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[40px] bg-[#BDECF2]" />
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00516A] to-[#008BA5]">
              <img
                src={whoWeAreImage}
                alt="Who We Are"
                className="h-[340px] w-full object-cover md:h-[440px]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden rounded-xl bg-white p-5 shadow-xl sm:block">
              <ShieldCheck size={28} className="mb-2 text-[#008BA5]" />
              <p className="font-semibold text-[#00516A]">Trust & Service</p>
              <p className="mt-1 text-sm text-[#52727D]">
                Our commitment to you
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Banking Built Around Your Community"
              description="We aim to provide accessible banking services while supporting savings, financial wellbeing and community development."
            />
            <p className="mb-5 text-sm leading-8 text-[#52727D] md:text-base">
              At Shakarana Bank, we believe strong communities begin with
              financial confidence. Explore our deposit options, banking
              facilities and services to find what meets your needs.
            </p>
            <div className="mb-8 space-y-3">
              {[
                "Customer-focused service",
                "Accessible banking information",
                "Commitment to community development",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CircleCheck size={19} className="shrink-0 text-[#008BA5]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <SectionLink to="/about">Discover Our Bank</SectionLink>
          </div>
        </div>
      </section>

{/* DEPOSIT SCHEME TILES */}
<section className="relative z-20 -mt-16 -mb-16 bg-transparent px-5 md:px-8">
  <div className="mx-auto grid max-w-5xl grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-6">
    {deposits.map((item, index) => {
      const Icon = item.icon;
      const active = activeDeposit === index;

      const colors = [
        "bg-[#00516A] text-white",
        "bg-[#D9F4F8] text-[#00465C]",
        "bg-[#008BA5] text-white",
        "bg-[#BCECF9] text-[#00465C]",
        "bg-[#006D85] text-white",
        "bg-[#E8F8FA] text-[#00465C]",
      ];

      return (
        <button
          type="button"
          key={item.title}
          onClick={() => setActiveDeposit(active ? -1 : index)}
          aria-pressed={active}
          className={`group flex h-[150px] w-full min-w-0 flex-col items-center justify-center rounded-none border-0 px-2 text-center transition-all duration-300 hover:relative hover:z-30 hover:brightness-95 hover:shadow-lg ${
            active
              ? "bg-[#003746] text-white"
              : colors[index % colors.length]
          }`}
        >
          <Icon
            size={24}
            className="mb-2 shrink-0 transition-transform duration-300 group-hover:scale-110"
          />

          <span className="text-xs font-bold leading-snug sm:text-sm">
            {item.title}
          </span>
        </button>
      );
    })}

          {/* Continuous horizontal ticker */}
          <div className="group flex min-w-0 flex-1 items-center gap-3 overflow-hidden">
            <span className="shrink-0 text-lg font-semibold text-[#00516A]">
              Fixed Deposit Rates:
            </span>

            <div className="min-w-0 flex-1 overflow-hidden">
              <div className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
                {[1, 2].map((copy) => (
                  <div
                    key={copy}
                    className="flex shrink-0 items-center"
                    aria-hidden={copy === 2}
                  >
                    {[
                      { period: "15â€“45 Days", rate: "6.25%" },
                      { period: "46â€“90 Days", rate: "6.75%" },
                      { period: "90â€“180 Days", rate: "7.25%" },
                      { period: "181â€“364 Days", rate: "7.75%" },
                      { period: "Above 1 Year", rate: "8.00%" },
                      { period: "Senior Citizen", rate: "0.5% extra" },
                    ].map((item) => (
                      <div
                        key={item.period}
                        className="flex shrink-0 items-center gap-2 px-5 text-sm text-gray-600"
                      >
                        <span className="whitespace-nowrap">{item.period}</span>
                        <strong className="whitespace-nowrap text-[#008BA5]">
                          {item.rate}
                        </strong>
                        <span className="ml-3 text-gray-300">â€¢</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* News link */}
          <Link
            to="/news-events"
            className="shrink-0 text-sm font-semibold text-[#008BA5] transition hover:text-[#00516A] hover:underline"
          >
            View all â†’
          </Link>
        </div>

        <style>{`
    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .animate-marquee {
      animation: marquee 35s linear infinite;
      will-change: transform;
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-marquee {
        animation: none;
      }
    }
  `}</style>
      </section>

      {/* ABOUT */}
   
<section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
  <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
    {/* Left image */}
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00516A] to-[#008BA5]">
        <img
          src={whoWeAreImage}
          alt="Who We Are"
          className="h-[340px] w-full object-cover md:h-[440px]"
          loading="lazy"
        />
      </div>
    </div>

    {/* Right content */}
    <div>
     

      <SectionHeading
        eyebrow="Who We Are"
        title="Banking Built Around Your Community"
        description="We aim to provide accessible banking services while supporting savings, financial wellbeing and community development."
      />

      <p className="mb-5 text-sm leading-8 text-[#52727D] md:text-base">
        At Shakarana Bank, we believe strong communities begin with
        financial confidence. Explore our deposit options, banking
        facilities and services to find what meets your needs.
      </p>

   
      <SectionLink to="/about">Read More</SectionLink>
    

    </div>
  </div>
</section>


      {/* DEPOSIT SCHEME TILES */}
      <section className="relative z-20 -mt-16 -mb-16 bg-transparent px-5 md:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-6">
          {deposits.map((item, index) => {
            const Icon = item.icon;
            const active = activeDeposit === index;

            const colors = [
              "bg-[#00516A] text-white",
              "bg-[#D9F4F8] text-[#00465C]",
              "bg-[#008BA5] text-white",
              "bg-[#BCECF9] text-[#00465C]",
              "bg-[#006D85] text-white",
              "bg-[#E8F8FA] text-[#00465C]",
            ];

            return (
              <button
                type="button"
                key={item.title}
                onClick={() => setActiveDeposit(active ? -1 : index)}
                aria-pressed={active}
                className={`group flex h-[150px] w-full min-w-0 flex-col items-center justify-center rounded-none border-0 px-2 text-center transition-all duration-300 hover:relative hover:z-30 hover:brightness-95 hover:shadow-lg ${
                  active
                    ? "bg-[#003746] text-white"
                    : colors[index % colors.length]
                }`}
              >
                <Icon
                  size={24}
                  className="mb-2 shrink-0 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-xs font-bold leading-snug sm:text-sm">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* QUALITY POLICY */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F4FAFC] via-white to-[#E7F7FA] py-16 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#BDECF2]/30 blur-3xl" />
        <div className="mx-auto mt-8 grid max-w-6xl items-center gap-10 px-5 md:mt-12 md:grid-cols-2 md:gap-14 md:px-8">
          <div className="relative z-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#008BA5]">
              Additional Feature
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#00516A] md:text-4xl">
              Quality Policy
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#234956] md:text-base">
              We the kadirur service co-operative bank is committed to provides
              all commercial banking service beyond the expectations of the
              customers in a novel way to make number one co-operative bank in
              kerala through continual improvement and support from the society.
            </p>
            <h3 className="mt-6 text-base font-bold text-[#00516A]">
              Quality Objectives
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#234956] md:text-base">
              {[
                "Frequently survey customers for feedback, aiming for a minimum 90% satisfaction rate.",
                "To improvement our customer base by 20% over the previous year",
                "To attend and solve customer complaints within 24 working hours",
                "Enhance the total business volume of the bank by 20% during the year",
                "Reduce NPA below 3% during this year",
              ].map((objective) => (
                <li key={objective} className="flex items-start gap-3">
                  <CircleCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-[#008BA5]"
                  />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-[#D5E9ED] bg-[#E7F7FA] shadow-lg">
            <img
              src={qualityPolicyImage}
              alt="Quality assurance and trusted banking service"
              loading="lazy"
              className="h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none md:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="What We Offer"
          title="Banking Facilities"
          description="Explore the facilities and services available to customers. Contact the bank to confirm availability and access requirements."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#E0EDF0] bg-white p-7 transition hover:border-[#58C6D5] hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7F7FA] text-[#008BA5] transition group-hover:bg-[#008BA5] group-hover:text-white">
                  <Icon size={27} />
                </div>
                <h3 className="text-lg font-semibold text-[#00516A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#52727D]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <SectionLink to="/facilities">Explore All Facilities</SectionLink>
        </div>
      </section>

      {/* INTEREST RATES â€” */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Interest Rates" title="Fixed Deposit" />
          <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1fr_1.25fr_1fr]">
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { period: "15 - 45 Days", rate: "6.25%" },
                { period: "46 - 90 Days", rate: "6.75%" },
                { period: "90 - 180 Days", rate: "7.25%" },
              ].map((item) => (
                <article
                  key={item.period}
                  className="mx-auto flex min-h-[112px] w-full max-w-[170px] flex-col items-center justify-center rounded-xl bg-[#008BA5] px-3 py-4 text-center text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-2xl font-extrabold tracking-tight md:text-3xl">
                    {item.rate}
                  </p>
                  <p className="mt-2 text-sm md:text-base">{item.period}</p>
                </article>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <img
                src={interestRatesImage}
                alt="Coins and rising interest-rate arrow"
                className="w-full max-w-[500px] object-contain transition-transform duration-500 ease-out hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { period: "181 - 364 Days", rate: "7.75%" },
                { period: "Above 1 Year", rate: "8.00%" },
                { period: "Senior Citizen", rate: "0.5% extra" },
              ].map((item) => (
                <article
                  key={item.period}
                  className="mx-auto flex min-h-[112px] w-full max-w-[190px] flex-col items-center justify-center rounded-xl bg-[#008BA5] px-3 py-4 text-center text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-2xl font-extrabold tracking-tight md:text-3xl">
                    {item.rate}
                  </p>
                  <p className="mt-2 text-sm md:text-base">{item.period}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs leading-6 text-[#52727D]">
            Note: Rates shown are copied from the supplied reference screenshot
            and must be confirmed with the bank before publishing.
          </p>
          <div className="mt-5">
            <SectionLink to="/deposits">Enquire About Rates</SectionLink>
          </div>
        </div>
      </section>

      {/* SOCIAL INITIATIVES */}
    
<section className="relative isolate overflow-hidden bg-[#F4FAFC] py-20 md:py-28">
  {/* Decorative background */}
  <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#58C6D5]/15 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-[#008BA5]/10 blur-3xl" />
  <div
    className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
    style={{
      backgroundImage:
        "radial-gradient(#BFE3EA 1px, transparent 1px)",
      backgroundSize: "24px 24px",
      maskImage:
        "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
      WebkitMaskImage:
        "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
    }}
  />

  <div className="mx-auto max-w-7xl px-5 md:px-8">
    <SectionHeading
      eyebrow="Beyond Banking"
      title="Associated Institutions"
      description="Beyond banking, we support our community through associated consumer, medical and laboratory services."
    />

    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {initiatives.map((item, index) => {
        const Icon = item.icon;

        return (
          <article
            key={`${item.title}-${item.location}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#D5E9ED] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#58C6D5] hover:shadow-xl hover:shadow-[#008BA5]/10"
          >
            {/* Top accent bar */}
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#00516A] via-[#008BA5] to-[#58C6D5] transition-transform duration-500 group-hover:scale-x-100" />

            {/* Large faded index number */}
            <span className="pointer-events-none absolute right-5 top-3 text-6xl font-extrabold leading-none text-[#E7F7FA] transition group-hover:text-[#D2F0F5]">
              0{index + 1}
            </span>

            {/* Icon */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#E7F7FA] to-[#D2F0F5] text-[#008BA5] transition duration-300 group-hover:from-[#008BA5] group-hover:to-[#00516A] group-hover:text-white">
              <Icon size={27} strokeWidth={1.8} />
            </div>

            {/* Category tag */}
            <span className="mt-5 inline-block self-start rounded-full bg-[#E7F7FA] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#008BA5]">
              {item.category}
            </span>

            <h3 className="mt-3 min-h-[3.5rem] text-xl font-bold leading-snug text-[#00516A]">
              {item.title}
            </h3>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2.5 border-t border-[#E5F0F2] pt-4 text-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4FAFC] text-[#008BA5]">
                <MapPin size={16} />
              </span>
              <span className="font-semibold text-[#234956]">
                {item.location}
              </span>
            </div>

            {/* Call button */}
            <a
              href={`tel:${item.phone.replace(/\s/g, "")}`}
              className="mt-5 inline-flex items-center justify-between gap-3 rounded-xl bg-[#F4FAFC] px-4 py-3 text-sm font-semibold text-[#00516A] ring-1 ring-[#D5E9ED] transition hover:bg-[#008BA5] hover:text-white hover:ring-[#008BA5]"
              aria-label={`Call ${item.title}, ${item.location}`}
            >
              <span className="flex items-center gap-2">
                <Phone size={16} />
                {item.phone}
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </article>
        );
      })}
    </div>

    <div className="mt-12 flex justify-center md:justify-start">
      <SectionLink to="/gallery">Explore Our Activities</SectionLink>
    </div>
  </div>
</section>


      {/* AWARDS â€” matching the supplied reference layout and image proportions */}
      {/* <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Awards" title="Our Achievements" centered />

          <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_0.8fr_1fr]">
            <div className="space-y-4">
              {[
                "Best Performance Award 2023-2024",
                "Best Co-operative Bank Award 2024",
                "Best Credit initiative Award 2024",
                "Best Human Resource Management innovation Award 2024",
                "First position for Best Performance in the State Government Primary Agriculture Credit.",
                "Sahakarana rathnam Award 2024",
                "Rashtrreeya Nirmal Puraskar for Bank President",
              ].map((title) => (
                <div
                  key={title}
                  className="flex items-start gap-2.5 text-sm font-medium leading-snug text-[#52727D] md:text-base"
                >
                  <Award size={21} className="mt-0.5 shrink-0 text-[#008BA5]" />
                  <span>{title}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <img
                src={awardsTrophyImage}
                alt="Golden trophy for the bank's achievements"
                className="w-full max-w-[320px] object-contain transition-transform duration-500 ease-out hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none"
              />
            </div>

            <div className="space-y-4">
              {[
                "Frontiers of Cooperative Banking Awards (FCBA) 2023",
                "First Prize for Deposit Collection 2023",
                "NCDC Best Performance Award",
                "Kerala Bank Excellency Award",
                "Best Co-operative Bank IT Head Award 2022",
                "Best Co-operative Bank Award 2021",
                "FCBA Best Performance Award 2024-25",
              ].map((title) => (
                <div
                  key={title}
                  className="flex items-start gap-2.5 text-sm font-medium leading-snug text-[#52727D] md:text-base"
                >
                  <Award size={21} className="mt-0.5 shrink-0 text-[#008BA5]" />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <SectionLink to="/awards">View All Awards</SectionLink>
          </div>
        </div>
      </section> */}

      {/* CONTACT CTA */}
      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-[#E7F7FA] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#008BA5]">
              We Are Here to Help
            </p>
            <h2 className="text-3xl font-bold leading-tight text-[#00516A] md:text-4xl">
              Let's Talk About Your Banking Needs
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#52727D] md:text-base">
              Contact our team for information about our services, deposit
              schemes and banking facilities.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#008BA5] px-6 py-4 font-semibold text-white transition hover:bg-[#00516A]"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

