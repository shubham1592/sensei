"use client"

import { useState, useRef } from "react"
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
<<<<<<< HEAD

// Coursework data from the JSON file
const courseworkData = {
  coursework: [
    {
      day: 1,
      title: "Introduction to Daily Ingestion",
      tasks: [
        {
          title: "Overview of Ingestion Types",
          description:
            "Learn about the different types of ingestion methods including incremental and full load. Understand how they impact data flow and storage in the data lake environment. We'll look at the regular, fastlane, and one-time truncation methods. This session will prepare you to identify when to use each ingestion method based on specific business needs.",
          steps: [
            "Watch a recorded video explaining ingestion types.",
            "Take notes on key terms: incremental, full load, regular, and fastlane.",
            "Participate in a discussion forum about use cases for each method.",
          ],
        },
      ],
      resources: [
        "https://www.databricks.com/learn/training/incremental-data-ingestion",
        "https://www.oracle.com/technical-resources/articles/misc/incremental-architecture.html",
      ],
      assignments: [
        {
          assignmentId: 1,
          isCompleted: false,
          task: "Write a summary of the different ingestion types and their use cases in data lakes.",
        },
      ],
      handsOnExercises: ["Create a simple diagram illustrating the different ingestion types and their flow."],
      assignmentQuiz: {
        questions: [
          {
            question: "What type of ingestion is performed every day?",
            options: ["Incremental", "Full Load", "Regular", "Fastlane"],
            correctAnswer: "Regular",
          },
          {
            question: "What does 'fastlane' ingestion refer to?",
            options: ["Daily Incremental", "Ad-hoc Truncation", "Scheduled fast ingestion", "Real-time Updates"],
            correctAnswer: "Scheduled fast ingestion",
          },
          {
            question: "Which ingestion type loads entire data?",
            options: ["Incremental", "Regular", "Full Load", "Fastlane"],
            correctAnswer: "Full Load",
          },
          {
            question: "Which ingestion type is discontinued and why?",
            options: ["Incremental", "Full Load", "Regular", "Fastlane"],
            correctAnswer: "Regular",
          },
          {
            question: "How often does fastlane ingestion occur?",
            options: ["Every hour", "Every 4 hours", "Every minute", "Once a day"],
            correctAnswer: "Every 4 hours",
          },
        ],
      },
    },
    {
      day: 2,
      title: "Understanding Recon and Reverse Stamping",
      tasks: [
        {
          title: "Recon Basics and Techniques",
          description:
            "Dive into reconciliation techniques including count and summation recon. Learn how these techniques ensure data accuracy and integrity. We will explore qualitative recon and the process of reverse stamping to rectify discrepancies. You will get hands-on with examples demonstrating how to implement these methods.",
          steps: [
            "Read documentation on reconciliation techniques.",
            "Review case studies on common reconciliation issues.",
            "Engage in a live Q&A session about reverse stamping.",
          ],
        },
      ],
      resources: [
        "https://www.datalake101.com/reconciliation-techniques",
        "https://www.oracle.com/reconciliation-strategies/",
      ],
      assignments: [
        {
          assignmentId: 2,
          isCompleted: false,
          task: "Perform a mini-recon exercise on sample data to identify discrepancies.",
        },
      ],
      handsOnExercises: ["Perform reverse stamping on a mock data set to practice correcting mismatches."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is count reconciliation used for?",
            options: ["Keying", "Data matching", "Counting rows", "Summation"],
            correctAnswer: "Counting rows",
          },
          {
            question: "What does summation reconciliation help verify?",
            options: ["Data quality", "Data integrity", "Data counting", "Data types"],
            correctAnswer: "Data integrity",
          },
          {
            question: "What is the role of reverse stamping?",
            options: ["Insert new records", "Delete records", "Update mismatched records", "Count records"],
            correctAnswer: "Update mismatched records",
          },
          {
            question: "Qualitative recon primarily checks for?",
            options: ["Count discrepancies", "Data accuracy", "Data type", "Data format"],
            correctAnswer: "Data accuracy",
          },
          {
            question: "Which method is used to correct genuine missed cases?",
            options: ["Count recon", "Summation recon", "Reverse stamping", "Qualitative recon"],
            correctAnswer: "Reverse stamping",
          },
        ],
      },
    },
    {
      day: 3,
      title: "Basic Architecture of Data Lake",
      tasks: [
        {
          title: "Components of Data Lake Architecture",
          description:
            "Explore the architecture of a data lake focusing on Oracle, Databricks, Azure Storage, and the role of RDDs and ADF. Understand how these components interact and support data ingestion, storage, and processing. Great for grasping how data lakes differ from traditional data warehouses.",
          steps: [
            "Watch an architecture overview video.",
            "Sketch a high-level diagram of data lake components.",
            "Participate in an interactive session to clarify complex terms.",
          ],
        },
      ],
      resources: [
        "https://www.databricks.com/blog/2020/09/15/architecture-for-data-lakes.html",
        "https://azure.microsoft.com/en-us/overview/what-is-a-data-lake/",
      ],
      assignments: [
        {
          assignmentId: 3,
          isCompleted: false,
          task: "Create an architecture diagram of the data lake using the tools discussed.",
        },
      ],
      handsOnExercises: ["Build a mock architecture diagram using online diagram tools."],
      assignmentQuiz: {
        questions: [
          {
            question: "Which tool is used for orchestrating data pipelines in Azure?",
            options: ["Databricks", "Azure Data Factory", "SQL Server", "Oracle"],
            correctAnswer: "Azure Data Factory",
          },
          {
            question: "What does 'RDD' stand for in the context of data lakes?",
            options: [
              "Resilient Distributed Dataset",
              "Real Data Distribution",
              "Rapid Data Development",
              "Recommended Data Division",
            ],
            correctAnswer: "Resilient Distributed Dataset",
          },
          {
            question: "Which storage system is commonly used for blob storage?",
            options: ["Oracle", "Ada", "Azure Storage", "Databricks"],
            correctAnswer: "Azure Storage",
          },
          {
            question: "Which of these is not a component of a data lake architecture?",
            options: ["Data Ingestion", "Data Processing", "Data Warehousing", "Data Storage"],
            correctAnswer: "Data Warehousing",
          },
          {
            question: "Where does data transformation typically occur in the data lake architecture?",
            options: ["During ingestion", "In data warehouse", "In Databricks", "At the source"],
            correctAnswer: "In Databricks",
          },
        ],
      },
    },
    {
      day: 4,
      title: "Monitoring Data Pipelines",
      tasks: [
        {
          title: "Monitoring ADF Pipelines and Databricks Jobs",
          description:
            "Learn how to effectively monitor the data pipelines in Azure Data Factory and Databricks. We'll cover logging, alerts, and insights into job performance that are crucial for maintaining data integrity. This session will emphasize best practices for troubleshooting and optimizing pipeline performance.",
          steps: [
            "Review monitoring documentation for ADF and Databricks.",
            "Set up a sample ADF pipeline and log its execution.",
            "Engage in a scenario-based exercise to troubleshoot a failed job.",
          ],
        },
      ],
      resources: [
        "https://docs.microsoft.com/en-us/azure/data-factory/monitor-activities",
        "https://docs.databricks.com/administration-guide/monitor.html",
      ],
      assignments: [
        {
          assignmentId: 4,
          isCompleted: false,
          task: "Create a monitoring report for a sample pipeline capturing key metrics.",
        },
      ],
      handsOnExercises: ["Implement an ADF pipeline and set up logging to track its execution."],
      assignmentQuiz: {
        questions: [
          {
            question: "What tool is primarily used for monitoring Azure Data Factory?",
            options: ["Databricks", "Datadog", "Azure Monitor", "Control Center"],
            correctAnswer: "Azure Monitor",
          },
          {
            question: "What does ADF stand for?",
            options: ["Azure Data Factory", "Active Data Framework", "Analytical Data Format", "Adaptive Data Fusion"],
            correctAnswer: "Azure Data Factory",
          },
          {
            question: "Which metric is not typically monitored in data pipelines?",
            options: ["Execution time", "Error rates", "Input size", "Data model"],
            correctAnswer: "Data model",
          },
          {
            question: "What functionality helps in debugging failed jobs in Databricks?",
            options: ["Job logs", "Execution plans", "Performance profiler", "Datastore"],
            correctAnswer: "Job logs",
          },
          {
            question: "Which of the following helps in alerting when a pipeline fails?",
            options: ["Alert rules", "Monitoring dashboards", "Execution history", "Data Catalog"],
            correctAnswer: "Alert rules",
          },
        ],
      },
    },
    {
      day: 5,
      title: "Table Onboarding Process",
      tasks: [
        {
          title: "Understanding Table Onboarding Workflow",
          description:
            "Focus on the complete onboarding process of tables, especially how to read data from Oracle using ADF, dump it into the landing zone, and further move it to the central zone with the addition of audit columns. Grasp the significance of each stage in the pipeline, including considerations for data integrity.",
          steps: [
            "Watch a tutorial on setting up ADF for table onboarding.",
            "Simulate the onboarding process using a mock dataset.",
            "Collaborate in a group to discuss potential challenges faced during onboarding.",
          ],
        },
      ],
      resources: [
        "https://techcommunity.microsoft.com/t5/azure-data-factory-blog/azure-data-factory-baking-data-into-your-pipelines/ba-p/3500742",
        "https://docs.microsoft.com/en-us/azure/data-factory/tutorial-copy-data-portal",
      ],
      assignments: [
        {
          assignmentId: 5,
          isCompleted: false,
          task: "Create a flowchart illustrating the table onboarding process.",
        },
      ],
      handsOnExercises: ["Perform onboarding of a dataset from Oracle to Azure using ADF."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the first step in the table onboarding process?",
            options: ["Data extraction", "Data loading", "Data transformation", "Data validation"],
            correctAnswer: "Data extraction",
          },
          {
            question: "Which zone do we dump data into first?",
            options: ["Landing Zone", "Central Zone", "Archive Zone", "Data Warehouse"],
            correctAnswer: "Landing Zone",
          },
          {
            question: "What is added during the transition to the central zone?",
            options: ["Data models", "Audit columns", "Indexes", "Constraints"],
            correctAnswer: "Audit columns",
          },
          {
            question: "What tool is primarily used for table onboarding from Oracle?",
            options: ["Databricks", "ADLS", "ADF", "SQL Server"],
            correctAnswer: "ADF",
          },
          {
            question: "What is essential for ensuring data integrity during onboarding?",
            options: ["Data size", "Validation scripts", "Database indexing", "User feedback"],
            correctAnswer: "Validation scripts",
          },
        ],
      },
    },
    {
      day: 6,
      title: "Understanding Important Pipelines",
      tasks: [
        {
          title: "Key Pipelines Overview",
          description:
            "Investigate the essential pipelines used within the data framework, focusing on key roles and performance checks associated with each. We will decipher how they function together and best practices for monitoring and optimizing their execution.",
          steps: [
            "Review documentation on the three most important pipelines.",
            "Set up logging for the pipelines and analyze their run history.",
            "Participate in a case study discussion of troubleshooting performance issues.",
          ],
        },
      ],
      resources: [
        "https://azure.microsoft.com/en-us/services/data-factory/pipeline/",
        "https://www.databricks.com/product/data-science-and-engineering",
      ],
      assignments: [
        {
          assignmentId: 6,
          isCompleted: false,
          task: "Draft a monitoring checklist for the three key pipelines.",
        },
      ],
      handsOnExercises: ["Create a mock pipeline and set up notifications for its monitoring."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the primary role of the pl_pennantrecon_load_sql pipeline?",
            options: ["Data extraction", "Data loading", "Data validation", "Quality batch processing"],
            correctAnswer: "Quality batch processing",
          },
          {
            question: "Which pipeline handles daily fastlane ingestion?",
            options: [
              "dev_pl_fastlane_recon_jobcluster_prod",
              "pl_master_fastlane_load_jobcluster_prod",
              "pl_pennantrecon_load_sql",
              "dev_pl_fastlane_load",
            ],
            correctAnswer: "pl_master_fastlane_load_jobcluster_prod",
          },
          {
            question: "What common issue must be monitored in a data pipeline?",
            options: ["Execution time", "Table size", "Data format", "User access"],
            correctAnswer: "Execution time",
          },
          {
            question: "What method is often used for debugging pipeline issues?",
            options: ["Logging errors", "Notification alerts", "User surveys", "Data preview"],
            correctAnswer: "Logging errors",
          },
          {
            question: "Which tool enables the orchestration of data workflows?",
            options: ["Databricks", "ADF", "Oracle SQL", "Power BI"],
            correctAnswer: "ADF",
          },
        ],
      },
    },
    {
      day: 7,
      title: "Tech Stack Overview",
      tasks: [
        {
          title: "Detailed Overview of Tech Stack",
          description:
            "Become familiar with the tools and technologies forming the backbone of our data processes. This includes understanding Databricks, Azure Storage, SQL Server, and the roles they fulfill within our data ecosystem. We'll also review important integrations that enhance functionalities across platforms.",
          steps: [
            "Attend a live session introducing the tech stack components.",
            "Collaborate with peers to summarize strengths and weaknesses of each tool.",
            "Draft a brief overview of how each technology integrates with others.",
          ],
        },
      ],
      resources: ["https://www.databricks.com/product", "https://azure.microsoft.com/en-us/products/storage/"],
      assignments: [
        {
          assignmentId: 7,
          isCompleted: false,
          task: "Create a tech stack matrix indicating how tools interact with each other.",
        },
      ],
      handsOnExercises: ["Experiment with different technologies to understand data flows."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the main function of Databricks?",
            options: ["Data storage", "Data orchestration", "Data processing", "Data visualization"],
            correctAnswer: "Data processing",
          },
          {
            question: "Which storage system is commonly used for blob storage?",
            options: ["Oracle", "Databricks", "Azure Storage", "SQL Server"],
            correctAnswer: "Azure Storage",
          },
          {
            question: "What does SQL Server primarily serve as?",
            options: [
              "Storage service",
              "Data lake service",
              "Broker service",
              "Relational database management system",
            ],
            correctAnswer: "Relational database management system",
          },
          {
            question: "Which of these tools is designed for data orchestration?",
            options: ["Databricks", "ADF", "Azure Storage", "Oracle"],
            correctAnswer: "ADF",
          },
          {
            question: "What is the purpose of integrating various tools in the tech stack?",
            options: ["Reduce costs", "Simplify data formats", "Enhance functionality", "Decrease storage needs"],
            correctAnswer: "Enhance functionality",
          },
        ],
      },
    },
    {
      day: 8,
      title: "Month End Recon Process",
      tasks: [
        {
          title: "Conducting Month-End Reconciliation",
          description:
            "In this final session, we'll delve into the critical processes involved in month-end reconciliation. This includes understanding why we conduct recon, tools used for count and summation analysis, and procedures established for ensuring accuracy. We will evaluate the importance of these processes for data integrity and audit readiness.",
          steps: [
            "Review existing month-end recon procedures.",
            "Work in groups to simulate a month-end recon for a specific dataset.",
            "Engage in a feedback session discussing potential improvements.",
          ],
        },
      ],
      resources: [
        "https://www.oracle.com/solutions/financial/month-end-reconciliation.html",
        "https://www.microsoft.com/en-us/microsoft-365/blog/2020/02/18/month-end-reconciliation-analysis/",
      ],
      assignments: [
        {
          assignmentId: 8,
          isCompleted: false,
          task: "Diagram the month-end reconciliation process including key steps.",
        },
      ],
      handsOnExercises: ["Perform practice recon for a selected month-end dataset."],
      assignmentQuiz: {
        questions: [
          {
            question: "Why do we perform month-end reconciliation?",
            options: ["Data maintenance", "Audit requirements", "Cost reduction", "Increased efficiency"],
            correctAnswer: "Audit requirements",
          },
          {
            question: "What type of recon is emphasized during month-end?",
            options: ["Qualitative", "Quantitative", "Count", "All types"],
            correctAnswer: "All types",
          },
          {
            question: "What analysis is central to month-end reconciliation?",
            options: ["Performance analysis", "Count and summation", "Data ingestion", "Data archival"],
            correctAnswer: "Count and summation",
          },
          {
            question: "Which tool is primarily used for month-end auditing?",
            options: ["Oracle SQL Developer", "ADF", "Power BI", "Databricks"],
            correctAnswer: "Oracle SQL Developer",
          },
          {
            question: "What aspect of pipeline monitoring is important for month-end recon?",
            options: ["Error rates", "Data volume", "Pipeline speed", "Execution logs"],
            correctAnswer: "Execution logs",
          },
        ],
      },
    },
  ],
}
=======
import { useUser } from "@/context/user-context"
>>>>>>> 553198d (added courseworks)

