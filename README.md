# Sensei: Strategic Employee Support & Engagement Interface

## 🚀 Overview

Sensei is an intelligent knowledge transfer (KT) platform that revolutionizes onboarding for new employees. By leveraging advanced AI techniques and RAG (Retrieval-Augmented Generation) agents, Sensei creates personalized learning paths, assignments, and interactive quizzes from uploaded documentation—drastically reducing the time experienced team members spend on repetitive training tasks.

The system analyzes uploaded documents, generates structured learning plans, provides contextually relevant web resources, evaluates assignment submissions, and maintains an intelligent conversational interface throughout the learning journey.

## ✨ Key Features

- **Automated KT Plan Generation**: Upload documentation and automatically generate a comprehensive, day-by-day knowledge transfer plan
- **Smart Assignment & Quiz Creation**: Context-aware assignments and quizzes that reinforce key concepts
- **Intelligent Assignment Evaluation**: AI-powered grading that provides actionable feedback
- **Web-Enhanced Learning**: Automatically supplements internal documentation with relevant web resources
- **Interactive AI Assistant**: Contextual chat support that understands the learning material, assignments, and employee progress
- **Comprehensive Analytics**: Track learning progress, identify knowledge gaps, and optimize the onboarding process

## 🧠 Architecture

Sensei is built on a sophisticated multi-agent architecture with four specialized RAG agents:

1. **Coursework Generation Agent**: Analyzes uploaded documents and creates structured day-wise learning plans
2. **Assignment Checker Agent**: Evaluates submitted assignments using document context and web references
3. **Web Search Agent**: Searches the internet for relevant supplementary materials to enhance learning and reduce AI hallucinations
4. **Chatbot Agent**: Provides continuous support using context from all sources (documents, web materials, assignment history, and coursework plan)

## 💻 Technology Stack

### Backend
- **Python**: Core application logic
- **FastAPI**: High-performance API framework
- **Databricks**: Storage (Volumes and Metastore) for documents and application data
- **GPT-4o mini**: Powering the intelligent RAG agents
- **LangChain/LlamaIndex**: RAG framework implementation
- **Redis**: Caching layer for performance optimization
- **Docker**: Containerization for deployment

### Frontend
- **React**: UI framework
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Styling
- **JavaScript**: Client-side functionality
- **Vite**: Build tool
- **React Router**: Navigation
- **React Query**: Data fetching and state management

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Node.js 16+
- Docker
- Databricks account
- OpenAI API key (for GPT-4o mini)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/sensei.git
cd sensei
```

2. Backend setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your API keys and configuration
```

4. Frontend setup
```bash
cd ../frontend
npm install
```

5. Start the development servers
```bash
# Terminal 1 (Backend)
cd backend
uvicorn app.main:app --reload

# Terminal 2 (Frontend)
cd frontend
npm run dev
```

6. Navigate to `http://localhost:5173` to access Sensei

### Databricks Configuration

1. Create a Databricks workspace
2. Set up volumes for document storage
3. Configure metastore tables for structured data
4. Update connection details in the `.env` file

## 📚 Usage Guide

### Document Upload

1. Navigate to the Dashboard
2. Click "Upload Documentation"
3. Select and upload your onboarding materials (PDF, DOCX, MD, TXT supported)
4. The system will analyze the documents and generate a KT plan

### KT Plan Management

1. Review the auto-generated KT plan
2. Modify or approve the suggested learning path
3. Assign the plan to new employees

### Assignment Creation and Evaluation

1. Assignments are automatically generated based on the KT plan
2. New employees submit their assignments through the platform
3. The Assignment Checker Agent evaluates submissions and provides feedback
4. Review the AI-graded assignments and provide additional feedback if needed

### Interactive Learning

1. New employees can interact with the Chatbot Agent at any time
2. The chat interface provides contextual guidance based on their progress
3. Web-enhanced resources are suggested during relevant learning modules

### RAG Agents Implementation

- **Document Ingestion Pipeline**: Processes and chunks documents for vector storage
- **Embedding Models**: Converts text into vector representations for semantic search
- **Vector Database**: Stores embeddings for efficient retrieval
- **Context Window Management**: Optimizes prompt construction with relevant context
- **Agent Orchestration**: Coordinates interactions between specialized agents

## 📊 Analytics Dashboard

The analytics dashboard provides insights into:

- Employee progress through KT plans
- Assignment completion rates and scores
- Common knowledge gaps or challenging topics
- Time saved compared to traditional KT methods
- Overall onboarding efficiency metrics

## 👥 Team Members

### Core Team
- [Shubham Kumar](https://github.com/shubham1592) 
- [Aditya Avhad](https://github.com/aditya0078)

### Contributors
We'd also like to thank all contributors who have helped make Sensei better!

## 📞 Contact

For questions or support, please reach out to me at [pi.shubham1592@gmail.com](mailto:pi.shubham1592@gmail.com) or [awhad.aditya10@gmail.com](mailto:awhad.aditya10@gmail.com)
