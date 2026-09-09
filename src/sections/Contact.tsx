import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  BriefcaseBusiness,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact — ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:oumaima.ibnayyad@usmba.ac.ma?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mx-auto mb-8
            max-w-2xl
            text-center
            sm:mb-10
          "
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-px w-7 bg-cyan-400/70" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-cyan-300
              "
            >
              Contact
            </span>

            <div className="h-px w-7 bg-cyan-400/70" />
          </div>

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            Get in Touch
          </h2>

          <p
            className="
              mx-auto mt-3
              max-w-xl
              text-xs
              leading-6
              text-slate-500
              sm:text-sm
            "
          >
            Let's discuss your project or just say hello!
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">

          {/* ================= LEFT — CONTACT INFORMATION ================= */}

          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 sm:p-9">

            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Contact Information
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                Feel free to reach out to me for any inquiries or
                collaboration opportunities.
              </p>
            </div>

            {/* ================= EMAIL ================= */}

            <a
              href="mailto:oumaima.ibnayyad@usmba.ac.ma"
              className="group mt-8 flex items-start gap-4 border-b border-white/[0.06] pb-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05] text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.08]">
                <Mail size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                  Email
                </p>

                <p className="mt-2 break-all text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                  oumaima.ibnayyad@usmba.ac.ma
                </p>
              </div>

              <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
              />
            </a>

            {/* ================= LOCATION ================= */}

            <div className="flex items-start gap-4 border-b border-white/[0.06] py-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-400">
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                  Location
                </p>

                <p className="mt-2 text-sm font-medium text-slate-300">
                  Fès, Morocco
                </p>
              </div>
            </div>

            {/* ================= OPEN TO ================= */}

            <div className="flex items-start gap-4 py-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-400">
                <BriefcaseBusiness size={19} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                  Open to
                </p>

                <p className="mt-2 text-sm font-medium text-slate-300">
                  Opportunities
                </p>
              </div>
            </div>

            {/* ================= CONNECT WITH ME ================= */}

            <div className="mt-5 border-t border-white/[0.06] pt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                Connect with me
              </p>

              <div className="mt-4 flex gap-3">

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/oumaima-ibnayyad-3593bb370/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-400 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                >
                  <FaLinkedin size={19} />
                </a>

                {/* GITHUB */}

                <a
                  href="https://github.com/oumayma123921"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-400 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                >
                  <FaGithub size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT — FORM ================= */}

          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 sm:p-9">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* ================= NAME ================= */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2.5 block text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/[0.07] bg-[#050816]/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-700 transition-all duration-300 focus:border-cyan-400/30 focus:bg-[#050816]"
                />
              </div>

              {/* ================= EMAIL ================= */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full rounded-xl border border-white/[0.07] bg-[#050816]/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-700 transition-all duration-300 focus:border-cyan-400/30 focus:bg-[#050816]"
                />
              </div>

              {/* ================= MESSAGE ================= */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2.5 block text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full resize-none rounded-xl border border-white/[0.07] bg-[#050816]/70 px-4 py-3.5 text-sm leading-7 text-white outline-none placeholder:text-slate-700 transition-all duration-300 focus:border-cyan-400/30 focus:bg-[#050816]"
                />
              </div>

              {/* ================= SEND BUTTON ================= */}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-semibold text-[#041014] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
              >
                <Send size={16} />

                <span>Send Message</span>

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="mt-14 border-t border-white/[0.06] pt-7">
          <p className="text-center text-sm text-slate-600">
            Open to opportunities, collaborations and interesting projects.
          </p>
        </div>
      </div>
    </section>
  );
}