// Resource categories data
const categories = [
  {
    id: "Google-tools",
    title: "All Tools",
    description: "All the tools provided by the google",
    icon: "fa-brands fa-google",
    color: "#3B82F6", // Primary blue
    count: 29,
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    description:
      "Tools powered by artificial intelligence to boost productivity and creativity",
    icon: "fa-solid fa-robot",
    color: "#800080", // Primary purple
    count: 50,
  },
  {
    id: "learning-resources",
    title: "Learning Resources",
    description:
      "Platforms and websites to learn new programming skills and technologies",
    icon: "fa-solid fa-graduation-cap",
    color: "#8B5CF6", // Secondary purple
    count: 19,
  },
  {
    id: "design-tools",
    title: "Design Tools",
    description:
      "Resources for UI/UX design, graphics, and visual content creation",
    icon: "fa-solid fa-palette",
    color: "#EC4899", // Pink
    count: 21,
  },
  {
    id: "productivity",
    title: "Productivity",
    description:
      "Tools to manage time, tasks, and boost your overall productivity",
    icon: "fa-solid fa-bolt",
    color: "#F59E0B", // Amber
    count: 27,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Libraries, frameworks, and tools for building modern websites",
    icon: "fa-solid fa-code",
    color: "#10B981", // Emerald
    count: 23,
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "Tools for team communication, project management, and version control",
    icon: "fa-solid fa-users",
    color: "#6366F1", // Indigo
    count: 21,
  },
  {
    id: "code-snippets",
    title: "Code Snippets",
    description: "Useful code snippets, algorithms, and ready-to-use solutions",
    icon: "fa-solid fa-code-branch",
    color: "#EF4444", // Red
    count: 17,
  },
  {
    id: "career-resources",
    title: "Career Resources",
    description:
      "Job boards, interview prep, and resources for professional growth",
    icon: "fa-solid fa-briefcase",
    color: "#0EA5E9", // Sky
    count: 16,
  },
];

// Google Tools resources
const googleToolsResources = [
  {
    id: "google-docs",
    title: "Google Docs",
    description:
      "Create and edit documents online collaboratively in real time.",
    icon: "fa-solid fa-file-word",
    link: "https://docs.google.com/",
    category: "Productivity",
    tags: ["Documents", "Collaboration", "Free"],
  },
  {
    id: "google-sheets",
    title: "Google Sheets",
    description:
      "Powerful spreadsheet tool for data analysis and collaboration.",
    icon: "fa-solid fa-table",
    link: "https://sheets.google.com/",
    category: "Productivity",
    tags: ["Spreadsheets", "Data", "Collaboration", "Free"],
  },
  {
    id: "google-slides",
    title: "Google Slides",
    description: "Create, edit, and present professional presentations online.",
    icon: "fa-solid fa-file-powerpoint",
    link: "https://slides.google.com/",
    category: "Productivity",
    tags: ["Presentations", "Collaboration", "Free"],
  },
  {
    id: "google-classroom",
    title: "Google Classroom",
    description:
      "Manage coursework, assignments, and communicate with teachers and classmates.",
    icon: "fa-solid fa-chalkboard",
    link: "https://classroom.google.com/",
    category: "Education",
    tags: ["Learning", "Assignments", "Collaboration", "Free"],
  },
  {
    id: "google-drive",
    title: "Google Drive",
    description:
      "Cloud storage for saving and sharing your documents and projects.",
    icon: "fa-solid fa-cloud",
    link: "https://drive.google.com/",
    category: "Storage",
    tags: ["Cloud", "Storage", "Sharing", "Free"],
  },
  {
    id: "google-keep",
    title: "Google Keep",
    description:
      "Note-taking app to capture ideas, lists, and reminders quickly.",
    icon: "fa-solid fa-sticky-note",
    link: "https://keep.google.com/",
    category: "Productivity",
    tags: ["Notes", "Reminders", "Free"],
  },
  {
    id: "google-calendar",
    title: "Google Calendar",
    description:
      "Organize your schedule, set reminders, and plan study sessions.",
    icon: "fa-solid fa-calendar",
    link: "https://calendar.google.com/",
    category: "Productivity",
    tags: ["Scheduling", "Reminders", "Free"],
  },
  {
    id: "google-meet",
    title: "Google Meet",
    description:
      "Secure video meetings to collaborate with classmates and teachers remotely.",
    icon: "fa-solid fa-video",
    link: "https://meet.google.com/",
    category: "Communication",
    tags: ["Video Conferencing", "Collaboration", "Free"],
  },
  {
    id: "google-chat",
    title: "Google Chat",
    description: "Instant messaging platform for team and group conversations.",
    icon: "fa-solid fa-comments",
    link: "https://chat.google.com/",
    category: "Communication",
    tags: ["Messaging", "Collaboration", "Free"],
  },
  {
    id: "google-lens",
    title: "Google Lens",
    description:
      "Visual search tool to identify objects, translate text, and solve problems using your camera.",
    icon: "fa-solid fa-camera",
    link: "https://lens.google/",
    category: "Education",
    tags: ["Visual Search", "Study Aid", "Free"],
  },
  {
    id: "google-translate",
    title: "Google Translate",
    description:
      "Translate text, speech, and images between languages instantly.",
    icon: "fa-solid fa-language",
    link: "https://translate.google.com/",
    category: "Education",
    tags: ["Language", "Translation", "Free"],
  },
  {
    id: "google-jamboard",
    title: "Google Jamboard",
    description:
      "Digital interactive whiteboard to brainstorm and collaborate visually.",
    icon: "fa-solid fa-chalkboard-teacher",
    link: "https://jamboard.google.com/",
    category: "Collaboration",
    tags: ["Whiteboard", "Collaboration", "Free"],
  },
  {
    id: "google-tasks",
    title: "Google Tasks",
    description: "Manage your to-do lists and organize tasks efficiently.",
    icon: "fa-solid fa-list-check",
    link: "https://tasks.google.com/",
    category: "Productivity",
    tags: ["Task Management", "Reminders", "Free"],
  },
  {
    id: "google-forms",
    title: "Google Forms",
    description:
      "Create surveys and quizzes for data collection and assessment.",
    icon: "fa-solid fa-list",
    link: "https://forms.google.com/",
    category: "Education",
    tags: ["Surveys", "Quizzes", "Free"],
  },
  {
    id: "google-arts-culture",
    title: "Google Arts & Culture",
    description:
      "Explore artworks, museums, and historical collections virtually.",
    icon: "fa-solid fa-landmark",
    link: "https://artsandculture.google.com/",
    category: "Education",
    tags: ["Culture", "Virtual Tours", "Free"],
  },
  {
    id: "google-ai-study-buddy",
    title: "Google AI Study Buddy",
    description:
      "An AI-powered tool that helps students by answering questions and explaining concepts (recently released experimental).",
    icon: "fa-solid fa-robot",
    link: "https://ai.google/study-buddy",
    category: "Education",
    tags: ["AI", "Study Aid", "Experimental"],
  },
  {
    id: "google-genie",
    title: "Google Genie",
    description:
      "A recently introduced generative AI assistant integrated with Google services to help with homework and projects.",
    icon: "fa-solid fa-magic",
    link: "https://genie.google.com/",
    category: "Education",
    tags: ["AI", "Assistant", "Paid/Free Tier"],
  },
  {
    id: "google-classroom-plus",
    title: "Google Classroom Plus",
    description:
      "An enhanced, paid version of Google Classroom with advanced features for educators and students.",
    icon: "fa-solid fa-chalkboard-user",
    link: "https://classroom.google.com/plus",
    category: "Education",
    tags: ["Education", "Paid"],
  },
  {
    id: "google-keep-for-schools",
    title: "Google Keep for Schools",
    description:
      "Tailored note-taking and organizing app for schools with admin controls.",
    icon: "fa-solid fa-sticky-note",
    link: "https://keep.google.com/schools",
    category: "Productivity",
    tags: ["Notes", "Education", "Free/Paid"],
  },
  {
    id: "google-workspace-for-education",
    title: "Google Workspace for Education",
    description:
      "Complete suite of tools including Docs, Sheets, Slides, Classroom tailored for education with added security.",
    icon: "fa-solid fa-building-columns",
    link: "https://edu.google.com/products/workspace-for-education/",
    category: "Education",
    tags: ["Productivity", "Collaboration", "Free/Paid"],
  },

  // Developer & Platform Tools for students learning coding or building apps:
  {
    id: "firebase",
    title: "Firebase",
    description:
      "Comprehensive app development platform with realtime database, authentication, hosting, and analytics.",
    icon: "fa-brands fa-fire",
    link: "https://firebase.google.com/",
    category: "Development",
    tags: ["Backend", "Database", "Hosting", "Free/Paid"],
  },
  {
    id: "google-cloud-platform",
    title: "Google Cloud Platform (GCP)",
    description:
      "Full suite of cloud computing services including storage, AI, compute, and big data solutions.",
    icon: "fa-solid fa-cloud",
    link: "https://cloud.google.com/",
    category: "Development",
    tags: ["Cloud", "Compute", "AI", "Paid with Free Tier"],
  },
  {
    id: "google-app-engine",
    title: "Google App Engine",
    description:
      "Platform as a Service (PaaS) to build and host web apps with automatic scaling.",
    icon: "fa-solid fa-server",
    link: "https://cloud.google.com/appengine",
    category: "Development",
    tags: ["Hosting", "PaaS", "Free/Paid"],
  },
  {
    id: "google-cloud-functions",
    title: "Google Cloud Functions",
    description:
      "Serverless compute service to run code in response to events without managing servers.",
    icon: "fa-solid fa-code",
    link: "https://cloud.google.com/functions",
    category: "Development",
    tags: ["Serverless", "Compute", "Free/Paid"],
  },
  {
    id: "google-colab",
    title: "Google Colab",
    description:
      "Free Jupyter notebook environment for machine learning and data science with GPU support.",
    icon: "fa-brands fa-python",
    link: "https://colab.research.google.com/",
    category: "Development",
    tags: ["Python", "ML", "Data Science", "Free"],
  },
  {
    id: "google-apis-explorer",
    title: "Google APIs Explorer",
    description: "Interactive tool to explore and test Google APIs.",
    icon: "fa-solid fa-vials",
    link: "https://developers.google.com/apis-explorer/",
    category: "Development",
    tags: ["API", "Testing", "Free"],
  },
];

