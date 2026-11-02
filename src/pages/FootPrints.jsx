import React from "react";
import {
  CalendarDays,
  Users,
  Landmark,
  Award,
  Building2,
  HeartHandshake,
} from "lucide-react";

const milestones = [
  {
    year: "1986",
    title: "The Beginning of Our Journey",
    icon: CalendarDays,
    content:
      "The Vadakara Block Employees' Co-operative Society was established at Orkkatteri under the leadership of the late freedom fighter K. Kunhirama Kurup and registered on 23 April 1986. The institution began operations on 18 May 1986 under the name Vadakara Block Employees & Pensioners Credit Co-operative Society.",
  },
  {
    year: "Growing Together",
    title: "A Strong Member Community",
    icon: Users,
    content:
      "Founded through the joint initiative of pensioners and employees, the society has grown into a pioneering co-operative institution in the state. Today, it serves 37,463 members across categories A, C and D, with 58 employees, collection agents, appraisers and allied-institution staff.",
  },
  {
    year: "Financial Strength",
    title: "Building Financial Trust",
    icon: Landmark,
    content:
      "The society holds a share capital of ₹2,34,78,690 and deposits amounting to ₹108.16 crore. Classified as a Class I Special Grade society, it has an outstanding loan portfolio of ₹84.21 crore and a total business volume of ₹192.37 crore.",
  },
  {
    year: "Recognition",
    title: "A Commitment to Excellence",
    icon: Award,
    content:
      "Through its distinctive banking practices and commitment to public trust, the society has been honored with the Cooperative Department's award for the best institution of its kind in the district. It also consistently plays a leading role in deposit mobilization campaigns.",
  },
  {
    year: "Community Services",
    title: "Beyond Banking",
    icon: HeartHandshake,
    content:
      "With a strong sense of social commitment, the society operates branches in Eramala, Azhiyur, Onchiyam and Chorode Panchayats. It also runs a Neethi Consumer Store and Medical Lab in Orkkatteri, a Neethi Medical Store in Azhiyur, and a Neethi Medical Lab in Kannookkara.",
  },
  {
    year: "Community Initiatives",
    title: "Serving Everyday Needs",
    icon: Building2,
    content:
      "The society organizes seasonal initiatives such as school-season book fairs, Vishu firecracker markets and vegetable markets associated with the Neethi store. A building complex is also under construction on society-owned land in the heart of Orkkatteri town, marking another step in its continued growth.",
  },
];

const FootPrints = () => {
  return (
    <main className="bg-[#F4FAFC] text-[#234956]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003F53] via-[#00516A] to-[#008BA5] px-5 py-14 text-white md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[50px] border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <h1 className="mt-3 max-w-1xl text-3xl font-extrabold leading-tight md:text-5xl">
            Our Footprints Through the Years
          </h1>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#008BA5]">
            Our History & Milestones
          </p>

          <h2 className="mt-3 text-2xl font-extrabold text-[#00516A] md:text-3xl">
            A Legacy of Co-operation
          </h2>
        </div>

        <div className="relative">
          {/* TIMELINE LINE */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#008BA5] via-[#58C6D5] to-[#D5E9ED] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-12">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={item.title}
                  className={`relative flex items-start gap-6 pl-14 md:w-1/2 md:pl-0 ${
                    isLeft ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  {!isLeft && (
                    <div className="hidden md:block md:absolute md:left-[-20px] md:top-6 md:z-10 md:flex md:h-10 md:w-10 md:items-center md:justify-center md:rounded-full md:border-4 md:border-[#F4FAFC] md:bg-[#008BA5] md:text-white md:shadow-md">
                      <Icon size={17} />
                    </div>
                  )}

                  <div className="w-full rounded-2xl border border-[#D5E9ED] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-6">
                    <h3 className="mt-2 text-lg font-bold text-[#00516A] md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#52727D]">
                      {item.content}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FootPrints;
