'use client'
import Navbar from '@/components/ReusableComp/Navbar'
import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import Footer from '@/components/ReusableComp/Footer'

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
        <main>{children} </main>
      </ThemeProvider>
    </div>
  );
}

export default GlobalLayout