// AI Tools resources
const aiToolsResources = [
  {
    id: "chatgpt",
    title: "ChatGPT",
    description:
      "AI conversational agent for natural language understanding and generation.",
    icon: "fa-solid fa-robot",
    link: "https://chat.openai.com/",
    category: "Text Generation",
    tags: ["Chatbot", "NLP", "Conversational AI"],
  },
  {
    id: "openai-gpt-4",
    title: "OpenAI GPT-4",
    description:
      "Advanced large language model for text generation, summarization, and more.",
    icon: "fa-solid fa-brain",
    link: "https://openai.com/research/gpt-4",
    category: "Text Generation",
    tags: ["NLP", "AI Model", "API"],
  },
  {
    id: "bard",
    title: "Google Bard",
    description:
      "Google’s conversational AI assistant for search and creative tasks.",
    icon: "fa-brands fa-google",
    link: "https://bard.google.com/",
    category: "Text Generation",
    tags: ["Chatbot", "AI Assistant", "Google"],
  },
  {
    id: "copyai",
    title: "Copy.ai",
    description:
      "AI-powered copywriting assistant for marketing, blogs, and social media.",
    icon: "fa-solid fa-pen-nib",
    link: "https://www.copy.ai/",
    category: "Content Creation",
    tags: ["Copywriting", "Marketing", "AI Writing"],
  },
  {
    id: "jasper-ai",
    title: "Jasper AI",
    description:
      "AI writing assistant to create blog posts, ads, and other content.",
    icon: "fa-solid fa-rocket",
    link: "https://www.jasper.ai/",
    category: "Content Creation",
    tags: ["Writing", "AI", "Marketing"],
  },
  {
    id: "grammarly",
    title: "Grammarly",
    description:
      "AI-powered grammar and style checker for writing improvement.",
    icon: "fa-solid fa-check-double",
    link: "https://www.grammarly.com/",
    category: "Writing Assistant",
    tags: ["Grammar", "Spellcheck", "Writing"],
  },
  {
    id: "github-copilot",
    title: "GitHub Copilot",
    description:
      "An AI pair programmer that helps you write code by suggesting line completions and entire functions as you type.",
    icon: "fa-brands fa-github",
    link: "https://github.com/features/copilot",
    tags: ["AI", "Coding", "Productivity"],
  },
  {
    id: "copysmith",
    title: "Copysmith",
    description:
      "AI tool for generating marketing copy and product descriptions.",
    icon: "fa-solid fa-copy",
    link: "https://copysmith.ai/",
    category: "Content Creation",
    tags: ["Marketing", "Copywriting", "AI"],
  },
  {
    id: "synthesia",
    title: "Synthesia",
    description:
      "AI platform for creating videos with virtual avatars from text.",
    icon: "fa-solid fa-video",
    link: "https://www.synthesia.io/",
    category: "Video Creation",
    tags: ["Video", "AI Avatars", "Text-to-Video"],
  },
  {
    id: "dall-e-2",
    title: "DALL·E 2",
    description: "AI model generating images from text descriptions.",
    icon: "fa-solid fa-image",
    link: "https://openai.com/dall-e-2/",
    category: "Image Generation",
    tags: ["AI Art", "Text-to-Image", "Creative"],
  },
  {
    id: "midjourney",
    title: "Midjourney",
    description:
      "Community-driven AI tool for generating stunning artwork from text prompts.",
    icon: "fa-solid fa-paint-brush",
    link: "https://midjourney.com/",
    category: "Image Generation",
    tags: ["AI Art", "Creative", "Community"],
  },
  {
    id: "stable-diffusion",
    title: "Stable Diffusion",
    description:
      "Open-source AI model for high-quality text-to-image generation.",
    icon: "fa-solid fa-brush",
    link: "https://stability.ai/stable-diffusion",
    category: "Image Generation",
    tags: ["Open Source", "AI Art", "Text-to-Image"],
  },
  {
    id: "runwayml",
    title: "Runway ML",
    description: "AI creative toolkit for video, images, and audio editing.",
    icon: "fa-solid fa-magic",
    link: "https://runwayml.com/",
    category: "Creative Tools",
    tags: ["Video", "AI Editing", "Creative"],
  },
  {
    id: "descript",
    title: "Descript",
    description:
      "AI-powered audio/video editor with transcription and overdub features.",
    icon: "fa-solid fa-microphone",
    link: "https://www.descript.com/",
    category: "Audio/Video Editing",
    tags: ["Audio", "Video", "Transcription"],
  },
  {
    id: "notion-ai",
    title: "Notion AI",
    description:
      "AI assistant integrated into Notion for writing, brainstorming, and organizing.",
    icon: "fa-brands fa-notion",
    link: "https://www.notion.so/product/ai",
    category: "Productivity",
    tags: ["Writing", "Organization", "AI Assistant"],
  },
  {
    id: "replit-ai",
    title: "Replit AI",
    description: "AI coding assistant integrated with the Replit online IDE.",
    icon: "fa-solid fa-code",
    link: "https://replit.com/site/ai",
    category: "Developer Tools",
    tags: ["Coding", "AI Assistant", "IDE"],
  },
  {
    id: "tabnine",
    title: "Tabnine",
    description:
      "AI code completion tool supporting multiple programming languages.",
    icon: "fa-solid fa-keyboard",
    link: "https://www.tabnine.com/",
    category: "Developer Tools",
    tags: ["Coding", "Autocomplete", "AI"],
  },
  {
    id: "huggingface",
    title: "Hugging Face",
    description:
      "AI community and platform providing pretrained models and datasets.",
    icon: "fa-solid fa-robot",
    link: "https://huggingface.co/",
    category: "Developer Tools",
    tags: ["AI Models", "Open Source", "NLP"],
  },
  {
    id: "copy.ai",
    title: "Copy.ai",
    description:
      "AI-powered content generator for marketing, social media, and blogs.",
    icon: "fa-solid fa-pen-nib",
    link: "https://www.copy.ai/",
    category: "Content Creation",
    tags: ["Marketing", "Content", "AI Writing"],
  },
  {
    id: "voice.ai",
    title: "Voice.ai",
    description: "AI voice changer and voice cloning software.",
    icon: "fa-solid fa-microphone",
    link: "https://voice.ai/",
    category: "Voice & Audio",
    tags: ["Voice", "Audio", "Cloning"],
  },
  {
    id: "otter.ai",
    title: "Otter.ai",
    description: "AI transcription service for meetings and lectures.",
    icon: "fa-solid fa-file-audio",
    link: "https://otter.ai/",
    category: "Transcription",
    tags: ["Transcription", "Meetings", "AI"],
  },
  {
    id: "jasper-chat",
    title: "Jasper Chat",
    description: "Conversational AI tool for marketing and content creation.",
    icon: "fa-solid fa-comments",
    link: "https://www.jasper.ai/chat",
    category: "Chatbots",
    tags: ["Chatbot", "Marketing", "AI"],
  },
  {
    id: "cleverbot",
    title: "Cleverbot",
    description: "Early AI chatbot that learns from conversations.",
    icon: "fa-solid fa-robot",
    link: "https://www.cleverbot.com/",
    category: "Chatbots",
    tags: ["Chatbot", "Conversational AI"],
  },
  {
    id: "openai-codex",
    title: "OpenAI Codex",
    description: "AI model that converts natural language into code.",
    icon: "fa-solid fa-terminal",
    link: "https://openai.com/blog/openai-codex/",
    category: "Developer Tools",
    tags: ["Coding", "AI", "Natural Language"],
  },
  {
    id: "ai21-studio",
    title: "AI21 Studio",
    description: "Advanced NLP models for text generation and understanding.",
    icon: "fa-solid fa-brain",
    link: "https://studio.ai21.com/",
    category: "Text Generation",
    tags: ["NLP", "AI Models"],
  },
  {
    id: "copyshark",
    title: "CopyShark",
    description: "AI content generation for marketing and blogging.",
    icon: "fa-solid fa-shark-fin",
    link: "https://copyshark.ai/",
    category: "Content Creation",
    tags: ["Marketing", "Content", "AI"],
  },
  {
    id: "artbreeder",
    title: "Artbreeder",
    description: "Collaborative AI art creation blending images using GANs.",
    icon: "fa-solid fa-palette",
    link: "https://www.artbreeder.com/",
    category: "Image Generation",
    tags: ["AI Art", "Creative"],
  },
  {
    id: "lumen5",
    title: "Lumen5",
    description: "AI video creation platform from blog posts and text.",
    icon: "fa-solid fa-film",
    link: "https://lumen5.com/",
    category: "Video Creation",
    tags: ["Video", "AI", "Marketing"],
  },
  {
    id: "talk-to-wolfram",
    title: "Talk to Wolfram",
    description:
      "Wolfram Alpha's AI assistant for computational knowledge and answers.",
    icon: "fa-solid fa-calculator",
    link: "https://talk.wolfram.com/",
    category: "Education",
    tags: ["Computation", "AI", "Knowledge"],
  },
  {
    id: "perplexity-ai",
    title: "Perplexity AI",
    description:
      "AI-powered search engine for direct answers and explanations.",
    icon: "fa-solid fa-search",
    link: "https://www.perplexity.ai/",
    category: "Research",
    tags: ["Search", "AI", "Answers"],
  },
  {
    id: "copygenius",
    title: "CopyGenius",
    description: "AI content writer focusing on conversion-optimized copy.",
    icon: "fa-solid fa-pen-fancy",
    link: "https://copygenius.ai/",
    category: "Content Creation",
    tags: ["Marketing", "Writing", "AI"],
  },
  {
    id: "tome",
    title: "Tome",
    description: "AI-powered storytelling and presentation tool.",
    icon: "fa-solid fa-book-open",
    link: "https://tome.app/",
    category: "Presentation",
    tags: ["Storytelling", "Presentations", "AI"],
  },
  {
    id: "copy-ai",
    title: "Copy AI",
    description: "AI assistant for creating marketing and creative content.",
    icon: "fa-solid fa-copy",
    link: "https://www.copy.ai/",
    category: "Content Creation",
    tags: ["Copywriting", "Marketing", "AI"],
  },
  {
    id: "designify",
    title: "Designify",
    description:
      "AI-based design tool for automatic background removal and enhancement.",
    icon: "fa-solid fa-image",
    link: "https://designify.com/",
    category: "Design",
    tags: ["Image Editing", "AI"],
  },
  {
    id: "replika",
    title: "Replika",
    description:
      "AI companion chatbot for mental health and social interaction.",
    icon: "fa-solid fa-heart",
    link: "https://replika.ai/",
    category: "Chatbots",
    tags: ["Companion", "AI", "Mental Health"],
  },
  {
    id: "synthesys",
    title: "Synthesys",
    description: "AI text-to-speech and voice synthesis platform.",
    icon: "fa-solid fa-microphone-alt",
    link: "https://synthesys.io/",
    category: "Voice & Audio",
    tags: ["Text-to-Speech", "Voice", "AI"],
  },
  {
    id: "speechify",
    title: "Speechify",
    description:
      "Text-to-speech app designed to improve reading speed and comprehension.",
    icon: "fa-solid fa-headphones",
    link: "https://speechify.com/",
    category: "Accessibility",
    tags: ["Text-to-Speech", "Reading", "AI"],
  },
  {
    id: "copycat",
    title: "CopyCat",
    description:
      "AI content creation for social media posts and marketing copy.",
    icon: "fa-solid fa-share-alt",
    link: "https://copycat.ai/",
    category: "Content Creation",
    tags: ["Social Media", "Marketing", "AI"],
  },
  {
    id: "magenta",
    title: "Magenta",
    description:
      "Google Brain’s open-source project exploring AI for music and art generation.",
    icon: "fa-solid fa-music",
    link: "https://magenta.tensorflow.org/",
    category: "Creative Tools",
    tags: ["Music", "AI", "Open Source"],
  },
  {
    id: "descript-overdub",
    title: "Descript Overdub",
    description:
      "AI voice cloning tool integrated with Descript for audio editing.",
    icon: "fa-solid fa-microphone-alt",
    link: "https://www.descript.com/overdub",
    category: "Voice & Audio",
    tags: ["Voice Cloning", "Audio", "AI"],
  },
  {
    id: "lately-ai",
    title: "Lately AI",
    description:
      "AI social media content generator that learns your brand voice.",
    icon: "fa-solid fa-bullhorn",
    link: "https://www.lately.ai/",
    category: "Content Creation",
    tags: ["Social Media", "Marketing", "AI"],
  },
  {
    id: "ai-writer",
    title: "AI Writer",
    description:
      "AI-powered writing assistant for generating SEO-friendly content.",
    icon: "fa-solid fa-pen",
    link: "https://ai-writer.com/",
    category: "Writing Assistant",
    tags: ["SEO", "Content", "AI"],
  },
  {
    id: "you.com",
    title: "You.com",
    description:
      "AI-powered search engine with summarization and chat features.",
    icon: "fa-solid fa-search",
    link: "https://you.com/",
    category: "Research",
    tags: ["Search", "AI", "Summarization"],
  },
  {
    id: "inkforall",
    title: "INK",
    description:
      "AI writing tool focusing on SEO optimization and content creation.",
    icon: "fa-solid fa-pen-fancy",
    link: "https://inkforall.com/",
    category: "Writing Assistant",
    tags: ["SEO", "Writing", "AI"],
  },
  {
    id: "anyword",
    title: "Anyword",
    description: "AI copywriting tool with predictive performance scoring.",
    icon: "fa-solid fa-chart-line",
    link: "https://anyword.com/",
    category: "Content Creation",
    tags: ["Marketing", "Copywriting", "AI"],
  },
  {
    id: "writesonic",
    title: "Writesonic",
    description:
      "AI writing assistant for blogs, ads, and product descriptions.",
    icon: "fa-solid fa-pen-nib",
    link: "https://writesonic.com/",
    category: "Content Creation",
    tags: ["Writing", "Marketing", "AI"],
  },
  {
    id: "deepgram",
    title: "Deepgram",
    description: "AI-powered speech recognition and transcription API.",
    icon: "fa-solid fa-microphone",
    link: "https://deepgram.com/",
    category: "Transcription",
    tags: ["Speech Recognition", "AI", "API"],
  },
  {
    id: "cleverscript",
    title: "CleverScript",
    description: "AI scripting tool for automating dialogues and chatbots.",
    icon: "fa-solid fa-comments",
    link: "https://cleverscript.com/",
    category: "Chatbots",
    tags: ["Chatbot", "Automation", "AI"],
  },

  {
    id: "durable",
    title: "Durable",
    description:
      "AI website builder that creates complete, customizable websites in under 30 seconds.",
    icon: "fa-solid fa-globe",
    link: "https://durable.co",
    tags: ["AI", "Website Builder", "No-Code"],
  },

  {
    id: "supernormal",
    title: "Supernormal",
    description:
      "AI tool that automatically takes meeting notes so you can focus on the conversation.",
    icon: "fa-solid fa-clipboard",
    link: "https://supernormal.com",
    tags: ["AI", "Productivity", "Meetings"],
  },
];

