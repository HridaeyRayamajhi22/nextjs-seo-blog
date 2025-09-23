'use client'

import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  { label: "Projects Completed", value: "10+" },
  { label: "Years of Freelancing", value: "1+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Subscribers", value: "200+" },
  { label: "Coffee Cups Consumed", value: "500+" },
  { label: "Ongoing Collaborations", value: "5+" },
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      {/* Full-width Insights Bar */}
      <section className="w-full bg-accent">
        <div className="w-full max-w-full mx-0">
          <InsightRoll insights={insights} />
        </div>
      </section>

      {/* Page Content attached directly below with zero gap */}
      <section className="w-full max-w-6xl px-6 lg:px-8 pt-0">
        {children}
      </section>
    </main>
  );
}