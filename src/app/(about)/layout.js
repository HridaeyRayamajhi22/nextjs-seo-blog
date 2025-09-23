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
    <main className="w-full flex flex-col items-center justify-center px-6 lg:px-16">
      {/* Slim Insights Bar */}
      <section className="w-full max-w-6xl">
        <InsightRoll insights={insights} />
      </section>

      {/* Page Content immediately below */}
      <section className="w-full max-w-5xl mt-0">
        {children}
      </section>
    </main>
  );
}
