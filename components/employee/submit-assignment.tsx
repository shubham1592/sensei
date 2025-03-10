"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FileUp, Loader2, Upload } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function SubmitAssignment() {
  const { toast } = useToast()
  const [selectedDay, setSelectedDay] = useState("")
  const [assignmentText, setAssignmentText] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedDay) {
      toast({
        title: "Error",
        description: "Please select a day for your assignment",
        variant: "destructive",
      })
      return
    }

    if (!assignmentText && !file) {
      toast({
        title: "Error",
        description: "Please provide either text or a file for your assignment",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Assignment Submitted",
        description: `Your assignment for Day ${selectedDay} has been submitted successfully.`,
      })
      setIsSubmitting(false)
      setSelectedDay("")
      setAssignmentText("")
      setFile(null)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Submit Assignment</h2>
        <p className="text-muted-foreground">Upload your completed assignments for review and feedback</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Assignment Submission</CardTitle>
            <CardDescription>Select the day and upload your assignment for grading</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="day">Select Day</Label>
              <Select value={selectedDay} onValueChange={setSelectedDay}>
                <SelectTrigger id="day">
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Day 1: Introduction to the Team and Tools</SelectItem>
                  <SelectItem value="2">Day 2: Core Technologies Overview</SelectItem>
                  <SelectItem value="3">Day 3: Project-Specific Knowledge</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="assignment">Assignment Text (Optional)</Label>
              <Textarea
                id="assignment"
                placeholder="Type your assignment here..."
                className="min-h-[150px]"
                value={assignmentText}
                onChange={(e) => setAssignmentText(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Upload File (Optional)</Label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("file")?.click()}
                  className="w-full"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {file ? file.name : "Choose file"}
                </Button>
                {file && (
                  <Button type="button" variant="ghost" size="sm" onClick={() => setFile(null)}>
                    Remove
                  </Button>
                )}
              </div>
              <input id="file" type="file" className="hidden" onChange={handleFileChange} />
              <p className="text-xs text-muted-foreground">Accepted file formats: .pdf, .doc, .docx, .zip, .txt</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <FileUp className="mr-2 h-4 w-4" />
                  Submit Assignment
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

