"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/toaster"
import { BookOpen, ArrowLeft, LogOut } from "lucide-react"
import Link from "next/link"
import { ViewCoursework } from "@/components/employee/view-coursework"

export default function CourseworkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Sensei</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground hidden md:block">Welcome, Test User</p>
            <Button variant="secondary" size="sm" asChild className="whitespace-nowrap">
              <Link href="/">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href="/employee/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <ViewCoursework />
      </main>

      <ThemeToggle />
      <Toaster />
    </div>
  )
}

