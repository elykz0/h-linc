"use client";

import Link from "next/link";
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

const Nav = () => {
    const pathname = usePathname();
    return ( 
        <nav className="flex gap-8">
            {links.map((link, index)=> {
            return ( 
                <Link href= {link.path} 
                key={index} 
                className={'${link.path === pathname && "text-black hover:border-b-2 border-accent"} capitalize font-medium hover:text-slate-400 hover:underline transition-all'}
                >
                {link.name}
                </Link>
            );
        })}
        </nav>
    );
};

export default Nav;