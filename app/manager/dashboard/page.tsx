"use client"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Toaster } from "@/components/toaster"
import { BookOpen, BarChartIcon as ChartBar, LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function ManagerDashboard() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Sensei</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground hidden md:block">Welcome, Manager</p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="space-y-6 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Manager Dashboard</h2>
            <p className="text-muted-foreground mt-2">Create and manage training programs for your team members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card
                className="h-full cursor-pointer hover:shadow-md transition-all"
                onClick={() => router.push("/manager/generate")}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Generate Coursework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create customized training plans for new team members based on their role and skill level
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card
                className="h-full cursor-pointer hover:shadow-md transition-all"
                onClick={() => router.push("/manager/progress")}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <ChartBar className="h-5 w-5 text-primary" />
                    Progress Tracker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitor employee progress through their knowledge transfer plan and view assignment grades
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <ThemeToggle />
      <Toaster />
    </div>
  )
}

