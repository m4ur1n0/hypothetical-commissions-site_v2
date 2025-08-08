"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'


const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
        <Link className={pathname === '/' ? 'nav-selected' : ''} href="/">Home</Link>
        <Link className={pathname === '/demos' ? 'nav-selected' : ''} href="demos">Demos</Link>
        <Link className={pathname === '/process' ? 'nav-selected' : ''} href="process">My Process</Link>
        <Link className={pathname === '/commissions' ? 'nav-selected' : ''} href="commissions">Commissions</Link>
        <Link className={pathname === '/controls' ? 'nav-selected' : ''} href="controls"><img src="/assets/vectors/settings.svg" alt="settings icon" id="settings-link" /></Link>
    </nav>
  )
}

export default NavBar
