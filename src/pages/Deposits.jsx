import React from "react";
import {
  PiggyBank,
  BriefcaseBusiness,
  Landmark,
  CalendarDays,
  Wallet,
} from "lucide-react";
import depositImage1 from "../assets/deposits/image-1.webp";
import depositImage2 from "../assets/deposits/image-2.webp";
import depositImage3 from "../assets/deposits/image-3.webp";
import depositImage4 from "../assets/deposits/image-4.webp";
import depositImage5 from "../assets/deposits/image-5.webp";

const depositTypes = [
  {
    title: "Savings Bank Deposits",
    icon: PiggyBank,
    image: depositImage4,
    description:
      "A Savings bank account is the most common operating account for individuals and others for non-commercial transactions. A Savings account helps people to put through day-to-day banking transactions besides earning some return on the savings made.",
  },
  {
    title: "Current Deposits",
    icon: BriefcaseBusiness,
    image: depositImage1,
    description:
      "Current accounts are cheque-operated accounts maintained mainly for business purposes. A Current account is ideal for carrying out day-to-day business transactions.",
  },
  {
    title: "Fixed Deposits",
    icon: Landmark,
    image: depositImage3,
    description:
      "Explore stability and financial growth through our fixed deposit services. Benefit from attractive interest rates and a secure investment avenue, offering a dependable method to see your savings thrive in the long run.",
  },
  {
    title: "Daily Deposits",
    icon: CalendarDays,
    image: depositImage2,
    description:
      "Experience the convenience of our daily deposit services, designed for swift and secure transactions, providing you with a hassle-free way to manage your finances. With our reliable bank services, you can trust in the efficiency and accuracy of your daily deposits.",
  },
  {
    title: "Recurring Deposits",
    icon: Wallet,
    image: depositImage5,
    description:
      "Recurring Deposits (RD) scheme is to enable the depositor to make a financial provision for his future needs, by paying deposits in monthly installment for an agreed period. At the end of the period, the customer can get the lump sum representing the instalment amount paid together with the interest thereon.",
  },
];

const Deposits = () => {
  return (
    <main className="min-h-screen bg-[#F4FAFC]">
      {/* Hero */}
      <section className="bg-[#003F53] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-valeria text-4xl leading-tight md:text-6xl">
            Our Deposit Schemes
          </h1>
        </div>
      </section>

      {/* Deposit Cards */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depositTypes.map((deposit) => {
            const Icon = deposit.icon;

            return (
              <div
                key={deposit.title}
                className="overflow-hidden rounded-xl border border-[#D5E9ED] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Card Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={deposit.image}
                    alt={deposit.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#E7F7FA] text-[#008BA5]">
                    <Icon size={22} />
                  </div>

                  <h2 className="font-valeria text-xl text-[#003F53]">
                    {deposit.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#52727D]">
                    {deposit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Deposits;
