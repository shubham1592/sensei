"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useUser } from "@/context/user-context"

export function SubmitAssignment() {
  const [selectedDay, setSelectedDay] = useState("")
  const [assignmentText, setAssignmentText] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const { toast } = useToast()
  const { user, getCourseworkData } = useUser()

  const courseworkData = getCourseworkData()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Submitting assignment:", { selectedDay, assignmentText, file })

    toast({
      title: "Assignment Submitted",
      description: "Your assignment has been submitted successfully.",
    })

    // Reset form
    setSelectedDay("")
    setAssignmentText("")
    setFile(null)
  }

  if (!courseworkData) {
    return <div>Loading coursework data...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Assignment</CardTitle>
        <CardDescription>Complete and submit your assignment for the selected day.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="day">Select Day</Label>
            <Select value={selectedDay} onValueChange={setSelectedDay}>
              <SelectTrigger id="day">
                <SelectValue placeholder="Select a day" />
              </SelectTrigger>
              <SelectContent>
                {courseworkData.coursework.map((day) => (
                  <SelectItem key={day.day} value={day.day.toString()}>
                    Day {day.day}: {day.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="assignment">Assignment Text</Label>
            <Textarea
              id="assignment"
              placeholder="Type your assignment here..."
              value={assignmentText}
              onChange={(e) => setAssignmentText(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
          <div>
            <Label htmlFor="file">Upload File (optional)</Label>
            <Input id="file" type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
          </div>
          <Button type="submit" disabled={!selectedDay || !assignmentText}>
            Submit Assignment
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

