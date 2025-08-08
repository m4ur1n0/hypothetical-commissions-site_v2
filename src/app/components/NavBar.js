"use client"
import { usePathname } from 'next/navigation'
import React from 'react'


const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
        <a className={pathname === '/' ? 'nav-selected' : ''} href="/">Home</a>
        <a className={pathname === '/demos' ? 'nav-selected' : ''} href="demos">Demos</a>
        <a className={pathname === '/process' ? 'nav-selected' : ''} href="process">My Process</a>
        <a className={pathname === '/commissions' ? 'nav-selected' : ''} href="commissions">Commissions</a>
        <a className={pathname === '/controls' ? 'nav-selected' : ''} href="controls"><img src="/assets/vectors/settings.svg" alt="settings icon" id="settings-link" /></a>
    </nav>
  )
}

export default NavBar
