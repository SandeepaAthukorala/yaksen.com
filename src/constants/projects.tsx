import React from "react";

export const projects = [
  {
    id: "ai-healthcare",
    title: "AI in Healthcare",
    description:
      "Revolutionary disease prediction system using machine learning",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000&h=1000",
    category: "Healthcare",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800&h=600",
        title: "AI-Powered Diagnosis System",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800&h=600",
        title: "Patient Monitoring Dashboard",
      },
      {
        type: "video",
        url: "https://example.com/video.mp4",
        thumbnail:
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800&h=600",
        title: "System Demo",
      },
    ],
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our AI-powered healthcare solution revolutionizes disease prediction
          and patient care through advanced machine learning algorithms. By
          analyzing vast amounts of medical data, we help healthcare providers
          make more accurate diagnoses and treatment decisions.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The system processes patient data, medical history, and symptoms to
          provide early warning signs and potential diagnosis paths,
          significantly improving patient outcomes and reducing healthcare
          costs.
        </p>
      </>
    ),
    features: [
      "Real-time health monitoring and analysis",
      "Predictive disease modeling",
      "Patient risk assessment",
      "Treatment recommendation engine",
      "Medical imaging analysis",
    ],
  },
  {
    id: "ai-education",
    title: "AI in Education",
    description:
      "Personalized learning experiences through AI-driven solutions",
    image:
      "https://images.unsplash.com/photo-1516496636080-7a41ce80f7ee?auto=format&fit=crop&q=80&w=2000&h=1000",
    category: "Education",
    youtubeId: "eBFEyORnbCE", // Replace with actual YouTube video ID
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800&h=600",
        title: "Adaptive Learning System",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=600",
        title: "Interactive AI Tutor",
      },
    ],
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Transforming education through AI, we create personalized learning
          paths that adapt to each student’s unique needs. Our system analyzes
          performance metrics to suggest custom learning modules.
        </p>
      </>
    ),
    features: [
      "Adaptive learning paths",
      "Interactive AI tutors",
      "Real-time performance tracking",
    ],
  },
  {
    id: "ai-finance",
    title: "AI in Finance",
    description: "Enhancing investment strategies using AI-driven analytics",
    image:
      "https://images.unsplash.com/photo-1556742400-4b43a1a2f118?auto=format&fit=crop&q=80&w=2000&h=1000",
    category: "Finance",
    youtubeId: "fjse32DfJe", // Replace with actual YouTube video ID
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=600",
        title: "Portfolio Optimization",
      },
    ],
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Revolutionizing investment strategies with predictive analytics and
          risk modeling.
        </p>
      </>
    ),
    features: [
      "Predictive market trends",
      "Automated trading",
      "Fraud detection",
    ],
  },
  {
    id: "ai-environment",
    title: "AI for Sustainability",
    description:
      "Leveraging AI for climate action and sustainability initiatives",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&q=80&w=2000&h=1000",
    category: "Environment",
    youtubeId: "nvj8woP23a", // Replace with actual YouTube video ID
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1483736762161-1b9a5b6c9dfc?auto=format&fit=crop&q=80&w=800&h=600",
        title: "AI-powered Climate Models",
      },
    ],
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Driving sustainability efforts through predictive climate modeling and
          resource optimization.
        </p>
      </>
    ),
    features: [
      "Climate action modeling",
      "Resource optimization",
      "Environmental impact assessment",
    ],
  },
  {
    id: "ai-retail",
    title: "AI in Retail",
    description: "Transforming customer experiences with AI-driven insights",
    image:
      "https://images.unsplash.com/photo-1542282811-943ef1a977c5?auto=format&fit=crop&q=80&w=2000&h=1000",
    category: "Retail",
    youtubeId: "fw23klwe9d", // Replace with actual YouTube video ID
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1560843239-0a27744eaaac?auto=format&fit=crop&q=80&w=800&h=600",
        title: "Smart Inventory Management",
      },
    ],
    content: (
      <>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Enhancing the retail experience with predictive analytics and smart
          inventory management.
        </p>
      </>
    ),
    features: [
      "Customer behavior insights",
      "Inventory optimization",
      "Personalized shopping experiences",
    ],
  },
];