// Quiz component
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
  const fileInputRefs = useRef({})
  const { toast } = useToast()
<<<<<<< HEAD
=======
  const { user, getCourseworkData } = useUser()

  // Get the appropriate coursework data based on the user
  const courseworkData = getCourseworkData()
>>>>>>> 553198d (added courseworks)

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
    // Here you would typically send the data to your backend
    console.log(`Submitting assignment for day ${day}:`, {
      text: assignmentText[day] || "",
      file: uploadedFiles[day] || null,
    })

    // Show success message
    toast({
      title: "Assignment Submitted",
      description: `Your assignment for Day ${day} has been submitted successfully.`,
      variant: "success",
    })

    // Clear form
    setAssignmentText({
      ...assignmentText,
      [day]: "",
    })
    setUploadedFiles({
      ...uploadedFiles,
      [day]: null,
    })
  }

<<<<<<< HEAD
=======
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

>>>>>>> 553198d (added courseworks)
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Your Coursework</h2>
<<<<<<< HEAD
        <p className="text-muted-foreground">Day-wise knowledge transfer plan for Data Lake training</p>
=======
        <p className="text-muted-foreground">
          {user?.courseworkType === "cdp"
            ? "Day-wise knowledge transfer plan for Data Modelling and CDP"
            : user?.courseworkType === "goldengate"
              ? "Day-wise knowledge transfer plan for Goldengate Training"
              : "Day-wise knowledge transfer plan for Data Lake training"}
        </p>