// Learning Resources
const learningResources = [
  {
    id: "mindluster",
    title: "Mind Luster",
    description:
      "A large free learning platform offering thousands of video courses in diverse fields including IT, business, and languages.",
    icon: "fa-solid fa-brain",
    link: "https://www.mindluster.com",
    tags: ["Free", "Video Courses", "General Learning"],
  },
  {
    id: "mongodb-university",
    title: "MongoDB University",
    description:
      "Official learning platform offering free courses on MongoDB and database development.",
    icon: "fa-solid fa-database",
    link: "https://learn.mongodb.com",
    tags: ["Database", "MongoDB", "Free"],
  },
  {
    id: "medium",
    title: "Medium",
    description:
      "A platform where professionals and learners share knowledge in articles and tutorials on various subjects.",
    icon: "fa-solid fa-newspaper",
    link: "https://medium.com",
    tags: ["Articles", "Tech", "Learning"],
  },
  {
    id: "alison",
    title: "Alison",
    description:
      "Free online learning platform offering diplomas and certificates in multiple disciplines.",
    icon: "fa-solid fa-certificate",
    link: "https://alison.com",
    tags: ["Free", "Certificates", "Courses"],
  },
  {
    id: "futurelearn",
    title: "FutureLearn",
    description:
      "Online education platform offering courses from top universities and institutions.",
    icon: "fa-solid fa-forward",
    link: "https://www.futurelearn.com",
    tags: ["University Courses", "Online Learning", "Certificates"],
  },
  {
    id: "linkedin-learning",
    title: "LinkedIn Learning",
    description:
      "Professional learning platform offering video courses on business, technology, and creative skills.",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/learning",
    tags: ["Professional", "Video Courses", "Skills"],
  },
  {
    id: "skillshare",
    title: "Skillshare",
    description:
      "Online learning community with classes on creative topics like design, photography, and more.",
    icon: "fa-solid fa-palette",
    link: "https://www.skillshare.com",
    tags: ["Creative", "Paid", "Video Courses"],
  },
  {
    id: "google-learn",
    title: "Google Learn",
    description:
      "Google’s learning resources offering free training on career development, Google tools, and tech skills.",
    icon: "fa-brands fa-google",
    link: "https://grow.google",
    tags: ["Free", "Google", "Career Skills"],
  },
  {
    id: "microsoft-learn",
    title: "Microsoft Learn",
    description:
      "Microsoft’s learning platform offering interactive tutorials and certifications in tech and cloud.",
    icon: "fa-brands fa-microsoft",
    link: "https://learn.microsoft.com",
    tags: ["Microsoft", "Free", "Cloud", "Certifications"],
  },
  {
    id: "simplilearn",
    title: "Simplilearn",
    description:
      "Platform offering professional certification courses in tech, management, and data science.",
    icon: "fa-solid fa-user-graduate",
    link: "https://www.simplilearn.com",
    tags: ["Paid", "Certification", "Professional"],
  },
  {
    id: "edx",
    title: "edX",
    description:
      "Online education platform with courses and degrees from top universities like MIT and Harvard.",
    icon: "fa-solid fa-university",
    link: "https://www.edx.org",
    tags: ["University", "MOOCs", "Degrees"],
  },
  {
    id: "khan-academy",
    title: "Khan Academy",
    description:
      "A nonprofit offering free world-class education in math, science, computer science, and more.",
    icon: "fa-solid fa-chalkboard",
    link: "https://www.khanacademy.org",
    tags: ["Free", "School Subjects", "Video Lessons"],
  },
  {
    id: "the-odin-project",
    title: "The Odin Project",
    description:
      "Completely free and open-source curriculum for learning full-stack web development.",
    icon: "fa-solid fa-code-branch",
    link: "https://www.theodinproject.com",
    tags: ["Free", "Web Development", "Open Source"],
  },
  {
    id: "mit-opencourseware",
    title: "MIT OpenCourseWare",
    description:
      "MIT's open educational resources including full courses, lectures, and assignments for free.",
    icon: "fa-solid fa-book-open",
    link: "https://ocw.mit.edu",
    tags: ["Free", "University", "Engineering"],
  },
  {
    id: "brilliant",
    title: "Brilliant",
    description:
      "Interactive learning in math, science, and computer science through problem-solving.",
    icon: "fa-solid fa-lightbulb",
    link: "https://www.brilliant.org",
    tags: ["STEM", "Problem Solving", "Interactive"],
  },
  {
    id: "pluralsight",
    title: "Pluralsight",
    description:
      "Technology learning platform with expert-led courses in development, IT, data, and more.",
    icon: "fa-solid fa-server",
    link: "https://www.pluralsight.com",
    tags: ["Tech", "Paid", "Professional"],
  },
  {
    id: "codecademy",
    title: "Codecademy",
    description:
      "Interactive coding platform teaching programming languages, web development, and more.",
    icon: "fa-solid fa-terminal",
    link: "https://www.codecademy.com",
    tags: ["Coding", "Interactive", "Paid & Free"],
  },
  {
    id: "cs50",
    title: "Harvard CS50",
    description:
      "Harvard’s popular introduction to computer science available for free online.",
    icon: "fa-solid fa-graduation-cap",
    link: "https://cs50.harvard.edu",
    tags: ["Free", "University", "Computer Science"],
  },
  {
    id: "w3schools",
    title: "W3Schools",
    description:
      "Popular web development resource with tutorials and references for HTML, CSS, JS, and more.",
    icon: "fa-solid fa-globe",
    link: "https://www.w3schools.com",
    tags: ["Web Development", "Reference", "Free"],
  },
];

