"use client"

import { motion } from "framer-motion"
import { FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTypescript, SiExpress, SiFramer, SiCplusplus, SiPuppeteer } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { GiBearFace } from "react-icons/gi";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    ],
  },
  {
    title: "Library/Frameworks",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-black dark:text-white" /> },
      { name: "React Native", icon: <TbBrandReactNative className="text-blue-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
      { name: "Puppeteer.js", icon: <SiPuppeteer className="text-green-700" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
      { name: "Zustand", icon: <GiBearFace className="text-green-700" /> }
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    ],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Technologies and tools I've worked with throughout my projects and experience
        </motion.p>

        <motion.div 
          className="grid gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4"
                whileHover={{ 
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex flex-col items-center gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                  >
                    <motion.div 
                      className={`
                        w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                        group-hover:bg-muted/50 transition-colors duration-300
                        border border-transparent group-hover:border-primary/20
                      `}
                      whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span 
                      className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}