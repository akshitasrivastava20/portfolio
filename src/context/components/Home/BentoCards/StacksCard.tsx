import { Marquee } from '../Marquee'
import Nextjs from '@/context/components/Icons/StackIcons/Nextjs'
import { Html } from '@/context/components/Icons/StackIcons/Html'
import { Css } from '@/context/components/Icons/StackIcons/css'
import { Express } from '@/context/components/Icons/StackIcons/express'
import { FramerMotion } from '@/context/components/Icons/StackIcons/FramerMotion'
import { Git } from '@/context/components/Icons/StackIcons/git'
import { Github } from '@/context/components/Icons/StackIcons/github'
import { GithubActions } from '@/context/components/Icons/StackIcons/githubactions'
import { Java } from '@/context/components/Icons/StackIcons/java'
import { JS } from '@/context/components/Icons/StackIcons/javascript'
import { Mongodb } from '@/context/components/Icons/StackIcons/mongodb'
import { Postman } from '@/context/components/Icons/StackIcons/postman'
import { ReactIcon } from '@/context/components/Icons/StackIcons/react'
import { Shadcn } from '@/context/components/Icons/StackIcons/Shadcn'
import { Sql } from '@/context/components/Icons/StackIcons/sql'
import { Tailwind } from '@/context/components/Icons/StackIcons/tailwindcss'
import { Typescript } from '@/context/components/Icons/StackIcons/typescript'
import { VsCode } from '@/context/components/Icons/StackIcons/VS'
import { Webpack } from '@/context/components/Icons/StackIcons/webpack'
import React from 'react'
import { NodejsIcon } from '@/context/components/Icons/StackIcons/nodejsIcon'
import Stack from '@/context/components/Icons/Stack'
import BentoCard from './BentoCard'
import Vite from '@/context/components/Icons/StackIcons/vite'

const frontendTech: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  Html,
  Css,
  JS,
  Typescript,
  ReactIcon,
  Nextjs,
  Tailwind,
  FramerMotion,
  Sql,
  Shadcn,
  Vite,
  Webpack,
]

const backendAndTools: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  NodejsIcon,
  Express,
  Mongodb,
  Postman,
  VsCode,
  Git,
  Github,
  GithubActions,
  Java,
]

const StacksCard = ({ isForSmall = false }: { isForSmall?: boolean }) => {
  return (
    <BentoCard className="group/stack col-span-5 row-span-1 h-56 w-full p-4 xs:col-span-5 xs:row-span-2 lg:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Stack className="size-4" />
        <h2 className="bg-gradient-to-r from-[#8ebac7] via-[#4d8b9d] to-[#2a4b55] bg-clip-text font-neu text-sm font-medium text-transparent">
          Stacks
        </h2>
      </div>
      <Marquee gap="20px" className="py-4" fade pauseOnHover>
        {frontendTech.map((TechComponent, index) => (
          <TechComponent
            key={index}
            id={isForSmall ? `s-${index}` : `${index}`}
            className="size-10 transition-all duration-500 ease-in-out"
          />
        ))}
      </Marquee>
      <Marquee gap="20px" className="py-4" reverse fade pauseOnHover>
        {backendAndTools.map((TechComponent, index) => (
          <TechComponent
            key={index}
            id={isForSmall ? `s2-${index}` : `${index}2`}
            className="size-10 transition-all duration-500 ease-in-out"
          />
        ))}
      </Marquee>
    </BentoCard>
  )
}

export default StacksCard
