'use client'
import Navbar from '@/components/ReusableComp/Navbar'
import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import Footer from '@/components/ReusableComp/Footer'
import GoToTop from '@/components/ReusableComp/GoToTop'

const GlobalLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
       {children}
      <GoToTop />
      </ThemeProvider>
    </div>
  );
}

export default GlobalLayout
