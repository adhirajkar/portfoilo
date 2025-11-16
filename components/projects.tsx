"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "REQStat",
    description: "Send requests, inspect responses, and debug APIs without the clutter.",
    image: "/screenshots/reqstat.png",
    demoUrl: "https://reqstat.vercel.app",
    githubUrl: "https://github.com/adhirajkar/reqstat",
  },
   {
    title: "Schedula",
    description: "A simple scheduling tool that syncs with Google Calendar to automate bookings and share availability effortlessly.",
    image: "/screenshots/schedula.png",
    demoUrl: "https://schedula-amber.vercel.app/",
    githubUrl: "https://github.com/adhirajkar/schedula",
  },
  {
    title: "ClutchMVP",
    description: "Boilerplate to help developers build MVPs fast and right ⚡️",
    image: "/screenshots/clutchmvp.png",
    demoUrl: null,
    githubUrl: "https://github.com/adhirajkar/clutch-mvp",
  },
]

const ProjectCard = ({
  title,
  description,
  image,
  demoUrl,
  githubUrl,
}: {
  title: string;
  description: string;
  image: string;
  demoUrl: string | null;
  githubUrl: string;
}) =>{
  return (
    <CardContainer className="inter-var w-full">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        {description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <img
          src={image}
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className={`flex ${demoUrl?'justify-between':'justify-end'} items-center mt-20`}>
        {
          demoUrl && (
            <CardItem
            translateZ={20}
            as="a"
            href={demoUrl}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live →
          </CardItem>
          )
        }
       
        <CardItem
          translateZ={20}
          as="a"
          href={githubUrl}
          target="__blank"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          Github
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
       
       
      </motion.div>
    </section>
  )
}