import AboutCoverSection from "@/src/components/About/AboutCoverSection.js";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 leading-relaxed text-center">
        Have a project in mind? 📞 Reach out from{" "}
        <Link
          href="/contact"
          className="text-violet-500 font-bold underline underline-offset-2 decoration-2 hover:text-violet-700 hover:decoration-violet-400 transition-colors duration-300 "
        >
          here
        </Link>{" "}
        and let’s make it happen!
      </h2>
    </>
  );
}
