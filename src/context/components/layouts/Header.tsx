import Link from 'next/link'
import Logo from '../Icons/Logo'
import NavBar from '../Nav/Navbar'

const Header = ({ className }: { className?: string }) => {
  return (
    <header className={`relative ${className} z-50 flex items-center justify-between`}>
      <Link
        href={'/'}
        className="absolute left-4 h-16 w-24 pt-2 md:left-10 md:top-8 md:p-0"
      >
        <Logo className="h-10 fill-current" />
      </Link>
      <NavBar />
    </header>
  )
}

export default Header
