'use client'

import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import './globals.css'

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] })

/**
 * Root Layout Component
 * 
 * Features:
 * - Theme provider for dark/light mode
 * - Inter font integration
 * - Responsive layout structure
 * - Hydration warning suppression
 * 
 * @param children Components to be rendered within the layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 