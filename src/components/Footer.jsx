import React from "react";
import {Landmark, MapPin, Phone, Mail, ArrowUpRight} from "lucide-react";
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
              <div>
                <h2 className="font-semibold">SHAKARANA BANK</h2>
                <p className="text-xs text-white/65">
                  Service Co-operative Bank
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
                ["Facilities", "/facilities"],
                ["Deposits", "/deposits"],
                ["Loans", "/loans"],
                ["News & Events", "/news-events"],
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
              <p className="flex items-start gap-3">
                <MapPin size={19} className="shrink-0 text-[#8DE7F0]" />
                <span>Bank address to be provided by the client.</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#8DE7F0]" />
                Official phone number
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#8DE7F0]" />
                Official email address
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10"
            >
              Contact Details <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <p>
              © {new Date().getFullYear()} Shakarana Bank. All rights reserved.
            </p>
            <p>Website Design & Development</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
