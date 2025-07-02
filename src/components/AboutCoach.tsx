"use client";

import CoachDegrees from "./CoachDegrees";
import CoachOverview from "./CoachOverview";

export default function AboutCoach() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f36100]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:mix-blend-screen" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f36100]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:mix-blend-screen" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <CoachOverview />
        <CoachDegrees />
      </div>
    </section>
  );
}
