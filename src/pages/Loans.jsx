import React from "react";
import LoanImage1 from "../assets/loans/Image-1.webp";
import LoanImage2 from "../assets/loans/Image-2.webp";
import LoanImage3 from "../assets/loans/Image-3.webp";
import LoanImage4 from "../assets/loans/Image-4.webp";

const loanTypes = [
  {
    title: "Gold Loan",
    image: LoanImage2,
    description:
      "Get cash quickly by using your gold as collateral with our Gold Loan. Enjoy easy access to funds with straightforward terms and competitive interest rates.",
  },
  {
    title: "Vehicle Loan",
    image: LoanImage3,
    description:
      "Accelerate your dreams with our Vehicle Loan, offering competitive interest rates and flexible repayment options. Drive away with ease, as our quick approval process makes owning your desired vehicle a reality.",
  },
  {
    title: "Personal Loan",
    image: LoanImage1,
    description:
      "Access the funds you need with our Personal Loan. Enjoy flexibility in borrowing and repaying as per your personal or business requirements, with two personal sureties, making it a convenient financial solution for your immediate needs.",
  },
  {
    title: "NAMT Loan",
    image: LoanImage4,
    description:
      "A NAMT Loan is a property-mortgage or medium-term loan product offered by our society. We provide convenient repayment options and competitive interest rates to help enhance and maintain the value of your property.",
  },
];

const Loans = () => {
  return (
    <main className="min-h-screen bg-[#F4FAFC]">
      {/* Hero */}
      <section className="bg-[#003F53] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-valeria text-4xl leading-tight md:text-6xl">
            Our Loan Schemes
          </h1>
        </div>
      </section>

      {/* Loan Cards */}
      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {loanTypes.map((loan) => (
              <div
                key={loan.title}
                className="overflow-hidden rounded-2xl border border-[#D8EAF0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Card Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={loan.image}
                    alt={loan.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h2 className="font-valeria text-2xl text-[#003F53]">
                    {loan.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#52727D]">
                    {loan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Loans;
