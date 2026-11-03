import { useState } from "react";
import { Link } from "react-router-dom";
import familyImage from "../assets/Family-Savings.webp";
import interestRatesImage from "../assets/interest-rates-reference.png";
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
  Icon,
  CalendarDays,
  Building2,
  CircleCheck,
  ShoppingBasket,
  BriefcaseMedical,
  FlaskConical,
  Microscope,
  MonitorSmartphone,
} from "lucide-react";

const institutions = [
  {
    title: "NEETHI CONSUMER STORE",
    category: "Consumer",
    location: "Orkkatteri",
    phone: "0496 2544323",
    icon: ShoppingBasket,
  },
  {
    title: "NEETHI MEDICAL STORE",
    category: "Medical",
    location: "Azhiyur Chungam",
    phone: "7736706770",
    icon: BriefcaseMedical,
  },
  {
    title: "NEETHI MEDICAL LAB",
    category: "Laboratory",
    location: "Orkkatteri",
    phone: "9446267220",
    icon: FlaskConical,
  },
  {
    title: "NEETHI MEDICAL LAB",
    category: "Laboratory",
    location: "Kannookkara",
    phone: "9497304002",
    icon: Microscope,
  },
];

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
    title: "Customer Kiosk",
    icon: MonitorSmartphone,
    description: "Convenient self-service options, subject to availability.",
  },
  {
    title: "Auditorium & Conference Hall",
    icon: Building2,
    description:
      "Well-equipped spaces for meetings, events, and presentations.",
  },
  {
    title: "Locker Facility",
    icon: LockKeyhole,
    description: "Enquire about available locker facilities.",
  },
  {
    title: "Customer Support",
    icon: Users,
    description: "Contact our team for banking information and assistance.",
  },
];

