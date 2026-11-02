import {
  HeartHandshake,
  ShieldCheck,
  Users,
  WalletCards,
  Stethoscope,
  ShoppingBasket,
} from "lucide-react";
import whoWeAreImage from "../assets/who we are.webp";
import { useState } from "react";

const stats = [
  ["1986", "Year registered"],
  ["37,463", "Members across categories A, C and D"],
  ["58", "Employees, agents and allied-institution staff"],
  ["₹192.37 crore", "Total business volume stated in the supplied document"],
];
const values = [
  {
    icon: HeartHandshake,
    title: "Mutual Help",
    text: "Believing in the power of growing together.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    text: "Maintaining integrity in financial and medical operations.",
  },
  {
    icon: WalletCards,
    title: "Affordability",
    text: "Keeping health services and daily retail accessible to everyone.",
  },
  {
    icon: Users,
    title: "Member First",
    text: "Aligning our initiatives with the welfare of our members.",
  },
];
const institutions = [
  {
    icon: ShoppingBasket,
    title: "Neethi Consumer Store",
    place: "Orkkatteri",
    phone: "0496 2544323",
  },
  {
    icon: Stethoscope,
    title: "Neethi Medical Store",
    place: "Azhiyur Chungam",
    phone: "7736706770",
  },
  {
    icon: Stethoscope,
    title: "Neethi Medical Lab",
    place: "Orkkatteri",
    phone: "9446267220",
  },
  {
    icon: Stethoscope,
    title: "Neethi Medical Store",
    place: "Kannookkara",
    phone: "9497304002",
  },
];
function PageIntro() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003F53] via-[#00516A] to-[#008BA5] px-5 py-12 text-white md:px-8 md:py-16">
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[50px] border-white/5" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#8DE7F0]">
          Who We Are
        </p>
        <h1 className="max-w-1xl text-3xl font-extrabold leading-tight md:text-5xl">
          co-operative journey since 1986
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 md:text-base md:leading-7">
          Learn about the history, purpose and community commitments of Vatakara
          Block Employees Co-operative Society.
        </p>
      </div>
    </section>
  );
}
export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <main className="bg-white text-[#234956]">
      <PageIntro />
      {/* ABOUT THE SOCIETY */}
      <section className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-12 md:grid-cols-2 md:px-8 md:py-16">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={whoWeAreImage}
            alt="Co-operative society and community banking"
            className="h-[280px] w-full object-cover md:h-[440px]"
          />
        </div>

        {/* CONTENT */}
        <div>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#52727D] md:text-base">
            <p>
              The Vatakara Block Employees’ Co-operative Society was established
              at Orkkatteri under the leadership of the late freedom fighter K.
              Kunhirama Kurup and registered on 23 April 1986. Initially
              established as the Vadakara Block Employees & Pensioners Credit
              Co-operative Society, the institution commenced its operations on
              18 May 1986.
            </p>

            <p>
              Founded through the joint initiative of pensioners and employees,
              the society represents a pioneering co-operative initiative in the
              state. With a strong commitment to public trust and member
              welfare, it continues to progress through its distinctive banking
              practices and community-focused services.
            </p>

            {isExpanded && (
              <>
                <p>
                  Today, the society has 37,463 members across categories A, C
                  and D, and employs 58 individuals, including staff members,
                  collection agents, appraisers and employees of allied
                  institutions. It is classified as a Class I Special Grade
                  society and has received the Cooperative Department’s award
                  for the best institution of its kind in the district.
                </p>

                <p>
                  The society operates branches in Eramala, Azhiyur, Onchiyam
                  and Chorode Panchayats. Alongside its financial services, it
                  supports the community through Neethi consumer and medical
                  institutions, seasonal book fairs, Vishu markets and vegetable
                  markets.
                </p>

                <p>
                  With a continued focus on growth and community welfare, the
                  society is also developing a building complex on its own land
                  in the heart of Orkkatteri town, strengthening its commitment
                  to serving members and the wider community.
                </p>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#008BA5] transition-colors hover:text-[#003F53]"
          >
            {isExpanded ? "Read Less" : "Read More"}
            <span className="text-lg leading-none">
              {isExpanded ? "−" : "+"}
            </span>
          </button>
        </div>
      </section>
      <section className="bg-[#F2FAFC] px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 max-w-3xl">
            <h2 className="text-2xl font-extrabold text-[#00516A] md:text-3xl">
              A legacy of service
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([number, label]) => (
              <article
                key={label}
                className="rounded-2xl border border-[#D5E9ED] bg-white p-5 shadow-sm"
              >
                <p className="text-xl font-extrabold text-[#008BA5] md:text-2xl">
                  {number}
                </p>
                <p className="mt-2 text-sm leading-5 text-[#52727D]">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
