import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Building2,
  CheckCircle2,
} from "lucide-react";

const MAIN_BRANCH_MAP =
  "https://www.google.com/maps/dir/?api=1&destination=11.652997%2C75.600761";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Our Main Branch",
    value: "Vatakara, Kerala",
    description: "View our main branch location on Google Maps.",
    href: MAIN_BRANCH_MAP,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "Contact our office",
    description: "Speak with our team during working hours.",
    href: "tel:",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "Send an enquiry",
    description: "Reach out to us for information and support.",
    href: "mailto:",
  },
];

const branches = [
  {
    name: "MAIN BRANCH",
    location: "ORKKATTERI",
    phone: "0496 2547120",
    mapUrl: "https://maps.app.goo.gl/bGyFepQzAqc3gzyV8",
  },
  {
    name: "VELLIKULANGARA BRANCH",
    location: "",
    phone: "0496 2511717",
    mapUrl: "https://maps.app.goo.gl/QHD3FpJViubK6gMj8",
  },
  {
    name: "AZHIYOOR BRANCH",
    location: "",
    phone: "9539674120",
    mapUrl: "https://maps.app.goo.gl/VTRkk6zkaXBHPqcZ7",
  },
  {
    name: "BALAVADI BRANCH",
    location: "",
    phone: "0496 2511160",
    mapUrl: "https://maps.app.goo.gl/wVzmkZpPpwWq4RsYA",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "918547247120";

    const message = `*New Enquiry - Vatakara Block Employees Co-op Society*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Enquiry Type:* ${formData.subject}

*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Clear form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "General Enquiry",
      message: "",
    });
  };

  const inputClass =
    "w-full rounded-lg border border-[#D5E9ED] bg-white px-4 py-3 text-sm text-[#234956] outline-none transition placeholder:text-gray-400 focus:border-[#008BA5] focus:ring-2 focus:ring-[#008BA5]/10";

  return (
    <main className="bg-[#F4FAFC]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#003F53] py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#58C6D5]/20" />

        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#008BA5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            We're Here to <span className="text-[#58C6D5]">Help You</span>
          </h1>
        </div>
      </section>

      {/* Contact form and office details */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left column */}

          {/* Branches */}
          <div className="min-w-0">
            <div className="mb-6">
              <h3 className="mt-2 font-valeria text-3xl text-[#003F53]">
                Our Branches
              </h3>

              <p className="mt-3 text-[#52727D]">
                Connect with us at any of our branches.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="min-w-0 rounded-2xl border border-[#D4E8ED] bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h4 className="break-words font-valeria text-lg leading-snug text-[#003F53]">
                    {branch.name}
                  </h4>

                  {branch.location && (
                    <p className="mt-2 text-sm text-[#52727D]">
                      {branch.location}
                    </p>
                  )}

                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#008BA5] hover:underline"
                  >
                    <Phone size={16} className="shrink-0" />
                    {branch.phone}
                  </a>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#008BA5] hover:underline"
                  >
                    <MapPin size={16} className="shrink-0" />
                    View Location
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry form */}
          <div className="rounded-2xl border border-[#D5E9ED] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#003F53]">
              Send Us an Enquiry
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#52727D]">
              Fill out the form below to get in touch.
            </p>

            {submitted && (
              <div
                role="status"
                className="mt-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

                <p>
                  Your message has not been sent yet. Connect the form to the
                  society's email or backend before accepting enquiries.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#234956]"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#234956]"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#234956]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              {/* Enquiry type */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#234956]"
                >
                  Enquiry Type
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>General Enquiry</option>
                  <option>Membership Information</option>
                  <option>Deposit Enquiry</option>
                  <option>Loan Enquiry</option>
                  <option>Services and Facilities</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#234956]"
                >
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-36 resize-y`}
                  placeholder="Write your enquiry here..."
                  rows={5}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#00516A] px-6 py-3.5 font-semibold text-white transition hover:bg-[#008BA5] focus:outline-none focus:ring-2 focus:ring-[#008BA5] focus:ring-offset-2"
              >
                Send Enquiry
                <Send size={17} />
              </button>

              <p className="text-xs leading-5 text-[#52727D]">
                Please do not include passwords, PINs, OTPs, or other sensitive
                financial information in this form.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Main Branch Google Map */}
      <section className="border-t border-[#D5E9ED] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#008BA5]">
            Find Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#003F53]">
            Visit Our Main Branch
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52727D]">
            Find our society's main branch in Vatakara, Kerala. Use Google Maps
            for directions and navigation.
          </p>

          {/* Map */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-[#D5E9ED] shadow-sm">
            <iframe
              title="Vatakara Block Employees Co-op Society Main Branch Location"
              src="https://www.google.com/maps?q=11.652997,75.600761&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Map footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-[#F4FAFC] p-5">
              <div className="flex items-center gap-3">
                <MapPin size={22} className="shrink-0 text-[#008BA5]" />

                <div>
                  <p className="font-semibold text-[#00516A]">
                    Main Branch – Vatakara
                  </p>

                  <p className="text-sm text-[#52727D]">Vatakara, Kerala</p>
                </div>
              </div>

              <a
                href={MAIN_BRANCH_MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00516A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#008BA5]"
              >
                Get Directions
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
