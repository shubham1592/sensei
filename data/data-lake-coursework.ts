export const dataLakeCourseworkData = {
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