// Design Tools resources
const designToolsResources = [
  {
    id: "figma",
    title: "Figma",
    description:
      "A collaborative interface design tool that enables multiple designers to work on the same project simultaneously.",
    icon: "fa-brands fa-figma",
    link: "https://www.figma.com",
    tags: ["Design", "UI/UX", "Collaboration"],
  },
  {
    id: "canva",
    title: "Canva",
    description:
      "A graphic design platform that allows users to create social media graphics, presentations, posters, and more.",
    icon: "fa-solid fa-pen-nib",
    link: "https://www.canva.com",
    tags: ["Design", "Graphics", "Templates"],
  },
  {
    id: "adobe-xd",
    title: "Adobe XD",
    description:
      "A vector-based user experience design tool for web apps and mobile apps.",
    icon: "fa-brands fa-adobe",
    link: "https://www.adobe.com/products/xd.html",
    tags: ["Design", "UI/UX", "Prototyping"],
  },
  {
    id: "sketch",
    title: "Sketch",
    description:
      "A digital design toolkit for macOS that helps you create, prototype, and collaborate on your designs.",
    icon: "fa-regular fa-object-group",
    link: "https://www.sketch.com",
    tags: ["Design", "UI/UX", "Mac Only"],
  },
  {
    id: "unsplash",
    title: "Unsplash",
    description:
      "A platform for free high-quality, royalty-free images contributed by creators worldwide.",
    icon: "fa-solid fa-camera",
    link: "https://unsplash.com",
    tags: ["Images", "Free", "Stock Photos"],
  },
  {
    id: "coolors",
    title: "Coolors",
    description:
      "A color scheme generator that allows you to create, browse, and save color palettes.",
    icon: "fa-solid fa-palette",
    link: "https://coolors.co",
    tags: ["Colors", "Design", "Palettes"],
  },
  {
    id: "adobe-photoshop",
    title: "Adobe Photoshop",
    description:
      "Industry-standard raster graphics editor for photo editing, compositing, and digital painting.",
    icon: "fa-brands fa-adobe",
    link: "https://www.adobe.com/products/photoshop.html",
    tags: ["Raster", "Photo Editing", "Paid"],
  },
  {
    id: "adobe-illustrator",
    title: "Adobe Illustrator",
    description:
      "Vector graphics editor for creating logos, icons, sketches, and typography.",
    icon: "fa-brands fa-adobe",
    link: "https://www.adobe.com/products/illustrator.html",
    tags: ["Vector", "Illustration", "Paid"],
  },
  {
    id: "affinity-designer",
    title: "Affinity Designer",
    description:
      "Professional vector and raster design tool for logos, icons, UI mockups, and more.",
    icon: "fa-solid fa-vector-square",
    link: "https://affinity.serif.com/designer/",
    tags: ["Vector", "Raster", "One-time Purchase"],
  },
  {
    id: "affinity-photo",
    title: "Affinity Photo",
    description:
      "Powerful photo editing software with advanced retouching and compositing tools.",
    icon: "fa-solid fa-images",
    link: "https://affinity.serif.com/photo/",
    tags: ["Photo Editing", "Raster", "One-time Purchase"],
  },
  {
    id: "gimp",
    title: "GIMP",
    description:
      "Free and open-source image editor for tasks such as photo retouching, image composition, and authoring.",
    icon: "fa-solid fa-paw",
    link: "https://www.gimp.org",
    tags: ["Free", "Raster", "Open Source"],
  },
  {
    id: "inkscape",
    title: "Inkscape",
    description:
      "Free and open-source vector graphics editor similar to Illustrator, for creating SVG-based graphics.",
    icon: "fa-brands fa-inkscape",
    link: "https://inkscape.org",
    tags: ["Free", "Vector", "Open Source"],
  },
  {
    id: "invision",
    title: "InVision",
    description:
      "Prototyping and collaboration platform for creating interactive mockups and design flows.",
    icon: "fa-brands fa-invision",
    link: "https://www.invisionapp.com",
    tags: ["Prototyping", "Collaboration", "Paid"],
  },
  {
    id: "marvel",
    title: "Marvel",
    description:
      "Design, prototyping, and user testing tool for web and mobile apps with built-in handoff.",
    icon: "fa-solid fa-magic",
    link: "https://marvelapp.com",
    tags: ["Prototyping", "Testing", "Paid/Free Tier"],
  },
  {
    id: "zeplin",
    title: "Zeplin",
    description:
      "Collaboration tool for handoff between designers and developers with specs and assets.",
    icon: "fa-brands fa-zeplin",
    link: "https://zeplin.io",
    tags: ["Handoff", "Specs", "Collaboration"],
  },
  {
    id: "balsamiq",
    title: "Balsamiq",
    description:
      "Rapid wireframing tool that reproduces the experience of sketching on a whiteboard.",
    icon: "fa-solid fa-pencil-alt",
    link: "https://balsamiq.com",
    tags: ["Wireframing", "Low-Fidelity", "Paid"],
  },
  {
    id: "axure-rp",
    title: "Axure RP",
    description:
      "Comprehensive wireframing, prototyping, and documentation tool for complex applications.",
    icon: "fa-solid fa-project-diagram",
    link: "https://www.axure.com",
    tags: ["Prototyping", "Documentation", "Paid"],
  },
  {
    id: "framer",
    title: "Framer",
    description:
      "Interactive design tool with code-based components, real-time collaboration, and prototyping.",
    icon: "fa-solid fa-code",
    link: "https://www.framer.com",
    tags: ["Prototyping", "Code", "Collaboration"],
  },
  {
    id: "principle",
    title: "Principle",
    description:
      "Animation and interaction design tool for macOS, perfect for micro-interactions and transitions.",
    icon: "fa-solid fa-film",
    link: "https://principleformac.com",
    tags: ["Animation", "Interactions", "Mac Only"],
  },
  {
    id: "proto-io",
    title: "Proto.io",
    description:
      "Web-based prototyping tool for creating fully interactive high-fidelity mobile and web prototypes.",
    icon: "fa-solid fa-globe",
    link: "https://proto.io",
    tags: ["Prototyping", "Mobile", "Web"],
  },
  {
    id: "uxpin",
    title: "UXPin",
    description:
      "Advanced UX design platform with interactive states, logic, and code components.",
    icon: "fa-solid fa-layer-group",
    link: "https://www.uxpin.com",
    tags: ["UX", "Prototyping", "Design Systems"],
  },
];

