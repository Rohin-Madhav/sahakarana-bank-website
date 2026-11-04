import {
  Users,
  Award,
  ShieldCheck,
  Handshake,
  Landmark,
  Phone,
  Search,
  UserRound,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import boardGroupPhoto from "../assets/boardGroupPhoto.webp";
import bankLogo from "../assets/bank-logo.png";
import presidentImage from "../assets/President.webp";
import vicePresidentImage from "../assets/Vice-President.webp";
import secretaryImage from "../assets/Secretary.webp";
import assistantSecretaryImage from "../assets/Asst-Secretary.webp";

const boardMembers = [
  { name: "K Sasikumar", phone: "9496661240", role: "President" },
  { name: "M Vijayan Master", phone: "9446645491", role: "Vice President" },
  { name: "CK Muraleedharan", phone: "9497404434", role: "Board Member" },
  { name: "PK Rajan", phone: "9446353574", role: "Board Member" },
  { name: "G Vigitha", phone: "8537347223", role: "Board Member" },
  { name: "Rajan Kuruntharath", phone: "9446645515", role: "Board Member" },
  { name: "Kunnoth Chandran", phone: "9446522173", role: "Board Member" },
  { name: "P Sumanandini", phone: "9544583844", role: "Board Member" },
  { name: "KK Balakrishnan", phone: "9388664537", role: "Board Member" },
  { name: "VK Sasi", phone: "9400561069", role: "Board Member" },
  { name: "KP Vinodan", phone: "8281286353", role: "Board Member" },
  { name: "K Pavithran", phone: "9746155335", role: "Board Member" },
  { name: "P Rajila", phone: "9846482913", role: "Board Member" },
];

export default function BoardOfDirectors() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return boardMembers;

    return boardMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.phone.includes(query),
    );
  }, [searchTerm]);

  const president = boardMembers[0];
  const vicePresident = boardMembers[1];
  const otherMembers = filteredMembers.filter(
    (member) => member.role !== "President" && member.role !== "Vice President",
  );

  const filteredPresident = filteredMembers.filter(
    (member) => member.role === "President",
  );
  const filteredVicePresident = filteredMembers.filter(
    (member) => member.role === "Vice President",
  );

  return (
    <main className="min-h-screen bg-white text-[#234956]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#003F53] via-[#004B60] to-[#00516A] px-5 py-14 text-white sm:py-16 md:px-8">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/[0.06] sm:h-[28rem] sm:w-[28rem]" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 rounded-full border border-white/[0.05]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#008BA5]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#58C6D5]/25 bg-[#58C6D5]/10 px-3.5 py-2 text-sm font-medium text-[#8DE7F0]">
              <Users size={16} strokeWidth={1.8} />
              Leadership & Governance
            </div>

            <div className="mb-4 h-1 w-12 rounded-full bg-[#58C6D5]" />

            <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Board of Directors
            </h1>
            {/* Leadership profiles */}
            <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
              {/* President */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                <img
                  src={presidentImage}
                  alt="K Sasikumar, President"
                  className="h-30 w-auto shrink-0 rounded-xl object-cover"
                />

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8DE7F0]">
                    President
                  </p>
                  <h2 className="mt-2 text-lg font-semibold leading-snug text-white">
                    K Sasikumar
                  </h2>
                  <a
                    href="tel:+919496661240"
                    className="mt-1 text-sm text-white/60 transition-colors hover:text-[#008BA5]"
                    aria-label="Call K Sasikumar at 9496661240"
                  >
                    +91 9496661240
                  </a>
                </div>
              </div>

              {/* Vice President */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                <img
                  src={vicePresidentImage}
                  alt="M Vijayan Master, Vice President"
                  className="h-30 w-auto shrink-0 rounded-xl object-cover"
                />

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8DE7F0]">
                    Vice President
                  </p>
                  <h2 className="mt-2 text-lg font-semibold leading-snug text-white">
                    M Vijayan Master
                  </h2>
                  <a
                    href="tel:+919446645491"
                    className="mt-1 text-sm text-white/60 transition-colors hover:text-[#008BA5]"
                    aria-label="Call M Vijayan Master at 9446645491"
                  >
                    +91 9446645491
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT LOGO */}
          <div className="relative hidden min-h-[420px] items-center justify-center lg:flex">
            <div className="absolute h-[340px] w-[340px] rounded-full border border-white/[0.08]" />
            <div className="absolute h-[280px] w-[280px] rounded-full border border-white/[0.06]" />

            <img
              src={bankLogo}
              alt=""
              className="relative z-10 w-full max-w-[360px] object-contain opacity-[0.18]"
            />
          </div>
        </div>
      </section>

      {/* Group photo */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-[#58C6D5]/50" />
            <div className="relative overflow-hidden rounded-2xl bg-[#E7F7FA] shadow-xl">
              <img
                src={boardGroupPhoto}
                alt="Board of Directors of Vatakara Block Employees Co-op Society"
                className="h-auto max-h-[600px] w-full object-contain transition-transform duration-500 ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#00516A] md:text-4xl">
              United by a Shared Commitment
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#52727D] md:text-base">
              Our board brings together elected representatives entrusted with
              guiding the society. Together, they support responsible
              governance, member welfare and the continued development of our
              co-operative community.
            </p>
          </div>
        </div>
      </section>

      {/* Board directory */}
      <section className="bg-[#F4FAFC] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADER */}
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-extrabold text-[#00516A] md:text-4xl">
                Our Board Members
              </h2>
            </div>

            {/* SEARCH */}
            <div className="relative w-full md:max-w-xs">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#52727D]"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search name or phone..."
                aria-label="Search board members"
                className="w-full rounded-xl border border-[#D5E9ED] bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#008BA5] focus:ring-2 focus:ring-[#008BA5]/10"
              />
            </div>
          </div>

          {/* BOARD MEMBERS TABLE */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#D5E9ED] bg-white shadow-sm">
            {/* TABLE HEADER */}
            <div className="hidden grid-cols-[minmax(0,1fr)_180px_180px] gap-3 bg-[#00516A] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white sm:grid">
              <span>Board Member</span>
              <span>Designation</span>
              <span>Contact</span>
            </div>

            {/* TABLE ROWS */}
            <div className="divide-y divide-[#E5F0F2]">
              {[
                ...filteredPresident,
                ...filteredVicePresident,
                ...otherMembers,
              ].map((member) => (
                <article
                  key={member.phone}
                  className="grid gap-3 px-5 py-4 transition hover:bg-[#F8FCFD] sm:grid-cols-[minmax(0,1fr)_180px_180px] sm:items-center sm:gap-3 sm:px-6"
                >
                  {/* BOARD MEMBER */}
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7F7FA] text-[#008BA5]">
                      <UserRound size={19} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words font-bold text-[#00516A]">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#52727D] sm:hidden">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* DESIGNATION */}
                  <div className="hidden sm:block">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                        member.role === "President" ||
                        member.role === "Vice President"
                          ? "bg-[#E7F7FA] text-[#00516A]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {member.role}
                    </span>
                  </div>

                  {/* CONTACT */}
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 pl-[52px] text-sm font-semibold text-[#008BA5] hover:text-[#00516A] sm:pl-0"
                  >
                    <Phone size={15} />
                    {member.phone}
                  </a>
                </article>
              ))}

              {/* NO RESULTS */}
              {filteredMembers.length === 0 && (
                <p className="px-6 py-12 text-center text-sm text-[#52727D]">
                  No board members match your search.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* SECRETARY & ASSISTANT SECRETARY */}
      <section className="bg-white px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADING */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-[#00516A] md:text-4xl">
              Meet Our Chiefs
            </h2>
          </div>

          {/* CENTERED PROFILE CARDS */}
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {/* SECRETARY */}
            <article className="flex flex-col items-center rounded-2xl border border-[#D5E9ED] bg-[#F8FCFD] p-6 text-center transition hover:border-[#58C6D5] hover:shadow-md">
              <img
                src={secretaryImage}
                alt="Aneesh Kumar, Secretary"
                className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-sm transition-transform duration-300 hover:scale-105 sm:h-32 sm:w-32"
              />

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#008BA5]">
                Secretary
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#00516A]">
                Aneesh Kumar
              </h3>

              <a
                href="tel:+919645161070"
                className="mt-2 text-md font-bold text-[#00516A] transition-colors hover:text-[#008BA5]"
                aria-label="Call Sumith Lal at 96451 61070"
              >
                Ph: 884-8946376
              </a>
            </article>

            {/* ASSISTANT SECRETARY */}
            <article className="flex flex-col items-center rounded-2xl border border-[#D5E9ED] bg-[#F8FCFD] p-6 text-center transition hover:border-[#58C6D5] hover:shadow-md">
              <img
                src={assistantSecretaryImage}
                alt="Sumith Lal, Assistant Secretary"
                className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-sm transition-transform duration-300 hover:scale-105 sm:h-32 sm:w-32"
              />

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#008BA5]">
                Assistant Secretary
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#00516A]">
                Sumith Lal
              </h3>
              <a
                href="tel:+919645161070"
                className="mt-2 text-md font-bold text-[#00516A] transition-colors hover:text-[#008BA5]"
                aria-label="Call Sumith Lal at 96451 61070"
              >
                Ph: 96451 61070
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
