// Resource categories data
const categories = [
  {
    id: 'ai-tools',
    title: 'AI Tools',
    description: 'Tools powered by artificial intelligence to boost productivity and creativity',
    icon: 'fa-solid fa-robot',
    color: '#3B82F6', // Primary blue
    count: 8
  },
  {
    id: 'learning-resources',
    title: 'Learning Resources',
    description: 'Platforms and websites to learn new programming skills and technologies',
    icon: 'fa-solid fa-graduation-cap',
    color: '#8B5CF6', // Secondary purple
    count: 12
  },
  {
    id: 'design-tools',
    title: 'Design Tools',
    description: 'Resources for UI/UX design, graphics, and visual content creation',
    icon: 'fa-solid fa-palette',
    color: '#EC4899', // Pink
    count: 10
  },
  {
    id: 'productivity',
    title: 'Productivity',
    description: 'Tools to manage time, tasks, and boost your overall productivity',
    icon: 'fa-solid fa-bolt',
    color: '#F59E0B', // Amber
    count: 9
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Libraries, frameworks, and tools for building modern websites',
    icon: 'fa-solid fa-code',
    color: '#10B981', // Emerald
    count: 15
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'Tools for team communication, project management, and version control',
    icon: 'fa-solid fa-users',
    color: '#6366F1', // Indigo
    count: 7
  },
  {
    id: 'code-snippets',
    title: 'Code Snippets',
    description: 'Useful code snippets, algorithms, and ready-to-use solutions',
    icon: 'fa-solid fa-code-branch',
    color: '#EF4444', // Red
    count: 6
  },
  {
    id: 'career-resources',
    title: 'Career Resources',
    description: 'Job boards, interview prep, and resources for professional growth',
    icon: 'fa-solid fa-briefcase',
    color: '#0EA5E9', // Sky
    count: 8
  }
];

// AI Tools resources
const aiToolsResources = [
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    description: 'An AI-powered chatbot by OpenAI that can understand and generate human-like text based on the input provided.',
    icon: 'fa-solid fa-comment-dots',
    link: 'https://chat.openai.com',
    tags: ['AI', 'Chatbot', 'Text Generation']
  },
  {
    id: 'midjourney',
    title: 'Midjourney',
    description: 'An AI art generator that creates images from textual descriptions, allowing anyone to create stunning visuals without traditional art skills.',
    icon: 'fa-solid fa-image',
    link: 'https://www.midjourney.com',
    tags: ['AI', 'Art', 'Image Generation']
  },
  {
    id: 'github-copilot',
    title: 'GitHub Copilot',
    description: 'An AI pair programmer that helps you write code by suggesting line completions and entire functions as you type.',
    icon: 'fa-brands fa-github',
    link: 'https://github.com/features/copilot',
    tags: ['AI', 'Coding', 'Productivity']
  },
  {
    id: 'hugging-face',
    title: 'Hugging Face',
    description: 'A platform that provides pre-trained models and tools for natural language processing, computer vision, and more.',
    icon: 'fa-solid fa-face-smile',
    link: 'https://huggingface.co',
    tags: ['AI', 'Machine Learning', 'NLP']
  },
  {
    id: 'durable',
    title: 'Durable',
    description: 'AI website builder that creates complete, customizable websites in under 30 seconds.',
    icon: 'fa-solid fa-globe',
    link: 'https://durable.co',
    tags: ['AI', 'Website Builder', 'No-Code']
  },
  {
    id: 'jasper',
    title: 'Jasper',
    description: 'AI-powered copywriting tool that helps you create content for blogs, social media, and marketing.',
    icon: 'fa-solid fa-pen-fancy',
    link: 'https://www.jasper.ai',
    tags: ['AI', 'Content Creation', 'Marketing']
  },
  {
    id: 'supernormal',
    title: 'Supernormal',
    description: 'AI tool that automatically takes meeting notes so you can focus on the conversation.',
    icon: 'fa-solid fa-clipboard',
    link: 'https://supernormal.com',
    tags: ['AI', 'Productivity', 'Meetings']
  },
  {
    id: 'runway',
    title: 'Runway',
    description: 'AI magic tools for content creators, with features for video editing, image generation, and more.',
    icon: 'fa-solid fa-film',
    link: 'https://runwayml.com',
    tags: ['AI', 'Video', 'Creative Tools']
  }
];

// Learning Resources
const learningResources = [
  {
    id: 'freecodecamp',
    title: 'freeCodeCamp',
    description: 'A free, nonprofit platform offering coding challenges, projects, and certifications in web development and more.',
    icon: 'fa-brands fa-free-code-camp',
    link: 'https://www.freecodecamp.org',
    tags: ['Free', 'Web Development', 'Certifications']
  },
  {
    id: 'mdn',
    title: 'MDN Web Docs',
    description: 'Comprehensive documentation and learning resources for web technologies including HTML, CSS, and JavaScript.',
    icon: 'fa-brands fa-firefox-browser',
    link: 'https://developer.mozilla.org',
    tags: ['Documentation', 'Web Development', 'Reference']
  },
  {
    id: 'coursera',
    title: 'Coursera',
    description: 'Online platform offering courses, specializations, and degrees from top universities and companies.',
    icon: 'fa-solid fa-graduation-cap',
    link: 'https://www.coursera.org',
    tags: ['Courses', 'Certifications', 'University']
  },
  {
    id: 'udemy',
    title: 'Udemy',
    description: 'Marketplace for online learning with thousands of courses on programming, design, and more.',
    icon: 'fa-solid fa-chalkboard-teacher',
    link: 'https://www.udemy.com',
    tags: ['Courses', 'Paid', 'Skills']
  },
  {
    id: 'geeksforgeeks',
    title: 'GeeksforGeeks',
    description: 'Platform for computer science resources with tutorials, articles, and practice problems in DSA and more.',
    icon: 'fa-solid fa-laptop-code',
    link: 'https://www.geeksforgeeks.org',
    tags: ['DSA', 'Programming', 'Interview Prep']
  },
  {
    id: 'leetcode',
    title: 'LeetCode',
    description: 'Platform to help you enhance your skills and prepare for technical interviews with coding challenges.',
    icon: 'fa-solid fa-code',
    link: 'https://leetcode.com',
    tags: ['Coding Challenges', 'Interview Prep', 'Algorithms']
  }
];

