"use client";

import Link from 'next/link';
// import { useRouter } from "next/router";
import { usePathname } from 'next/navigation';

import React from 'react';
import Alert from './Alert';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const pathname = usePathname()
    interface ILink {
        id: number;
        label: string;
        url: string;
    }

    const links: ILink[] = [
        {
            id: 1,
            label: 'home',
            url: '/'
        },
        {
            id: 2,
            label: 'about',
            url: '/about'
        }
    ]

    return (
        <>
            <nav className='h-16 bg-zinc-300 dark:bg-stone-800 flex justify-around items-center sticky top-0 left-0 z-50'>
                <div className='text-2xl font-bold text-neutral-800 dark:text-white font-mono'>
                    <Link href='/'>Textopia</Link>
                </div>
                <ul className='flex gap-14 items-center'>
                    {links.map((link) => {
                        return (
                            <li key={link.id} className={`text-base font-medium capitalize ${(pathname === link.url) ? "text-emerald-600 dark:text-violet-600" : "text-neutral-700 dark:text-white hover:text-emerald-400 dark:hover:text-violet-400"}`}>
                                <Link href={link.url} className="">
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                    <ThemeToggle />
                </ul>
            </nav>
            <div className="absolute w-full left-0 top-16">
                <Alert />
            </div>
        </>
    )
}

export default Navbar;