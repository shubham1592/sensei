"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Upload } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function GenerateCoursework() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    role: "",
    skillLevel: "",
    teamName: "",
    technologies: "",
    duration: "",
    projects: "",
    additionalInfo: "",
  })
  const [file, setFile] = useState<File | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.employeeName || !formData.employeeId || !formData.role) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Coursework Generated",
        description: `Training plan for ${formData.employeeName} has been created successfully.`,
      })
      setIsSubmitting(false)

      // Reset form
      setFormData({
        employeeName: "",
        employeeId: "",
        role: "",
        skillLevel: "",
        teamName: "",
        technologies: "",
        duration: "",
        projects: "",
        additionalInfo: "",
      })
      setFile(null)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Generate New Coursework</h2>
        <p className="text-muted-foreground">Create customized training plans for new team members</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>New Training Plan</CardTitle>
            <CardDescription>Fill in the details to generate a personalized knowledge transfer plan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="employeeName">Employee Name *</Label>
                <Input
                  id="employeeName"
                  name="employeeName"
                  placeholder="Full name"
                  value={formData.employeeName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employeeId">Employee ID *</Label>
                <Input
                  id="employeeId"
                  name="employeeId"
                  placeholder="Employee ID number"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role/Position *</Label>
                <Input
                  id="role"
                  name="role"
                  placeholder="Job title"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skillLevel">Skill Level *</Label>
                <Select value={formData.skillLevel} onValueChange={(value) => handleSelectChange("skillLevel", value)}>
                  <SelectTrigger id="skillLevel">
                    <SelectValue placeholder="Select skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fresher">Fresher</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  id="teamName"
                  name="teamName"
                  placeholder="Department or team"
                  value={formData.teamName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="technologies">Technologies Required</Label>
                <Input
                  id="technologies"
                  name="technologies"
                  placeholder="e.g., React, Node.js, SQL"
                  value={formData.technologies}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">KT Duration (in weeks)</Label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  min="1"
                  placeholder="Number of weeks"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projects">Key Projects/Systems</Label>
                <Input
                  id="projects"
                  name="projects"
                  placeholder="Main projects to cover"
                  value={formData.projects}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Any specific requirements or focus areas"
                className="min-h-[100px]"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="material">Upload Relevant Material</Label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("material")?.click()}
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
              <input id="material" type="file" className="hidden" onChange={handleFileChange} />
              <p className="text-xs text-muted-foreground">
                Upload documentation, guides, or any reference material (PDF, DOCX, PPT)
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Coursework...
                </>
              ) : (
                "Generate Coursework"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

