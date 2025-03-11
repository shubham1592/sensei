"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { FileText, LinkIcon, ClipboardCheck, CheckCircle2, XCircle, HelpCircle, Upload, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { useUser } from "@/context/user-context"

// Quiz component (unchanged)
const Quiz = ({ questions, onClose, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(""))
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answer
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate score
      let correctCount = 0
      questions.forEach((q, index) => {
        if (selectedAnswers[index] === q.correctAnswer) {
          correctCount++
        }
      })
      setScore(correctCount)
      setShowResults(true)

      // Call onComplete with the score
      onComplete(correctCount, questions.length)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  if (showResults) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Quiz Results</h3>
          <p className="text-lg mb-4">
            You scored <span className="font-bold text-primary">{score}</span> out of {questions.length}
          </p>

          <div className="mb-6">
            <Progress value={(score / questions.length) * 100} className="h-2" />
          </div>

          {score === questions.length ? (
            <div className="flex items-center justify-center text-green-500 mb-4">
              <CheckCircle2 className="mr-2 h-6 w-6" />
              <span className="text-lg font-medium">Perfect Score! Excellent work!</span>
            </div>
          ) : score >= questions.length * 0.7 ? (
            <div className="flex items-center justify-center text-green-500 mb-4">
              <CheckCircle2 className="mr-2 h-6 w-6" />
              <span className="text-lg font-medium">Great job! You passed the quiz.</span>
            </div>
          ) : (
            <div className="flex items-center justify-center text-amber-500 mb-4">
              <HelpCircle className="mr-2 h-6 w-6" />
              <span className="text-lg font-medium">You might want to review the material again.</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Review Your Answers:</h4>
          {questions.map((q, index) => (
            <div key={index} className="p-4 border rounded-md">
              <p className="font-medium mb-2">
                {index + 1}. {q.question}
              </p>
              <p className="mb-1">
                Your answer:{" "}
                <span
                  className={
                    selectedAnswers[index] === q.correctAnswer
                      ? "text-green-500 font-medium"
                      : "text-red-500 font-medium"
                  }
                >
                  {selectedAnswers[index]}
                </span>
              </p>
              {selectedAnswers[index] !== q.correctAnswer && (
                <p className="text-green-500">
                  Correct answer: <span className="font-medium">{q.correctAnswer}</span>
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">
          Question {currentQuestion + 1} of {questions.length}
        </h3>
        <Badge variant="outline">{Math.round((currentQuestion / questions.length) * 100)}% Complete</Badge>
      </div>

      <div className="mb-4">
        <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
      </div>

      <div className="p-4 border rounded-md bg-muted/30">
        <p className="text-lg font-medium mb-6">{question.question}</p>

        <RadioGroup value={selectedAnswers[currentQuestion]} onValueChange={handleAnswerSelect} className="space-y-3">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={!selectedAnswers[currentQuestion]}>
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  )
}

export function ViewCoursework() {
  const [expandedDay, setExpandedDay] = useState<string>("day-0")
  const [quizOpen, setQuizOpen] = useState(false)
  const [currentQuiz, setCurrentQuiz] = useState(null)
  const [quizResults, setQuizResults] = useState({})
  const [uploadedFiles, setUploadedFiles] = useState({})
  const [assignmentText, setAssignmentText] = useState({})
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
  const fileInputRefs = useRef({})
  const { toast } = useToast()
  const { user, getCourseworkData } = useUser()

  // Get the appropriate coursework data based on the user
  const courseworkData = getCourseworkData()

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleQuizComplete = (day, score, total) => {
    setQuizResults({
      ...quizResults,
      [day]: { score, total, completed: true },
    })
  }

  const startQuiz = (day, quiz) => {
    setCurrentQuiz({ day, quiz })
    setQuizOpen(true)
  }

  const handleFileChange = (day, e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFiles({
        ...uploadedFiles,
        [day]: e.target.files[0],
      })
    }
  }

  const handleTextChange = (day, text) => {
    setAssignmentText({
      ...assignmentText,
      [day]: text,
    })
  }

  const handleSubmitAssignment = (day) => {
    console.log(`Submitting assignment for day ${day}:`, {
      text: assignmentText[day] || "",
      file: uploadedFiles[day] || null,
    })

    toast({
      title: "Assignment Submitted",
      description: `Your assignment for Day ${day} has been submitted successfully.`,
      variant: "success",
    })

    setAssignmentText({
      ...assignmentText,
      [day]: "",
    })
    setUploadedFiles({
      ...uploadedFiles,
      [day]: null,
    })
  }

  if (!courseworkData) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Loading coursework data...</p>
      </div>
    )
  }

  const courseTitle =
    user.courseworkType === "cdp"
      ? "Data Modelling and CDP Mastery"
      : user.courseworkType === "goldengate"
        ? "Goldengate Training"
        : "Data Lake Training"

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Your Coursework</h2>
        <p className="text-muted-foreground">
          {user?.courseworkType === "cdp"
            ? "Day-wise knowledge transfer plan for Data Modelling and CDP"
            : user?.courseworkType === "goldengate"
              ? "Day-wise knowledge transfer plan for Goldengate Training"
              : "Day-wise knowledge transfer plan for Data Lake training"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
        <div className="lg:border-r pr-6">
          <h3 className="font-medium mb-4">Day-wise Plan</h3>
          <div className="space-y-1">
            {courseworkData.coursework.map((day, index) => (
              <Button
                key={index}
                variant={expandedDay === `day-${index}` ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setExpandedDay(`day-${index}`)}
              >
                <FileText className="mr-2 h-4 w-4" />
                <span>Day {day.day}</span>
                {quizResults[day.day]?.completed && (
                  <Badge variant="outline" className="ml-auto">
                    {quizResults[day.day].score}/{quizResults[day.day].total}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {courseworkData.coursework.map((day, index) => (
            <Card key={index} className={expandedDay === `day-${index}` ? "block" : "hidden"}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle>
                    Day {day.day}: {day.title}
                  </CardTitle>
                  <Dialog open={quizOpen && currentQuiz?.day === day.day} onOpenChange={setQuizOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => startQuiz(day.day, day.assignmentQuiz)}
                      >
                        <ClipboardCheck className="h-4 w-4" />
                        Attempt Quiz
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          Day {day.day} Quiz: {day.title}
                        </DialogTitle>
                        <DialogDescription>
                          Test your knowledge of the concepts covered in this day's material.
                        </DialogDescription>
                      </DialogHeader>
                      {currentQuiz && (
                        <Quiz
                          questions={currentQuiz.quiz.questions}
                          onClose={() => setQuizOpen(false)}
                          onComplete={(score, total) => handleQuizComplete(day.day, score, total)}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {day.tasks.map((task, taskIndex) => (
                  <div key={taskIndex}>
                    <h3 className="font-semibold text-lg mb-2">{task.title}</h3>
                    <p className="mb-4">{task.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Steps:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {task.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <div>
                  <h3 className="font-semibold text-lg mb-2">Resources</h3>
                  <ul className="space-y-2">
                    {day.resources.map((resource, i) => (
                      <li key={i} className="flex items-center">
                        <LinkIcon className="h-4 w-4 mr-2 text-primary" />
                        <a href={resource} className="text-primary hover:underline break-all">
                          {resource}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-2">Assignments</h3>
                  <ul className="space-y-2 mb-4">
                    {Array.isArray(day.assignments) ? (
                      day.assignments.map((assignment, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className={`mt-0.5 ${assignment.isCompleted ? "text-green-500" : "text-amber-500"}`}>
                            {assignment.isCompleted ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : (
                              <XCircle className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">Assignment {assignment.assignmentId}</p>
                            <p className="text-muted-foreground">{assignment.task || assignment.details}</p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-2">
                        <div className={`mt-0.5 ${day.assignments.isCompleted ? "text-green-500" : "text-amber-500"}`}>
                          {day.assignments.isCompleted ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <XCircle className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">Assignment {day.assignments.assignmentId}</p>
                          <p className="text-muted-foreground">{day.assignments.task || day.assignments.details}</p>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="space-y-4 border rounded-md p-4 bg-muted/30">
                  <h4 className="font-medium">Submit Your Assignment</h4>

                  <Textarea
                    placeholder="Type your assignment response here..."
                    className="min-h-[120px]"
                    value={assignmentText[day.day] || ""}
                    onChange={(e) => handleTextChange(day.day, e.target.value)}
                  />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <div className="relative w-full sm:w-auto">
                      <input
                        type="file"
                        id={`file-upload-day-${day.day}`}
                        className="sr-only"
                        accept=".doc,.docx,.pdf,.txt,.png,.jpg,.jpeg"
                        onChange={(e) => handleFileChange(day.day, e)}
                        ref={(el) => (fileInputRefs.current[day.day] = el)}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 w-full sm:w-auto"
                        onClick={() => fileInputRefs.current[day.day].click()}
                      >
                        <Upload className="h-4 w-4" />
                        {uploadedFiles[day.day] ? uploadedFiles[day.day].name : "Upload File"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: .doc, .docx, .pdf, .txt, .png, .jpg, .jpeg
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <Button
                    className="w-full sm:w-auto flex items-center gap-2"
                    onClick={() => handleSubmitAssignment(day.day)}
                    disabled={!assignmentText[day.day] && !uploadedFiles[day.day]}
                  >
                    <Send className="h-4 w-4" />
                    Submit Assignment
                  </Button>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Hands-On Exercises</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {day.handsOnExercises.map((exercise, i) => (
                      <li key={i}>{exercise}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

