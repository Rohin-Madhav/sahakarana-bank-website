import React from "react";
import { ArrowUpRight, Newspaper } from "lucide-react";

const pressItems = [
  {
    title: "A New Milestone in Cooperative Banking",
    publication: "Demo Newspaper",
    date: "15 October 2026",
    image: "/images/press/press-1.jpg",
    description:
      "A glimpse into the society's journey of growth, community service, and financial empowerment.",
    link: "#",
  },
  {
    title: "Society Expands Its Community Services",
    publication: "Demo Newspaper",
    date: "08 September 2026",
    image: "/images/press/press-2.jpg",
    description:
      "Highlighting the society's commitment to accessible services and the welfare of its members.",
    link: "#",
  },
  {
    title: "Supporting Local Communities Through Cooperation",
    publication: "Demo Newspaper",
    date: "22 August 2026",
    image: "/images/press/press-3.jpg",
    description:
      "A feature on community initiatives and the role of cooperative values in everyday life.",
    link: "#",
  },
];

const PressHighlights = () => {
  return (
    <main className="min-h-screen bg-[#F4FAFC]">
      {/* Hero */}
      <section className="bg-[#003F53] px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-valeria text-4xl leading-tight md:text-6xl">
            Press Highlights
          </h1>
        </div>
      </section>
      {/* Press Cards */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="mb-10 flex items-center gap-3"></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pressItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-[#D5E9ED] bg-white"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#E7F7FA]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <p className="text-xs text-[#008BA5]">
                  {item.publication} · {item.date}
                </p>

                <h2 className="mt-3 font-valeria text-xl leading-snug text-[#003F53]">
                  {item.title}
                </h2>

               
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PressHighlights;
