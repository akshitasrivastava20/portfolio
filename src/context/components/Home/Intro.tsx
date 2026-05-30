import Link from 'next/link'
import { Separator } from '../ui/separator'
import { ArrowUpRight } from 'lucide-react'
import { DATA } from '@/lib/constants'
import React from 'react'
import { ResumeCard } from '../Work/resume-card'

export const Intro = () => {
  return (
    <React.Fragment>
      <section className="mt-8 text-zinc-600 dark:text-zinc-400">
        <div className="space-y-5 text-left">
          <p>
            Hi, I&apos;m Akshita Srivastava, an India-based Full-Stack developer, and I
            love crafting intuitive and dynamic{' '}
            <span className="bg-gradient-to-l from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              UIs
            </span>{' '}
            and real world problem solving{' '}
            <span className="bg-gradient-to-l from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Apps
            </span>{' '}
            with <span className="font-bold">Next.js.</span>
          </p>
          <p>
            My expertise lies in developing responsive user interfaces for
            web-based applications, ensuring a secure and seamless user
            experience.
          </p>

          <div className="flex">
            A Snapshot of my
            <Link href={'/projects'} className="group ml-1 flex">
              {' '}
              works.
              <div className="relative size-5 -translate-x-px translate-y-[-2px] overflow-hidden">
                <ArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
                <ArrowUpRight className="relative size-4 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
              </div>
            </Link>
          </div>

          
        </div>
        <div className="flex w-full items-center justify-center">
          <Separator className="w-14 mt-8 bg-[#888]/40" />
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3 pt-6">
          <div className="flex w-full items-center justify-start">
            <h2 className="mb-2 inline-block transform-gpu bg-gradient-to-r from-amber-400 via-red-400 to-fuchsia-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-2xl font-medium transition-all duration-500 hover:bg-[length:100%_2px]">
              Work Experience
            </h2>
          </div>
          {DATA.work.map((work, id) => (
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? 'Present'}`}
              description={work.description}
            />
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}
