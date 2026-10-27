import React from "react";
import facilitiesBg from "../assets/facilities-bg.webp";
import { Link } from "react-router-dom";
import {
  Landmark,
  Smartphone,
  Wallet,
  CreditCard,
  ShieldCheck,
  Users,
  ArrowRight,
  HeartPulse,
  Store,
  FlaskConical,
  Building2,
  Banknote,
  LockKeyhole,
  Monitor,
  Icon,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const mainFacilities = [
  {
    icon: Monitor,
    title: "Customer Kiosk",
    description:
      "Access essential banking information and selected services through our customer kiosk facility.",
  },
  {
    icon: LockKeyhole,
    title: "Locker Facility",
    description:
      "Keep your valuables protected with a secure locker facility for your peace of mind.",
  },
  {
    icon: Banknote,
    title: "RTGS & NEFT",
    description:
      "Transfer funds conveniently through electronic banking channels for eligible transactions.",
  },
];

const communityServices = [
  {
    icon: Store,
    title: "Neethi Consumer Store",
    location: "Orkkatteri",
    phone: "0496 2544323",
    description:
      "Everyday consumer products at reasonable prices to support the local community.",
  },
  {
    icon: HeartPulse,
    title: "Neethi Medical Store",
    location: "Azhiyur Chungam",
    phone: "7736706770",
    description:
      "Access to essential medicines through our community-focused medical store.",
  },
  {
    icon: FlaskConical,
    title: "Neethi Medical Lab",
    location: "Orkkatteri",
    phone: "9446267220",
    description:
      "Diagnostic services designed to make essential healthcare more accessible.",
  },
  {
    icon: HeartPulse,
    title: "Neethi Medical Store",
    location: "Kannookkara",
    phone: "9497304002",
    description:
      "Supporting local healthcare needs through convenient access to essential medicines.",
  },
];

const branches = [
  {
    name: "MAIN BRANCH",
    location: "Orkkatteri",
    phone: "0496 2547120",
  },
  {
    name: "VELLIKULANGARA BRANCH",
    location: "Vellikulangara",
    phone: "0496 2511717",
  },
  {
    name: "AZHIYOOR BRANCH",
    location: "Azhiyoor",
    phone: "9539674120",
  },
  {
    name: "BALAVADI BRANCH",
    location: "Balavadi",
    phone: "0496 2511160",
  },
];

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

export default function Facilities() {
  return (
    <main className="overflow-hidden bg-white text-[#234956]">
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: `url(${facilitiesBg})`,
          }}
          aria-hidden="true"
        />

        {/* Teal and white overlay */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#E7F7FA]/95 via-[#E7F7FA]/80 to-[#00516A]/35"
          aria-hidden="true"
        />

        <div className="mx-auto flex min-h-[340px] max-w-7xl items-center px-5 py-14 sm:min-h-[390px] sm:px-8 sm:py-16 lg:min-h-[430px] lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#008BA5] sm:text-xs">
              Vatakara Block Employees Co-op Society · Facilities
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#063B4A] sm:text-4xl lg:text-5xl">
              Banking Facilities &amp; Community Services
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#234956] sm:text-base">
              Convenient banking, dependable service and community-focused
              facilities designed to support our members in everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* BANKING FACILITIES */}
      <section
        id="banking-facilities"
        className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Banking Services"
            title="Facilities Designed Around You"
            description="Explore the banking and support facilities available to make your financial activities more convenient."
            centered
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {mainFacilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <div
                  key={facility.title}
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
                        {facility.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#52727D]">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMUNITY SERVICES */}
      <section className="bg-[#F4FAFC] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Beyond Banking"
            title="Community Services"
            description="Our Neethi institutions help members and local residents access essential consumer products, medicines and diagnostic services."
            centered
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {communityServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={`${service.title}-${service.location}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#D5E9ED] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00516A]/10"
                >
                  {/* Teal gradient header */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-[#003F53] via-[#00516A] to-[#008BA5] px-6 py-5">
                    <div className="pointer-events-none absolute -right-6 -top-10 h-28 w-28 rounded-full border-[16px] border-white/[0.07]" />

                    <div className="relative flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B9F4F8]">
                        {service.category}
                      </span>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>
                    </div>

                    <h3 className="relative mt-5 min-h-[3.5rem] text-xl font-semibold leading-snug text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col px-6 py-5">
                    <div className="flex flex-1 flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D5E9ED] bg-[#F4FAFC] text-[#008BA5] transition duration-300 group-hover:border-[#58C6D5] group-hover:bg-[#E7F7FA]">
                        <Icon size={29} strokeWidth={1.6} />
                      </div>

                      <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[#52727D]">
                        <MapPin size={16} className="shrink-0 text-[#008BA5]" />
                        <span className="font-medium">{service.location}</span>
                      </div>
                    </div>

                    {/* Gradient call button */}
                    <a
                      href={`tel:${service.phone.replace(/\s/g, "")}`}
                      aria-label={`Call ${service.title}, ${service.location}`}
                      className="mt-6 inline-flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-[#00516A] to-[#008BA5] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:from-[#003F53] hover:to-[#00516A] hover:shadow-md"
                    >
                      <span className="flex items-center gap-2">
                        <Phone size={16} />
                        {service.phone}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section
        id="branches"
        className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
            <div>
              <SectionIntro
                eyebrow="Visit Us"
                title="Our Branch Network"
                description="Connect with our team at the branch most convenient for you. We are here to help with your banking needs."
              />

              <div className="mt-6 rounded-xl bg-[#00516A] p-5 text-white sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Landmark size={21} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold">HEAD OFFICE</h3>
                    <p className="mt-1 text-sm leading-6 text-white/80">
                      Vatakara Block Employees Co-operative Society Ltd. No.
                      D2394, Orkkatteri P.O., Kozhikode District, Kerala -
                      673501.
                    </p>
                    <a
                      href="tel:04962546120"
                      className="mt-3 inline-block text-sm font-semibold text-[#BCEAF1] hover:text-white"
                    >
                      0496 2546120
                    </a>
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
                      <p className="mt-1 text-xs text-white/80">
                        {branch.location}
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Building2 size={18} />
                    </div>
                  </div>

                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#BCEAF1] hover:text-white"
                  >
                    <Smartphone size={15} />
                    {branch.phone}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-[#00516A] to-[#008BA5] px-6 py-9 text-white sm:px-10 sm:py-11 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <div className="mb-2 flex items-center gap-2 text-[#C6F0F5]">
              <Users size={17} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">
                We Are Here to Help
              </span>
            </div>

            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
              Need Assistance with Our Services?
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base">
              Contact our team for information about banking facilities,
              branches and community services.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
            <a
              href="tel:04962546120"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#00516A] transition hover:bg-[#E7F7FA]"
            >
              Contact Us
              <ArrowRight size={16} />
            </a>

            <a
              href="mailto:vbecsltd@gmail.com"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
