import Link from "next/link"
import { Button } from "./ui/button"
import { comment } from "postcss"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Image from "next/image"

const Header = () => {
  return (
    <header className="py-8 x1:py-12 text-primary bg-slate-200">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */ }
            <Link href= "/">
            <h1 className="text-4x1 font-semibold text-primary text-3xl">
                <Image 
                src= "/assets/logo.png"
                alt="logo"
                width={40}
                height={40}
                 />
            </h1>
            </Link>

            
            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-8 text-blue-900">
                <Nav />
                {/* <Link href="/contact">
                    <Button>Hire me</Button>
                </Link> */}
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                {/* <MobileNav /> */}
                <MobileNav />
            </div>


        </div>

    </header>
  )
}

export default Header