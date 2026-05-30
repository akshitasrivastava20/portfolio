import Nextjs from '@/context/components/Icons/StackIcons/Nextjs'
import { Shadcn } from '@/context/components/Icons/StackIcons/Shadcn'
import { Tailwind } from '@/context/components/Icons/StackIcons/tailwindcss'
import { Github } from '@/context/components/Icons/StackIcons/github'
import { FramerMotion } from '@/context/components/Icons/StackIcons/FramerMotion'
import VercelLogoIcon from '@/context/components/Home/VercelIcon'
import MdxIcon from '@/context/components/Home/MdxIcon'

import React from 'react'
type NavItems = {
  name: string
  href: string
}[]
// { name: 'Work', href: '/work' },
export const navItems: NavItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
]
// { name: 'Playground', href: '/playground' },

interface IconData {
  Component: React.FC<{ className?: string }>
  href: string
  className: string
  label: string
}
export const iconData: IconData[] = [
  {
    Component: Nextjs,
    href: 'https://nextjs.org',
    className: 'size-12 dark:invert',
    label: 'Framework',
  },
  {
    Component: Tailwind,
    href: 'https://tailwindcss.com',
    className: 'size-12 grayscale invert dark:invert-0',
    label: 'Utility',
  },
  {
    Component: Shadcn,
    href: 'https://shadcn.dev',
    className: 'size-12',
    label: 'UI lib',
  },
  {
    Component: FramerMotion,
    href: 'https://www.framer.com/api/motion/',
    className: 'size-12',
    label: 'Animation',
  },
  {
    Component: MdxIcon,
    href: 'https://mdxjs.com',
    className: 'size-12',
    label: 'Markdown',
  },
  {
    Component: Github,
    href: 'https://github.com',
    className: 'size-12 dark:invert',
    label: 'Version',
  },
  {
    Component: VercelLogoIcon,
    href: 'https://vercel.com',
    className: 'size-12',
    label: 'Deploy',
  },
]
export const inspirationWebsites = [
  { name: 'manuarora.in', url: 'https://manuarora.in/' },
  { name: 'canvas.hrcd.fr', url: 'https://canvas.hrcd.fr/' },
  { name: 'marcbouchenoire.com', url: 'https://marcbouchenoire.com' },
  { name: 'magicui.design', url: 'https://magicui.design/' },
  { name: 'augen.pro', url: 'https://augen.pro/' },
  { name: 'ui.aceternity.com', url: 'https://ui.aceternity.com/' },
]
export const topProjects = [
  {
    videoSrc: 'https://cdn2.devxoshakya.xyz/folio/offmarket-deals.webm',
    imageSrc: '',
    title: 'Off Market Deals',
    tags: [
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Hono',
      'Cloudflare Worker',
      'SendGrid',
      'Gemini API',
      'Cron Jobs',
      'PostHog',
      'Vector Embeddings',
    ],
    timeline: 'August 2025 - October 2025',
    tagline:
      'A SaaS marketplace curating detailed deals of digital products and SaaS, powered by automated Reddit data ingestion and Gemini-based content formatting.',
    sourceCodeHref: '',
    liveDemoHref: 'https://offmarketdeals.vercel.app/',
  },
  {
    videoSrc: 'https://cdn2.devxoshakya.xyz/folio/mppharma.webm',
    imageSrc: '',
    title: 'MP Pharmaceuticals Group of Co.',
    tags: [
      'Next.js',
      'Cloudflare Worker',
      'R2 Storage',
      'CDN',
      'Gemini SDK',
      'EmailJS',
    ],
    timeline: 'April 2025 - June 2025',
    tagline:
      'A sleek landing page website for MP Pharmaceuticals Group’s 3rd-party pharmaceuticals business with chatbot integration and optimized asset delivery.',
    sourceCodeHref: 'https://github.com/devxoshakya/mp-pharma',
    liveDemoHref: 'https://mppharmaceuticals.com/',
  },
  {
    videoSrc: 'https://cdn2.devxoshakya.xyz/folio/anveshna.webm',
    imageSrc: '/images/project/Space.png',
    title: 'Anveshna.',
    tags: [
      'Next.js',
      'Bun',
      'Hono',
      'Docker',
      'GCP Cloud Run',
      'Fastify',
      'Hono + CF Worker Proxy',
      'HLS Streaming',
      'Shadcn UI',
    ],
    timeline: 'May 2025 - Present',
    tagline:
      'Anveshna is an anime streaming website that lets you watch your favorite anime 🌸, powered by a scalable backend and streaming API.',
    sourceCodeHref: 'https://github.com/akshitasrivastava20/anveshnahono',
    liveDemoHref: 'https://anveshna.akshita.dev/',
  },
  {
    videoSrc: 'https://cdn2.devxoshakya.xyz/folio/mietresults.webm',
    imageSrc: '',
    title: 'MIET Results Listing',
    tags: [
      'Next.js',
      'Cloudflare Pages',
      'MongoDB',
      'Express.js',
      'Shadcn UI',
    ],
    timeline: 'June 2024 - July 2024',
    tagline:
      'A web scraper to get AKTU University results of all students of Meerut Institute of Engineering and Technology.',
    sourceCodeHref: 'https://github.com/akshitasrivastava20/singularity-new-rag',
    liveDemoHref: 'https://s.akshita.dev/',
  },
  
];



