import { Users, ShieldCheck, Handshake, Landmark } from "lucide-react";

const responsibilities = [
  {
    icon: Landmark,
    title: "Strategic direction",
    text: "Guide the society's long-term priorities and support responsible, sustainable co-operative development.",
  },
  {
    icon: ShieldCheck,
    title: "Good governance",
    text: "Promote transparency, accountability and careful stewardship in the society's work.",
  },
  {
    icon: Handshake,
    title: "Member welfare",
    text: "Keep members' needs and community benefit at the centre of decisions and services.",
  },
];

export default function BoardOfDirectors() {
  return (
    <main className="min-h-screen bg-white text-[#234956]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003F53] via-[#00516A] to-[#008BA5] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 rounded-full border-[48px] border-white/5" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#8DE7F0]">
            Leadership & Governance
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Board of Directors
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            The board provides leadership and oversight to help the society
            serve its members with responsibility, trust and a strong
            co-operative spirit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E7F7FA] text-[#008BA5]">
            <Users size={30} />
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.16em] text-[#008BA5]">
            Our leadership
          </p>
          <h2 className="text-3xl font-extrabold text-[#00516A] md:text-4xl">
            Working for members and community
          </h2>
          <p className="mt-5 leading-8 text-[#52727D]">
            The supplied “Employees web 01” document specifies a President, Vice
            President and Board Members, but it does not provide their names or
            photographs. Those details are intentionally not invented here. Add
            the officially approved names, designations and portraits in the
            spaces below before publishing.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["President", "Vice President", "Board Member"].map(
            (role, index) => (
              <article
                key={role}
                className="overflow-hidden rounded-3xl border border-[#D5E9ED] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#E7F7FA] to-[#F2FAFC] text-[#008BA5]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#B9E1E8] bg-white">
                    <Users size={40} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#008BA5]">
                    {index === 2 ? "Board of Directors" : "Office Bearer"}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#00516A]">
                    {role}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#52727D]">
                    Official name and photograph to be added
                  </p>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="bg-[#F2FAFC] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[.16em] text-[#008BA5]">
            Our commitment
          </p>
          <h2 className="mb-9 text-3xl font-extrabold text-[#00516A] md:text-4xl">
            Principles that guide our leadership
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {responsibilities.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#D5E9ED] bg-white p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F7FA] text-[#008BA5]">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#00516A]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#52727D]">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-[#D5E9ED] bg-white p-5 text-sm leading-7 text-[#52727D]">
            Note: The responsibilities above are general descriptions of board
            governance, not a list of named office-bearers or a verified record
            of specific decisions.
          </p>
        </div>
      </section>
    </main>
  );
}
