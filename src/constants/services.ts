import {
  PenTool,
  Megaphone,
  BarChart,
  MessageSquare,
  Brain,
  Database,
  Shield,
  Cog,
  Cloud,
  Cpu,
  Target,
  Zap,
  Code,
  Bot,
  Settings,
  GitBranch,
  Lock,
} from "lucide-react";
import type { Service } from "../types/services";

export const services: Service[] = [
  {
    id: "ai-content-creation",
    title: "AI Content Creation",
    description:
      "Generate engaging, SEO-optimized content that resonates with your audience using advanced AI algorithms.",
    icon: PenTool,
    subServices: [
      {
        id: "blog-posts",
        title: "Blog Posts",
        description:
          "Create high-quality blog content that drives traffic and engagement.",
        subDescription:
          "Generate engaging and informative blog posts that capture your audience’s attention and drive traffic to your website.",
        image:
          "https://images.unsplash.com/photo-1501504905224-a97b24679b78?auto=format&fit=crop&q=80&w=2000&h=1000",
        features: [
          {
            title: "Smart Content Generation",
            description:
              "AI-powered content creation tailored to your brand voice and style.",
          },
          {
            title: "SEO Optimization",
            description:
              "Built-in SEO analysis and optimization for better search rankings.",
          },
          {
            title: "Multilingual Support",
            description:
              "Create content in multiple languages with native-like quality.",
          },
        ],
        projects: [
          {
            id: "1",
            title: "Project 1",
            image:
              "https://images.unsplash.com/photo-1485811055483-1c09e64d4576?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "https://example.com",
          },
          {
            id: "2",
            title: "Project 2",
            image:
              "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "",
          },
          {
            id: "3",
            title: "Project 3",
            image:
              "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "",
          },
        ],
        benefits: [
          {
            title: "Save Time and Resources",
            description:
              "Reduce content creation time by up to 70% while maintaining quality.",
          },
          {
            title: "Consistent Brand Voice",
            description:
              "Maintain consistent messaging across all content pieces.",
          },
        ],
        process: [
          {
            title: "Analysis",
            description:
              "We analyze your brand voice, target audience, and content goals.",
          },
          {
            title: "Strategy",
            description:
              "Develop a content strategy aligned with your business objectives.",
          },
          {
            title: "Creation",
            description:
              "Generate AI-powered content optimized for engagement.",
          },
          {
            title: "Review",
            description: "Quality check and refinement of generated content.",
          },
        ],
        tools: [
          {
            name: "GPT-4",
            description:
              "Advanced language model for high-quality content generation",
            icon: Brain,
            techStack: ["Natural Language Processing", "Machine Learning"],
          },
          {
            name: "Content Optimizer",
            description: "AI-powered SEO optimization tool",
            icon: Target,
            techStack: ["SEO Analytics", "Content Analysis"],
          },
          {
            name: "Multilingual Engine",
            description: "Neural translation system for multiple languages",
            icon: MessageSquare,
            techStack: ["Neural Translation", "Language Processing"],
          },
        ],
      },
      {
        id: "social-media-content",
        title: "Social Media Content",
        description:
          "Generate engaging social media posts that capture attention and drive engagement.",
        subDescription:
          "Create compelling social media content that captures attention, drives engagement, and enhances your brand’s online presence.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f8586179c?auto=format&fit=crop&q=80&w=2000&h=1000",
        features: [
          {
            title: "Smart Content Generation",
            description:
              "AI-powered content creation tailored to your brand voice and style.",
          },
          {
            title: "Platform Optimization",
            description:
              "Content optimized for various social media platforms.",
          },
          {
            title: "Multilingual Support",
            description:
              "Create content in multiple languages with native-like quality.",
          },
        ],
        benefits: [
          {
            title: "Save Time and Resources",
            description:
              "Reduce content creation time by up to 70% while maintaining quality.",
          },
          {
            title: "Consistent Brand Voice",
            description:
              "Maintain consistent messaging across all content pieces.",
          },
        ],
        process: [
          {
            title: "Analysis",
            description:
              "We analyze your brand voice, target audience, and content goals.",
          },
          {
            title: "Strategy",
            description:
              "Develop a content strategy aligned with your business objectives.",
          },
          {
            title: "Creation",
            description:
              "Generate AI-powered content optimized for engagement.",
          },
          {
            title: "Review",
            description: "Quality check and refinement of generated content.",
          },
        ],
        tools: [
          {
            name: "GPT-4",
            description:
              "Advanced language model for high-quality content generation",
            icon: Brain,
            techStack: ["Natural Language Processing", "Machine Learning"],
          },
          {
            name: "Content Optimizer",
            description: "AI-powered SEO optimization tool",
            icon: Target,
            techStack: ["SEO Analytics", "Content Analysis"],
          },
          {
            name: "Multilingual Engine",
            description: "Neural translation system for multiple languages",
            icon: MessageSquare,
            techStack: ["Neural Translation", "Language Processing"],
          },
        ],
        projects: null,
      },
    ],
  },
  {
    id: "ai-agentic-bots",
    title: "AI Agentic Bots",
    description:
      "Develop intelligent AI agents that can automate tasks and interact with users.",
    icon: Bot,
    subServices: [
      {
        id: "customer-service-bots",
        title: "Customer Service Bots",
        description: "Automate customer support with AI-powered chatbots.",
        subDescription:
          "Enhance your customer service with AI-powered chatbots that provide instant support, answer queries, and improve customer satisfaction.",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000&h=1000",
        features: [
          {
            title: "24/7 Availability",
            description:
              "Provide round-the-clock customer support without human intervention.",
          },
          {
            title: "Personalized Interactions",
            description:
              "Offer tailored responses based on customer data and history.",
          },
          {
            title: "Multilingual Support",
            description: "Support customers in multiple languages seamlessly.",
          },
        ],
        benefits: [
          {
            title: "Improved Customer Satisfaction",
            description:
              "Provide instant and accurate responses to customer queries.",
          },
          {
            title: "Reduced Support Costs",
            description:
              "Lower operational costs by automating routine support tasks.",
          },
        ],
        process: [
          {
            title: "Analysis",
            description:
              "We analyze your customer support needs and requirements.",
          },
          {
            title: "Design",
            description: "Design the chatbot flow and conversation logic.",
          },
          {
            title: "Implementation",
            description: "Deploy and integrate the chatbot into your systems.",
          },
          {
            title: "Optimization",
            description:
              "Continuously monitor and optimize the chatbot performance.",
          },
        ],
        tools: [
          {
            name: "NLP Engine",
            description:
              "Advanced natural language processing for understanding user queries",
            icon: Brain,
            techStack: ["Natural Language Processing", "Machine Learning"],
          },
          {
            name: "Dialogue Manager",
            description: "Platform for managing chatbot conversations",
            icon: MessageSquare,
            techStack: ["Dialogue Management", "Conversation Design"],
          },
          {
            name: "Integration API",
            description: "API for integrating with various systems",
            icon: Code,
            techStack: ["API Integration", "System Integration"],
          },
        ],
        projects: null,
      },
      {
        id: "task-automation-bots",
        title: "Task Automation Bots",
        description: "Automate repetitive tasks with AI-powered bots.",
        subDescription:
          "Automate repetitive tasks with AI-powered bots, freeing up your team to focus on more strategic initiatives and complex problem-solving.",
        image:
          "https://images.unsplash.com/photo-1588196749488-91f229821610?auto=format&fit=crop&q=80&w=2000&h=1000",
        features: [
          {
            title: "Task Automation",
            description:
              "Automate repetitive tasks and complex business processes.",
          },
          {
            title: "Smart Integration",
            description: "Seamless integration with existing business systems.",
          },
          {
            title: "Real-time Monitoring",
            description:
              "Monitor and optimize automated processes in real-time.",
          },
        ],
        benefits: [
          {
            title: "Increased Efficiency",
            description:
              "Reduce manual work and improve operational efficiency.",
          },
          {
            title: "Cost Reduction",
            description: "Lower operational costs through automated processes.",
          },
        ],
        process: [
          {
            title: "Assessment",
            description:
              "Evaluate current processes and automation opportunities.",
          },
          {
            title: "Design",
            description: "Design automated workflows and integration points.",
          },
          {
            title: "Implementation",
            description: "Deploy and configure automation solutions.",
          },
          {
            title: "Optimization",
            description:
              "Continuous monitoring and optimization of automated processes.",
          },
        ],
        tools: [
          {
            name: "Workflow Engine",
            description: "Advanced workflow automation platform",
            icon: Settings,
            techStack: ["Process Automation", "Workflow Management"],
          },
          {
            name: "Integration Hub",
            description: "Central system for connecting various services",
            icon: GitBranch,
            techStack: ["API Integration", "Data Synchronization"],
          },
          {
            name: "Process Analytics",
            description: "Real-time monitoring and analytics dashboard",
            icon: BarChart,
            techStack: ["Real-time Analytics", "Performance Monitoring"],
          },
        ],
        projects: null,
      },
    ],
  },
  {
    id: "custom-ai-tools",
    title: "Custom AI Tools",
    description:
      "Develop tailored AI solutions to meet your specific business needs.",
    icon: Cog,
    subServices: [
      {
        id: "ai-model-development",
        title: "AI Model Development",
        description:
          "Build custom AI models tailored to your specific requirements.",
        subDescription:
          "Develop custom AI models tailored to your specific requirements, leveraging the latest machine learning techniques and algorithms.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000&h=1000",
        features: [
          {
            title: "Custom Model Design",
            description:
              "Design AI models based on your specific data and objectives.",
          },
          {
            title: "Advanced Algorithms",
            description:
              "Utilize the latest machine learning and deep learning algorithms.",
          },
          {
            title: "Performance Optimization",
            description:
              "Optimize models for maximum performance and accuracy.",
          },
        ],
        benefits: [
          {
            title: "Tailored Solutions",
            description:
              "Get AI models that perfectly fit your business needs.",
          },
          {
            title: "Competitive Advantage",
            description: "Gain a competitive edge with custom AI solutions.",
          },
        ],
        process: [
          {
            title: "Data Analysis",
            description:
              "Analyze your data to determine the best approach for model development.",
          },
          {
            title: "Model Design",
            description:
              "Design and develop the AI model based on your requirements.",
          },
          {
            title: "Training and Testing",
            description:
              "Train and test the model to ensure optimal performance.",
          },
          {
            title: "Deployment",
            description: "Deploy the model into your systems.",
          },
        ],
        tools: [
          {
            name: "TensorFlow",
            description: "Open-source machine learning library",
            icon: Cpu,
            techStack: ["Machine Learning", "Deep Learning"],
          },
          {
            name: "PyTorch",
            description: "Open-source machine learning framework",
            icon: Brain,
            techStack: ["Machine Learning", "Deep Learning"],
          },
          {
            name: "Scikit-learn",
            description: "Machine learning library for Python",
            icon: Code,
            techStack: ["Machine Learning", "Data Analysis"],
          },
        ],
        projects: null,
      },
      {
        id: "ai-api-development",
        title: "AI API Development",
        description:
          "Develop custom AI APIs for seamless integration with your systems.",
        subDescription:
          "Develop custom AI APIs for seamless integration with your systems, enabling you to leverage AI capabilities across your applications.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365465db35e?auto=format&fit=crop&q=80&w=2000&h=1000",
        features: [
          {
            title: "Custom API Design",
            description:
              "Design APIs based on your specific requirements and use cases.",
          },
          {
            title: "Seamless Integration",
            description:
              "Ensure seamless integration with your existing systems.",
          },
          {
            title: "Scalable Architecture",
            description:
              "Build APIs that can handle high traffic and data loads.",
          },
        ],
        benefits: [
          {
            title: "Easy Integration",
            description:
              "Easily integrate AI capabilities into your applications.",
          },
          {
            title: "Scalable Solutions",
            description: "Build APIs that can scale with your business needs.",
          },
        ],
        process: [
          {
            title: "API Design",
            description: "Design the API endpoints and data structures.",
          },
          {
            title: "Development",
            description: "Develop the API using the latest technologies.",
          },
          {
            title: "Testing",
            description: "Test the API to ensure it meets your requirements.",
          },
          {
            title: "Deployment",
            description: "Deploy the API into your systems.",
          },
        ],
        tools: [
          {
            name: "Node.js",
            description: "JavaScript runtime for building APIs",
            icon: Code,
            techStack: ["JavaScript", "API Development"],
          },
          {
            name: "Express.js",
            description: "Web framework for Node.js",
            icon: Settings,
            techStack: ["API Development", "Web Framework"],
          },
          {
            name: "Docker",
            description: "Platform for containerizing applications",
            icon: Cloud,
            techStack: ["Containerization", "Deployment"],
          },
        ],
        projects: null,
      },
    ],
  },
  {
    id: "ai-data-analytics",
    title: "AI Data Analytics",
    description:
      "Unlock actionable insights from your data using advanced AI techniques.",
    icon: BarChart,
    subServices: [
      {
        id: "predictive-analytics",
        title: "Predictive Analytics",
        description:
          "Anticipate future trends and outcomes using AI-driven predictions.",
        subDescription:
          "Anticipate future trends and outcomes using AI-driven predictive analytics, enabling you to make informed decisions and optimize your strategies.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&h=1000",
        features: [
          {
            title: "Data Analysis",
            description: "Analyze your data to identify patterns and trends.",
          },
          {
            title: "Predictive Modeling",
            description: "Build predictive models to forecast future outcomes.",
          },
          {
            title: "Custom Reporting",
            description: "Generate tailored reports for your business needs.",
          },
        ],
        benefits: [
          {
            title: "Informed Decisions",
            description: "Make data-backed decisions with confidence.",
          },
          {
            title: "Improved Forecasting",
            description: "Anticipate future trends and outcomes with accuracy.",
          },
        ],
        process: [
          {
            title: "Data Collection",
            description: "Gather relevant data from all your sources.",
          },
          {
            title: "Analysis",
            description: "Analyze data for patterns and insights.",
          },
          {
            title: "Model Building",
            description: "Build predictive models based on your data.",
          },
          {
            title: "Reporting",
            description: "Generate reports with actionable insights.",
          },
        ],
        tools: [
          {
            name: "Python",
            description: "Programming language for data analysis",
            icon: Code,
            techStack: ["Data Analysis", "Machine Learning"],
          },
          {
            name: "Pandas",
            description: "Data manipulation and analysis library",
            icon: Database,
            techStack: ["Data Analysis", "Data Manipulation"],
          },
          {
            name: "Scikit-learn",
            description: "Machine learning library for Python",
            icon: Cpu,
            techStack: ["Machine Learning", "Predictive Modeling"],
          },
        ],
        projects: null,
      },
      {
        id: "data-visualization",
        title: "Data Visualization",
        description:
          "Transform data into interactive and insightful dashboards.",
        subDescription:
          "Transform your raw data into interactive and insightful dashboards, enabling you to understand complex information at a glance.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&h=1000",
        features: [
          {
            title: "Interactive Dashboards",
            description: "Create interactive dashboards for data exploration.",
          },
          {
            title: "Custom Visualizations",
            description: "Build custom visualizations to represent your data.",
          },
          {
            title: "Real-time Updates",
            description: "Get real-time updates on your data.",
          },
        ],
        benefits: [
          {
            title: "Clear Insights",
            description: "Gain clear insights from your data.",
          },
          {
            title: "Improved Decision-Making",
            description:
              "Make informed decisions based on data visualizations.",
          },
        ],
        process: [
          {
            title: "Data Collection",
            description: "Gather relevant data from all your sources.",
          },
          {
            title: "Analysis",
            description: "Analyze data for patterns and insights.",
          },
          {
            title: "Visualization",
            description: "Create visual representations of data for clarity.",
          },
          {
            title: "Dashboard Creation",
            description: "Build interactive dashboards for data exploration.",
          },
        ],
        tools: [
          {
            name: "Tableau",
            description: "Data visualization tool",
            icon: BarChart,
            techStack: ["Data Visualization", "Dashboarding"],
          },
          {
            name: "Power BI",
            description: "Business analytics service",
            icon: Database,
            techStack: ["Data Visualization", "Business Intelligence"],
          },
          {
            name: "D3.js",
            description: "JavaScript library for data visualization",
            icon: Code,
            techStack: ["Data Visualization", "JavaScript"],
          },
        ],
        projects: null,
      },
    ],
  },
];
