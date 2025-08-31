// client/src/components/About/FounderNote.jsx
import React from "react";
import { motion } from "framer-motion";
import Seo from "../../components/common/Seo.jsx";

const signatureVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut", delay: 0.5 },
  },
};

const FounderNote = () => {
  return (
    <section className="relative bg-white dark:bg-brand-dark py-24 sm:py-32 overflow-hidden">
      <Seo
        title="A Word from Our Founder - Shubham Pawale | Weblynx Infotech"
        description="Read a personal message from Shubham Pawale, Founder and Lead Developer of Weblynx Infotech, sharing his vision and dedication to crafting impactful digital experiences."
      />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-accent/10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto bg-white/80 dark:bg-brand-dark-blue/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-brand-light-blue/20 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
            {/* Left Column: Image */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start p-8 lg:p-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-56 h-72 md:w-64 md:h-80 lg:-ml-12 rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/founder-avatar.jpg"
                  alt="Shubham Pawale, Founder of Weblynx Infotech"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-2 p-8 pt-0 lg:py-12 lg:pr-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-6 tracking-tighter"
              >
                A Word from Our Founder
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4 text-base md:text-lg text-brand-light-blue dark:text-brand-gray leading-relaxed"
              >
                <p>
                  When I started Weblynx Infotech, my core philosophy was
                  simple: to create digital experiences that truly matter. I
                  believe that technology should be a seamless bridge between a
                  business's vision and its audience, empowering growth and
                  fostering genuine connections.
                </p>
                <p>
                  My journey, driven by a passion for clean code and intuitive
                  design, has taught me the profound impact a well-crafted
                  digital presence can have. We don't just build websites; we
                  craft solutions that solve real problems.
                </p>
                <p>
                  Thank you for considering us as your digital partner. We're
                  excited about the possibility of building something
                  exceptional together.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                className="mt-8 flex flex-col items-start"
              >
                <svg
                  className="w-48 h-20"
                  viewBox="0 0 200 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M 5.62,39.52 C 10.54,34.94 18.2,29.35 25.1,28.24 33.32,26.91 38.99,32.22 44.22,36.56 50.9,42.11 58.74,44.97 66.8,42.61 74.96,40.22 81.42,32.74 86.63,27.24 93.38,19.98 102.39,17.21 111.4,19.28 120.59,21.39 126.34,29.31 132.3,35.25 137.91,40.85 145.42,44.91 153.2,42.61 161.73,40.09 167.36,32.3 172.9,26.47 178.69,20.37 186.2,16.92 193.3,19.28"
                    stroke="var(--brand-accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="transparent"
                    variants={signatureVariants}
                  />
                </svg>
                <div className="text-left -mt-4">
                  <p className="font-display text-xl font-bold text-brand-dark dark:text-white">
                    Shubham Pawale
                  </p>
                  <p className="text-md text-brand-light-blue dark:text-brand-gray">
                    Founder & Lead Developer
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderNote;
