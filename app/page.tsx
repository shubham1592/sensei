"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-5xl w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Sensei</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Strategic Employee Support & Engagement Interface</p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            An automated knowledge transfer framework designed to train new joiners in the team on specific skillsets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Link href="/login/employee" className="block">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20 cursor-pointer">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Employee Login
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-6 text-muted-foreground">
                    Access your personalized training materials, submit assignments, and get assistance through our AI
                    chatbot.
                  </p>
                  <Button className="w-full">Login as Employee</Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <Link href="/login/manager" className="block">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20 cursor-pointer">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Manager Login
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-6 text-muted-foreground">
                    Create customized training programs for your team members and track their progress in real-time.
                  </p>
                  <Button className="w-full">Login as Manager</Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </div>
      <ThemeToggle />
    </main>
  )
}

