import BlurFade from '@/context/components/ui/BlurFade'
import { getBlogPosts } from '@/data/blog'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Header from '@/context/components/layouts/Header'
import Footer from '@/context/components/layouts/Footer'
import CdBack from '@/context/components/shared/CdBack'

export const metadata = {
  title: 'Blog',
  description: 'My thoughts on software development, life, and more.',
}

const BLUR_FADE_DELAY = 0.04

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <Header className='mb-8 max-w-3xl mx-auto' />
      <section
        className={cn(
          'mx-auto mt-0 min-h-[90vh] max-w-2xl bg-background px-6 py-4 font-sans antialiased sm:py-0'
        )}
      >
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="mb-8 text-2xl font-medium tracking-tighter">blog</h1>
        </BlurFade>
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="mb-4 flex flex-col space-y-1"
                href={`/blog/${post.slug}`}
              >
                <div className="flex w-full flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
        <CdBack />
      </section>
      <Footer />
    </>
  )
}
