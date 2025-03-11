"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { cdpCourseworkData } from "@/data/cdp-coursework"
import { dataLakeCourseworkData } from "@/data/data-lake-coursework"
import { goldengateCourseworkData } from "@/data/goldengate-coursework"

// Define user types
export type User = {
  email: string
  name: string
  role: string
  courseworkType: "data-lake" | "cdp" | "goldengate"
}

// Define context type
type UserContextType = {
  user: User | null
  setUser: (user: User | null) => void
  getCourseworkData: () => any
  isLoading: boolean
}

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined)

// Create provider component
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for user in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("sensei_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Update localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("sensei_user", JSON.stringify(user))
    } else {
      localStorage.removeItem("sensei_user")
    }
  }, [user])

  // Function to get the appropriate coursework data based on user type
  const getCourseworkData = () => {
    if (!user) return null

    switch (user.courseworkType) {
      case "cdp":
        return cdpCourseworkData
      case "goldengate":
        return goldengateCourseworkData
      case "data-lake":
      default:
        return dataLakeCourseworkData
    }
  }

  return <UserContext.Provider value={{ user, setUser, getCourseworkData, isLoading }}>{children}</UserContext.Provider>
}

// Custom hook to use the context
export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

