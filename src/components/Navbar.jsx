import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Download } from "lucide-react";
import bankLogo from "../assets/bank-logo.png";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    children: [
      { label: "Who We Are", to: "/about" },
      { label: "Board of Directors", to: "/board-of-directors" },
      { label: "Quality Policy", to: "/quality-policy" },
    ],
  },
  { label: "Facilities", to: "/facilities" },
  { label: "Deposits", to: "/deposits" },
  { label: "Loans", to: "/loans" },
  {
    label: "News & Media",
    children: [
      { label: "Gallery", to: "/gallery" },
      { label: "Press Highlights", to: "/press-highlights" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

const linkClass = ({ isActive }) =>
  `flex items-center justify-between gap-2 rounded-md
   px-3 py-3 text-sm font-semibold transition-colors
   lg:justify-center lg:py-2 ${
     isActive ? "text-[#008BA5]" : "text-[#234956] hover:text-[#008BA5]"
   }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top contact bar */}
      <div className="hidden bg-[#00516A] text-white md:block">
        <div
          className="mx-auto flex max-w-7xl items-center
          justify-between gap-4 px-6 py-3 text-sm"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 hover:text-[#8DE7F0]"
            >
              <Phone size={15} />
              <span>Phone: +91 XXXXX XXXXX</span>
            </a>

            <a
              href="mailto:info@example.com"
              className="flex items-center gap-2 hover:text-[#8DE7F0]"
            >
              <Mail size={15} />
              <span>Email: info@example.com</span>
            </a>
          </div>

          <a
            href="/documents/calendar.pdf"
            className="inline-flex shrink-0 items-center gap-2
              rounded-md bg-[#008BA5] px-4 py-2
              font-semibold text-white transition
              hover:bg-[#009DB8]"
          >
            <Download size={16} />
            Download Calendar
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className="relative mx-auto flex max-w-7xl
        items-center justify-between gap-4 px-4 py-4 md:px-6"
      >
        {/* Bank logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Shakarana Bank home"
        >
          <img
            src={bankLogo}
            alt="Shakarana Bank logo"
            className="h-20 w-auto max-w-40 object-contain"
          />

          <div className="hidden whitespace-nowrap font-serif sm:block">
            <p className="text-base font-bold leading-tight tracking-wide text-[#00516A]">
              VATAKARA BLOCK
            </p>
            <p className="text-xs leading-tight text-[#52727D]">
              EMPLOYEES CO-OP SOCIETY
            </p>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-[#D5E9ED]
            p-2 text-[#00516A] transition
            hover:bg-[#E7F7FA] lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation links */}
        <div
          id="main-navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full max-h-[80vh]
            flex-col gap-1 overflow-y-auto border-t
            border-[#D5E9ED] bg-white p-4 shadow-lg
            lg:static lg:flex lg:max-h-none lg:flex-row
            lg:items-center lg:gap-1 lg:overflow-visible
            lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center
                      justify-between gap-2 rounded-md
                      px-3 py-3 text-sm font-semibold
                      text-[#234956] transition-colors
                      hover:bg-[#E7F7FA] hover:text-[#008BA5]
                      lg:py-2"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`${
                      activeDropdown === item.label ? "block" : "hidden"
                    } rounded-lg bg-[#F4FAFC] p-2
                      lg:absolute lg:left-0 lg:top-full
                      lg:z-50 lg:mt-3 lg:w-56 lg:bg-white
                      lg:shadow-xl lg:ring-1 lg:ring-[#D5E9ED]`}
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block rounded-md px-4 py-3
                          text-sm transition-colors ${
                            isActive
                              ? "bg-[#E7F7FA] font-semibold text-[#008BA5]"
                              : "text-[#234956] hover:bg-[#E7F7FA] hover:text-[#008BA5]"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMenu}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}

          {/* Account opening CTA */}
          <Link
            to="/account-opening"
            onClick={closeMenu}
            className="mt-2 rounded-md bg-[#008BA5]
              px-4 py-3 text-center text-sm
              font-semibold text-white transition
              hover:bg-[#00516A] lg:ml-2 lg:mt-0 lg:shrink-0 lg:py-2"
          >
            Account Opening Form
          </Link>
        </div>
      </nav>
    </header>
  );
}
