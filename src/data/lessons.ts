// Complete Learning Path for Beginners

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'concept' | 'hands-on' | 'project';
  content: LessonContent[];
  exercise?: Exercise;
}

export interface LessonContent {
  type: 'text' | 'video' | 'interactive' | 'example' | 'tip' | 'visual';
  title?: string;
  content: string;
  code?: string;
  visual?: string;
}

export interface Exercise {
  type: 'prompt' | 'quiz' | 'build';
  question: string;
  options?: string[];
  correctAnswer?: number;
  hint: string;
  successMessage: string;
}

export const learningPath = {
  title: "Zero to AI: Your First Steps",
  description: "A gentle introduction to AI for complete beginners. No coding required to start.",
  estimatedTime: "4-6 weeks",
  modules: [
    {
      id: "module-1",
      title: "Understanding AI",
      description: "What AI actually is (without the jargon)",
      lessons: ["lesson-1-1", "lesson-1-2", "lesson-1-3"]
    },
    {
      id: "module-2",
      title: "The Art of Prompting",
      description: "How to talk to AI so it understands you",
      lessons: ["lesson-2-1", "lesson-2-2", "lesson-2-3"]
    },
    {
      id: "module-3",
      title: "Meet the Agents",
      description: "Different types of AI agents and what they do",
      lessons: ["lesson-3-1", "lesson-3-2"]
    },
    {
      id: "module-4",
      title: "Your First Code",
      description: "Gentle introduction to reading and writing code",
      lessons: ["lesson-4-1", "lesson-4-2", "lesson-4-3"]
    },
    {
      id: "module-5",
      title: "Build Your First Agent",
      description: "Put it all together in a real project",
      lessons: ["lesson-5-1"]
    }
  ]
};

