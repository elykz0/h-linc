"use client"

import Link from "next/link"
import { CiMenuBurger } from "react-icons/ci";
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from "next/navigation";

const links = [
    {
      name: 'home',
      path: '/',
  },
  {
      name: 'about',
      path: '/about',
  },
  {
      name: 'branches',
      path: '/branches',
  },
  {
      name: 'contact',
      path: '/contact',

  },
]




const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuBurger className="text-[32px] text-primary" />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-slate-300">
          <div className=" mt-32 mb-40 text-center text-2xl">
            <Link href ='/'>
                <h1 className="text-4xl font-semibold text-primary hover:text-5xl">
                    H-Linc
                </h1>
            </Link>
          </div>
          {/* Nav */}
          <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && " border-b-2 border-primary"} text-xl capitalize text-primarry hover:text-white transition-all`}
                        
                        >
                            {link.name}
                        </Link>
                ))}
          </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav