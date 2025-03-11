"use client"

import { CardFooter } from "@/components/ui/card"
<<<<<<< HEAD

import type React from "react"

=======
import type React from "react"
>>>>>>> 553198d (added courseworks)
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
<<<<<<< HEAD
=======
import { useUser } from "@/context/user-context"
>>>>>>> 553198d (added courseworks)

export default function EmployeeLogin() {
  const router = useRouter()
  const { toast } = useToast()
<<<<<<< HEAD
=======
  const { setUser } = useUser()
>>>>>>> 553198d (added courseworks)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({ email: "", password: "" })

  const validateForm = () => {
    const newErrors = { email: "", password: "" }
    let isValid = true

    if (!email) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
      isValid = false
    }

    if (!password) {
      newErrors.password = "Password is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
<<<<<<< HEAD
      if (email === "test_user@bajajfinserv.in" && password === "helloworld123") {
        toast({
          title: "Login successful",
          description: "Welcome to Sensei!",
          variant: "success",
        })
        router.push("/employee/dashboard")
=======
      if (password === "helloworld123") {
        if (email === "test_user@bajajfinserv.in") {
          // First user - Data Lake coursework
          setUser({
            email: "test_user@bajajfinserv.in",
            name: "Test User",
            role: "employee",
            courseworkType: "data-lake",
          })

          toast({
            title: "Login successful",
            description: "Welcome to Sensei!",
            variant: "success",
          })
          router.push("/employee/dashboard")
        } else if (email === "test_user2@bajajfinserv.in") {
          // Second user - CDP coursework
          setUser({
            email: "test_user2@bajajfinserv.in",
            name: "Test User 2",
            role: "employee",
            courseworkType: "cdp",
          })

          toast({
            title: "Login successful",
            description: "Welcome to Sensei CDP Training!",
            variant: "success",
          })
          router.push("/employee/dashboard")
        } else if (email === "test_user3@bajajfinserv.in") {
          // Third user - Goldengate coursework
          setUser({
            email: "test_user3@bajajfinserv.in",
            name: "Test User 3",
            role: "employee",
            courseworkType: "goldengate",
          })

          toast({
            title: "Login successful",
            description: "Welcome to Sensei Goldengate Training!",
            variant: "success",
          })
          router.push("/employee/dashboard")
        } else
          toast({
            title: "Login failed",
            description: "Invalid email or password",
            variant: "destructive",
          })
        setIsLoading(false)
>>>>>>> 553198d (added courseworks)
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        })
        setIsLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center mb-2">
            <Button variant="ghost" size="icon" asChild className="mr-2 h-8 w-8">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <CardTitle className="text-2xl">Employee Login</CardTitle>
          </div>
          <CardDescription>Enter your credentials to access your training materials</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@bajajfinserv.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <ThemeToggle />
    </div>
  )
}

