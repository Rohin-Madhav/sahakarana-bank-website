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
} from "lucide-react";

const mainFacilities = [
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description:
      "Access banking services conveniently and manage your financial needs with greater flexibility.",
  },
  {
    icon: CreditCard,
    title: "24×7 ATM & CDM",
    description:
      "Enjoy convenient access to cash withdrawal and cash deposit services through ATM and CDM facilities.",
  },
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
  {
    icon: Building2,
    title: "Auditorium & Conference Hall",
    description:
      "Facilities for meetings, conferences and community programmes that bring people together.",
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
    name: "Main Branch",
    location: "Orkkatteri",
    phone: "0496 2547120",
  },
  {
    name: "Vellikulangara Branch",
    location: "Vellikulangara",
    phone: "0496 2511717",
  },
  {
    name: "Azhiyoor Branch",
    location: "Azhiyoor",
    phone: "9539674120",
  },
  {
    name: "Balavadi Branch",
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
                <article
                  key={facility.title}
                  className="group rounded-xl border border-[#DDECEF] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#9CCDD7] hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E7F7FA] text-[#007D96] transition group-hover:bg-[#00516A] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#008BA5]">
                    Facility {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-1.5 text-base font-bold leading-snug text-[#063B4A] sm:text-lg">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#627A83] sm:text-sm">
                    {facility.description}
                  </p>
                </article>
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
                  className="flex flex-col rounded-xl border border-[#DDECEF] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F7FA] text-[#007D96]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-4 text-base font-bold leading-snug text-[#063B4A]">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#008BA5]">
                    {service.location}
                  </p>

                  <p className="mt-3 flex-1 text-[13px] leading-6 text-[#627A83]">
                    {service.description}
                  </p>

                  <a
                    href={`tel:${service.phone.replace(/\s/g, "")}`}
                    className="mt-4 inline-flex items-center gap-2 border-t border-[#E7F0F2] pt-3 text-xs font-semibold text-[#00516A] transition hover:text-[#008BA5]"
                  >
                    <Smartphone size={14} />
                    {service.phone}
                  </a>
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
                  className="rounded-xl border border-[#DDECEF] bg-white p-5 transition hover:border-[#9CCDD7] hover:shadow-md sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold leading-snug text-[#063B4A]">
                        {branch.name}
                      </h3>
                      <p className="mt-1 text-xs text-[#627A83]">
                        {branch.location}
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E7F7FA] text-[#007D96]">
                      <Building2 size={18} />
                    </div>
                  </div>

                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#00516A] hover:text-[#008BA5]"
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
