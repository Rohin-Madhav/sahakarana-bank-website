import React from "react";
import { Landmark, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#003F53] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Landmark size={27} className="text-[#8DE7F0]" />
              </div>
              <div className="min-w-0 font-serif">
                <p className="text-sm font-bold leading-tight tracking-wide text-white sm:text-base">
                  VATAKARA BLOCK
                </p>
                <p className="text-sm font-bold leading-tight tracking-wide text-white sm:text-base">
                  EMPLOYEES CO-OP SOCIETY
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/70">
              Serving our community through accessible banking information and
              customer-focused service.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#8DE7F0]">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
              {[
                ["About Us", "/about"],
                ["Branches", "/branches"],
                ["Deposits", "/deposits"],
                ["Loans", "/loans"],
                ["Foot Prints", "/foot-prints"],
                ["Gallery", "/gallery"],
                ["Board of Directors", "/board-of-directors"],
                ["Contact Us", "/contact"],
              ].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="transition hover:text-[#8DE7F0]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#8DE7F0]">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm text-white/80">
              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#8DE7F0]" />
                +91 8547247120
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#8DE7F0]" />
                vbecsltd@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <p>
              © {new Date().getFullYear()} Vatakara Block Employees Co-Op
              Society Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
