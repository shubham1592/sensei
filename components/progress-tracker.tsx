"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Search, Loader2, Calendar, CheckCircle2, XCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { employeeProgressData } from "@/data/employee-progress"

export function ProgressTracker() {
  const { toast } = useToast()
  const [employeeId, setEmployeeId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [employeeData, setEmployeeData] = useState(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!employeeId) {
      toast({
        title: "Error",
        description: "Please select an employee ID",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const data = employeeProgressData[employeeId]
      if (data) {
        setEmployeeData(data)
        toast({
          title: "Employee Found",
          description: `Displaying progress for ${data.name}`,
        })
      } else {
        toast({
          title: "Employee Not Found",
          description: "No data found for the provided employee ID",
          variant: "destructive",
        })
        setEmployeeData(null)
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Progress Tracker</h2>
        <p className="text-muted-foreground">Monitor employee progress through their knowledge transfer plan</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employee Progress</CardTitle>
          <CardDescription>Select an employee ID to view their training progress</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex flex-col gap-4 mb-6">
            <div className="flex-1">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Select value={employeeId} onValueChange={setEmployeeId}>
                <SelectTrigger id="employeeId" className="w-full">
                  <SelectValue placeholder="Select employee ID" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EMP001">EMP001 - Test User (Data Lake)</SelectItem>
                  <SelectItem value="EMP002">EMP002 - Test User 2 (CDP)</SelectItem>
                  <SelectItem value="EMP003">EMP003 - Test User 3 (Goldengate)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Search className="h-4 w-4 mr-2" />}
              View Progress
            </Button>
          </form>

          {employeeData ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Employee Details</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="font-medium text-muted-foreground">Name:</dt>
                      <dd>{employeeData.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-muted-foreground">ID:</dt>
                      <dd>{employeeData.id}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-muted-foreground">Email:</dt>
                      <dd>{employeeData.email}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-muted-foreground">Role:</dt>
                      <dd>{employeeData.role}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-muted-foreground">Team:</dt>
                      <dd>{employeeData.team}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium text-muted-foreground">Training Type:</dt>
                      <dd className="capitalize">{employeeData.courseworkType.replace("-", " ")}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Training Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Overall Progress</span>
                        <span className="text-sm font-medium">{employeeData.progress}%</span>
                      </div>
                      <Progress value={employeeData.progress} className="h-2" />
                    </div>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="font-medium text-muted-foreground flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Start Date:
                        </dt>
                        <dd>{new Date(employeeData.startDate).toLocaleDateString()}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-muted-foreground flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          End Date:
                        </dt>
                        <dd>{new Date(employeeData.endDate).toLocaleDateString()}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-muted-foreground">Days Completed:</dt>
                        <dd>{employeeData.daysCompleted}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-muted-foreground">Days Remaining:</dt>
                        <dd>{employeeData.daysRemaining}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Assignment Progress</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Day</TableHead>
                      <TableHead>Assignment</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead className="hidden md:table-cell">Feedback</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeData.assignments.map((assignment) => (
                      <TableRow key={assignment.day}>
                        <TableCell>{assignment.day}</TableCell>
                        <TableCell>{assignment.title}</TableCell>
                        <TableCell>
                          {assignment.status === "completed" ? (
                            <div className="flex items-center text-green-600">
                              <CheckCircle2 className="h-4 w-4 mr-1" />
                              <span>Completed</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-amber-600">
                              <XCircle className="h-4 w-4 mr-1" />
                              <span>Pending</span>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{assignment.grade}</TableCell>
                        <TableCell className="hidden md:table-cell">{assignment.feedback || "-"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No Employee Selected</h3>
              <p className="text-muted-foreground mt-2">Select an employee ID to view their progress</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

