"use client";

import React, { useState } from "react";
import { motion } from "@/components/motion";
import Section from "./Section";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Facebook,
  X,
  FileStack,
} from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Handle form submit
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        alert("✅ Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Error: " + (data.error || "unknown"));
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("❌ Network error.");
    }
  }

  return (
    <Section id="contact" title="Contact With Me">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Left: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-neutral-900 p-5 rounded-lg border border-neutral-800 shadow-md text-sm flex flex-col justify-between"
        >
          <div>
            <p className="text-neutral-300 mb-3 text-sm leading-relaxed">
              If you have any questions or concerns, feel free to
              contact me. I am open to any work opportunities that align with my
              skills and interests.
            </p>

            <label className="block mb-2">
              <span className="text-neutral-200">Your Name:</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 p-2 text-neutral-100 text-sm"
                placeholder="Enter your name"
              />
            </label>

            <label className="block mb-2">
              <span className="text-neutral-200">Your Email:</span>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 p-2 text-neutral-100 text-sm"
                placeholder="Enter your email"
              />
            </label>

            <label className="block mb-2">
              <span className="text-neutral-200">Your Message:</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                required
                className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 p-2 text-neutral-100 text-sm"
                placeholder="Type your message..."
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full rounded-full bg-purple-600 px-4 py-2 text-white font-medium hover:bg-blue-700 hover:scale-[1.02] transition-all flex justify-center items-center gap-2 text-sm"
          >
            {loading ? "Sending..." : "SEND MESSAGE ✉️"}
          </button>
        </motion.form>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-neutral-900 p-5 rounded-lg border border-neutral-800 shadow-md text-sm flex flex-col justify-between"
        >
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 p-3 rounded-md bg-neutral-800 hover:bg-neutral-700 transition">
              <div className="p-3 rounded-full bg-neutral-900 hover:bg-blue-600 transition transform hover:scale-110">
                <Mail className="w-5 h-5 text-purple-400 hover:text-white" />
              </div>
              <span className="text-neutral-200 text-lg font-medium">
                {PROFILE.email}
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-3 rounded-md bg-neutral-800 hover:bg-neutral-700 transition">
              <div className="p-3 rounded-full bg-neutral-900 hover:bg-blue-600 transition transform hover:scale-110">
                <Phone className="w-5 h-5 text-purple-400 hover:text-white" />
              </div>
              <span className="text-neutral-200 text-lg font-medium">
                +91 9618506469
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-3 rounded-md bg-neutral-800 hover:bg-neutral-700 transition">
              <div className="p-3 rounded-full bg-neutral-900 hover:bg-blue-600 transition transform hover:scale-110">
                <MapPin className="w-5 h-5 text-purple-400 hover:text-white" />
              </div>
              <span className="text-neutral-200 text-lg font-medium">
                Hyderabad, Telangana, India
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-800 hover:bg-purple-600 transition transform hover:scale-110"
            >
              <Github className="w-5 h-5 text-neutral-300 hover:text-white" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-800 hover:bg-blue-600 transition transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-neutral-300 hover:text-white" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-800 hover:bg-gray-500 transition transform hover:scale-110"
            >
              <X className="w-5 h-5 text-neutral-300 hover:text-white" />
            </a>
            <a
              href="https://stackoverflow.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-800 hover:bg-orange-500 transition transform hover:scale-110"
            >
              <FileStack className="w-5 h-5 text-neutral-300 hover:text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-800 hover:bg-blue-500 transition transform hover:scale-110"
            >
              <Facebook className="w-5 h-5 text-neutral-300 hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