// Productivity resources
const productivityResources = [
  // Note-Taking
  {
    id: "notion",
    title: "Notion",
    description:
      "An all-in-one workspace for notes, docs, tasks, and wikis with powerful customization.",
    icon: "fa-solid fa-book",
    link: "https://www.notion.so/",
    category: "Note-Taking",
    tags: ["Notes", "Productivity", "Workspace"],
  },
  {
    id: "obsidian",
    title: "Obsidian",
    description:
      "Markdown-based note-taking app with backlinking and knowledge graph visualization.",
    icon: "fa-solid fa-brain",
    link: "https://obsidian.md/",
    category: "Note-Taking",
    tags: ["Markdown", "Knowledge Base", "Offline"],
  },
  {
    id: "evernote",
    title: "Evernote",
    description:
      "Feature-rich note-taking tool with web clipping, task lists, and notebooks.",
    icon: "fa-solid fa-sticky-note",
    link: "https://evernote.com/",
    category: "Note-Taking",
    tags: ["Clipping", "Organization", "Multimedia Notes"],
  },
  {
    id: "onenote",
    title: "Microsoft OneNote",
    description:
      "Flexible note-taking tool with notebook structure, multimedia support, and syncing.",
    icon: "fa-brands fa-microsoft",
    link: "https://www.onenote.com/",
    category: "Note-Taking",
    tags: ["Notebook", "Ink Support", "Sync"],
  },

  // Task Management
  {
    id: "todoist",
    title: "Todoist",
    description:
      "Simple and intuitive task manager with natural language input and productivity tracking.",
    icon: "fa-solid fa-check-circle",
    link: "https://todoist.com/",
    category: "Task Management",
    tags: ["Tasks", "To-Do", "Priority"],
  },
  {
    id: "ticktick",
    title: "TickTick",
    description:
      "To-do list with Pomodoro timer, habit tracking, and calendar view.",
    icon: "fa-solid fa-list-check",
    link: "https://ticktick.com/",
    category: "Task Management",
    tags: ["Habits", "Pomodoro", "To-Do"],
  },
  {
    id: "microsofttodo",
    title: "Microsoft To Do",
    description: "Simple, cloud-synced task management app from Microsoft.",
    icon: "fa-brands fa-microsoft",
    link: "https://todo.microsoft.com/",
    category: "Task Management",
    tags: ["To-Do", "Reminders", "Lists"],
  },
  {
    id: "things",
    title: "Things 3",
    description:
      "Award-winning macOS/iOS task manager with elegant design and seamless flow.",
    icon: "fa-solid fa-calendar-check",
    link: "https://culturedcode.com/things/",
    category: "Task Management",
    tags: ["Apple", "To-Do", "Premium UX"],
  },

  // Project Management
  {
    id: "trello",
    title: "Trello",
    description:
      "Kanban-style board for managing projects visually with cards and lists.",
    icon: "fa-brands fa-trello",
    link: "https://trello.com/",
    category: "Project Management",
    tags: ["Boards", "Tasks", "Teamwork"],
  },
  {
    id: "clickup",
    title: "ClickUp",
    description:
      "Powerful project management platform with tasks, docs, goals, and time tracking.",
    icon: "fa-solid fa-layer-group",
    link: "https://clickup.com/",
    category: "Project Management",
    tags: ["Tasks", "Docs", "Automation"],
  },
  {
    id: "asana",
    title: "Asana",
    description:
      "Team-oriented task and project manager with timelines, boards, and calendar views.",
    icon: "fa-brands fa-asana",
    link: "https://asana.com/",
    category: "Project Management",
    tags: ["Team", "Workflow", "Tracking"],
  },
  {
    id: "jira",
    title: "Jira",
    description:
      "Agile project management tool popular with software teams for sprints and issue tracking.",
    icon: "fa-brands fa-jira",
    link: "https://www.atlassian.com/software/jira",
    category: "Project Management",
    tags: ["Agile", "Scrum", "DevOps"],
  },

  // Time Management & Focus
  {
    id: "pomofocus",
    title: "Pomofocus",
    description:
      "Minimalist Pomodoro timer app to help stay focused and manage time effectively.",
    icon: "fa-solid fa-clock",
    link: "https://pomofocus.io/",
    category: "Time Management",
    tags: ["Pomodoro", "Focus", "Timer"],
  },
  {
    id: "rescuetime",
    title: "RescueTime",
    description:
      "Automatic time tracking to analyze productivity patterns and focus.",
    icon: "fa-solid fa-chart-line",
    link: "https://www.rescuetime.com/",
    category: "Time Management",
    tags: ["Focus", "Analytics", "Tracking"],
  },
  {
    id: "toggltrack",
    title: "Toggl Track",
    description:
      "One-click time tracking for teams and individuals with reports and billable hours.",
    icon: "fa-solid fa-hourglass-half",
    link: "https://toggl.com/track/",
    category: "Time Management",
    tags: ["Time Logging", "Billable", "Freelancers"],
  },
  {
    id: "forest",
    title: "Forest",
    description:
      "Grow a virtual tree while staying off your phone and focused on work.",
    icon: "fa-solid fa-tree",
    link: "https://www.forestapp.cc/",
    category: "Time Management",
    tags: ["Focus", "Mindfulness", "Pomodoro"],
  },

  // Collaboration & Communication
  {
    id: "slack",
    title: "Slack",
    description:
      "Team chat and communication platform with robust integrations and channels.",
    icon: "fa-brands fa-slack",
    link: "https://slack.com/",
    category: "Collaboration",
    tags: ["Chat", "Teams", "Productivity"],
  },
  {
    id: "zoom",
    title: "Zoom",
    description:
      "High-quality video conferencing with screen sharing and breakout rooms.",
    icon: "fa-solid fa-video",
    link: "https://zoom.us/",
    category: "Collaboration",
    tags: ["Meetings", "Video Call", "Remote Work"],
  },
  {
    id: "googleworkspace",
    title: "Google Workspace",
    description:
      "Docs, Sheets, Slides, and Drive for real-time collaboration and cloud storage.",
    icon: "fa-brands fa-google",
    link: "https://workspace.google.com/",
    category: "Collaboration",
    tags: ["Docs", "Sheets", "Cloud"],
  },
  {
    id: "msteams",
    title: "Microsoft Teams",
    description:
      "Unified communication platform for chat, video meetings, and file collaboration.",
    icon: "fa-brands fa-microsoft",
    link: "https://www.microsoft.com/en/microsoft-teams/group-chat-software",
    category: "Collaboration",
    tags: ["Meetings", "Chat", "Microsoft 365"],
  },

  // Development Tools
  {
    id: "vscode",
    title: "Visual Studio Code",
    description:
      "Free, lightweight code editor with extensions and Git integration.",
    icon: "fa-solid fa-code",
    link: "https://code.visualstudio.com/",
    category: "Development",
    tags: ["Editor", "Extensions", "Open Source"],
  },
  {
    id: "githubcopilot",
    title: "GitHub Copilot",
    description:
      "AI pair programmer that suggests code in real time inside your IDE.",
    icon: "fa-brands fa-github",
    link: "https://github.com/features/copilot",
    category: "Development",
    tags: ["AI", "Coding", "IDE"],
  },
  {
    id: "postman",
    title: "Postman",
    description:
      "API testing, debugging, and documentation tool for developers.",
    icon: "fa-solid fa-terminal",
    link: "https://www.postman.com/",
    category: "Development",
    tags: ["API", "Testing", "Collaboration"],
  },
  {
    id: "replit",
    title: "Replit",
    description:
      "Online IDE to code, collaborate, and deploy projects in the browser.",
    icon: "fa-solid fa-laptop-code",
    link: "https://replit.com/",
    category: "Development",
    tags: ["Browser IDE", "Collaboration", "Multilanguage"],
  },

  // Automation & Integration
  {
    id: "zapier",
    title: "Zapier",
    description:
      "No-code automation platform that connects apps to automate workflows.",
    icon: "fa-solid fa-robot",
    link: "https://zapier.com/",
    category: "Automation",
    tags: ["Workflow", "Integration", "No-Code"],
  },
  {
    id: "ifttt",
    title: "IFTTT",
    description:
      "Create custom 'if this, then that' automations across services and devices.",
    icon: "fa-solid fa-bolt",
    link: "https://ifttt.com/",
    category: "Automation",
    tags: ["Smart Home", "Triggers", "Apps"],
  },
  {
    id: "make",
    title: "Make (Integromat)",
    description:
      "Visual automation builder for complex workflows and custom app logic.",
    icon: "fa-solid fa-diagram-project",
    link: "https://www.make.com/",
    category: "Automation",
    tags: ["Advanced Automation", "Visual", "APIs"],
  },
];

