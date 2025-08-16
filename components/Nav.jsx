"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'About',
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

const Nav = () => {
    const pathname = usePathname();
    return ( 
        <nav className="flex gap-8">
            {links.map((link, index)=> {
            return ( 
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    href={link.path} 
                    className={`relative capitalize font-medium transition-all duration-300 hover:text-teal-600 ${
                      link.path === pathname ? "text-teal-600" : "text-slate-700"
                    }`}
                  >
                    {link.name}
                    {link.path === pathname && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
            );
        })}
        </nav>
    );
};

export default Nav;