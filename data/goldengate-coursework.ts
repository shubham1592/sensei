export const goldengateCourseworkData = {
  coursework: [
    {
      day: 1,
      title: "Whitelisting Goldengate VM",
      tasks: [
        {
          title: "Understanding Whitelisting",
          description:
            "Learn about the importance of whitelisting in data replication. Understand how it secures server communications by allowing only specified IP addresses to connect with databases like production, HA, and DR dedupe environments.",
          steps: [
            "Research the concept of whitelisting in network security.",
            "Review the IP addresses provided for the Goldengate VM.",
            "Understand the implications of not whitelisting the VM.",
          ],
        },
        {
          title: "Setting Up Whitelisting for Goldengate VM",
          description:
            "Implement the whitelisting procedure by allowing the Goldengate VM IP addresses in the necessary databases. This activity ensures secure access and communication.",
          steps: [
            "Access the database management tools or console.",
            "Enter the commands to whitelist the specified IP addresses.",
            "Verify that the changes have taken effect.",
          ],
        },
      ],
      resources: [
        "https://docs.oracle.com/en/middleware/fusion-middleware/goldengate/19.1/quickstart-guide.html",
        "https://www.oracle.com/goldengate/",
        "https://docs.oracle.com/en/database/oracle/oracle-data-guard/19.1/dgbks/introduction-to-oracle-data-guard.html",
      ],
      assignments: [
        {
          assignmentId: 1,
          isCompleted: false,
          task: "Create a document outlining the whitelisting process along with the necessary IP addresses and security implications.",
        },
      ],
      handsOnExercises: ["Implement the whitelisting for Goldengate VM on a test environment."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the primary purpose of whitelisting?",
            options: [
              "To enhance database speed",
              "To secure server communications",
              "To allow all IP addresses",
              "To streamline database access",
            ],
            correctAnswer: "To secure server communications",
          },
          {
            question: "Which IP ranges were specified for whitelisting?",
            options: [
              "10.128.80.23 and 10.128.80.25",
              "10.128.80.10 and 10.128.80.20",
              "10.130.80.100 and 10.130.80.200",
              "10.128.80.50 and 10.128.80.80",
            ],
            correctAnswer: "10.128.80.23 and 10.128.80.25",
          },
          {
            question: "What should be understood prior to whitelisting?",
            options: [
              "Database performance metrics",
              "Network security concepts",
              "User access levels",
              "Data replication types",
            ],
            correctAnswer: "Network security concepts",
          },
          {
            question: "Why is whitelisting important for disaster recovery?",
            options: [
              "It speeds up data retrieval.",
              "It reduces data loss risk.",
              "It prevents unauthorized access.",
              "It ensures data consistency.",
            ],
            correctAnswer: "It prevents unauthorized access.",
          },
          {
            question: "Which database environments need the Goldengate VM whitelisted?",
            options: ["Development and testing", "Production, HA, and DR", "User acceptance testing", "None"],
            correctAnswer: "Production, HA, and DR",
          },
        ],
      },
    },
    {
      day: 2,
      title: "Creating Goldengate User",
      tasks: [
        {
          title: "Understanding the Goldengate User Creation",
          description:
            "Gain knowledge about the process of creating a Goldengate user in database environments. Understand the importance of appropriate privileges and user configuration.",
          steps: [
            "Research user management in Oracle databases.",
            "Understand the privileges necessary for the Goldengate user.",
            "Review security implications of user permissions.",
          ],
        },
        {
          title: "Creating the Goldengate User",
          description:
            "Execute SQL commands to create the Goldengate user (ggs_user) with the required permissions. Ensure that the user is properly configured in production, HA, and DR environments.",
          steps: [
            "Access the Oracle database console.",
            "Run the SQL command to create the Goldengate user.",
            "Grant the necessary privileges to the user.",
          ],
        },
      ],
      resources: [
        "https://docs.oracle.com/en/middleware/fusion-middleware/goldengate/19.1/quickstart-guide.html",
        "https://www.oracle.com/goldengate/",
        "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html",
      ],
      assignments: [
        {
          assignmentId: 2,
          isCompleted: false,
          task: "Create a step-by-step guide for creating users in Oracle databases, including necessary SQL commands and privileges.",
        },
      ],
      handsOnExercises: ["Create a test Goldengate user in a practice environment."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the Goldengate user's name?",
            options: ["goldengate_user", "ggs_user", "data_replicator", "admin_user"],
            correctAnswer: "ggs_user",
          },
          {
            question: "What privilege is NOT needed for the Goldengate user?",
            options: ["flashback any table", "select any transaction", "alter any table", "create database"],
            correctAnswer: "create database",
          },
          {
            question: "Where is Goldengate user created?",
            options: ["In a text file", "In a command line tool", "In the database console", "In the UI dashboard"],
            correctAnswer: "In the database console",
          },
          {
            question: "Which command is used to create a user in Oracle?",
            options: ["CREATE USER", "ADD USER", "MAKE USER", "USER CREATE"],
            correctAnswer: "CREATE USER",
          },
          {
            question: "What is the purpose of granting permissions to the Goldengate user?",
            options: [
              "To allow programming access",
              "To manage server infrastructure",
              "To enable data replication duties",
              "To approve user registration",
            ],
            correctAnswer: "To enable data replication duties",
          },
        ],
      },
    },
    {
      day: 3,
      title: "Database Level Prerequisites",
      tasks: [
        {
          title: "Understanding Database Preparation",
          description:
            "Learn about the prerequisites for preparing the database for Goldengate replication. Understand why proper configuration is critical for successful data replication.",
          steps: [
            "Review database management principles.",
            "Understand the importance of force logging.",
            "Familiarize with supplemental log data concepts.",
          ],
        },
        {
          title: "Setting Up Database Prerequisites",
          description:
            "Execute the SQL commands to apply the necessary database configurations, including enabling force logging and supplemental log data. This ensures the environment is ready for replication.",
          steps: [
            "Access the SQL command line.",
            "Execute 'ALTER DATABASE FORCE LOGGING'.",
            "Execute 'ALTER DATABASE ADD SUPPLEMENTAL LOG DATA'.",
            "Verify configurations.",
          ],
        },
      ],
      resources: [
        "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/SQL-Reference.html",
        "https://www.oracle.com/goldengate/",
        "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html",
      ],
      assignments: [
        {
          assignmentId: 3,
          isCompleted: false,
          task: "Document the steps required for preparing a database for Goldengate replication, including necessary SQL commands.",
        },
      ],
      handsOnExercises: ["Run the SQL commands in a test database to implement the prerequisites."],
      assignmentQuiz: {
        questions: [
          {
            question: "What command enables force logging?",
            options: ["ALTER TABLE", "ALTER DATABASE", "ENABLE LOGGING", "SET LOGGING"],
            correctAnswer: "ALTER DATABASE",
          },
          {
            question: "What is NOT a prerequisite for Goldengate replication?",
            options: ["Adding supplemental log data", "User creation", "Force logging", "Enabling database auditing"],
            correctAnswer: "Enabling database auditing",
          },
          {
            question: "Why is supplemental logging important?",
            options: [
              "For improved performance",
              "To ensure thorough replication of data changes",
              "To reduce database size",
              "To simplify user roles",
            ],
            correctAnswer: "To ensure thorough replication of data changes",
          },
          {
            question: "How can you verify database configurations?",
            options: [
              "Using SQL commands",
              "Consulting user manuals",
              "Checking GUI settings",
              "Rebooting the database",
            ],
            correctAnswer: "Using SQL commands",
          },
          {
            question: "What does SGA stand for?",
            options: ["System Global Area", "Single Global Array", "Standard Group Access", "Shared Global Area"],
            correctAnswer: "System Global Area",
          },
        ],
      },
    },
    {
      day: 4,
      title: "Goldengate Installation",
      tasks: [
        {
          title: "Understanding Goldengate Installation",
          description:
            "Study the installation process for Goldengate software in VM. Recognize the significance of patch application post-installation.",
          steps: [
            "Review Goldengate installation documentation.",
            "Understand the system requirements for installation.",
            "Learn about necessary patches after installation.",
          ],
        },
        {
          title: "Installing Goldengate 19c",
          description:
            "Follow the installation steps to properly install Goldengate 19c on the designated VM. Ensure to apply necessary patches for optimal functionality.",
          steps: [
            "Download the Goldengate 19c installation package.",
            "Execute the installation using command line.",
            "Apply the required patches as provided in the documentation.",
          ],
        },
      ],
      resources: [
        "https://docs.oracle.com/en/middleware/fusion-middleware/goldengate/19.1/installation-guide.html",
        "https://www.oracle.com/goldengate/",
        "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html",
      ],
      assignments: [
        {
          assignmentId: 4,
          isCompleted: false,
          task: "Create an installation checklist for Goldengate 19c including pre-installation, installation, and post-installation steps.",
        },
      ],
      handsOnExercises: ["Install Goldengate 19c on a test VM following the documented steps."],
      assignmentQuiz: {
        questions: [
          {
            question: "Which version of Goldengate is being installed?",
            options: ["18c", "19c", "20c", "17c"],
            correctAnswer: "19c",
          },
          {
            question: "What must be applied post-installation?",
            options: ["Configuration scripts", "Database backups", "Necessary patches", "User permissions"],
            correctAnswer: "Necessary patches",
          },
          {
            question: "Where should Goldengate be installed?",
            options: [
              "On any local machine",
              "In a production database directly",
              "On a dedicated VM",
              "On a cloud server directly",
            ],
            correctAnswer: "On a dedicated VM",
          },
          {
            question: "What is a critical consideration during Goldengate installation?",
            options: ["Database size", "User management", "Applying patches", "System open ports"],
            correctAnswer: "Applying patches",
          },
          {
            question: "What is the first step in Goldengate installation?",
            options: [
              "Execute installation package",
              "Download the installation package",
              "Configure databases",
              "Prepare VM environment",
            ],
            correctAnswer: "Download the installation package",
          },
        ],
      },
    },
    {
      day: 5,
      title: "Extract and Pump Configuration",
      tasks: [
        {
          title: "Understanding Extract and Pump Processes",
          description:
            "Learn about the significance of the extract and pump processes in Goldengate. Understand how they help in capturing and sending data effectively.",
          steps: [
            "Study how data changes are captured in Goldengate.",
            "Review the role of the pump process.",
            "Understand configuring the processes for optimal performance.",
          ],
        },
        {
          title: "Configuring Extract Process",
          description:
            "Set up the extract process to capture changes from the Oracle source. This will allow you to start monitoring changes as they happen.",
          steps: [
            "Access the Goldengate command interface.",
            "Use the appropriate commands to create and configure the extract process.",
            "Validate the configuration to ensure it's running correctly.",
          ],
        },
      ],
      resources: [
        "https://docs.oracle.com/en/middleware/fusion-middleware/goldengate/19.1/installation-guide.html",
        "https://www.oracle.com/goldengate/",
        "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html",
      ],
      assignments: [
        {
          assignmentId: 5,
          isCompleted: false,
          task: "Document the steps and commands needed to configure the extract and pump processes.",
        },
      ],
      handsOnExercises: ["Create an extract process in a test environment."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the function of the extract process?",
            options: [
              "To capture data changes",
              "To send data to the target",
              "To create backups",
              "To manage user permissions",
            ],
            correctAnswer: "To capture data changes",
          },
          {
            question: "What does the pump process do?",
            options: [
              "Receives data from the database",
              "Sends captured data to a target",
              "Stores data changes",
              "None of the above",
            ],
            correctAnswer: "Sends captured data to a target",
          },
          {
            question: "Which command is used to create an extract process?",
            options: ["CREATE EXTRACT", "ADD EXTRACT", "NEW EXTRACT", "SET EXTRACT"],
            correctAnswer: "ADD EXTRACT",
          },
          {
            question: "Which aspect is crucial for the configuration of extract?",
            options: ["Client-side scripting", "Database environment", "Logging level", "I/O performance"],
            correctAnswer: "Database environment",
          },
          {
            question: "What must be verified after configuring the extract process?",
            options: [
              "It is not capturing any changes",
              "It is running correctly",
              "It has adequate user permissions",
              "It doesn't use any CPU resources",
            ],
            correctAnswer: "It is running correctly",
          },
        ],
      },
    },
    {
      day: 6,
      title: "Configuring Replication for Data Lake",
      tasks: [
        {
          title: "Understanding Replication Configuration",
          description:
            "Learn about the replication setup using Goldengate connectors. Understand the process of configuring data flow to the data lake.",
          steps: [
            "Study connector operations in Goldengate.",
            "Review data lake configurations.",
            "Understand the significance of replication.",
          ],
        },
        {
          title: "Configuring Replication",
          description:
            "Set up replication from the Oracle source to the target data lake. This exercise ensures that data flows seamlessly from source to target.",
          steps: [
            "Access the Goldengate configuration environment.",
            "Use the appropriate commands to set up the target data lake.",
            "Validate the replication setup.",
          ],
        },
      ],
      resources: [
        "https://docs.oracle.com/en/middleware/fusion-middleware/goldengate/19.1/installation-guide.html",
        "https://www.oracle.com/goldengate/",
        "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html",
      ],
      assignments: [
        {
          assignmentId: 6,
          isCompleted: false,
          task: "Create a detailed guide covering the replication configuration process from Oracle to the data lake.",
        },
      ],
      handsOnExercises: ["Implement replication from Oracle database to a test data lake environment."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is the role of data lake in replication?",
            options: [
              "To filter redundant data",
              "To store data for analysis",
              "To enhance performance",
              "To provide user interfaces",
            ],
            correctAnswer: "To store data for analysis",
          },
          {
            question: "Which tool helps in configuring data replication in Goldengate?",
            options: ["Data Pump", "SQL*Plus", "Goldengate Big Data Connectors", "Oracle SQL Developer"],
            correctAnswer: "Goldengate Big Data Connectors",
          },
          {
            question: "What must be validated after replication setup?",
            options: ["Error reports", "Replication speed", "Data consistency", "User permissions"],
            correctAnswer: "Data consistency",
          },
          {
            question: "Which command relates directly to replication?",
            options: ["CREATE REPLICA", "SET TARGET", "START REPLICATION", "ADD REPLICATE"],
            correctAnswer: "ADD REPLICATE",
          },
          {
            question: "Why is testing replication essential?",
            options: [
              "To check performance",
              "To ensure no data loss",
              "To validate backup systems",
              "To analyze user load",
            ],
            correctAnswer: "To ensure no data loss",
          },
        ],
      },
    },
    {
      day: 7,
      title: "Final DL Table Onboarding",
      tasks: [
        {
          title: "Understanding Final Table Onboarding",
          description:
            "Learn about the requirements for onboarding final tables to the data lake. Understand the significance of schema considerations.",
          steps: [
            "Study the onboarding process for Goldengate replication.",
            "Understand the role of primary keys and constraints.",
            "Investigate the impact of BLOB and CLOB data types.",
          ],
        },
        {
          title: "Onboarding Final Tables",
          description:
            "Apply the onboarding process to replicate final tables into the respective data lake schemas. This ensures that all necessary tables are available for data analysis.",
          steps: [
            "Access the Goldengate configuration for the data lake.",
            "Implement onboarding for the final tables.",
            "Validate the success of the onboarding process.",
          ],
        },
      ],
      resources: [
        "https://docs.oracle.com/en/middleware/fusion-middleware/goldengate/19.1/installation-guide.html",
        "https://www.oracle.com/goldengate/",
        "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html",
      ],
      assignments: [
        {
          assignmentId: 7,
          isCompleted: false,
          task: "Outline the onboarding processes for tables, focusing on schema and key considerations.",
        },
      ],
      handsOnExercises: ["Perform the onboarding process for final tables in a test environment."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is crucial for final table onboarding?",
            options: ["User permissions", "Schema definition", "Database size", "Network speed"],
            correctAnswer: "Schema definition",
          },
          {
            question: "Why should BLOB and CLOB types be avoided?",
            options: [
              "They are too large.",
              "Goldengate has limitations with them.",
              "They slow down operations.",
              "They require more resources.",
            ],
            correctAnswer: "Goldengate has limitations with them.",
          },
          {
            question: "What must be present in tables for Goldengate replication?",
            options: ["Foreign keys", "Constraints", "Triggers", "Indexes"],
            correctAnswer: "Constraints",
          },
          {
            question: "What action follows onboarding final tables?",
            options: [
              "Verification of successful replication",
              "Testing user access",
              "Backup of database",
              "Deletion of old tables",
            ],
            correctAnswer: "Verification of successful replication",
          },
          {
            question: "What is often included as part of the schema?",
            options: ["Users", "Indexes", "Roles", "None of the above"],
            correctAnswer: "Indexes",
          },
        ],
      },
    },
    {
      day: 8,
      title: "Troubleshooting and Final Review",
      tasks: [
        {
          title: "Understanding Troubleshooting Techniques",
          description:
            "Learn about common issues and troubleshooting techniques in Goldengate deployments. Understand how to identify and resolve problems.",
          steps: [
            "Research common Goldengate issues.",
            "Review troubleshooting approaches.",
            "Learn about logs and error messages.",
          ],
        },
        {
          title: "Conducting a Final Review",
          description:
            "Review all phases of the training, ensuring that all essential components have been covered. Address any remaining questions or issues.",
          steps: [
            "Go over all previous course material.",
            "Discuss any unresolved issues with peers or instructors.",
            "Prepare a summary of key learnings.",
          ],
        },
      ],
      resources: [
        "https://docs.oracle.com/en/middleware/fusion-middleware/goldengate/19.1/installation-guide.html",
        "https://www.oracle.com/goldengate/",
        "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html",
      ],
      assignments: [
        {
          assignmentId: 8,
          isCompleted: false,
          task: "Create a list of potential troubleshooting scenarios along with their solutions.",
        },
      ],
      handsOnExercises: ["Attempt to resolve simulated issues in a test Goldengate setup."],
      assignmentQuiz: {
        questions: [
          {
            question: "What is a common issue in Goldengate deployments?",
            options: [
              "Lack of database connectivity",
              "Excessive user privileges",
              "Overly complex data types",
              "Too few tables",
            ],
            correctAnswer: "Lack of database connectivity",
          },
          {
            question: "What should you check for quick troubleshooting?",
            options: [
              "All user credentials",
              "Logs and error messages",
              "Server room temperature",
              "Client hardware performance",
            ],
            correctAnswer: "Logs and error messages",
          },
          {
            question: "Which tool can help in monitoring Goldengate?",
            options: [
              "Oracle SQL Developer",
              "Goldengate Monitor",
              "Oracle WebLogic",
              "Database Configuration Assistant",
            ],
            correctAnswer: "Goldengate Monitor",
          },
          {
            question: "What is the role of logs in troubleshooting?",
            options: [
              "Record database files",
              "Help analyze data usage",
              "Provide insights into errors",
              "Display user activity",
            ],
            correctAnswer: "Provide insights into errors",
          },
          {
            question: "What comes after troubleshooting?",
            options: ["Final reporting", "Continuation of operations", "Documentation update", "Follow-up meetings"],
            correctAnswer: "Final reporting",
          },
        ],
      },
    },
  ],
}

