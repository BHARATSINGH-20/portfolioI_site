import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-t border-stone-900 pb-20 pt-16">

      {/* Heading */}
      <motion.h2
        className="mb-12 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      {/* Content */}
      <motion.div
        className="mx-auto max-w-xl text-center space-y-6 text-stone-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3, once: false }}
        transition={{ duration: 0.8 }}
      >

        {/* Address */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaMapMarkerAlt className="text-cyan-400" />
          <p>{CONTACT.address}</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FaPhoneAlt className="text-cyan-400" />
          <p>{CONTACT.phoneNo}</p>
        </motion.div>

        {/* Email + Copy */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaEnvelope className="text-cyan-400" />

          <button
            onClick={handleCopy}
            className="
              border-b border-stone-500
              hover:border-cyan-400
              hover:text-cyan-400
              transition-colors
            "
          >
            {CONTACT.email}
          </button>
        </motion.div>

        {/* Copy Feedback */}
        {copied && (
          <motion.p
            className="text-sm text-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Email copied to clipboard ✅
          </motion.p>
        )}

      </motion.div>

    </section>
  );
};

export default Contact;