>>>>>>> 553198d (added courseworks)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        <div className="md:border-r pr-6">
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
                <div className="flex justify-between items-center">
                  <CardTitle>
                    Day {day.day}: {day.title}
                  </CardTitle>
                  <Dialog open={quizOpen && currentQuiz?.day === day.day} onOpenChange={setQuizOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
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
<<<<<<< HEAD
                    {day.assignments.map((assignment, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`mt-0.5 ${assignment.isCompleted ? "text-green-500" : "text-amber-500"}`}>
                          {assignment.isCompleted ? (
=======
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
                      // Handle the case where assignments is an object instead of an array (for CDP or Goldengate coursework)
                      <li className="flex items-start gap-2">
                        <div className={`mt-0.5 ${day.assignments.isCompleted ? "text-green-500" : "text-amber-500"}`}>
                          {day.assignments.isCompleted ? (
>>>>>>> 553198d (added courseworks)
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <XCircle className="h-5 w-5" />
                          )}
                        </div>
                        <div>
<<<<<<< HEAD
                          <p className="font-medium">Assignment {assignment.assignmentId}</p>
                          <p className="text-muted-foreground">{assignment.task}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4 border rounded-md p-4 bg-muted/30">
                    <h4 className="font-medium">Submit Your Assignment</h4>

                    <Textarea
                      placeholder="Type your assignment response here..."
                      className="min-h-[120px]"
                      value={assignmentText[day.day] || ""}
                      onChange={(e) => handleTextChange(day.day, e.target.value)}
                    />

                    <div className="flex items-center gap-2">
                      <div className="relative">
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
                          className="flex items-center gap-2"
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
=======
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

                  <div className="flex items-center gap-2">
                    <div className="relative">
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
                        className="flex items-center gap-2"
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
>>>>>>> 553198d (added courseworks)
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

