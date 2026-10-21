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

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    value: "Vatakara, Kerala",
    description: "Visit us for enquiries and assistance.",
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
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your backend/API or official society email.
    const recipient = "";
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    if (!recipient) {
      setSubmitted(true);
      return;
    }

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
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
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#58C6D5]">
            Vatakara Block Employees Co-op Society
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            We're Here to <span className="text-[#58C6D5]">Help You</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Have a question or need assistance? Get in touch with our team. We
            are happy to help with your enquiries and banking-related
            information.
          </p>
        </div>
      </section>

      {/* Contact information */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-xl border border-[#D5E9ED] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F7FA] text-[#008BA5]">
                  <Icon size={23} />
                </div>

                <h2 className="mt-5 text-lg font-bold text-[#00516A]">
                  {item.title}
                </h2>

                <p className="mt-2 font-semibold text-[#234956]">
                  {item.value}
                </p>

                <p className="mt-2 text-sm leading-7 text-[#52727D]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact form and office details */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#008BA5]">
              Contact Information
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#003F53] md:text-4xl">
              Let's Start a Conversation
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#52727D] md:text-base">
              Whether you need more information about our services or have a
              general enquiry, send us a message or contact our office.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7F7FA] text-[#008BA5]">
                  <Building2 size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-[#00516A]">Our Society</h3>
                  <p className="mt-1 text-sm leading-6 text-[#52727D]">
                    Vatakara Block Employees Co-op Society
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E7F7FA] text-[#008BA5]">
                  <Clock size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-[#00516A]">Office Hours</h3>
                  <p className="mt-1 text-sm leading-6 text-[#52727D]">
                    Please contact our office for current working hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#D5E9ED] bg-white p-5">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-[#008BA5]" size={22} />
                <h3 className="font-bold text-[#00516A]">How can we help?</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-[#52727D]">
                Fill in the form with your details and enquiry. Our team can
                follow up once the form is connected to an email or backend
                service.
              </p>
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

      {/* Map placeholder */}
      <section className="border-t border-[#D5E9ED] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#008BA5]">
            Find Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#003F53]">
            Visit Our Office
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52727D]">
            Our office location and map can be added here once the exact address
            is confirmed.
          </p>

          <div className="mt-7 flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-[#B8DDE4] bg-[#F4FAFC] p-8 text-center">
            <div>
              <MapPin size={34} className="mx-auto text-[#008BA5]" />
              <p className="mt-3 font-semibold text-[#00516A]">
                Society Office Location
              </p>
              <p className="mt-1 text-sm text-[#52727D]">
                Add the verified office address or Google Maps embed here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