// Web Development resources
const webDevelopmentResources = [
  // Front-End Libraries & Frameworks
  {
    id: "react",
    title: "React",
    description:
      "A declarative, component-based JavaScript library for building user interfaces.",
    icon: "fa-brands fa-react",
    link: "https://reactjs.org/",
    category: "Front-End",
    tags: ["JavaScript", "UI", "SPA"],
  },
  {
    id: "vue",
    title: "Vue.js",
    description:
      "Progressive JavaScript framework for building interactive web interfaces.",
    icon: "fa-brands fa-vuejs",
    link: "https://vuejs.org/",
    category: "Front-End",
    tags: ["JavaScript", "Lightweight", "MVVM"],
  },
  {
    id: "angular",
    title: "Angular",
    description:
      "Full-featured framework for building dynamic, enterprise-grade web apps.",
    icon: "fa-brands fa-angular",
    link: "https://angular.io/",
    category: "Front-End",
    tags: ["JavaScript", "TypeScript", "SPA"],
  },
  {
    id: "svelte",
    title: "Svelte",
    description:
      "Compiler that turns components into highly optimized vanilla JavaScript at build time.",
    icon: "fa-solid fa-fire",
    link: "https://svelte.dev/",
    category: "Front-End",
    tags: ["Lightweight", "Modern", "Reactivity"],
  },

  // Styling & UI Frameworks
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for building custom designs quickly.",
    icon: "fa-solid fa-wind",
    link: "https://tailwindcss.com/",
    category: "Styling",
    tags: ["CSS", "Utility", "Design"],
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    description:
      "Popular CSS framework with prebuilt components and responsive grid system.",
    icon: "fa-brands fa-bootstrap",
    link: "https://getbootstrap.com/",
    category: "Styling",
    tags: ["CSS", "Components", "Responsive"],
  },
  {
    id: "chakraui",
    title: "Chakra UI",
    description: "Accessible and composable component library for React.",
    icon: "fa-solid fa-layer-group",
    link: "https://chakra-ui.com/",
    category: "Styling",
    tags: ["React", "UI", "Accessibility"],
  },

  // Back-End Frameworks
  {
    id: "express",
    title: "Express.js",
    description: "Minimal and flexible Node.js web application framework.",
    icon: "fa-solid fa-server",
    link: "https://expressjs.com/",
    category: "Back-End",
    tags: ["Node.js", "API", "Routing"],
  },
  {
    id: "nextjs",
    title: "Next.js",
    description:
      "React framework for production, with server-side rendering and static site generation.",
    icon: "fa-solid fa-forward",
    link: "https://nextjs.org/",
    category: "Full-Stack",
    tags: ["React", "SSR", "Static Sites"],
  },
  {
    id: "nestjs",
    title: "NestJS",
    description:
      "Progressive Node.js framework for building efficient and scalable server-side applications.",
    icon: "fa-solid fa-cube",
    link: "https://nestjs.com/",
    category: "Back-End",
    tags: ["Node.js", "TypeScript", "Architecture"],
  },
  {
    id: "django",
    title: "Django",
    description:
      "High-level Python web framework that encourages rapid development and clean design.",
    icon: "fa-solid fa-python",
    link: "https://www.djangoproject.com/",
    category: "Back-End",
    tags: ["Python", "ORM", "Security"],
  },
  {
    id: "flask",
    title: "Flask",
    description:
      "Lightweight Python web framework with minimal overhead and flexible architecture.",
    icon: "fa-solid fa-flask",
    link: "https://flask.palletsprojects.com/",
    category: "Back-End",
    tags: ["Python", "Microframework", "REST"],
  },

  // Static Site Generators
  {
    id: "gatsby",
    title: "Gatsby",
    description:
      "React-based static site generator optimized for speed and SEO.",
    icon: "fa-solid fa-rocket",
    link: "https://www.gatsbyjs.com/",
    category: "Static Site Generator",
    tags: ["React", "Static", "SEO"],
  },
  {
    id: "astro",
    title: "Astro",
    description:
      "Static site builder optimized for performance with support for multiple frameworks.",
    icon: "fa-solid fa-meteor",
    link: "https://astro.build/",
    category: "Static Site Generator",
    tags: ["Static", "Multi-Framework", "Performance"],
  },

  // Website Builders (No-Code / Low-Code)
  {
    id: "webflow",
    title: "Webflow",
    description:
      "Visual web design and development tool for building production-ready websites.",
    icon: "fa-solid fa-desktop",
    link: "https://webflow.com/",
    category: "Website Builder",
    tags: ["Visual", "No-Code", "CMS", "Paid"],
  },
  {
    id: "wix",
    title: "Wix",
    description:
      "User-friendly website builder with drag-and-drop functionality.",
    icon: "fa-solid fa-paint-brush",
    link: "https://www.wix.com/",
    category: "Website Builder",
    tags: ["Drag-and-Drop", "No-Code", "Freemium"],
  },
  {
    id: "wordpress",
    title: "WordPress",
    description:
      "Popular CMS for creating websites and blogs with plugins and themes.",
    icon: "fa-brands fa-wordpress",
    link: "https://wordpress.org/",
    category: "Website Builder",
    tags: ["CMS", "Blog", "Open Source"],
  },
  {
    id: "squarespace",
    title: "Squarespace",
    description:
      "All-in-one website builder with beautiful templates and built-in commerce tools.",
    icon: "fa-solid fa-cubes",
    link: "https://www.squarespace.com/",
    category: "Website Builder",
    tags: ["Design", "E-Commerce", "Paid"],
  },

  // Developer Tools
  {
    id: "vscode",
    title: "Visual Studio Code",
    description:
      "Powerful, extensible code editor with debugging, Git, and extension support.",
    icon: "fa-solid fa-code",
    link: "https://code.visualstudio.com/",
    category: "Development Tool",
    tags: ["Editor", "Extensions", "Free"],
  },
  {
    id: "github",
    title: "GitHub",
    description:
      "Cloud-based Git repository hosting and collaboration platform.",
    icon: "fa-brands fa-github",
    link: "https://github.com/",
    category: "Development Tool",
    tags: ["Git", "Version Control", "Open Source"],
  },
  {
    id: "codepen",
    title: "CodePen",
    description:
      "Online code editor for front-end developers to share and test HTML, CSS, and JavaScript.",
    icon: "fa-solid fa-pen-nib",
    link: "https://codepen.io/",
    category: "Development Tool",
    tags: ["Frontend", "Snippets", "Live Preview"],
  },
  {
    id: "netlify",
    title: "Netlify",
    description:
      "Platform for deploying modern static websites and frontend apps.",
    icon: "fa-solid fa-cloud-upload-alt",
    link: "https://www.netlify.com/",
    category: "Hosting",
    tags: ["CI/CD", "Free Tier", "Frontend"],
  },
  {
    id: "vercel",
    title: "Vercel",
    description:
      "Fast global hosting and serverless backend platform for React and static sites.",
    icon: "fa-solid fa-rocket",
    link: "https://vercel.com/",
    category: "Hosting",
    tags: ["Next.js", "Static", "Fast Deploy"],
  },
];