const branches = [
  {
    name: "MAIN BRANCH",
    location: "ORKKATTERI",
    phone: "0496 2547120",
    mapUrl: "https://maps.app.goo.gl/bGyFepQzAqc3gzyV8",
  },
  {
    name: "VELLIKULANGARA BRANCH",
    location: "",
    phone: "0496 2511717",
    mapUrl: "https://maps.app.goo.gl/QHD3FpJViubK6gMj8",
  },
  {
    name: "AZHIYOOR BRANCH",
    location: "",
    phone: "9539674120",
    mapUrl: "https://maps.app.goo.gl/VTRkk6zkaXBHPqcZ7",
  },
  {
    name: "BALAVADI BRANCH",
    location: "",
    phone: "0496 2511160",
    mapUrl: "https://maps.app.goo.gl/wVzmkZpPpwWq4RsYA",
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

function SectionIntro({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#008BA5] sm:text-xs">
        {eyebrow}
      </p>

      <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#063B4A] sm:text-3xl lg:text-[2.15rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-6 text-[#627A83] sm:text-[15px] sm:leading-7">
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
      {/* HERO — full-width family background */}

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

            <h1 className="mt-5 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Your Trusted Partner
              <span className="block bg-gradient-to-r from-[#58C6D5] to-[#9BE7F0] bg-clip-text text-transparent">
                in Every Step of Life
              </span>
            </h1>

            {/* Tagline */}
            <div className="mt-6 ">
              <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                Banking for Today
              </p>
              <p className="text-lg font-semibold text-white/80 sm:text-xl md:text-2xl">
                Building a Better Tomorrow
              </p>
            </div>

            {/* Certification badges */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {/* ISO certification badge */}
              <div className="inline-flex items-center gap-3 rounded-xl border border-[#58C6D5]/30 bg-[#00516A]/45 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-5">
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

              {/* Class 1 Special Grade badge */}
              <div className="inline-flex items-center gap-3 rounded-xl border border-[#58C6D5]/30 bg-[#00516A]/45 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-5">
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
                    Class 1
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#B8EDF3] sm:text-sm">
                    Special Grade
                  </p>
                </div>
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
                      { period: "15–45 Days", rate: "6.25%" },
                      { period: "46–90 Days", rate: "6.75%" },
                      { period: "90–180 Days", rate: "7.25%" },
                      { period: "181–364 Days", rate: "7.75%" },
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
                        <span className="ml-3 text-gray-300">•</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* News link */}
          <a
            href="#interest-rates"
            className="shrink-0 text-sm font-semibold text-[#008BA5] transition hover:text-[#00516A] hover:underline"
          >
            View all →
          </a>
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
              description="The Vatakara Block Employees' Co-operative Society, established at Orkkatteri under the leadership of the late freedom fighter K. Kunhirama Kurup, was registered on April 23, 1986.
Launched under the name 'Vadakara Block Employees & Pensioners Credit Co-operative Society,' the institution commenced operations on May 18 of the same year.
Currently, the society employs 58 individuals, including staff members, collection agents, appraisers, and employees of allied institutions. It has a membership base of 37,463 across categories A, C, and D.
The society holds a share capital of ₹ 2,34,78,690 and deposits amounting to ₹108.16 crore"
            />
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

      {/* MISSION & VISION */}

      <section className="relative mt-7 overflow-hidden bg-[#F4FAFC] py-16 md:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#58C6D5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-10">
            {/* LEFT - VISION & MISSION */}
            <div className="flex flex-col gap-6">
              {/* VISION CARD */}
              <article className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#003F53] via-[#00516A] to-[#007D91] p-7 text-white shadow-lg shadow-[#003F53]/10 sm:p-9">
                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full border-[35px] border-white/[0.06]" />

                <div className="relative">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8DE7F0]">
                    Our Vision
                  </p>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                    To be the most trusted and comprehensive co-operative
                    partner for our members, fostering lifelong financial
                    security, accessible healthcare, and affordable daily living
                    under the proud values of the Kerala Co-operative sector.
                  </p>
                </div>
              </article>

              {/* MISSION CARD */}
              <article className="relative overflow-hidden rounded-3xl border border-[#D5E9ED] bg-white p-7 shadow-sm sm:p-9">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#008BA5]">
                  Our Mission
                </p>

                <div className="mt-6 space-y-5">
                  {/* Financial Empowerment */}
                  <div>
                    <h4 className="font-semibold text-[#00516A]">
                      Financial Empowerment
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#52727D]">
                      Secure, high-yield deposit schemes and fair, accessible
                      loan products tailored to our members' growth.
                    </p>
                  </div>

                  {/* Healthcare Excellence */}
                  <div>
                    <h4 className="font-semibold text-[#00516A]">
                      Healthcare Excellence
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#52727D]">
                      Reliable, affordable, high-quality diagnostic and
                      pharmaceutical services through our co-operative medical
                      labs and stores.
                    </p>
                  </div>

                  {/* Daily Essentials */}
                  <div>
                    <h4 className=" font-semibold text-[#00516A]">
                      Daily Essentials
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#52727D]">
                      Quality household groceries at reasonable prices through
                      our retail outlets, supporting community welfare.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* RIGHT - IMAGE */}
            <div className="group relative h-[350px] overflow-hidden rounded-3xl bg-[#003F53] shadow-lg sm:h-[450px] lg:h-full lg:min-h-[650px]">
              <img
                src={qualityPolicyImage}
                alt="Vatakara Block Employees Co-op Society"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="mt-3 text-3xl font-semibold text-[#003F53] md:text-4xl">
              Our Core Values
            </h2>
          </div>

          {/* Values List */}
          <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
            {[
              {
                title: "Mutual Help",
                description: "Believing in the power of growing together.",
              },
              {
                title: "Transparency",
                description:
                  "Maintaining absolute integrity in financial and medical operations.",
              },
              {
                title: "Affordability",
                description:
                  "Keeping health services and daily retail accessible to everyone.",
              },
              {
                title: "Member First",
                description:
                  "Aligning every new venture with the welfare of our members.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="flex items-start gap-4 border-b border-[#D5E9ED] pb-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7F7FA] text-sm font-semibold text-[#00516A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-[#00516A]">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#52727D] md:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading title="Banking Facilities" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex overflow-hidden rounded-2xl border border-[#D5E9ED] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#58C6D5] hover:shadow-lg hover:shadow-[#00516A]/10"
              >
                {/* Left teal gradient strip */}
                <div className="w-2 shrink-0 bg-gradient-to-b from-[#003F53] via-[#008BA5] to-[#58C6D5] transition-all duration-300 group-hover:w-3" />

                {/* Card content */}
                <div className="flex flex-1 items-start gap-5 p-5 sm:p-6">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F7FA] text-[#008BA5] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#00516A] group-hover:to-[#008BA5] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold leading-snug text-[#00516A] transition-colors group-hover:text-[#008BA5]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#52727D]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTEREST RATES — */}
      <section id="interest-rates" className="bg-white py-16 md:py-20">
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
            backgroundImage: "radial-gradient(#BFE3EA 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {/* BRANCHES */}
        <section
          id="branches"
          className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
              <div>
                <SectionIntro title="Our Branch Network" />

                <div className="mt-6 rounded-xl bg-[#00516A] p-5 text-white sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Landmark size={21} />
                    </div>

                    <div>
                      <h3 className="text-base font-bold">HEAD OFFICE</h3>
                      <p className="mt-1 text-sm leading-6 text-white/80">
                        Vatakara Block Employees Co Operative Society Ltd
                        <br></br>
                        No D2394 Orkkatteri Po, Kozhikode Dist, Pin 673501{" "}
                        <br></br>Main Branch & Head Office Orkkatteri.
                      </p>
                      <p className="mt-3 inline-block text-sm font-semibold text-[#BCEAF1] hover:text-white">
                        Email: vbecsltd@gmail.com
                      </p>
                      <p className="mt-3 inline-block text-sm font-semibold text-[#BCEAF1] hover:text-white">
                        Ph: 0496 2546120, 8547247120
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {branches.map((branch) => (
                  <article
                    key={branch.name}
                    className="rounded-xl border border-[#00516A] bg-[#00516A] p-5 text-white transition hover:border-[#008BA5] hover:shadow-md sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-bold leading-snug text-white">
                          {branch.name}
                        </h3>
                        <h3 className="text-base font-bold leading-snug text-white">
                          {branch.location}
                        </h3>
                      </div>
                    </div>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="mt-5 block w-fit items-center gap-2 text-sm font-semibold text-[#BCEAF1] hover:text-white"
                    >
                      Ph:
                      {branch.phone}
                    </a>
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex w-fit items-center gap-2 text-sm font-medium text-[#BCEAF1] hover:text-white hover:underline"
                    >
                      <MapPin size={16} className="shrink-0" />
                      View Location
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

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