export const lessons: Record<string, Lesson> = {
  "lesson-1-1": {
    id: "lesson-1-1",
    title: "What is AI, Really?",
    subtitle: "Breaking down the mystery",
    duration: "15 min",
    difficulty: "beginner",
    type: "concept",
    content: [
      {
        type: "text",
        title: "Forget Everything You've Heard",
        content: "AI isn't magic. It's not robots taking over the world. At its simplest, AI is just a computer program that learns patterns from examples.\n\nThink of it like this: When you were a baby, someone showed you pictures of cats and said 'cat' over and over. Eventually, you learned to recognize cats. AI works the same way - we show it millions of examples, and it learns to recognize patterns."
      },
      {
        type: "example",
        title: "Real Example",
        content: "You use AI every day without realizing it:\n• Netflix recommending shows\n• Your phone's autocorrect\n• Spam filters in email\n• Voice assistants like Siri"
      },
      {
        type: "tip",
        content: "💡 Key Insight: AI doesn't 'think' like humans. It recognizes patterns and makes predictions based on what it's seen before."
      },
      {
        type: "interactive",
        title: "Pattern Recognition Exercise",
        content: "Look at this sequence: 2, 4, 6, 8, ?\n\nYou immediately know the next number is 10. That's pattern recognition - the same thing AI does, just with much more complex patterns."
      }
    ],
    exercise: {
      type: "quiz",
      question: "Which of these is NOT an example of AI?",
      options: [
        "A calculator that adds numbers",
        "Netflix suggesting movies you might like",
        "Your email filtering spam",
        "A voice assistant understanding your questions"
      ],
      correctAnswer: 0,
      hint: "Think about what 'learns' vs what just follows fixed rules.",
      successMessage: "Exactly! A calculator follows fixed rules. AI learns from examples. You're getting it!"
    }
  },

  "lesson-1-2": {
    id: "lesson-1-2",
    title: "How AI Learns: The Simple Version",
    subtitle: "Training, without the gym",
    duration: "20 min",
    difficulty: "beginner",
    type: "concept",
    content: [
      {
        type: "text",
        title: "The Three Steps of AI Learning",
        content: "1. **Training**: Show the AI millions of examples (like showing a child thousands of cat pictures)\n\n2. **Testing**: Check if it got it right (show it new pictures it hasn't seen)\n\n3. **Improving**: If it made mistakes, adjust and try again\n\nThis happens millions of times until the AI gets really good at its task."
      },
      {
        type: "visual",
        title: "The Learning Loop",
        content: "Show Examples → AI Makes Guess → Check if Right → Adjust → Repeat"
      },
      {
        type: "example",
        title: "Teaching an AI to Recognize Dogs",
        content: "• Show 100,000 dog photos labeled 'dog'\n• Show 100,000 non-dog photos labeled 'not dog'\n• AI learns: furry + four legs + snout = probably dog\n• Test with new photos it hasn't seen\n• Keep adjusting until it's right 95%+ of the time"
      },
      {
        type: "tip",
        content: "💡 The more examples, the better the AI. That's why big companies have better AI - they have more data."
      }
    ],
    exercise: {
      type: "prompt",
      question: "Imagine you're teaching an AI to recognize pizza. What examples would you show it?",
      hint: "Think about different types of pizza, angles, and what might confuse it.",
      successMessage: "Great thinking! You'd want pepperoni, veggie, different angles, and maybe some non-pizza foods to teach it the difference."
    }
  },

  "lesson-1-3": {
    id: "lesson-1-3",
    title: "Large Language Models (LLMs)",
    subtitle: "The AI you actually use",
    duration: "15 min",
    difficulty: "beginner",
    type: "concept",
    content: [
      {
        type: "text",
        title: "ChatGPT, Claude, and Friends",
        content: "The AI you chat with (like me!) is called a Large Language Model or LLM.\n\nHere's what makes it special:\n• It read billions of web pages, books, and articles\n• It learned patterns in how humans write and speak\n• It can generate human-like text by predicting what words come next"
      },
      {
        type: "example",
        title: "How It Works (Simplified)",
        content: "When you type 'The capital of France is', the AI thinks:\n\n'I've seen this phrase millions of times. The next word is almost always Paris. I'll say Paris.'\n\nIt does this word by word, creating responses that sound natural."
      },
      {
        type: "tip",
        content: "💡 Important: LLMs don't 'know' facts like a database. They predict what sounds right based on patterns. Sometimes they're wrong!"
      },
      {
        type: "interactive",
        title: "Try This",
        content: "Complete this sentence: 'Roses are red, violets are ______'\n\nYou knew 'blue' because you've seen this pattern before. That's exactly what LLMs do!"
      }
    ],
    exercise: {
      type: "quiz",
      question: "What does an LLM do when you ask it a question?",
      options: [
        "It looks up the answer in a database",
        "It predicts what words would make a good response based on patterns it learned",
        "It asks another computer for the answer",
        "It searches Google in real-time"
      ],
      correctAnswer: 1,
      hint: "Remember: LLMs learn patterns, they don't store facts like a filing cabinet.",
      successMessage: "Perfect! You're understanding how these tools actually work. This will help you use them better."
    }
  },

  "lesson-2-1": {
    id: "lesson-2-1",
    title: "The Secret to Good Prompts",
    subtitle: "Why some people get better results than others",
    duration: "20 min",
    difficulty: "beginner",
    type: "hands-on",
    content: [
      {
        type: "text",
        title: "Garbage In, Garbage Out",
        content: "AI is like a very literal assistant. If you're vague, you get vague answers. If you're specific, you get specific answers.\n\nThe difference between a beginner and a pro isn't the AI - it's how they ask."
      },
      {
        type: "example",
        title: "Bad vs Good Prompts",
        content: "❌ BAD: 'Write about dogs'\n   → Generic, boring result\n\n✅ GOOD: 'Write a 200-word blog post about golden retrievers for first-time dog owners. Include tips about exercise needs and grooming. Use a friendly, encouraging tone.'\n   → Specific, useful result"
      },
      {
        type: "text",
        title: "The Formula for Great Prompts",
        content: "Every good prompt has these parts:\n\n1. **Context** - Who/what/where/why\n2. **Task** - What you want it to do\n3. **Format** - How you want it delivered\n4. **Tone** - The style/voice\n5. **Constraints** - Length, things to avoid"
      },
      {
        type: "interactive",
        title: "Practice Time",
        content: "Compare these:\n\nPrompt A: 'Tell me about cooking'\nPrompt B: 'Explain how to cook pasta al dente for someone who's never cooked before. Give step-by-step instructions in a casual, encouraging tone. Keep it under 150 words.'\n\nWhich would give you a better result?"
      }
    ],
    exercise: {
      type: "prompt",
      question: "Rewrite this bad prompt to make it better: 'Write something about travel'",
      hint: "Add context (who is this for?), format (blog post? list?), and constraints (length, tone).",
      successMessage: "Excellent! You're thinking like a prompt engineer. Specificity is everything!"
    }
  },

  "lesson-2-2": {
    id: "lesson-2-2",
    title: "Role Prompting: Give AI a Persona",
    subtitle: "The hack that changes everything",
    duration: "15 min",
    difficulty: "beginner",
    type: "hands-on",
    content: [
      {
        type: "text",
        title: "The Role Trick",
        content: "One of the most powerful prompting techniques is giving the AI a role. When you tell it to act as an expert, it generates responses from that perspective.\n\nInstead of asking 'Explain photosynthesis', try:\n'Act as a 5th-grade science teacher and explain photosynthesis in a way that kids will understand and find exciting.'"
      },
      {
        type: "example",
        title: "Role Prompts That Work",
        content: "• 'Act as a senior software engineer reviewing my code...'\n• 'You are a marketing expert with 20 years of experience...'\n• 'Pretend you're a chef teaching a cooking class...'\n• 'As a career counselor, help me decide...'"
      },
      {
        type: "tip",
        content: "💡 The more specific the role, the better the result. 'Expert' is good. 'Expert who specializes in X and has done Y for 10 years' is better."
      },
      {
        type: "interactive",
        title: "Try Different Roles",
        content: "Take the same question: 'Should I learn Python or JavaScript first?'\n\nNow ask it from these perspectives:\n• As a computer science professor\n• As a startup founder\n• As a career changer in their 40s\n\nNotice how the answers differ?"
      }
    ],
    exercise: {
      type: "prompt",
      question: "Write a role prompt asking for advice about changing careers to tech. Make the role specific!",
      hint: "Instead of just 'career coach', try 'tech career coach who specializes in helping people transition from non-technical backgrounds'.",
      successMessage: "Perfect! You're learning to control the AI's perspective. This is a game-changer!"
    }
  },

  "lesson-2-3": {
    id: "lesson-2-3",
    title: "Chain of Thought: Making AI Show Its Work",
    subtitle: "Get better answers by asking for the process",
    duration: "20 min",
    difficulty: "intermediate",
    type: "hands-on",
    content: [
      {
        type: "text",
        title: "The Problem with Direct Answers",
        content: "Sometimes AI gives wrong answers confidently. The solution? Ask it to think step by step.\n\nWhen you make the AI show its reasoning, two things happen:\n1. You can catch mistakes in its logic\n2. The final answer is usually more accurate"
      },
      {
        type: "example",
        title: "Chain of Thought in Action",
        content: "❌ Direct: 'If a train travels 60 mph for 2.5 hours, how far does it go?'\n   → Might just say '150 miles' (which is wrong - it's 150, not 150 miles wait... actually that's right)\n\n✅ With reasoning: 'Solve this step by step: If a train travels 60 mph for 2.5 hours, how far does it go? Show your work.'\n   → Step 1: Distance = Speed × Time\n   → Step 2: 60 × 2.5 = 150\n   → Answer: 150 miles"
      },
      {
        type: "text",
        title: "The Magic Words",
        content: "Add these phrases to get better reasoning:\n\n• 'Think step by step'\n• 'Explain your reasoning'\n• 'Walk me through your thought process'\n• 'Before answering, consider...'\n• 'Let's break this down'"
      },
      {
        type: "tip",
        content: "💡 This technique is especially powerful for math, logic puzzles, complex decisions, and creative problem-solving."
      }
    ],
    exercise: {
      type: "prompt",
      question: "Rewrite this prompt to get step-by-step reasoning: 'Should I buy or rent a house?'",
      hint: "Ask it to consider factors, compare options, and walk through the decision process.",
      successMessage: "Great job! Now you'll get a thoughtful analysis instead of a simple 'it depends'!"
    }
  },

  "lesson-3-1": {
    id: "lesson-3-1",
    title: "What Are AI Agents?",
    subtitle: "AI that can DO things, not just talk",
    duration: "20 min",
    difficulty: "beginner",
    type: "concept",
    content: [
      {
        type: "text",
        title: "Beyond Chatting",
        content: "Regular AI (like ChatGPT) just talks. It answers questions and writes text, but that's it.\n\nAI Agents are different. They can:\n• Use tools (search the web, run code, send emails)\n• Make decisions (decide what to do next)\n• Take actions (actually DO things, not just suggest them)\n• Work autonomously (keep working on a task without you)"
      },
      {
        type: "example",
        title: "Agent in Action",
        content: "You ask: 'Plan a 3-day trip to Tokyo'\n\nRegular AI: Gives you a list of suggestions.\n\nAI Agent:\n1. Searches for flights and finds the best prices\n2. Looks up hotels in good locations\n3. Checks weather forecasts\n4. Finds popular restaurants and makes reservations\n5. Creates a day-by-day itinerary\n6. Emails you the complete plan\n\nAll automatically."
      },
      {
        type: "visual",
        title: "The Agent Loop",
        content: "Think → Decide → Act → Observe → Repeat\n\nAn agent keeps looping until the task is done."
      },
      {
        type: "tip",
        content: "💡 Think of it this way: ChatGPT is a smart advisor. An agent is a smart assistant who actually does the work."
      }
    ],
    exercise: {
      type: "quiz",
      question: "What's the main difference between ChatGPT and an AI Agent?",
      options: [
        "Agents are more expensive",
        "Agents can take actions and use tools, not just talk",
        "Agents are faster",
        "Agents are only for businesses"
      ],
      correctAnswer: 1,
      hint: "Think about what each one can actually DO vs what they can say.",
      successMessage: "Exactly! The key difference is capability. Agents can actually get things done!"
    }
  },

  "lesson-3-2": {
    id: "lesson-3-2",
    title: "Types of Agents You'll Build",
    subtitle: "From simple to complex",
    duration: "25 min",
    difficulty: "beginner",
    type: "concept",
    content: [
      {
        type: "text",
        title: "The Agent Spectrum",
        content: "Not all agents are equally smart. They range from simple to complex:\n\n**Level 1: Simple Agents**\nFollow a fixed set of rules. If X happens, do Y.\n\n**Level 2: Tool-Using Agents**\nCan use tools like search, calculators, APIs.\n\n**Level 3: Reasoning Agents**\nThink through problems step by step.\n\n**Level 4: Autonomous Agents**\nMake their own decisions about what to do next."
      },
      {
        type: "example",
        title: "Examples of Each Type",
        content: "**Simple**: A chatbot that answers FAQs from a fixed list\n\n**Tool-Using**: An agent that searches the web, then summarizes what it finds\n\n**Reasoning**: An agent that breaks down a complex problem, solves each part, then combines the answers\n\n**Autonomous**: An agent given a goal like 'grow my business' that decides what tasks to do, learns from results, and keeps improving"
      },
      {
        type: "interactive",
        title: "Which Type Do You Need?",
        content: "Think about these tasks:\n\n1. Answer customer questions about store hours\n2. Research competitors and write a report\n3. Manage your entire social media presence\n\nWhat level of agent would each need?"
      }
    ],
    exercise: {
      type: "prompt",
      question: "Describe a task you'd want an agent to help with. What level of complexity would it need?",
      hint: "Think about whether it needs tools, reasoning, or full autonomy.",
      successMessage: "Great thinking! Understanding the complexity level helps you choose the right tools."
    }
  },

  "lesson-4-1": {
    id: "lesson-4-1",
    title: "Reading Code (Without Panic)",
    subtitle: "It's less scary than it looks",
    duration: "25 min",
    difficulty: "beginner",
    type: "hands-on",
    content: [
      {
        type: "text",
        title: "Code is Just Instructions",
        content: "Think of code like a recipe. Just as a recipe tells a chef what to do step by step, code tells a computer what to do.\n\nThe computer is very literal - it does exactly what you say, nothing more, nothing less."
      },
      {
        type: "example",
        title: "Your First Code Reading",
        content: "```python\nname = 'Alice'\nage = 30\nprint(f'Hello, {name}! You are {age} years old.')\n```\n\nLet's break this down:\n• `name = 'Alice'` - Create a box called 'name' and put 'Alice' in it\n• `age = 30` - Create a box called 'age' and put 30 in it\n• `print(...)` - Show this on screen\n• `f'Hello...'` - Fill in the blanks with what's in those boxes\n\nOutput: 'Hello, Alice! You are 30 years old.'"
      },
      {
        type: "text",
        title: "Key Concepts to Know",
        content: "**Variables**: Boxes that hold data (name, age, total)\n\n**Functions**: Named blocks of code that do something (print, search, calculate)\n\n**Conditions**: If/else statements (if it's raining, bring an umbrella)\n\n**Loops**: Do something repeatedly (for each item in the list, do X)"
      },
      {
        type: "interactive",
        title: "Try Reading This",
        content: "```python\nif age >= 18:\n    print('You can vote!')\nelse:\n    print('Too young to vote.')\n```\n\nEven if you've never seen code, you can probably guess what this does!"
      }
    ],
    exercise: {
      type: "quiz",
      question: "What will this code print?\n```\nname = 'Sam'\nprint(f'Hi {name}!')\n```",
      options: [
        "Hi name!",
        "Hi Sam!",
        "name = Sam",
        "Error"
      ],
      correctAnswer: 1,
      hint: "The f before the string means 'fill in the blanks with the variable values'.",
      successMessage: "You just read code! See? It's not as scary as it seemed."
    }
  },

  "lesson-4-2": {
    id: "lesson-4-2",
    title: "Your First Lines of Code",
    subtitle: "Actually writing something that works",
    duration: "30 min",
    difficulty: "beginner",
    type: "hands-on",
    content: [
      {
        type: "text",
        title: "Let's Write Something Real",
        content: "You're going to write a simple greeting program. Type this exactly (don't worry about understanding every detail yet):\n\n```python\n# Ask for the user's name\nname = input('What is your name? ')\n\n# Create a greeting\ngreeting = f'Hello, {name}! Welcome to AI.'\n\n# Show the greeting\nprint(greeting)\n```\n\nWhen you run this, it will:\n1. Ask for your name\n2. Store what you type\n3. Create a personalized greeting\n4. Show it on screen"
      },
      {
        type: "tip",
        content: "💡 The `#` lines are comments - they're just notes for humans, the computer ignores them."
      },
      {
        type: "example",
        title: "What Each Line Does",
        content: "`name = input(...)`\n→ Pause and wait for the user to type something\n→ Store what they typed in the 'name' box\n\n`greeting = f'Hello...'`\n→ Create a new message using what's in the 'name' box\n→ Store it in the 'greeting' box\n\n`print(greeting)`\n→ Show the contents of the 'greeting' box on screen"
      },
      {
        type: "interactive",
        title: "Modify It",
        content: "Try changing the greeting to ask how they're doing:\n\n```python\nname = input('What is your name? ')\nprint(f'Hello {name}! How are you today?')\n```\n\nSmall changes like this help you build confidence!"
      }
    ],
    exercise: {
      type: "build",
      question: "In the sandbox, write a program that asks for someone's favorite color and responds with 'Blue is a great choice!' (but use their actual color)",
      hint: "Use input() to ask, store it in a variable, then use an f-string to include it in your response.",
      successMessage: "You wrote code that interacts with a user! That's a real program! 🎉"
    }
  },

  "lesson-4-3": {
    id: "lesson-4-3",
    title: "Building a Simple Agent",
    subtitle: "Putting concepts together",
    duration: "35 min",
    difficulty: "intermediate",
    type: "hands-on",
    content: [
      {
        type: "text",
        title: "Your First Agent",
        content: "You're going to build a simple calculator agent. It will:\n1. Ask what operation you want (+, -, *, /)\n2. Ask for two numbers\n3. Do the calculation\n4. Show the result\n\nThis teaches you: variables, input, conditions, and output."
      },
      {
        type: "example",
        title: "The Code",
        content: "```python\n# Simple Calculator Agent\nprint('I am a calculator agent!')\n\n# Get inputs\noperation = input('What operation? (+, -, *, /): ')\nnum1 = float(input('First number: '))\nnum2 = float(input('Second number: '))\n\n# Do the calculation\nif operation == '+':\n    result = num1 + num2\nelif operation == '-':\n    result = num1 - num2\nelif operation == '*':\n    result = num1 * num2\nelif operation == '/':\n    result = num1 / num2\nelse:\n    result = 'Unknown operation'\n\n# Show result\nprint(f'Result: {result}')\n```"
      },
      {
        type: "text",
        title: "New Concepts Here",
        content: "`float(input(...))` - Convert text to a number (so you can do math)\n\n`if/elif/else` - Check conditions and do different things\n\n`==` - Check if two things are equal (single `=` is for assignment, double `==` is for comparison)"
      },
      {
        type: "tip",
        content: "💡 Don't worry if you don't memorize this. Real programmers look things up constantly. Understanding the logic matters more than memorizing syntax."
      }
    ],
    exercise: {
      type: "build",
      question: "Add a feature to the calculator: After showing the result, ask if they want to do another calculation. If they type 'yes', start over.",
      hint: "You'll need a loop. Look up 'while loop in python' for help!",
      successMessage: "You just added a loop! Your agent can now work continuously. That's a huge step!"
    }
  },

  "lesson-5-1": {
    id: "lesson-5-1",
    title: "Your First Real Project: Personal Assistant",
    subtitle: "Put everything together",
    duration: "45 min",
    difficulty: "intermediate",
    type: "project",
    content: [
      {
        type: "text",
        title: "What You're Building",
        content: "A simple personal assistant agent that can:\n1. Greet you by name\n2. Tell you the current time\n3. Answer simple questions (using if/else)\n4. Remember your preferences\n\nThis combines everything you've learned!"
      },
      {
        type: "example",
        title: "Starter Template",
        content: "```python\nimport datetime\n\nprint('🤖 Personal Assistant Starting...')\nname = input('What is your name? ')\nprint(f'Hello {name}! I am your assistant.')\n\nwhile True:\n    command = input('\\nWhat can I do? (time/quit): ').lower()\n    \n    if command == 'time':\n        current_time = datetime.datetime.now()\n        print(f'It is {current_time.strftime(\"%I:%M %p\")}')\n    \n    elif command == 'quit':\n        print(f'Goodbye {name}!')\n        break\n    \n    else:\n        print('I don\\'t understand that command yet.')\n```"
      },
      {
        type: "text",
        title: "Features to Add",
        content: "Make it yours by adding:\n\n• **Weather** - Ask 'weather' and it gives a random forecast\n• **Joke** - Ask 'joke' and it tells one from a list\n• **Reminder** - Type 'remind [task]' and it stores it\n• **Greeting** - Say 'good morning' and it responds based on actual time\n\nEach feature teaches you something new!"
      },
      {
        type: "tip",
        content: "💡 Start small. Get the basic version working first, then add one feature at a time. This is how real developers work!"
      },
      {
        type: "interactive",
        title: "Challenge Ideas",
        content: "Want to go further? Try:\n\n• Make it remember your favorite color and mention it sometimes\n• Add a simple calculator ('calc 5 + 3')\n• Create a to-do list it can add to and show\n• Make it tell you how many days until your birthday"
      }
    ],
    exercise: {
      type: "build",
      question: "Build your personal assistant with at least 3 working features. Test each one!",
      hint: "Start with the template, get 'time' and 'quit' working, then add your own features one by one.",
      successMessage: "🎉 YOU BUILT AN AI AGENT! From zero to this - that's incredible! You now have the foundation to build anything."
    }
  }
};

