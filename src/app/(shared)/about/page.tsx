import PolaroidPhoto from '@/context/components/About/PolaroidPhoto'

import p1 from '../../../../public/images/avatar.png'
import p2 from '../../../../public/images/hack.jpg'
import p3 from '../../../../public/images/peace.jpg'
import Link from 'next/link'
import { iconData, inspirationWebsites } from '@/lib/constants'
import CdBack from '@/context/components/shared/CdBack'
import { SpacingWhale } from '@/context/components/Home/SpacingWhle'

const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <div className="flex items-end gap-5">
        <h1 className="text-4xl font-bold tracking-tight">about me</h1>
        <SpacingWhale />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 py-20 md:gap-20">
        <PolaroidPhoto
          altText="image"
          imageSrc={p1}
          rotation={-7}
          text="The Man Himself 🚀"
        />
        <PolaroidPhoto
          altText="image"
          imageSrc={p2}
          rotation={5}
          text="Hackathons 👨‍💻"
        />
        <PolaroidPhoto
          altText="image"
          imageSrc={p3}
          rotation={2}
          text="Peace Out ✨"
        />
      </div>
      <div className="group space-y-5 leading-relaxed">
        <p>
          Hey there! I’m Akshita Srivastava, a { Math.floor((Date.now() - new Date('2005-10-15').getTime()) / (1000 * 60 * 60 * 24 * 365)) }-year-old Full-Stack developer,  India who thrives on crafting intuitive and dynamic{' '}
          <span className="text-teal-500">Solutions</span>, especially with{' '}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="wavvy under underline-offset-4"
          >
            Next.js
          </Link>
          .
        </p>
        <p>
          I began my tech journey at the start of 2018 at an age of 13, but the
          actual start was in the end of 2023 and since then, I’ve developed a
          strong expertise in building responsive and secure web applications
          that offer a seamless user experience. Along with my love for Problem
          Solving and Crafting Solutions, I find full-stack development
          incredibly fascinating.
        </p>
        <p>
          I’m especially intrigued by creating scalable backends and robust
          applications , which adds another layer of excitement to my work.
        </p>
        <p>
          Lately, I’m exploring Data Structures and Algorithms using my rookie
          knowledge of{' '}
          <Link
            href="https://java.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400"
          >
            Java
          </Link>
          , with a growing curiosity for{' '}
          <span className="underline">DevOps</span> and Linux on the horizon.
        </p>
      </div>
      <div>
        <h1 className="mt-20 text-4xl font-bold tracking-tight">
          About this site
        </h1>
        <p className="my-7 text-lg"> Curious about this site? It features:</p>
        <div className="mt-10">
          <h1 className="text-2xl font-bold tracking-tight">Tech stack</h1>
          <p className="my-7">
            This site is crafted with Next.js, Tailwind CSS, and MDX, with
            Vercel handling the hosting.
          </p>
          <div className="grid grid-cols-4 grid-rows-2 content-center gap-10 p-3">
            {iconData.map(({ Component, href, className, label }, index) => (
              <div key={index} className="group relative w-fit pb-3">
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Component className={className} />
                </Link>
                <span className="absolute left-[-30%] mt-3 w-20 rounded px-2 py-1 text-center text-xs font-semibold opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-none dark:text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>{' '}
      <div className="mt-10">
        <h1 className="text-2xl font-bold tracking-tight">Inspiration</h1>
        <p className="my-7">
          I’m thankful to the fantastic websites listed below for sparking the
          inspiration behind this site.
        </p>
        <div>
          {' '}
          <ul className="list-disc space-y-1">
            {inspirationWebsites.map((site) => (
              <li key={site.url} className="ml-4">
                <Link
                  href={site.url}
                  className="transform-gpu bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 hover:bg-[length:100%_2px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-7"></p>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold tracking-tight">Typography</h1>
        <p className="my-7"></p>
        <div className="grid border-collapse grid-cols-1 place-items-center items-center border border-dashed border-emerald-900/60 md:grid-cols-2">
          <p className="w-full border border-dashed border-emerald-900/60 p-4 text-center font-normal">
            Inter
          </p>
          <p className="w-full border border-dashed border-emerald-900/60 p-4 text-center font-neu font-medium">
            Neue Monstreal
          </p>
          <p className="w-full border border-dashed border-emerald-900/60 p-4 text-center font-lombok">
            LOMBOK
          </p>
          <p className="w-full border border-dashed border-emerald-900/60 p-4 text-center font-cath">
            Catholic School Girls BB
          </p>
        </div>
      </div>
      <CdBack />
    </section>
  )
}
export default page
