"use client";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  "Physical Therapy (60 mins)",
  "Corrective Exercise (45 mins)",
  "Rehab Consultation (30 mins)",
  "Post-Surgical Recovery (60 mins)"
];

export default function Appointment() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-md mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Book <span className="text-[#f36100]">Your Session</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Schedule your rehabilitation appointment
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f36100]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f36100]"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f36100]"
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <input
                  type="time"
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f36100]"
                />
              </div>
            </div>
            <select
              defaultValue=""
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f36100]"
            >
              <option value="" disabled className="text-gray-500 dark:text-gray-400">
                Select service
              </option>
              {services.map((service) => (
                <option key={service} value={service} className="text-gray-900 dark:text-white">
                  {service}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full py-3 bg-[#f36100] hover:bg-[#e05500] text-white font-medium rounded-lg transition-all duration-200"
            >
              Confirm Appointment
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}