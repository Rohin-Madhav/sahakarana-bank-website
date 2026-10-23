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

const responsibilities = [
  {
    icon: Landmark,
    title: "Strategic Direction",
    text: "Supporting responsible decisions and the long-term development of the society.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Governance",
    text: "Encouraging transparency, accountability and responsible stewardship.",
  },
  {
    icon: Handshake,
    title: "Member Commitment",
    text: "Keeping members and the wider community at the heart of the society.",
  },
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
      <section className="relative isolate overflow-hidden bg-[#003F53] px-5 py-16 text-white sm:py-20 md:px-8">
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/[0.08] sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/[0.06] sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#008BA5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex max-w-3xl flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#58C6D5]/25 bg-[#58C6D5]/10 px-3.5 py-2 text-sm font-medium text-[#8DE7F0]">
              <Users size={16} strokeWidth={1.8} />
              Leadership & Governance
            </div>

            <div className="mb-4 h-1 w-12 rounded-full bg-[#58C6D5]" />

            <h1 className="text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
              Board of Directors
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Meet the people guiding our society with commitment, transparency,
              and a shared focus on our members and community.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6">
              <div>
                <p className="text-2xl font-semibold text-white">13</p>
                <p className="mt-1 text-sm text-white/65">Board Members</p>
              </div>

              <div className="h-10 w-px bg-white/15" />

              <div>
                <p className="text-2xl font-semibold text-white">01</p>
                <p className="mt-1 text-sm text-white/65">President</p>
              </div>

              <div className="h-10 w-px bg-white/15" />

              <div>
                <p className="text-2xl font-semibold text-white">01</p>
                <p className="mt-1 text-sm text-white/65">Vice President</p>
              </div>
            </div>
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
                className="h-auto max-h-[600px] w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#008BA5]">
              Our Leadership
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-[#00516A] md:text-4xl">
              United by a Shared Commitment
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#52727D] md:text-base">
              Our board brings together elected representatives entrusted with
              guiding the society. Together, they support responsible
              governance, member welfare and the continued development of our
              co-operative community.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Leadership guided by co-operative values",
                "A commitment to members and the community",
                "Responsible oversight and decision-making",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <ShieldCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-[#008BA5]"
                  />
                  <p className="text-sm leading-6 text-[#234956]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board directory */}
      <section className="bg-[#F4FAFC] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#008BA5]">
                Meet the Team
              </p>
              <h2 className="text-3xl font-extrabold text-[#00516A] md:text-4xl">
                Our Board Members
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#52727D]">
                View the names, designations and contact numbers of our board
                representatives.
              </p>
            </div>

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

          {/* Featured office bearers */}
          {!searchTerm.trim() && (
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {[president, vicePresident].map((member) => {
                const isPresident = member.role === "President";

                return (
                  <article
                    key={member.role}
                    className="relative overflow-hidden rounded-2xl bg-[#003F53] p-6 text-white shadow-sm sm:p-8"
                  >
                    <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border-[24px] border-white/5" />

                    <div className="relative flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#58C6D5]/15 text-[#8DE7F0]">
                        {isPresident ? (
                          <Award size={28} />
                        ) : (
                          <Users size={28} />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8DE7F0]">
                          {member.role}
                        </p>
                        <h3 className="mt-2 break-words text-xl font-bold sm:text-2xl">
                          {member.name}
                        </h3>

                        <a
                          href={`tel:${member.phone}`}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-[#8DE7F0]"
                        >
                          <Phone size={16} />
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Remaining board members */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#D5E9ED] bg-white shadow-sm">
            <div className="hidden grid-cols-[1fr_190px_170px] gap-4 bg-[#00516A] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white sm:grid">
              <span>Board Member</span>
              <span>Designation</span>
              <span>Contact</span>
            </div>

            <div className="divide-y divide-[#E5F0F2]">
              {[
                ...filteredPresident,
                ...filteredVicePresident,
                ...otherMembers,
              ].map((member, index) => (
                <article
                  key={member.phone}
                  className="grid gap-3 px-5 py-4 transition hover:bg-[#F8FCFD] sm:grid-cols-[1fr_190px_170px] sm:items-center sm:gap-4 sm:px-6"
                >
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

                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 pl-[52px] text-sm font-semibold text-[#008BA5] hover:text-[#00516A] sm:pl-0"
                  >
                    <Phone size={15} />
                    {member.phone}
                  </a>
                </article>
              ))}

              {filteredMembers.length === 0 && (
                <p className="px-6 py-12 text-center text-sm text-[#52727D]">
                  No board members match your search.
                </p>
              )}
            </div>
          </div>

          <p className="mt-4 text-xs leading-6 text-[#52727D]">
            Contact numbers are displayed as provided. Please confirm the
            details before publishing them publicly.
          </p>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#008BA5]">
              Our Commitment
            </p>
            <h2 className="text-3xl font-extrabold text-[#00516A] md:text-4xl">
              Principles That Guide Us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {responsibilities.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded-2xl border border-[#D5E9ED] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E7F7FA] text-[#008BA5] transition group-hover:bg-[#00516A] group-hover:text-white">
                  <Icon size={25} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#00516A]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#52727D]">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#003F53] p-7 text-white sm:flex-row sm:items-center sm:p-9">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                Learn More About Our Society
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/75">
                Discover our background, values and services.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#58C6D5] px-5 py-3 text-sm font-bold text-[#003F53] transition hover:bg-[#8DE7F0]"
            >
              About Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
