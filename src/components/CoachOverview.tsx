"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoachOverview() {
  return (
    <>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#f36100]">
          About the Coach
        </h1>
        <div className="w-24 h-1 bg-[#f36100] mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Image + Name */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#f36100] shadow-lg">
          <Image
            src="/dr-faiz.jpeg"
            alt="Dr. Syed Faiz"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 200px"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Dr. Syed Faiz
          </h2>
          <p className="text-[#f36100] font-medium mt-1">
            Physical Therapist & Corrective Exercise Specialist
          </p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl border border-[#f36100]/20 shadow-sm space-y-4"
      >
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Dr. Faiz is a physiotherapist from Apollo Hospitals, a NASM Corrective Exercise Specialist, and a wellness consultant with 14 years of experience. He has been a TV health show host, magazine writer, and fitness coach.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          He has helped hundreds achieve health goals, trained fitness coaches, and worked with companies like Apollo Life and Cultfit.
        </p>
        <p className="text-[#f36100] font-medium text-lg italic">
          &apos;In today’s age of lifestyle diseases, it’s a blessing to assist anyone willing to transform their health.&apos;
        </p>
      </motion.div>

      {/* Credentials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white border-l-4 border-[#f36100] pl-4">
          His Credentials
        </h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-2 marker:text-[#f36100]">
          <li>Bachelor of Physiotherapy (BPT)</li>
          <li>NASM Certified Corrective Exercise Specialist</li>
          <li>Certified Kettlebell Instructor (CKI)</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 italic text-lg">
          Also holds several advanced certifications in physiotherapy and fitness.
        </p>
      </motion.div>
    </>
  );
}
