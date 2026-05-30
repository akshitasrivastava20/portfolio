import AvatarHairpin from '@/context/components/Home/AvatarHairpin'
import Bento from '@/context/components/Home/Bento'
import { Intro } from '@/context/components/Home/Intro'
import BlurFade from '@/context/components/ui/BlurFade'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { FeaturedProject } from '@/context/components/Home/FeaturedProject'

const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <div className="flex flex-col items-start justify-start gap-5 md:flex-row md:items-center md:justify-between">
        {' '}
        <div>
          {' '}
          <BlurFade delay={0.5}>
            <h1 className="mb-1 mt-0 text-3xl font-semibold dark:text-white">
              Akshita Srivastava
            </h1>
          </BlurFade>
          <BlurFade delay={0.6}>
            <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
              Full Stack Engineer
            </div>
          </BlurFade>
        </div>{' '}
        <AvatarHairpin />
      </div>
      <BlurFade delay={0.7}>
        <Link
          href="/resume/akshita_resume.pdf"
          target="_blank"
          className="mt-2 flex w-40 items-center justify-around gap-3 rounded-xl border-2 border-dashed border-black bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-none hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none dark:border-white dark:bg-black dark:text-gray-400 dark:hover:shadow-[4px_4px_0px_white]"
        >
          View Resume
          <ChevronRight className="size-5 stroke-black dark:stroke-gray-400" />
        </Link>
      </BlurFade>
      <BlurFade delay={0.7}>
        <Intro />
      </BlurFade>

      <BlurFade delay={0.7}>
        <FeaturedProject />
      </BlurFade>

      <BlurFade delay={0.7}>
        <Bento />
      </BlurFade>
    </section>
  )
}
export default page
