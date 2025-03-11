export const cdpCourseworkData = {
  coursework: [
    {
      day: 1,
      title: "Introduction to Data Modelling",
      tasks: [
        {
          title: "Understanding Data Modelling",
          description:
            "Learn the importance of data modelling in organizing customer data. Explore how proper naming conventions help in effective data management and analysis. Discuss the consequences of poorly defined data structures.",
          steps: [
            "Read introductory materials on data modelling.",
            "Watch a video that explains the concepts of consistency and naming principles.",
            "Participate in discussions to clarify common misconceptions.",
          ],
        },
      ],
      resources: [
        "https://www.datamodeling101.com",
        "https://www.dataeducation.com/tutorials/the-importance-of-data-modelling",
      ],
      assignments: [
        {
          assignmentId: 1,
          isCompleted: false,
          task: "Write a short essay on the importance of proper data naming conventions in data modelling.",
        },
      ],
      handsOnExercises: ["Create a simple data model using a tool like Lucidchart, focusing on naming conventions."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is data modelling?",
            options: ["Organizing data", "Deleting data", "Storing data", "Tracking data"],
            correctAnswer: "Organizing data",
          },
          {
            question: "Why are naming conventions important?",
            options: ["To confuse users", "For effective data management", "To simplify processes", "To enhance speed"],
            correctAnswer: "For effective data management",
          },
          {
            question: "What happens to columns with no proper naming?",
            options: ["They are ignored", "They are kept as is", "They are modified", "They are deleted"],
            correctAnswer: "They are ignored",
          },
          {
            question: "What is a key consequence of poor data structure?",
            options: [
              "Faster retrieval",
              "Better data visualization",
              "Inefficient data handling",
              "Increased storage needs",
            ],
            correctAnswer: "Inefficient data handling",
          },
          {
            question: "When is data considered outdated for modelling?",
            options: ["More than 3 months old", "More than 6 months old", "Over 6 months old", "Never outdated"],
            correctAnswer: "More than 3 months old",
          },
        ],
      },
    },
    {
      day: 2,
      title: "Data Dictionary and Horizontal Tables",
      tasks: [
        {
          title: "Exploring the Data Dictionary",
          description:
            "Gain insight into the data dictionary, focusing on horizontal tables. Analyze common columns used across businesses and their relevance for creating a unified data model.",
          steps: [
            "Review the data dictionary provided in the resources.",
            "Identify key columns that are used in horizontal data collections.",
            "Discuss the significance of horizontal tables in segmentation.",
          ],
        },
      ],
      resources: ["https://www.data-dictionary.com", "https://www.horizontal-tables-explained.com"],
      assignments: [
        {
          assignmentId: 2,
          isCompleted: false,
          task: "Identify and list 5 common columns in horizontal tables and explain their significance.",
        },
      ],
      handsOnExercises: ["Map a given business scenario with horizontal tables and their components."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the purpose of a data dictionary?",
            options: [
              "To store personal data",
              "To manage customer profiles",
              "To provide metadata definitions",
              "To delete obsolete data",
            ],
            correctAnswer: "To provide metadata definitions",
          },
          {
            question: "What are horizontal tables?",
            options: ["Singular tables", "Common attribute tables", "Data processing tables", "Data storage tables"],
            correctAnswer: "Common attribute tables",
          },
          {
            question: "How do horizontal tables benefit businesses?",
            options: ["Increased complexity", "Unified data view", "Multiple data sources", "Data redundancy"],
            correctAnswer: "Unified data view",
          },
          {
            question: "What is a common use for columns in horizontal tables?",
            options: ["To create uniqueness", "For segmentation purposes", "For archiving", "For data deletion"],
            correctAnswer: "For segmentation purposes",
          },
          {
            question: "Why are horizontal tables crucial for businesses?",
            options: [
              "They increase data size",
              "They simplify data dependencies",
              "They reduce system performance",
              "They are not important",
            ],
            correctAnswer: "They simplify data dependencies",
          },
        ],
      },
    },
    {
      day: 3,
      title: "Data Stream Management",
      tasks: [
        {
          title: "Understanding Data Streams",
          description:
            "Learn how to manage and maintain data streams effectively. This session emphasizes monitoring refresh history, primary keys, column names, and data types.",
          steps: [
            "Explore the data stream management interface.",
            "Simulate checking refresh histories for existing tables.",
            "Understand the importance of proper naming conventions in data streams.",
          ],
        },
      ],
      resources: ["https://www.datastream-management.com", "https://www.data-refresh-strategies.com"],
      assignments: [
        {
          assignmentId: 3,
          isCompleted: false,
          task: "Create a report evaluating a given data stream and suggest improvements.",
        },
      ],
      handsOnExercises: ["Use a mock data stream and analyze its attributes via a simulated application."],
      assignmentQuiz: {
        questions: [
          {
            question: "What does a data stream provide?",
            options: ["Raw data", "Processed data", "Metadata", "Historical data"],
            correctAnswer: "Metadata",
          },
          {
            question: "What is a primary key?",
            options: ["The first column", "Unique identifier for rows", "A random column", "Column for delete action"],
            correctAnswer: "Unique identifier for rows",
          },
          {
            question: "What should you check to determine if a table has refreshed?",
            options: ["Analyze user logs", "Inspect refresh history", "Count the columns", "Edit table contents"],
            correctAnswer: "Inspect refresh history",
          },
          {
            question: "What happens to data streams inactive for 30 days?",
            options: ["They are archived", "They are deleted", "They are refreshed", "They are highlighted"],
            correctAnswer: "They are deleted",
          },
          {
            question: "Which detail is crucial for managing a data stream?",
            options: ["Data type", "User ID", "Creation date", "Source link"],
            correctAnswer: "Data type",
          },
        ],
      },
    },
    {
      day: 4,
      title: "Creating and Activating Segments",
      tasks: [
        {
          title: "Segment Creation Process",
          description:
            "This lesson covers the end-to-end process of creating a customer segment. Learn how to add attributes, use filters, and publish segments effectively.",
          steps: [
            "Access the segmentation tool in the system.",
            "Practice creating a segment by following guided steps.",
            "Learn the significance of adding filters and attributes.",
          ],
        },
      ],
      resources: ["https://www.segment-creation.com", "https://www.behavioral-segmentation-strategies.com"],
      assignments: [
        {
          assignmentId: 4,
          isCompleted: false,
          task: "Create a segment based on a hypothetical data set and explain your attribute selections.",
        },
      ],
      handsOnExercises: ["Simulate segment creation using predefined criteria and filters."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the first step in creating a segment?",
            options: ["Add filters", "Select attributes", "Define the segment type", "Open the segmentation tool"],
            correctAnswer: "Open the segmentation tool",
          },
          {
            question: "Why are filters used in segment creation?",
            options: [
              "To complicate processes",
              "To refine data",
              "To delete irrelevant segments",
              "To increase data storage",
            ],
            correctAnswer: "To refine data",
          },
          {
            question: "What must be done after selecting attributes?",
            options: ["Your work is done", "Add filters", "Refresh the stream", "Connect to data lake"],
            correctAnswer: "Add filters",
          },
          {
            question: "What is a static attribute in segmentation?",
            options: ["Dynamic data", "Predefined values", "Random values", "Self-updating data"],
            correctAnswer: "Predefined values",
          },
          {
            question: "What happens to a segment after it is published?",
            options: ["It is deleted", "It becomes active", "It is analyzed", "It is ignored"],
            correctAnswer: "It becomes active",
          },
        ],
      },
    },
    {
      day: 5,
      title: "IT Support and Issue Resolution Process",
      tasks: [
        {
          title: "Raising IT Support Tickets",
          description:
            "Familiarize yourself with the process of raising IT support tickets for issues pertaining to data modelling and segment activation. Understand the required information and workflow.",
          steps: [
            "Navigate to Azure DevOps and locate the IT requests option.",
            "Fill out a practice IT support ticket with a sample issue.",
            "Review common issues faced by users and how they are mitigated.",
          ],
        },
      ],
      resources: ["https://www.azuredevops.com/support-tickets", "https://www.itsupportguide.com"],
      assignments: [
        {
          assignmentId: 5,
          isCompleted: false,
          task: "Draft an IT ticket for a hypothetical issue and include all essential details.",
        },
      ],
      handsOnExercises: ["Simulate the process of raising an IT ticket using a mock system."],
      assignmentQuiz: {
        questions: [
          {
            question: "Where do you go to raise an IT ticket?",
            options: ["Salesforce", "Azure DevOps", "Data Lake", "Segment Tool"],
            correctAnswer: "Azure DevOps",
          },
          {
            question: "What is the first field to fill out in the IT support form?",
            options: ["Description", "Request Category", "Entry Title", "Group"],
            correctAnswer: "Entry Title",
          },
          {
            question: "What should you select under 'Request Category'?",
            options: ["IT issues", "Financial queries", "HR requests", "General inquiries"],
            correctAnswer: "IT issues",
          },
          {
            question: "What is the next step after filling out the IT ticket details?",
            options: ["Save & Close", "Log out", "Refresh system", "Delete ticket"],
            correctAnswer: "Save & Close",
          },
          {
            question: "After saving the IT ticket, who resolves the issue?",
            options: ["IT team", "Your manager", "Automated system", "External vendors"],
            correctAnswer: "IT team",
          },
        ],
      },
    },
    {
      day: 6,
      title: "Table Onboarding Process",
      tasks: [
        {
          title: "Understanding Table Onboarding",
          description:
            "This session guides users through the proper onboarding process for tables in the data lake. Focus on requirements and necessary documentation.",
          steps: [
            "Identify the prerequisites for table onboarding.",
            "Practice filling out a user story for table onboarding in the SFDC CDP.",
            "Discuss the significance of the primary key and data source.",
          ],
        },
      ],
      resources: ["https://www.tableonboarding.com", "https://www.sfdcguide.com"],
      assignments: [
        {
          assignmentId: 6,
          isCompleted: false,
          task: "Document the onboarding requirements for a sample table including source and key details.",
        },
      ],
      handsOnExercises: ["Complete a mock onboarding process using a provided scenario."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the first step in the table onboarding process?",
            options: ["Fill out a user story", "Provide requirements", "Select a team", "Define attributes"],
            correctAnswer: "Provide requirements",
          },
          {
            question: "Which document is essential for table onboarding?",
            options: ["User story", "IT ticket", "Data stream report", "Data dictionary"],
            correctAnswer: "User story",
          },
          {
            question: "What is crucial to specify during onboarding?",
            options: ["Data refresh time", "Primary key", "User ID", "Database size"],
            correctAnswer: "Primary key",
          },
          {
            question: "How many months of data do we keep?",
            options: ["1 month", "3 months", "6 months", "12 months"],
            correctAnswer: "3 months",
          },
          {
            question: "What happens to tables without segments for 30 days?",
            options: ["They are archived", "They are monitored", "They are deleted", "They are auto-updated"],
            correctAnswer: "They are deleted",
          },
        ],
      },
    },
    {
      day: 7,
      title: "Advanced Segment Activation Techniques",
      tasks: [
        {
          title: "Deep Dive into Segment Activation",
          description:
            "Explore advanced techniques for segment activation. Learn how to leverage filtering, static attributes, and optimization strategies for better results.",
          steps: [
            "Review examples of segments with optimal activation.",
            "Experiment with filters and static attributes in practice sessions.",
            "Assess the implications of choosing the right attributes for activation.",
          ],
        },
      ],
      resources: ["https://www.advanced-segmentation.com", "https://www.activation-strategies.com"],
      assignments: [
        {
          assignmentId: 7,
          isCompleted: false,
          task: "Create a well-structured activation plan for a given segment and justify your attribute choices.",
        },
      ],
      handsOnExercises: ["Tailor an activation strategy for a predetermined set of customer attributes."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the role of filters in segment activation?",
            options: [
              "Enhance complexity",
              "Refine the target audience",
              "Delete unnecessary data",
              "Ignore irrelevant attributes",
            ],
            correctAnswer: "Refine the target audience",
          },
          {
            question: "Static attributes are used to?",
            options: ["Change data dynamically", "Provide consistency", "Add complexity", "Delete existing attributes"],
            correctAnswer: "Provide consistency",
          },
          {
            question: "Why is attribute selection important?",
            options: [
              "It determines data retention",
              "It drives segmentation accuracy",
              "It increases data redundancy",
              "It limits user queries",
            ],
            correctAnswer: "It drives segmentation accuracy",
          },
          {
            question: "What's an important aspect of segment optimization?",
            options: [
              "Overloading with attributes",
              "Filtering appropriately",
              "Decreasing data volume",
              "Exceeding user limits",
            ],
            correctAnswer: "Filtering appropriately",
          },
          {
            question: "Which method helps in effective segment activation?",
            options: [
              "Ignoring user feedback",
              "Using broad filters",
              "Analyzing previous performances",
              "Increasing data entry",
            ],
            correctAnswer: "Analyzing previous performances",
          },
        ],
      },
    },
    {
      day: 8,
      title: "Review and Practical Application",
      tasks: [
        {
          title: "Course Review and Application",
          description:
            "In the final session, review all topics covered in the course. Engage in practical simulations to cement your understanding and troubleshoot common scenarios.",
          steps: [
            "Participate in group discussions summarizing each day's learnings.",
            "Use mock data sets to practice segment creation and activation.",
            "Share insights and solutions regarding common data modelling challenges.",
          ],
        },
      ],
      resources: ["https://www.data-challenges.com", "https://www.mock-cases.com"],
      assignments: [
        {
          assignmentId: 8,
          isCompleted: false,
          task: "Participate in a group project where you create and activate a segment based on provided data.",
        },
      ],
      handsOnExercises: ["Conduct a comprehensive segment activation process using a deployed application."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the best practice for reviewing course content?",
            options: ["Individual study", "Group discussions", "Ignoring materials", "Memorization"],
            correctAnswer: "Group discussions",
          },
          {
            question: "Why is practical application essential to learning?",
            options: [
              "Theoretical knowledge is enough",
              "Practical skills build confidence",
              "It complicates processes",
              "It's irrelevant",
            ],
            correctAnswer: "Practical skills build confidence",
          },
          {
            question: "What's a common challenge in data modelling?",
            options: [
              "Easy identification of key fields",
              "Overly complex data structures",
              "Simple attribute management",
              "Fast data access",
            ],
            correctAnswer: "Overly complex data structures",
          },
          {
            question: "What should you document during segment activation?",
            options: [
              "Just the filters",
              "All attribute choices and filters",
              "Only user feedback",
              "No documentation needed",
            ],
            correctAnswer: "All attribute choices and filters",
          },
          {
            question: "A successful data project relies on?",
            options: ["Assumptions", "Failures", "Collaboration", "Individual effort"],
            correctAnswer: "Collaboration",
          },
        ],
      },
    },
  ],
}