// Career paths with clear milestones
export const careerPaths = {
  "ai-enthusiast": {
    title: "AI Enthusiast",
    description: "Use AI tools effectively in your current work",
    timeline: "2-4 weeks",
    milestones: [
      { week: 1, goal: "Master prompting basics", skills: ["prompt engineering", "role prompting"] },
      { week: 2, goal: "Use AI for daily tasks", skills: ["email writing", "research", "brainstorming"] },
      { week: 3, goal: "Build simple automations", skills: ["no-code tools", "AI integrations"] },
      { week: 4, goal: "Teach others on your team", skills: ["AI literacy", "training"] }
    ],
    salary: "Enhanced current role",
    roles: ["Any role + AI skills"]
  },

  "prompt-engineer": {
    title: "Prompt Engineer",
    description: "Specialist in getting the best results from AI systems",
    timeline: "2-3 months",
    milestones: [
      { week: 2, goal: "Complete prompting fundamentals", skills: ["chain of thought", "few-shot prompting"] },
      { week: 4, goal: "Build prompt libraries", skills: ["prompt templates", "versioning"] },
      { week: 8, goal: "Create AI workflows", skills: ["multi-step prompts", "error handling"] },
      { week: 12, goal: "Optimize for production", skills: ["cost optimization", "reliability"] }
    ],
    salary: "$80k - $150k",
    roles: ["Prompt Engineer", "AI Specialist", "AI Product Manager"]
  },

  "ai-developer": {
    title: "AI Developer",
    description: "Build applications and agents with AI capabilities",
    timeline: "4-6 months",
    milestones: [
      { month: 1, goal: "Learn Python basics", skills: ["variables", "functions", "loops"] },
      { month: 2, goal: "Work with AI APIs", skills: ["API calls", "response handling", "error management"] },
      { month: 3, goal: "Build first agent", skills: ["agent loops", "tool use", "memory"] },
      { month: 4, goal: "Create full applications", skills: ["web frameworks", "databases", "deployment"] },
      { month: 5, goal: "Production-ready systems", skills: ["testing", "monitoring", "scaling"] },
      { month: 6, goal: "Portfolio + job ready", skills: ["3+ projects", "GitHub", "technical interviews"] }
    ],
    salary: "$100k - $180k",
    roles: ["AI Engineer", "Agent Developer", "ML Engineer"]
  },

  "agent-architect": {
    title: "Agent Architect",
    description: "Design complex multi-agent systems for enterprises",
    timeline: "6-12 months",
    milestones: [
      { month: 2, goal: "Master agent patterns", skills: ["ReAct", "plan-and-execute", "reflection"] },
      { month: 4, goal: "Build multi-agent systems", skills: ["agent communication", "coordination", "consensus"] },
      { month: 6, goal: "Enterprise integration", skills: ["security", "compliance", "scalability"] },
      { month: 9, goal: "Lead AI initiatives", skills: ["architecture design", "team leadership"] },
      { month: 12, goal: "Industry expert", skills: ["speaking", "consulting", "innovation"] }
    ],
    salary: "$150k - $300k+",
    roles: ["Principal AI Engineer", "AI Architect", "Chief AI Officer"]
  }
};

