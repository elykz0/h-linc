"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Image from "next/image"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.header 
      className="py-6 xl:py-8 text-primary glass-effect sticky top-0 z-50 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <div className="container mx-auto flex justify-between items-center px-4">
            {/* logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/">
                <div className="flex items-center gap-3">
                  <Image 
                    src="/assets/logo.png"
                    alt="H-Linc Logo"
                    width={40}
                    height={40}
                    className="rounded-full shadow-lg"
                  />
                  <span className="text-2xl font-bold gradient-text">H-Linc</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <motion.div 
              className="hidden xl:flex items-center gap-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
                <Nav />
            </motion.div>

            {/* mobile nav */}
            <motion.div 
              className="xl:hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
                <MobileNav />
            </motion.div>
        </div>
    </motion.header>
  )
}

export default Header