import {
  HeartHandshake,
  ShieldCheck,
  Users,
  WalletCards,
  Stethoscope,
  ShoppingBasket,
} from "lucide-react";
import whoWeAreImage from "../assets/who we are.webp";

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
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
          Rooted in community. Built on trust.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 md:text-base md:leading-7">
          Learn about the history, purpose and community commitments of Vadakara
          Block Employees’ Co-operative Society.
        </p>
      </div>
    </section>
  );
}
export default function About() {
  return (
    <main className="bg-white text-[#234956]">
      <PageIntro />
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:px-8 md:py-16">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={whoWeAreImage}
            alt="Co-operative society and community banking"
            className="h-[280px] w-full object-cover md:h-[360px]"
          />
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-[#008BA5]">
            Our Story
          </p>
          <h2 className="text-2xl font-extrabold leading-tight text-[#00516A] md:text-3xl">
            A co-operative journey since 1986
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#52727D]">
            The Vadakara Block Employees’ Co-operative Society was established
            at Orkkatteri under the leadership of the late freedom fighter K.
            Kunhirama Kurup and registered on 23 April 1986. It began operations
            on 18 May 1986 as the Vadakara Block Employees & Pensioners Credit
            Co-operative Society.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#52727D]">
            Founded through the joint initiative of pensioners and employees,
            the society continues to serve its members and community through
            co-operative banking and allied services.
          </p>
        </div>
      </section>
      <section className="bg-[#F2FAFC] px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-[#008BA5]">
              Society at a glance
            </p>
            <h2 className="text-2xl font-extrabold text-[#00516A] md:text-3xl">
              A legacy of service
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#52727D]">
              Figures below are reproduced from the supplied “Employees web 01”
              document and may need confirmation before publication.
            </p>
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
          <div className="mt-4 rounded-2xl border border-[#D5E9ED] bg-white p-5">
            <p className="font-semibold text-[#00516A]">
              Financial information in the supplied document
            </p>
            <p className="mt-2 text-sm leading-6 text-[#52727D]">
              Share capital: ₹2,34,78,690 · Deposits: ₹108.16 crore ·
              Outstanding loan portfolio: ₹84.21 crore · Classification: Class I
              Special Grade.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-7 md:grid-cols-2">
          <div className="rounded-3xl bg-[#00516A] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8DE7F0]">
              Our Vision
            </p>
            <h2 className="mt-3 text-2xl font-extrabold">
              Trusted co-operative partnership
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              To be the most trusted and comprehensive co-operative partner for
              our members, fostering lifelong financial security, accessible
              healthcare, and affordable daily living under the proud values of
              the Kerala Co-operative sector.
            </p>
          </div>
          <div className="rounded-3xl border border-[#D5E9ED] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#008BA5]">
              Our Mission
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#00516A]">
              Supporting everyday wellbeing
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#52727D]">
              <li>
                <strong className="text-[#00516A]">
                  Financial empowerment:
                </strong>{" "}
                Secure deposit schemes and fair, accessible loan products
                tailored to members’ growth.
              </li>
              <li>
                <strong className="text-[#00516A]">
                  Healthcare excellence:
                </strong>{" "}
                Reliable, affordable diagnostic and pharmaceutical services
                through co-operative medical labs and stores.
              </li>
              <li>
                <strong className="text-[#00516A]">Daily essentials:</strong>{" "}
                Quality household groceries at reasonable prices through retail
                outlets.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#F2FAFC] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-[#008BA5]">
            What guides us
          </p>
          <h2 className="mb-9 text-2xl font-extrabold text-[#00516A] md:text-3xl">
            Our Core Values
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#D5E9ED] bg-white p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F7FA] text-[#008BA5]">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold text-[#00516A]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#52727D]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
     
    </main>
  );
}