// collboration resources
const collaborationResources = [
  // Communication Platforms
  {
    id: "slack",
    title: "Slack",
    description:
      "Real-time team messaging platform with channels, threads, and app integrations.",
    icon: "fa-brands fa-slack",
    link: "https://slack.com/",
    category: "Communication",
    tags: ["Messaging", "Channels", "Integrations"],
  },
  {
    id: "msteams",
    title: "Microsoft Teams",
    description:
      "Unified platform for team chat, video calls, and file collaboration—integrated with Microsoft 365.",
    icon: "fa-brands fa-microsoft",
    link: "https://www.microsoft.com/en/microsoft-teams/group-chat-software",
    category: "Communication",
    tags: ["Video", "Chat", "Microsoft"],
  },
  {
    id: "discord",
    title: "Discord",
    description:
      "Voice, video, and text communication originally for gamers—now used by communities and teams.",
    icon: "fa-brands fa-discord",
    link: "https://discord.com/",
    category: "Communication",
    tags: ["Voice", "Text", "Community"],
  },
  {
    id: "mattermost",
    title: "Mattermost",
    description:
      "Open-source alternative to Slack with secure, self-hosted team messaging.",
    icon: "fa-solid fa-lock",
    link: "https://mattermost.com/",
    category: "Communication",
    tags: ["Self-Hosted", "Open Source", "Secure"],
  },

  // Video Conferencing
  {
    id: "zoom",
    title: "Zoom",
    description:
      "Reliable video conferencing with HD video, screen sharing, and breakout rooms.",
    icon: "fa-solid fa-video",
    link: "https://zoom.us/",
    category: "Video Conferencing",
    tags: ["Meetings", "Webinars", "Remote"],
  },
  {
    id: "googlemeet",
    title: "Google Meet",
    description:
      "Secure video meetings by Google with calendar integration and no time limits for 1:1 calls.",
    icon: "fa-brands fa-google",
    link: "https://meet.google.com/",
    category: "Video Conferencing",
    tags: ["Google", "Secure", "Video Calls"],
  },
  {
    id: "whereby",
    title: "Whereby",
    description:
      "Simple and browser-based video meetings with custom room URLs.",
    icon: "fa-solid fa-link",
    link: "https://whereby.com/",
    category: "Video Conferencing",
    tags: ["Browser", "Meetings", "Lightweight"],
  },

  // Real-Time Collaboration & Docs
  {
    id: "googleworkspace",
    title: "Google Workspace",
    description:
      "Collaborative tools including Docs, Sheets, Slides, and Drive with real-time editing.",
    icon: "fa-brands fa-google",
    link: "https://workspace.google.com/",
    category: "Real-Time Collaboration",
    tags: ["Docs", "Sheets", "Cloud"],
  },
  {
    id: "notion",
    title: "Notion",
    description:
      "Collaborative all-in-one workspace for notes, databases, wikis, and project planning.",
    icon: "fa-solid fa-book",
    link: "https://www.notion.so/",
    category: "Real-Time Collaboration",
    tags: ["Notes", "Wikis", "Tasks"],
  },
  {
    id: "coda",
    title: "Coda",
    description:
      "Combines documents and spreadsheets into one powerful surface for teams.",
    icon: "fa-solid fa-table",
    link: "https://coda.io/",
    category: "Real-Time Collaboration",
    tags: ["Docs", "Automation", "Tables"],
  },
  {
    id: "quip",
    title: "Quip",
    description:
      "Salesforce's team collaboration tool combining docs, spreadsheets, and chat.",
    icon: "fa-solid fa-comments",
    link: "https://quip.com/",
    category: "Real-Time Collaboration",
    tags: ["Docs", "CRM", "Sales"],
  },

  // Whiteboards & Visual Collaboration
  {
    id: "figjam",
    title: "FigJam",
    description:
      "Online whiteboard by Figma for brainstorming, diagrams, and team ideation.",
    icon: "fa-solid fa-pen-ruler",
    link: "https://www.figma.com/figjam/",
    category: "Whiteboard",
    tags: ["Design", "Visual", "Teamwork"],
  },
  {
    id: "miro",
    title: "Miro",
    description:
      "Visual collaboration platform for mind maps, user flows, and team workshops.",
    icon: "fa-solid fa-chalkboard",
    link: "https://miro.com/",
    category: "Whiteboard",
    tags: ["Remote Work", "Workshops", "Planning"],
  },
  {
    id: "excalidraw",
    title: "Excalidraw",
    description:
      "Open-source virtual whiteboard for sketching diagrams collaboratively in real-time.",
    icon: "fa-solid fa-pencil-ruler",
    link: "https://excalidraw.com/",
    category: "Whiteboard",
    tags: ["Sketching", "Open Source", "Realtime"],
  },

  // File Sharing & Storage
  {
    id: "googledrive",
    title: "Google Drive",
    description:
      "Cloud storage platform with real-time file sharing and collaboration features.",
    icon: "fa-brands fa-google-drive",
    link: "https://drive.google.com/",
    category: "File Sharing",
    tags: ["Cloud", "Docs", "Team"],
  },
  {
    id: "dropbox",
    title: "Dropbox",
    description:
      "File hosting and sharing service with team collaboration tools.",
    icon: "fa-brands fa-dropbox",
    link: "https://dropbox.com/",
    category: "File Sharing",
    tags: ["Cloud", "Sync", "Collaboration"],
  },
  {
    id: "onedrive",
    title: "Microsoft OneDrive",
    description: "File storage and sharing tool integrated with Microsoft 365.",
    icon: "fa-brands fa-microsoft",
    link: "https://onedrive.live.com/",
    category: "File Sharing",
    tags: ["Microsoft", "Sync", "Office"],
  },

  // Project Management & Task Collaboration
  {
    id: "asana",
    title: "Asana",
    description:
      "Project management tool for teams to plan, track, and collaborate on tasks.",
    icon: "fa-brands fa-asana",
    link: "https://asana.com/",
    category: "Project Management",
    tags: ["Tasks", "Timeline", "Workflow"],
  },
  {
    id: "clickup",
    title: "ClickUp",
    description:
      "All-in-one project management and productivity tool with docs, tasks, and goals.",
    icon: "fa-solid fa-layer-group",
    link: "https://clickup.com/",
    category: "Project Management",
    tags: ["Projects", "Docs", "Automation"],
  },
  {
    id: "trello",
    title: "Trello",
    description:
      "Kanban-based task collaboration tool with boards, lists, and cards.",
    icon: "fa-brands fa-trello",
    link: "https://trello.com/",
    category: "Project Management",
    tags: ["Kanban", "Tasks", "Cards"],
  },
  {
    id: "monday",
    title: "Monday.com",
    description:
      "Visual platform for managing team projects, timelines, and workflows.",
    icon: "fa-solid fa-calendar-alt",
    link: "https://monday.com/",
    category: "Project Management",
    tags: ["Teams", "Dashboards", "Custom Workflows"],
  },
];

// code snippet resources
const code_snippet_resources = [
  {
    id: "carbon",
    title: "Carbon",
    description:
      "Create and share beautiful images of your source code with customizable themes and fonts.",
    icon: "fa-solid fa-image",
    link: "https://carbon.now.sh",
    tags: ["Code Snippets", "Styling", "Sharing"],
  },
  {
    id: "snappify",
    title: "Snappify",
    description:
      "Create visually appealing code snippet images for sharing on social media and documentation.",
    icon: "fa-solid fa-image",
    link: "https://snappify.com",
    tags: ["Code Snippets", "Image Export", "Design"],
  },
  {
    id: "codepen",
    title: "CodePen",
    description:
      "An online code editor and social development environment for front-end developers to share and test HTML, CSS, and JS code.",
    icon: "fa-brands fa-codepen",
    link: "https://codepen.io",
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "jsfiddle",
    title: "JSFiddle",
    description:
      "Online playground for testing and sharing HTML, CSS, and JavaScript code snippets in real time.",
    icon: "fa-solid fa-vial",
    link: "https://jsfiddle.net",
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "codesandbox",
    title: "CodeSandbox",
    description:
      "Online code editor for rapid web development, sharing, and collaborative editing of projects and snippets.",
    icon: "fa-solid fa-box",
    link: "https://codesandbox.io",
    tags: ["React", "Vue", "Next.js", "Snippets"],
  },
  {
    id: "replit",
    title: "Replit",
    description:
      "An online IDE and collaborative coding platform where you can write and run code in many languages, and share snippets.",
    icon: "fa-solid fa-code",
    link: "https://replit.com",
    tags: ["Multi-language", "IDE", "Sharing"],
  },
  {
    id: "stackblitz",
    title: "StackBlitz",
    description:
      "Online IDE for web development that lets you build full-stack projects and quickly share code snippets.",
    icon: "fa-solid fa-bolt",
    link: "https://stackblitz.com",
    tags: ["Angular", "React", "Vue", "Web"],
  },
  {
    id: "github-gist",
    title: "GitHub Gist",
    description:
      "A GitHub feature that allows users to store and share code snippets and notes with version control.",
    icon: "fa-brands fa-github",
    link: "https://gist.github.com",
    tags: ["GitHub", "Snippets", "Version Control"],
  },
  {
    id: "glitch",
    title: "Glitch",
    description:
      "Collaborative coding platform for full-stack apps and sharing quick code snippets in Node.js and front-end.",
    icon: "fa-solid fa-bug",
    link: "https://glitch.com",
    tags: ["Full Stack", "Node.js", "Snippets"],
  },
  {
    id: "snippet-generator",
    title: "Snippet Generator",
    description:
      "A simple tool to generate shareable code snippets with visual customizations and syntax highlighting.",
    icon: "fa-solid fa-pen-ruler",
    link: "https://snippet-generator.app",
    tags: ["Visual", "Syntax Highlighting", "Customizable"],
  },
  {
    id: "code-to-image",
    title: "Code to Image",
    description:
      "Convert your code snippets to downloadable images with syntax highlighting and themes.",
    icon: "fa-solid fa-image",
    link: "https://codetoimage.com",
    tags: ["Image", "Highlight", "Snippets"],
  },
  {
    id: "codeimg",
    title: "Codeimg",
    description:
      "Another code to image converter with lots of customization and theme options.",
    icon: "fa-solid fa-brush",
    link: "https://codeimg.io",
    tags: ["Snippets", "Themes", "Images"],
  },
  {
    id: "dartpad",
    title: "DartPad",
    description:
      "Online editor to run and share Dart code, ideal for Flutter or server-side Dart experimentation.",
    icon: "fa-solid fa-mobile",
    link: "https://dartpad.dev",
    tags: ["Dart", "Flutter", "Mobile Dev"],
  },
  {
    id: "playcode",
    title: "PlayCode",
    description:
      "Fast online playground for HTML, CSS, and JavaScript with real-time results and snippet sharing.",
    icon: "fa-solid fa-laptop-code",
    link: "https://playcode.io",
    tags: ["Frontend", "Snippets", "Live Preview"],
  },
  {
    id: "pythonanywhere",
    title: "PythonAnywhere",
    description:
      "Online Python IDE and hosting platform that allows code execution and sharing small Python snippets.",
    icon: "fa-brands fa-python",
    link: "https://www.pythonanywhere.com",
    tags: ["Python", "Snippets", "Execution"],
  },
  {
    id: "ideone",
    title: "Ideone",
    description:
      "Online compiler and debugging tool supporting 60+ languages. Great for code snippet testing.",
    icon: "fa-solid fa-terminal",
    link: "https://ideone.com",
    tags: ["Compiler", "Snippets", "Multi-language"],
  },
  {
    id: "pastebin",
    title: "Pastebin",
    description:
      "Simple text storage site for sharing and storing code snippets, logs, and notes.",
    icon: "fa-solid fa-paste",
    link: "https://pastebin.com",
    tags: ["Snippets", "Text", "Temporary"],
  },
];

