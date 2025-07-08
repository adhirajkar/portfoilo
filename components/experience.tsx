"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title:  "Software Developer",
    company: "Zelthy",
    period: "Aug 2024 - Present",
    responsibilities: [
      "Developed Newmi Care, a women’s healthcare mobile application for clinic and lab consultation bookings, available on Google Play and the Apple App Store",
      "Designed and implemented an infinite scrolling pagination table with advanced filtering capabilities for Merck Sharp & Dohme (MSD), allowing efficient serialization and visualization of millions of medicine data records.",
      "Created slots package for the Zango framework at Zelthy, empowering physicians to register and manage their availability seamlessly.",
      "Built a bilingual website for DKSH Thailand using React, featuring seamless Thai and English language switching with full internationalization support using i8n."
    ],
    skills: ["JavaScript", "TypeScript", "React", "React Native", "Tailwind CSS"],
  },
  {
    title: "SDE Intern",
    company: "IdeaUsher",
    period: "Jan 2024 - July 2024",
    responsibilities: [
      "Developed APIs using Node.js and Express.js for a mobile app and admin panel, incorporating OpenAI APIs for room recognition and scanning. Reduced scan times from 90 to 50 seconds, improving efficiency by 44%.",
      "Created the Web3 project front end with Next.js for ICO transactions on Polygon and Ethereum, using Ether.js and Firebase, resulting in a secure and user-friendly platform.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "Ether.js", "Next.js", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Software Developer (Part-time)",
    company: "Alleaze Tech.",
    period: "Mar 2024 – Jun 2024",
    responsibilities: [
      "Software solutions for cafes & restaurants around my college",
      "Built APIs using Node.js and Express.js for a mobile app and admin panel for cafes and restaurants",
      "Built a CMS dashboard for cafes and restaurants using React and Tailwind CSS",
    ],
    skills: ["Node.js", "Express.js", "PostgreSQL", "JavaScript", "React", "Tailwind CSS"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}