// Quick reference cheat sheets
export const cheatSheets = {
  prompting: {
    title: "Prompt Engineering Quick Reference",
    sections: [
      {
        title: "The Basic Formula",
        content: "Context + Task + Format + Tone + Constraints\n\nExample:\n'As a nutritionist [context], create a 7-day meal plan [task] in a table format [format] with a supportive tone [tone]. Keep it under 500 words and avoid red meat [constraints].'"
      },
      {
        title: "Power Phrases",
        content: "• 'Think step by step' - Better reasoning\n• 'Explain like I'm 5' - Simple explanations\n• 'Give me 3 options' - Multiple choices\n• 'Be concise' - Shorter responses\n• 'Show your work' - Transparency"
      },
      {
        title: "Role Prompting",
        content: "Start with:\n• 'Act as a [specific expert]...'\n• 'You are a [role] with [experience]...'\n• 'Pretend you're [persona]...'\n\nMore specific = better results"
      }
    ]
  },

  agents: {
    title: "Agent Building Patterns",
    sections: [
      {
        title: "The ReAct Pattern",
        content: "Reason → Act → Observe → Repeat\n\n1. Think about the problem\n2. Choose an action/tool\n3. Observe the result\n4. Repeat until solved"
      },
      {
        title: "Tool Use Structure",
        content: "```python\n# Define available tools\ntools = [search, calculator, email]\n\n# Agent loop\nwhile not done:\n    thought = agent.think(query)\n    action = agent.choose_action(thought, tools)\n    result = action.execute()\n    agent.observe(result)\n```"
      },
      {
        title: "Memory Types",
        content: "• Short-term: Current conversation\n• Long-term: Facts about user\n• Working: Current task context\n• Episodic: Past interactions"
      }
    ]
  },

  python: {
    title: "Python Basics for AI",
    sections: [
      {
        title: "Variables & Types",
        content: "```python\nname = 'Alice'      # String (text)\nage = 30            # Integer (whole number)\nprice = 19.99       # Float (decimal)\nis_active = True    # Boolean (True/False)\n```"
      },
      {
        title: "Input & Output",
        content: "```python\n# Get input from user\nname = input('Your name: ')\n\n# Show output\nprint(f'Hello, {name}!')\n```"
      },
      {
        title: "Conditions",
        content: "```python\nif age >= 18:\n    print('Adult')\nelif age >= 13:\n    print('Teenager')\nelse:\n    print('Child')\n```"
      },
      {
        title: "Loops",
        content: "```python\n# Repeat 5 times\nfor i in range(5):\n    print(i)\n\n# Repeat while condition is true\nwhile running:\n    do_something()\n```"
      }
    ]
  }
};
