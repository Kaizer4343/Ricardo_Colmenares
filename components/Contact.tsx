"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const contactLinks = [
  { label: "✉ email me", href: "mailto:icocarlo96@gmail.com" },
  { label: "⌥ GitHub", href: "https://github.com/colmenaresricardocarlo" },
  { label: "Instagram", href: "https://www.instagram.com/ico.shh" },
  { label: "Facebook", href: "https://www.facebook.com/ricardo.carlo.colmenares.2025" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_yd88opx",
        "template_oltx947",
        {
          name: form.name,     // Updated to match {{name}} in template
          email: form.email,   // Updated to match {{email}} in template
          message: form.message,
        },
        "hP4XxTzjyhm_Sc15E"
      );

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-8 max-w-6xl mx-auto">
      <p className="font-mono text-xs text-purple-500 tracking-[0.2em] uppercase mb-3">
        {"// 05 — contact"}
      </p>

      <div className="h-px bg-gradient-to-r from-purple-700 to-transparent opacity-40 mb-3" />

      <h2 className="font-space font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-white mb-12">
        Let&apos;s build something
      </h2>

      <div className="bg-[#111827] border border-purple-900/30 rounded-2xl p-8">
        <p className="text-gray-400 text-base text-center max-w-md mx-auto mb-8">
          Have a project in mind or just want to chat? Send me a message below.
        </p>

        {/* FORM */}
        <form onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="bg-[#0f172a] border border-purple-900/30 rounded-lg px-4 py-2 text-white text-sm outline-none"
            required
            suppressHydrationWarning
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="bg-[#0f172a] border border-purple-900/30 rounded-lg px-4 py-2 text-white text-sm outline-none"
            required
            suppressHydrationWarning
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            className="bg-[#0f172a] border border-purple-900/30 rounded-lg px-4 py-2 text-white text-sm h-32 outline-none resize-none"
            required
            suppressHydrationWarning
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white font-mono text-xs py-3 rounded-lg transition"
            suppressHydrationWarning
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* LINKS */}
        <div className="flex justify-center gap-3 flex-wrap mt-10">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-900/20 border border-purple-900/30 text-purple-300 font-mono text-xs px-5 py-2.5 rounded-full hover:bg-purple-900/40 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}