export const DATA = {
  work: [
    {
      company: 'Boredheadlabs',
      href: 'https://boredheadlabs.com',
      badges: ['Internship'],
      location: 'Remote, India',
      title: 'Full Stack Developer Intern',
      logoUrl: '/images/boredheadlabs.jpeg',
      start: 'Aug 2025',
      end: 'Oct 2025',
      description: [
        'Built serverless SaaS stack with Next.js 15, PostgreSQL (Prisma), and Cloudflare Workers',
        'Engineered multi-provider auth & RBAC with OAuth and subscription-gated features',
        'Deployed autonomous Reddit data pipelines with cron-based ingestion on Cloudflare Workers',
        'Optimized queries with cache invalidation, reducing load by 85% (sub-200ms TTFB)',
        'Integrated Google Generative AI with RAG for context-aware search',
        'Created Off Market Deals platform for discovering hidden business opportunities',
      ],
    },
    {
      company: 'M P Pharmaceuticals Group of Co.',
      badges: ['Freelance'],
      href: 'https://mppharmaceuticals.com',
      location: 'Remote, Meerut, Uttar Pradesh, India',
      title: 'Full Stack Developer',
      logoUrl: '/images/mp-pharma.png',
      start: 'Apr 2025',
      end: 'Jun 2025',
      description: [
        'Built Next.js 15 platform scoring 99-100 Lighthouse (performance, SEO, accessibility)',
        'Developed custom Gemini AI chatbot, reducing bounce rate by 18%',
        'Deployed Cloudflare R2 + CDN, cutting image payloads by 55% (0.45s LCP)',
        'Architected technical SEO foundation for 2× faster Google indexing',
        'Automated client communications via EmailJS with 99.9% delivery reliability',
      ],
    },
  ],
}

export const featuredProjects = [
  {
    videoSrc: 'https://cdn2.devxoshakya.xyz/folio/singularity.webm',
    imageSrc: '/images/project/Space.png',
    title: 'Singularity.',
    tags: [
      'Next.js',
      'FastAPI',
      'Cloudflare Workers',
      'MongoDB',
      'Prisma',
      'Clerk',
      'DodoPayments',
      'Turborepo',
      'Bun',
      'Shadcn UI',
    ],
    timeline: 'Mar. 2026 - Present',
    tagline:
      'Singularity is a RAG-powered academic SaaS platform that automates result analysis and slashes repeated institutional queries by 80–90% across AKTU-affiliated colleges.',
    sourceCodeHref: 'https://github.com/akshitasrivastava20/singularity-new-rag',
    liveDemoHref: 'https://s.akshita.dev/',
  },
  {
    videoSrc: 'https://cdn2.devxoshakya.xyz/folio/anveshna.webm',
    imageSrc: '/images/project/Space.png',
    title: 'Anveshna.',
    tags: [
      'Next.js',
      'Bun',
      'Hono',
      'Docker',
      'GCP Cloud Run',
      'Fastify',
      'Hono + CF Worker Proxy',
      'HLS Streaming',
      'Shadcn UI',
    ],
    timeline: 'May 2025 - Present',
    tagline:
      'Anveshna is an anime streaming website that lets you watch your favorite anime 🌸, powered by a scalable backend and streaming API.',
    sourceCodeHref: 'https://github.com/akshitasrivastava20/anveshnahono',
    liveDemoHref: 'https://anveshna.akshita.dev/',
  },
]