// career resources
const careerResources = [
  {
    id: "linkedin",
    title: "LinkedIn",
    description:
      "The world’s largest professional networking platform to connect, share, and find job opportunities.",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com",
    tags: ["Networking", "Jobs", "Professional"],
  },
  {
    id: "glassdoor",
    title: "Glassdoor",
    description:
      "Job search platform featuring company reviews, salary reports, and interview insights.",
    icon: "fa-solid fa-building",
    link: "https://www.glassdoor.com",
    tags: ["Jobs", "Company Reviews", "Salaries"],
  },
  {
    id: "indeed",
    title: "Indeed",
    description:
      "Popular job search engine aggregating listings from thousands of sources worldwide.",
    icon: "fa-solid fa-briefcase",
    link: "https://www.indeed.com",
    tags: ["Jobs", "Search", "Resume"],
  },
  {
    id: "angelist",
    title: "AngelList",
    description:
      "Platform to find startup jobs and investment opportunities with direct applications to founders.",
    icon: "fa-solid fa-rocket",
    link: "https://angel.co",
    tags: ["Startups", "Jobs", "Investors"],
  },
  {
    id: "leetcodesolutions",
    title: "LeetCode",
    description:
      "Platform for coding challenges and interview preparation for technical roles.",
    icon: "fa-solid fa-code",
    link: "https://leetcode.com",
    tags: ["Interview Prep", "Coding Challenges", "Algorithms"],
  },
  {
    id: "interviewbit",
    title: "InterviewBit",
    description:
      "Learn and practice coding interview questions, get company-specific prep and mock interviews.",
    icon: "fa-solid fa-user-graduate",
    link: "https://www.interviewbit.com",
    tags: ["Interview Prep", "Coding", "Mock Interviews"],
  },
  {
    id: "hackerrank",
    title: "HackerRank",
    description:
      "Competitive programming platform for coding challenges and interview preparation.",
    icon: "fa-solid fa-gamepad",
    link: "https://www.hackerrank.com",
    tags: ["Interview Prep", "Challenges", "Coding"],
  },
  {
    id: "resumeio",
    title: "Resume.io",
    description:
      "Create professional resumes and cover letters with templates and easy editing tools.",
    icon: "fa-solid fa-file-lines",
    link: "https://resume.io",
    tags: ["Resume Builder", "Templates", "Cover Letters"],
  },
  {
    id: "zety",
    title: "Zety",
    description:
      "Resume builder and career guidance platform with expert tips and templates.",
    icon: "fa-solid fa-file-pen",
    link: "https://zety.com",
    tags: ["Resume Builder", "Career Advice", "Templates"],
  },
  {
    id: "mentorship",
    title: "Mentorship",
    description:
      "Platform to find professional mentors for career guidance and skills development.",
    icon: "fa-solid fa-handshake",
    link: "https://mentorship.com",
    tags: ["Mentorship", "Career Growth", "Networking"],
  },
  {
    id: "meetup",
    title: "Meetup",
    description:
      "Find and join local or virtual events for networking and skill-building.",
    icon: "fa-solid fa-users",
    link: "https://www.meetup.com",
    tags: ["Networking", "Events", "Community"],
  },
  {
    id: "careerbuilder",
    title: "CareerBuilder",
    description:
      "Job board and career advice platform helping job seekers find employment opportunities.",
    icon: "fa-solid fa-briefcase",
    link: "https://www.careerbuilder.com",
    tags: ["Jobs", "Career Advice", "Resume"],
  },
  {
    id: "wayup",
    title: "WayUp",
    description:
      "Job platform focused on internships, entry-level jobs, and early career opportunities.",
    icon: "fa-solid fa-graduation-cap",
    link: "https://www.wayup.com",
    tags: ["Internships", "Entry Level", "Jobs"],
  },
  {
    id: "vault",
    title: "Vault",
    description:
      "Provides career advice, company rankings, and internship/job listings.",
    icon: "fa-solid fa-university",
    link: "https://www.vault.com",
    tags: ["Career Advice", "Company Rankings", "Jobs"],
  },
  {
    id: "glassdoor",
    title: "Glassdoor",
    description:
      "Company reviews, salary reports, and job listings to help candidates make informed decisions.",
    icon: "fa-solid fa-building",
    link: "https://www.glassdoor.com",
    tags: ["Company Reviews", "Salaries", "Jobs"],
  },
  {
    id: "careercontessa",
    title: "Career Contessa",
    description:
      "Career advice and coaching for women with a focus on work-life balance and growth.",
    icon: "fa-solid fa-female",
    link: "https://www.careercontessa.com",
    tags: ["Career Coaching", "Women", "Advice"],
  },
];

// Featured resources (from various categories)
const featuredResources = [
  {
    id: "chatgpt",
    title: "ChatGPT",
    description:
      "An AI-powered chatbot by OpenAI that can understand and generate human-like text based on the input provided.",
    icon: "fa-solid fa-comment-dots",
    link: "https://chat.openai.com",
    category: "AI Tools",
    tags: ["AI", "Chatbot", "Text Generation"],
  },
  {
    id: "figma",
    title: "Figma",
    description:
      "A collaborative interface design tool that enables multiple designers to work on the same project simultaneously.",
    icon: "fa-brands fa-figma",
    link: "https://www.figma.com",
    category: "Design Tools",
    tags: ["Design", "UI/UX", "Collaboration"],
  },
  {
    id: "freecodecamp",
    title: "freeCodeCamp",
    description:
      "A free, nonprofit platform offering coding challenges, projects, and certifications in web development and more.",
    icon: "fa-brands fa-free-code-camp",
    link: "https://www.freecodecamp.org",
    category: "Learning Resources",
    tags: ["Free", "Web Development", "Certifications"],
  },
  {
    id: "visual-studio-code",
    title: "VS Code",
    description:
      "A lightweight but powerful source code editor with support for various programming languages and extensions.",
    icon: "fa-solid fa-code",
    link: "https://code.visualstudio.com",
    category: "Productivity",
    tags: ["Editor", "IDE", "Extensions"],
  },
];

// Updates data
const updates = [
  {
    id: "update-1",
    date: "2025-05-15",
    title: "New AI Tools Category Added",
    content:
      "We've added a new category focused on AI tools that can help you boost your productivity and creativity.",
    type: "resource",
    tags: ["New Category", "AI Tools"],
  },
  {
    id: "update-2",
    date: "2025-05-10",
    title: "Upcoming Workshop: Web Development Basics",
    content:
      "Join us for a hands-on workshop on web development basics on May 25th. Learn HTML, CSS, and JavaScript fundamentals.",
    type: "event",
    tags: ["Workshop", "Web Development"],
  },
  {
    id: "update-3",
    date: "2025-05-05",
    title: "Recommended Learning Path for Beginners",
    content:
      "Check out our curated learning path for beginners interested in getting started with programming and web development.",
    type: "tip",
    tags: ["Beginners", "Learning Path"],
  },
  {
    id: "update-4",
    date: "2025-04-28",
    title: "Resource Hub Launch",
    content:
      "We're excited to announce the launch of our Resource Hub, a curated collection of tools and resources to help you learn new technologies and boost your productivity.",
    type: "announcement",
    tags: ["Launch", "Announcement"],
  },
];

// All resources (will be populated based on category)
const allResources = {
  "Google-tools": googleToolsResources,
  "ai-tools": aiToolsResources,
  "learning-resources": learningResources,
  "design-tools": designToolsResources,
  productivity: productivityResources,
  "web-development": webDevelopmentResources,
  collaboration: collaborationResources,
  "code-snippets": code_snippet_resources,
  "career-resources": careerResources,

  // Add more categories as needed
};
