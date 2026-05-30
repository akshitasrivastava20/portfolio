'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/context/components/ui/avatar'
import { Badge } from '@/context/components/ui/badge'
import { Card, CardHeader } from '@/context/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string | string[]
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.stopPropagation()
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  const getDescriptionItems = () => {
    if (!description) return []
    if (Array.isArray(description)) return description
    // Fallback: split string by newlines if it's still a string
    return description.split('\n').filter((item) => item.trim().length > 0)
  }

  const content = (
    <Card className="my-0.5 flex overflow-hidden">
      <div className="flex-none">
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer cursor-pointer"
          >
            <Avatar className="m-auto size-12 border bg-muted transition-opacity hover:opacity-80">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          <Avatar className="m-auto size-12 border bg-muted">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        )}
      </div>
      <div className="group ml-4 flex-grow flex-col items-center">
        <div
          onClick={handleClick}
          className={cn(description && 'cursor-pointer', 'select-none')}
        >
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center pt-[5px] text-xs font-semibold leading-none sm:text-sm">
                {title}
                {badges && (
                  <span className="ml-2 inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                      isExpanded ? 'rotate-90' : 'rotate-0'
                    )}
                  />
                )}
              </h3>
              <div className="text-right text-xs tabular-nums text-zinc-600 dark:text-zinc-400 sm:text-sm">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
        </div>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? 'auto' : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden px-4 pb-4 pt-2 text-xs sm:text-sm"
          >
            <ul className="list-disc space-y-1.5 pl-4">
              {getDescriptionItems().map((item, index) => (
                <li key={index} className="text-zinc-600 dark:text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </Card>
  )

  return href && !description ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  )
}
