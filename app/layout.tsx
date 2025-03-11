import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"
<<<<<<< HEAD
=======
import { UserProvider } from "@/context/user-context"
>>>>>>> 553198d (added courseworks)

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sensei - Strategic Employee Support & Engagement Interface",
  description: "Automated knowledge transfer framework for new joiners",
<<<<<<< HEAD
    generator: 'v0.dev'
=======
>>>>>>> 553198d (added courseworks)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
<<<<<<< HEAD
          {children}
          <Toaster />
=======
          <UserProvider>
            {children}
            <Toaster />
          </UserProvider>
>>>>>>> 553198d (added courseworks)
        </ThemeProvider>
      </body>
    </html>
  )
}

<<<<<<< HEAD


import './globals.css'
=======
>>>>>>> 553198d (added courseworks)
