import React from 'react'
import  ProjectCard  from '@/context/components/Project/FeaturedProjectCard'
import { featuredProjects } from '@/lib/constants'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const FeaturedProject = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center min-w-5xl justify-center">
        <h2 className="text-center text-2xl font-medium mt-6 font-neu text-gray-800 dark:text-gray-100">
          Featured Projects
        </h2>
        <svg
          width="400"
          height="80"
          viewBox="0 0 200 40"
          className="-translate-y-12 translate-x-[-86px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#9400D3" stopOpacity="0" />
              <stop offset="100%" stopColor="#4B0082" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M10 20 L 80 20 L 100 30 H 196"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="space-y-14">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            delay={index * 0.2}
            imageSrc={project.imageSrc}
            videoSrc={project.videoSrc}
            title={project.title}
            tags={project.tags}
            timeline={project.timeline}
            tagline={project.tagline}
            liveDemoHref={project.liveDemoHref}
            sourceCodeHref={project.sourceCodeHref}
          />
        ))}
      </div>
      <div className="flex p-2">
        Check out more
        <Link href={'/projects'} className="group ml-1 flex">
          {' '}
          Projects.
          <div className="relative size-5 -translate-x-px translate-y-[-2px] overflow-hidden">
            <ArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
            <ArrowUpRight className="relative size-4 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}
