export const portfolioData = {
  personalInfo: {
    name: "Abdul Shareef N S",
    titles: [
      "AI & ML Engineer (B.Sc. AI&ML)",
      "2D Graphics & Motion Designer",
      "Full Stack Web Developer",
      "Software Engineer"
    ],
    tagline: "AI & ML Engineering | 2D Animation & Motion Graphics | Full-Stack Web Development",
    bio: "Graduated with a strong foundation in Artificial Intelligence and Machine Learning from Sree Saraswathi Thyagaraja College (STC), Pollachi (2022), and Master Diploma in 2D Graphics & Web Design from Dreamzone School of Creative Studies (2025). Skilled in machine learning algorithms, Adobe Photoshop, Illustrator, After Effects, 2D Animation & Motion Graphics, and modern web application development.",
    location: "Thrissur, Kerala, India",
    phone: "+91 9048180974",
    whatsappUrl: "https://wa.me/919048180974",
    email: "abdulshareefnsofficial@gmail.com",
    availability: "Available for Hiring & Freelance Projects (Remote / On-Site)",
    resumeUrl: "#resume",
    languages: ["English", "Malayalam", "Tamil"],
    socials: {
      github: "https://github.com/abdulshareefnsofficial",
      linkedin: "https://linkedin.com/in/abdulshareefnsofficial",
      twitter: "https://twitter.com/abdulshareefns",
      email: "mailto:abdulshareefnsofficial@gmail.com"
    }
  },

  stats: [
    { label: "Years Experience", value: "3+", suffix: "Years" },
    { label: "Web & AI Projects", value: "20+", suffix: "Built" },
    { label: "Design Projects", value: "35+", suffix: "Created" },
    { label: "Client Rating", value: "100%", suffix: "Satisfaction" }
  ],

  services: [
    {
      id: "graphics-design",
      title: "Graphic Design & 2D Motion Graphics",
      description: "Proficient in Adobe Photoshop, Illustrator, Adobe After Effects, 2D Animation & Motion Graphics, character rigging, and visual storytelling.",
      icon: "Layout",
      gradient: "from-red-600 via-rose-600 to-red-500"
    },
    {
      id: "ai-ml",
      title: "AI & Deep Learning Solutions",
      description: "Developing deep learning computer vision models (CNNs, PyTorch), object detection, digit recognition, and predictive analytics.",
      icon: "Cpu",
      gradient: "from-red-600 via-rose-500 to-zinc-900"
    },
    {
      id: "fullstack-web",
      title: "Web Development & Frontend Frameworks",
      description: "Building responsive, modern web applications with React, Next.js, JavaScript, state management, REST APIs, and third-party plugins.",
      icon: "Code2",
      gradient: "from-rose-600 via-red-600 to-white"
    },
    {
      id: "iot-automation",
      title: "IoT & System Automation",
      description: "Designing Internet of Things (IoT) hardware-software automation pipelines to control various components via the Internet.",
      icon: "Server",
      gradient: "from-red-500 to-rose-700"
    }
  ],

  skillCategories: [
    {
      category: "Graphic Design & Motion Graphics",
      icon: "Wrench",
      skills: [
        { name: "Adobe Photoshop", level: 95, color: "#31A8FF" },
        { name: "Adobe Illustrator", level: 94, color: "#FF9A00" },
        { name: "Adobe After Effects", level: 92, color: "#9999FF" },
        { name: "2D Animation & Motion Graphics", level: 93, color: "#FF7C00" }
      ]
    },
    {
      category: "Programming & AI / ML",
      icon: "Cpu",
      skills: [
        { name: "Python", level: 95, color: "#3776AB" },
        { name: "Deep Learning & CNNs", level: 92, color: "#FF6F00" },
        { name: "Machine Learning", level: 90, color: "#F7931E" },
        { name: "C++", level: 85, color: "#00599C" },
        { name: "Data Mining & Analytics", level: 88, color: "#4169E1" }
      ]
    },
    {
      category: "Full Stack Web Development",
      icon: "Layout",
      skills: [
        { name: "HTML5, CSS3 & JavaScript", level: 96, color: "#E34F26" },
        { name: "React.js / Next.js Frameworks", level: 94, color: "#61DAFB" },
        { name: "Node.js & Express APIs", level: 90, color: "#339933" },
        { name: "Tailwind CSS & State Management", level: 95, color: "#38BDF8" }
      ]
    },
    {
      category: "Soft Skills & Professional Capabilities",
      icon: "Database",
      skills: [
        { name: "Time Management", level: 96, color: "#10B981" },
        { name: "Collaboration & Teamwork", level: 95, color: "#6366F1" },
        { name: "Internet of Things (IoT)", level: 88, color: "#00878F" },
        { name: "Git & GitHub Version Control", level: 94, color: "#F05032" }
      ]
    }
  ],

  projects: [
    {
      id: "traffic-sign-detection",
      title: "Traffic sign detection using Deep Learning",
      category: "AI & Computer Vision",
      featured: true,
      tagline: "Deep Learning CNN System for Automatic Driver Assistance Systems (ADAS)",
      description: "Traffic Sign Classification is very useful in Automatic Driver Assistance Systems. A Convolutional Neural Network (CNN) is used to examine and check visual imagery to train the image classification and recognition model with high accuracy and precision.",
      techStack: ["Python", "Deep Learning", "CNN", "PyTorch", "OpenCV", "FastAPI", "React"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://abdulshareefnsofficial.github.io/portfolio/#traffic-sign-detection",
      githubUrl: "https://github.com/abdulshareefnsofficial/handwritten-digit-recognition-cnn",
      highlights: [
        "High accuracy classification on German Traffic Sign Recognition Benchmark (GTSRB)",
        "Real-time video frame object detection processing using OpenCV & CNN",
        "Bounding box detection, class labeling, and driver alert system"
      ]
    },
    {
      id: "vectorcraft-2d-design",
      title: "VectorCraft 2D Graphics & Motion Suite",
      category: "2D Design & Web",
      featured: true,
      tagline: "Vector Asset Composition & 2D Motion Graphics Application",
      description: "Graphic design & motion graphics suite created for designing 2D vector illustrations, typography branding, and After Effects visual compositions.",
      techStack: ["Photoshop", "Illustrator", "After Effects", "2D Motion", "React"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://abdulshareefnsofficial.github.io/portfolio/#vectorcraft",
      githubUrl: "https://github.com/abdulshareefnsofficial/vectorcraft-app",
      highlights: [
        "2D Motion Graphics compositions & After Effects vector animation workflows",
        "Custom brand identity layouts, character rigging, and UI graphics",
        "Export pipeline for web-optimized visual assets and vector illustrations"
      ]
    },
    {
      id: "handwritten-digit-recognition",
      title: "Handwritten Digit Recognition Using CNN",
      category: "AI & Deep Learning",
      featured: false,
      tagline: "Deep Neural Network Model for Image Character Recognition",
      description: "Implemented a Convolutional Neural Network (CNN) to classify handwritten digits from 0-9 with high accuracy using deep learning frameworks.",
      techStack: ["Python", "Deep Learning", "CNN", "OpenCV", "Tkinter"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://abdulshareefnsofficial.github.io/portfolio/#handwritten-digit-recognition",
      githubUrl: "https://github.com/abdulshareefnsofficial/handwritten-digit-recognition-cnn",
      highlights: [
        "Trained model on benchmark handwritten dataset achieving over 98% accuracy",
        "Interactive canvas GUI allowing real-time drawing and digit prediction",
        "Preprocessing pipeline including grayscale conversion, thresholding, and normalization"
      ]
    }
  ],

  experience: [
    {
      period: "2025 - Present",
      role: "2D Motion Graphics Designer",
      company: "Freelancer",
      type: "Freelance",
      description: "Designing 2D motion graphics, vector illustrations, visual branding assets, and video animation compositions using Adobe After Effects, Photoshop, and Illustrator.",
      achievements: [
        "Created 2D motion graphics animations, promotional visuals, and graphic assets",
        "Designed brand identity systems, typography layouts, and UI graphics"
      ]
    },
    {
      period: "2023 - Present",
      role: "Freelance Web Developer",
      company: "Freelancer",
      type: "Freelance",
      description: "Building responsive full-stack web applications, developing machine learning models, integrating RESTful APIs, and implementing modern frontend frameworks.",
      achievements: [
        "Delivered custom full-stack web applications and machine learning project integrations",
        "Achieved sub-second web load speeds and 100% client satisfaction"
      ]
    }
  ],

  education: [
    {
      period: "2025",
      degree: "Master Diploma in 2D Graphics & Web Design",
      institution: "Dreamzone School of Creative Studies",
      description: "Graduated in 2025. Focused on 2D Vector Graphics, Brand Identity, Visual Asset Creation, UI Layout Aesthetics, and Modern Frontend Design."
    },
    {
      period: "2022",
      degree: "B.Sc. Artificial Intelligence & Machine Learning (AI&ML)",
      institution: "Sree Saraswathi Thyagaraja College (STC), Pollachi",
      description: "Graduated in 2022. Strong foundation in Artificial Intelligence, machine learning algorithms, Deep Learning, Computer Vision, and modern web application development."
    }
  ],

  certifications: [
    { title: "Master Diploma in 2D Graphics & Web Design", issuer: "Dreamzone School of Creative Studies", year: "2025" },
    { title: "Web Development Internship Certificate (TNWDINT23-1850)", issuer: "Weboin in association with Teachnook", year: "2024" },
    { title: "Mobile Application Development", issuer: "Infosys Springboard", year: "2023" },
    { title: "Certificate Course in Data Mining", issuer: "NPTEL Swayam", year: "2023" },
    { title: "Basics of Internet of Things (IoT)", issuer: "Infosys Springboard", year: "2023" },
    { title: "Tableau for Data Visualization", issuer: "Infosys Springboard", year: "2023" },
    { title: "B.Sc. Artificial Intelligence & Machine Learning (AI&ML)", issuer: "Sree Saraswathi Thyagaraja College (STC), Pollachi", year: "2022" },
    { title: "Machine Learning & Deep Learning Workshop", issuer: "NUNNARI LABS", year: "2022" }
  ],

  achievements: [
    {
      title: "Google's Developer Festival",
      detail: "Participated in Google's Developer Festival conducted in Coimbatore 2022"
    },
    {
      title: "NUNNARI LABS Workshop Certification",
      detail: "Machine Learning & Deep Learning workshop certified by NUNNARI LABS"
    }
  ]
};