// Design Tools resources
const designToolsResources = [
  {
    id: 'figma',
    title: 'Figma',
    description: 'A collaborative interface design tool that enables multiple designers to work on the same project simultaneously.',
    icon: 'fa-brands fa-figma',
    link: 'https://www.figma.com',
    tags: ['Design', 'UI/UX', 'Collaboration']
  },
  {
    id: 'canva',
    title: 'Canva',
    description: 'A graphic design platform that allows users to create social media graphics, presentations, posters, and more.',
    icon: 'fa-solid fa-pen-nib',
    link: 'https://www.canva.com',
    tags: ['Design', 'Graphics', 'Templates']
  },
  {
    id: 'adobe-xd',
    title: 'Adobe XD',
    description: 'A vector-based user experience design tool for web apps and mobile apps.',
    icon: 'fa-brands fa-adobe',
    link: 'https://www.adobe.com/products/xd.html',
    tags: ['Design', 'UI/UX', 'Prototyping']
  },
  {
    id: 'sketch',
    title: 'Sketch',
    description: 'A digital design toolkit for macOS that helps you create, prototype, and collaborate on your designs.',
    icon: 'fa-regular fa-object-group',
    link: 'https://www.sketch.com',
    tags: ['Design', 'UI/UX', 'Mac Only']
  },
  {
    id: 'unsplash',
    title: 'Unsplash',
    description: 'A platform for free high-quality, royalty-free images contributed by creators worldwide.',
    icon: 'fa-solid fa-camera',
    link: 'https://unsplash.com',
    tags: ['Images', 'Free', 'Stock Photos']
  },
  {
    id: 'coolors',
    title: 'Coolors',
    description: 'A color scheme generator that allows you to create, browse, and save color palettes.',
    icon: 'fa-solid fa-palette',
    link: 'https://coolors.co',
    tags: ['Colors', 'Design', 'Palettes']
  }
];

// Featured resources (from various categories)
const featuredResources = [
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    description: 'An AI-powered chatbot by OpenAI that can understand and generate human-like text based on the input provided.',
    icon: 'fa-solid fa-comment-dots',
    link: 'https://chat.openai.com',
    category: 'AI Tools',
    tags: ['AI', 'Chatbot', 'Text Generation']
  },
  {
    id: 'figma',
    title: 'Figma',
    description: 'A collaborative interface design tool that enables multiple designers to work on the same project simultaneously.',
    icon: 'fa-brands fa-figma',
    link: 'https://www.figma.com',
    category: 'Design Tools',
    tags: ['Design', 'UI/UX', 'Collaboration']
  },
  {
    id: 'freecodecamp',
    title: 'freeCodeCamp',
    description: 'A free, nonprofit platform offering coding challenges, projects, and certifications in web development and more.',
    icon: 'fa-brands fa-free-code-camp',
    link: 'https://www.freecodecamp.org',
    category: 'Learning Resources',
    tags: ['Free', 'Web Development', 'Certifications']
  },
  {
    id: 'visual-studio-code',
    title: 'VS Code',
    description: 'A lightweight but powerful source code editor with support for various programming languages and extensions.',
    icon: 'fa-solid fa-code',
    link: 'https://code.visualstudio.com',
    category: 'Productivity',
    tags: ['Editor', 'IDE', 'Extensions']
  }
];

// Updates data
const updates = [
  {
    id: 'update-1',
    date: '2025-05-15',
    title: 'New AI Tools Category Added',
    content: 'We\'ve added a new category focused on AI tools that can help you boost your productivity and creativity.',
    type: 'resource',
    tags: ['New Category', 'AI Tools']
  },
  {
    id: 'update-2',
    date: '2025-05-10',
    title: 'Upcoming Workshop: Web Development Basics',
    content: 'Join us for a hands-on workshop on web development basics on May 25th. Learn HTML, CSS, and JavaScript fundamentals.',
    type: 'event',
    tags: ['Workshop', 'Web Development']
  },
  {
    id: 'update-3',
    date: '2025-05-05',
    title: 'Recommended Learning Path for Beginners',
    content: 'Check out our curated learning path for beginners interested in getting started with programming and web development.',
    type: 'tip',
    tags: ['Beginners', 'Learning Path']
  },
  {
    id: 'update-4',
    date: '2025-04-28',
    title: 'Resource Hub Launch',
    content: 'We\'re excited to announce the launch of our Resource Hub, a curated collection of tools and resources to help you learn new technologies and boost your productivity.',
    type: 'announcement',
    tags: ['Launch', 'Announcement']
  }
];

// All resources (will be populated based on category)
const allResources = {
  'ai-tools': aiToolsResources,
  'learning-resources': learningResources,
  'design-tools': designToolsResources
  // Add more categories as needed
};