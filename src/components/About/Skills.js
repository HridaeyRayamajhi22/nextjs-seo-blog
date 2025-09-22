import React from "react";

const skills = [
  // Web Development
  "Next.js",
  "Gatsby.js",
  "JavaScript",
  "Tailwind CSS",
  "Firebase",

  // Design & Prototyping
  "Figma",
  "Wireframing",
  "Web Design",
  "Framer Motion",

  // Content & CMS
  "Strapi",
  "Sanity",

  // Emerging Tech & Tools
  "Generative AI",
  "SEO",
];

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        I’m comfortable in...
      </h2>

      <ul className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="px-6 py-4 bg-violet-100 dark:bg-violet-500 text-violet-700 dark:text-violet-50 font-medium text-sm rounded-full shadow-sm hover:bg-violet-200 dark:hover:bg-violet-600 transition-colors"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
