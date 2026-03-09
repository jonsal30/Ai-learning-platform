// Complete AI Learning Path for Creative Professionals
// All 11 lessons with full content, assessments, and projects

export interface AdvancedLesson {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  difficulty: 'intermediate' | 'advanced' | 'expert';
  prerequisites: string[];
  content: LessonSection[];
  quiz?: QuizQuestion[];
  project?: Project;
  resources: Resource[];
}

export interface LessonSection {
  type: 'overview' | 'deep-dive' | 'code-along' | 'case-study' | 'analysis' | 'workshop' | 'project';
  title: string;
  content: string;
  code?: string;
  visualAids?: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Project {
  title: string;
  description: string;
  deliverables: string[];
  evaluationCriteria: string[];
  template?: string;
}

export interface Resource {
  title: string;
  type: 'article' | 'video' | 'paper' | 'tool' | 'repo';
  url: string;
  description: string;
}

export const creativeAIPath = {
  title: "AI for Creative Professionals",
  subtitle: "From practitioner to AI-augmented creator",
  description: "A rigorous path for artists, designers, and educators to master AI tools, build generative systems, and create portfolio-worthy projects.",
  estimatedTime: "8-12 weeks",
  outcomes: [
    "Build working AI agents for creative workflows",
    "Understand generative models (Diffusion, GANs, Transformers)",
    "Create AI-augmented art pieces",
    "Deploy interactive AI art installations",
    "Teach AI concepts to others"
  ],
  modules: [
    {
      id: "module-c1",
      title: "The Current AI Landscape",
      description: "Mapping the ecosystem: models, companies, and trends",
      lessons: ["lesson-c1-1", "lesson-c1-2"]
    },
    {
      id: "module-c2",
      title: "Generative Models Deep Dive",
      description: "How diffusion models, GANs, and transformers actually work",
      lessons: ["lesson-c2-1", "lesson-c2-2", "lesson-c2-3"]
    },
    {
      id: "module-c3",
      title: "Creative Coding Foundations",
      description: "Python for artists: processing, p5.js, and creative frameworks",
      lessons: ["lesson-c3-1", "lesson-c3-2"]
    },
    {
      id: "module-c4",
      title: "Building Creative Agents",
      description: "Agents that assist creative workflows",
      lessons: ["lesson-c4-1", "lesson-c4-2"]
    },
    {
      id: "module-c5",
      title: "Portfolio Projects",
      description: "Build and deploy real AI art projects",
      lessons: ["lesson-c5-1", "lesson-c5-2"]
    }
  ]
};

export const advancedLessons: Record<string, AdvancedLesson> = {

  "lesson-c1-1": {
    id: "lesson-c1-1",
    title: "Mapping the AI Ecosystem: 2026",
    subtitle: "The players, models, and forces shaping AI",
    duration: "45 min",
    difficulty: "intermediate",
    prerequisites: [],
    content: [
      {
        type: "overview",
        title: "The Three Layers",
        content: `The AI stack has three distinct layers, each with its own dynamics and key players:

**1. Foundation Models**
The base intelligence that powers everything:
• OpenAI: GPT-4, DALL-E 3, Sora
• Anthropic: Claude 3 (Haiku, Sonnet, Opus)
• Google: Gemini, Imagen
• Meta: Llama 2, 3 (open weights)
• Stability AI: Stable Diffusion, Stable Video
• Midjourney: Proprietary image generation

**2. Infrastructure**
The compute and tools that make AI accessible:
• NVIDIA: GPUs (A100, H100), CUDA ecosystem
• Cloud providers: AWS SageMaker, Google Vertex, Azure ML
• Hugging Face: Model hub, Transformers library, inference API
• Weights & Biases: Experiment tracking
• LangChain, LlamaIndex: Application frameworks

**3. Applications**
The user-facing products you actually use:
• ChatGPT, Claude.ai: Conversational AI
• Runway, Pika: Video generation
• Adobe Firefly: Creative tools integration
• Canva, Figma: Design tools with AI
• Custom agents built for specific workflows`
      },
      {
        type: "analysis",
        title: "The Open vs. Closed Divide",
        content: `The most important strategic dynamic in AI right now:

**Closed (API-only)**
• OpenAI (GPT-4, DALL-E)
• Anthropic (Claude)
• Midjourney
• Google (Gemini)

**Pros:**
- Best performance (frontier models)
- Managed infrastructure (no setup)
- Regular updates and improvements
- Safety guardrails built-in

**Cons:**
- Vendor lock-in (cannot switch easily)
- Usage costs (per token/image)
- Black box (cannot inspect/modify)
- Rate limits and quotas
- Data privacy concerns

**Open (Weights Available)**
• Meta (Llama series)
• Stability AI (Stable Diffusion)
• Mistral, Mixtral
• Hugging Face ecosystem

**Pros:**
- Run locally (no internet needed)
- Fine-tune on your data
- No API costs after setup
- Full control and customization
- Privacy (data stays local)

**Cons:**
- Requires technical setup
- Often lower performance than closed
- No automatic updates
- Compute costs (need GPU)
- You are responsible for safety

**For creative professionals:** Open models are increasingly viable for art projects. You can run Stable Diffusion locally for free, fine-tune on your own style, and build without worrying about API costs or data privacy.`
      },
      {
        type: "case-study",
        title: "Case Study: The Rise of AI Art Tools",
        content: `Timeline of AI art's mainstream adoption:

**2021: The Foundation**
• DALL-E 1 released (January) - first text-to-image that worked
• CLIP released by OpenAI - connects text and images

**2022: The Explosion**
• April: DALL-E 2 - photorealistic images
• August: Stable Diffusion open-sourced
• September: Midjourney v3 - artists begin adopting

**2023: Control and Refinement**
• February: ControlNet released
• March: GPT-4 multimodal
• July: SDXL released

**2024-2025: Motion and Multimodal**
• Runway Gen-2, Pika Labs - video generation
• Sora announced - near-cinematic video
• Real-time diffusion - generate in milliseconds

**Key insight:** Each leap came from either a model breakthrough or a control mechanism. The pattern is clear: capability first, then control, then integration into professional workflows.`
      },
      {
        type: "deep-dive",
        title: "Forces Shaping 2026",
        content: `What to watch as you build your AI career:

**1. Multimodal Everything**
Models that seamlessly handle text, image, audio, video together.

**2. Agentic AI**
AI that takes actions, not just generates content.

**3. On-Device AI**
Running models locally for privacy and speed.

**4. Regulation and Copyright**
The legal landscape is still forming.

**5. Compute Constraints**
Training frontier models costs $100M+, driving efficiency research.

**What this means for you:** The window to establish yourself in AI is now. The tools are mature enough to be useful, but the field is still new enough that you can become an expert.`
      }
    ],
    quiz: [
      {
        question: "Which of the following is an OPEN model (weights available)?",
        options: ["GPT-4", "Claude 3", "Stable Diffusion", "Midjourney"],
        correctAnswer: 2,
        explanation: "Stable Diffusion is open-source. GPT-4, Claude 3, and Midjourney are closed/proprietary."
      },
      {
        question: "What was the key breakthrough in 2022 that made AI art accessible to everyone?",
        options: ["DALL-E 2 release", "Stable Diffusion open-sourcing", "ControlNet release", "GPT-4 announcement"],
        correctAnswer: 1,
        explanation: "Stable Diffusion was open-sourced in August 2022, allowing anyone to run it locally for free."
      },
      {
        question: "What is the main advantage of closed (API-only) models?",
        options: ["You can modify them", "No setup required", "They are free", "You own the weights"],
        correctAnswer: 1,
        explanation: "Closed models require no setup - you just call an API. But you cannot modify them, they cost money, and you don't own the weights."
      }
    ],
    resources: [
      {
        title: "State of AI Report 2025",
        type: "paper",
        url: "https://www.stateof.ai",
        description: "Annual comprehensive analysis of AI research and industry"
      },
      {
        title: "Hugging Face Models",
        type: "tool",
        url: "https://huggingface.co/models",
        description: "Repository of open-source AI models"
      },
      {
        title: "AI Timeline Visualization",
        type: "article",
        url: "https://www.visualcapitalist.com/cp/the-ai-revolution/",
        description: "Visual history of AI development"
      }
    ]
  },

  "lesson-c1-2": {
    id: "lesson-c1-2",
    title: "Agent Categories & Real-World Applications",
    subtitle: "From simple reflex to autonomous multi-agent systems",
    duration: "60 min",
    difficulty: "intermediate",
    prerequisites: ["lesson-c1-1"],
    content: [
      {
        type: "overview",
        title: "The Agent Spectrum",
        content: `Not all 'agents' are created equal. Understanding the taxonomy helps you choose the right approach:

**Level 1: Tool-Using Agents**
LLM + API access. Can search, calculate, query databases.
Example: ChatGPT with browsing

**Level 2: Reasoning Agents**
Break problems into steps, reflect on solutions.
Example: ReAct pattern agents

**Level 3: Planning Agents**
Create multi-step plans, execute, adapt.

**Level 4: Autonomous Agents**
Set goals, work independently, learn from feedback.

**Level 5: Multi-Agent Systems**
Multiple agents collaborating, debating, specializing.`
      },
      {
        type: "deep-dive",
        title: "The ReAct Pattern (Reason + Act)",
        content: `The most important agent pattern to understand:

**The Loop:**
1. Thought: Given the goal and previous observations, what should I do?
2. Action: Choose a tool/action
3. Observation: Execute action, observe result
4. Repeat until goal achieved

**Why it works:**
Separates reasoning from action. The LLM can 'think' about the problem, then choose the right tool, then incorporate results into its reasoning.`
      },
      {
        type: "case-study",
        title: "Case Study: Creative Workflow Agent",
        content: `A system for creating concept art with consistent style:

**Components:**
1. Style Analyzer - Extracts style from references
2. Prompt Engineer - Optimizes prompts for consistency
3. Image Generator - Creates images using SD + ControlNet
4. Variation Creator - Generates variations
5. Asset Manager - Organizes files and metadata
6. Feedback Integrator - Updates based on human feedback`
      },
      {
        type: "workshop",
        title: "Workshop: Design Your First Agent",
        content: `Design an agent for a creative task you do regularly:

**Step 1:** Identify a repetitive creative task
**Step 2:** Break it into steps
**Step 3:** Identify what can be automated
**Step 4:** Design the ReAct loop

**Example - Color Palette Agent:**
Takes a reference image, extracts dominant colors, generates harmonious palettes, creates visual swatches, and saves with metadata.`
      }
    ],
    quiz: [
      {
        question: "What is the key innovation of the ReAct pattern?",
        options: ["Using bigger models", "Separating reasoning from action", "Running faster", "Using more memory"],
        correctAnswer: 1,
        explanation: "ReAct separates reasoning from action, allowing the agent to learn from each step and adapt."
      },
      {
        question: "Which agent level can work independently on long-running tasks?",
        options: ["Tool-Using Agent", "Reasoning Agent", "Planning Agent", "Autonomous Agent"],
        correctAnswer: 3,
        explanation: "Autonomous agents can set goals, work independently, and learn from feedback."
      },
      {
        question: "What does the Style Analyzer Agent do?",
        options: ["Generates images", "Extracts style from reference images", "Organizes files", "Takes feedback"],
        correctAnswer: 1,
        explanation: "The Style Analyzer extracts style embeddings, color palettes, and composition patterns from reference images."
      }
    ],
    project: {
      title: "Design Document: Your Creative Agent",
      description: "Create a detailed design document for an AI agent that assists with a creative task.",
      deliverables: [
        "Problem statement",
        "Step-by-step workflow breakdown",
        "Agent architecture diagram",
        "Tool selection",
        "ReAct loop pseudocode",
        "Success criteria"
      ],
      evaluationCriteria: ["Clear problem definition", "Thoughtful decomposition", "Appropriate tool selection", "Realistic scope"]
    },
    resources: [
      { title: "ReAct Paper", type: "paper", url: "https://arxiv.org/abs/2210.03629", description: "Original research on reasoning + acting in LLMs" },
      { title: "LangChain Documentation", type: "tool", url: "https://python.langchain.com", description: "Framework for building LLM applications" },
      { title: "AutoGPT Architecture", type: "repo", url: "https://github.com/Significant-Gravitas/AutoGPT", description: "Open-source autonomous agent" }
    ]
  },

  "lesson-c2-1": {
    id: "lesson-c2-1",
    title: "Diffusion Models: From Noise to Art",
    subtitle: "The mathematics and mechanics of image generation",
    duration: "75 min",
    difficulty: "advanced",
    prerequisites: ["lesson-c1-1", "lesson-c1-2"],
    content: [
      {
        type: "overview",
        title: "The Core Idea",
        content: `Diffusion models learn to reverse a gradual noising process:

**Forward Process (Training):**
1. Start with a clean image
2. Add Gaussian noise repeatedly (1000 times)
3. Model learns to predict the noise at each step

**Reverse Process (Generation):**
1. Start with pure random noise
2. Predict and subtract noise iteratively
3. Result: a new image from the training distribution

**Key insight:** The model learns 'how to remove noise to reveal structure' - not memorizing but learning the underlying data distribution.`
      },
      {
        type: "deep-dive",
        title: "Classifier-Free Guidance (CFG)",
        content: `The technique that makes prompt adherence possible:

epsilon_guided = epsilon_uncond + guidance_scale * (epsilon_cond - epsilon_uncond)

**Breaking this down:**
• epsilon_cond: Prediction with your prompt
• epsilon_uncond: Prediction with no prompt
• guidance_scale: How strongly to follow the prompt (typically 7-10)

**Practical impact:**
• CFG = 1: Very creative but may ignore prompt
• CFG = 7-10: Good balance (default)
• CFG = 15+: Strict adherence, less diversity`
      },
      {
        type: "code-along",
        title: "Sampling from a Diffusion Model",
        content: `Using the Diffusers library to generate images:`,
        code: `from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16
).to("cuda")

image = pipe(
    prompt="a serene landscape with mountains",
    negative_prompt="blurry, low quality",
    num_inference_steps=30,
    guidance_scale=7.5,
    height=512,
    width=512
).images[0]`
      },
      {
        type: "analysis",
        title: "Sampling Methods Compared",
        content: `Different schedulers trade speed vs quality:

**DDPM:** Original method, 1000 steps, slow
**DDIM:** Can skip steps, deterministic
**DPM++ 2M Karras:** Modern default, fast and high quality
**Euler a:** Very fast, good for exploration
**UniPC:** Fastest high-quality option, 10-15 steps

**Rule of thumb:** Start with DPM++ 2M Karras at 25-30 steps.`
      }
    ],
    quiz: [
      {
        question: "What does a diffusion model learn to predict?",
        options: ["The final image directly", "The noise that was added", "The text prompt", "The file size"],
        correctAnswer: 1,
        explanation: "Diffusion models learn to predict the noise that was added at each step, then subtract it to gradually denoise."
      },
      {
        question: "What does CFG do?",
        options: ["Makes the model faster", "Amplifies the difference between conditional and unconditional predictions", "Reduces memory usage", "Compresses images"],
        correctAnswer: 1,
        explanation: "CFG compares predictions with and without the prompt, then amplifies the difference to better follow the prompt."
      },
      {
        question: "Why does Stable Diffusion use latent space?",
        options: ["Better quality", "Faster computation (48x smaller)", "Larger images", "More colors"],
        correctAnswer: 1,
        explanation: "Working in latent space (16,384 dimensions) is much faster than pixel space (786,432 dimensions)."
      }
    ],
    project: {
      title: "Experiment: Sampling Parameter Study",
      description: "Systematically explore how sampling parameters affect output quality.",
      deliverables: [
        "Grid showing CFG scale from 1-15",
        "Grid showing step counts from 10-50",
        "Grid comparing 3 different samplers",
        "Written analysis of findings"
      ],
      evaluationCriteria: ["Systematic exploration", "Clear documentation", "Insightful observations"]
    },
    resources: [
      { title: "Diffusion Models Paper", type: "paper", url: "https://arxiv.org/abs/2006.11239", description: "DDPM foundation paper" },
      { title: "Stable Diffusion Paper", type: "paper", url: "https://arxiv.org/abs/2112.10752", description: "Latent Diffusion Models" },
      { title: "Diffusers Library", type: "tool", url: "https://huggingface.co/docs/diffusers", description: "Hugging Face diffusion library" }
    ]
  },

  "lesson-c2-2": {
    id: "lesson-c2-2",
    title: "Control Mechanisms: ControlNet & IP-Adapter",
    subtitle: "Guiding generation with precision",
    duration: "60 min",
    difficulty: "advanced",
    prerequisites: ["lesson-c2-1"],
    content: [
      {
        type: "overview",
        title: "The Control Problem",
        content: `The challenge: you want creative output, but also control over specific aspects.

**Solutions:**
1. **ControlNet** - Control pose, edges, depth, segmentation
2. **IP-Adapter** - Transfer style from reference images
3. **Inpainting** - Edit specific regions
4. **Img2Img** - Transform existing images`
      },
      {
        type: "deep-dive",
        title: "ControlNet: How It Works",
        content: `ControlNet 'locks' the original model and adds trainable copies of its weights.

**Control Types:**
• **OpenPose** - Body/face/hand poses
• **Canny Edge** - Edge detection
• **Depth Maps** - Spatial relationships
• **Segmentation** - Object layout
• **Normal Maps** - Surface orientation
• **Scribbles** - Hand-drawn sketches`
      },
      {
        type: "code-along",
        title: "Using ControlNet",
        content: `ControlNet workflow with Diffusers:`,
        code: `from diffusers import StableDiffusionControlNetPipeline, ControlNetModel

controlnet = ControlNetModel.from_pretrained(
    "lllyasviel/sd-controlnet-canny",
    torch_dtype=torch.float16
)

pipe = StableDiffusionControlNetPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    controlnet=controlnet,
    torch_dtype=torch.float16
).to("cuda")

generated = pipe(
    prompt="a beautiful landscape",
    image=canny_image,
    num_inference_steps=30,
    controlnet_conditioning_scale=1.0
).images[0]`
      },
      {
        type: "deep-dive",
        title: "IP-Adapter: Style Transfer",
        content: `IP-Adapter allows using images as prompts without fine-tuning.

**Advantages:**
- No training required
- Works with any base model
- Multiple references can be combined
- Style and content separation`
      }
    ],
    quiz: [
      {
        question: "What is the key innovation of ControlNet?",
        options: ["Training from scratch", "Locking base model and adding trainable copies", "Using larger models", "Removing the UNet"],
        correctAnswer: 1,
        explanation: "ControlNet locks the original model weights and adds trainable copies."
      },
      {
        question: "Which ControlNet type controls body pose?",
        options: ["Canny Edge", "Depth Map", "OpenPose", "Segmentation"],
        correctAnswer: 2,
        explanation: "OpenPose detects body, face, and hand keypoints for pose control."
      },
      {
        question: "What is the main advantage of IP-Adapter over LoRA?",
        options: ["Better quality", "No training required", "Faster generation", "Smaller files"],
        correctAnswer: 1,
        explanation: "IP-Adapter requires no fine-tuning - just provide a reference image."
      }
    ],
    project: {
      title: "ControlNet Mastery Project",
      description: "Create images demonstrating mastery of ControlNet.",
      deliverables: [
        "3 images of same character in different poses",
        "3 images with same composition, different styles",
        "3 images showing depth-aware generation",
        "Documentation of workflow"
      ],
      evaluationCriteria: ["Effective use of controls", "Consistency", "Creative application", "Clear documentation"]
    },
    resources: [
      { title: "ControlNet Paper", type: "paper", url: "https://arxiv.org/abs/2302.05543", description: "Adding Conditional Control to Diffusion" },
      { title: "IP-Adapter Paper", type: "paper", url: "https://arxiv.org/abs/2308.06721", description: "Image Prompt Adapter" },
      { title: "ControlNet Models", type: "tool", url: "https://huggingface.co/lllyasviel", description: "Official ControlNet models" }
    ]
  },

  "lesson-c2-3": {
    id: "lesson-c2-3",
    title: "Fine-Tuning & Custom Models",
    subtitle: "LoRA, DreamBooth, and training your own style",
    duration: "90 min",
    difficulty: "expert",
    prerequisites: ["lesson-c2-1", "lesson-c2-2"],
    content: [
      {
        type: "overview",
        title: "Why Fine-Tune?",
        content: `Fine-tuning teaches models new concepts, styles, or subjects.

**Use Cases:**
• Personal art style
• Specific subjects (people, characters)
• Niche concepts
• Consistent characters

**Methods:**
• **Full Fine-Tuning** - 24GB+ VRAM, days of training
• **DreamBooth** - 16-24GB VRAM, ~30 min
• **LoRA** - 8-12GB VRAM, ~20 min, ~100MB files
• **Textual Inversion** - 8GB VRAM, ~1 hour, ~10KB files`
      },
      {
        type: "deep-dive",
        title: "LoRA: The Practical Choice",
        content: `LoRA learns a low-rank decomposition: W_new = W_original + B * A

**Training Parameters:**
• **Rank (r)** - 4-128, controls capacity (default: 64)
• **Alpha** - Scaling factor, typically rank/2
• **Learning Rate** - 1e-4 to 1e-5
• **Steps** - 1000-3000
• **Dataset** - Style: 20-50 images, Subject: 10-20 images

**Captioning:**
- Style: "artwork in the style of [trigger word]"
- Subject: "a photo of [unique identifier] [class name]"`
      },
      {
        type: "deep-dive",
        title: "DreamBooth",
        content: `DreamBooth fine-tunes the entire model for maximum fidelity.

**Prior Preservation:**
Generates images of the base class during training to prevent forgetting general knowledge.

**When to use:**
- Maximum fidelity needed
- Complex subjects with many details
- When LoRA isn't capturing the concept`
      },
      {
        type: "workshop",
        title: "Training Your First LoRA",
        content: `Step-by-step guide:

**Step 1:** Prepare dataset (20-50 images)
**Step 2:** Create captions for each image
**Step 3:** Set up training environment (Kohya_ss)
**Step 4:** Configure parameters
**Step 5:** Train and monitor
**Step 6:** Test your LoRA
**Step 7:** Iterate and improve`
      }
    ],
    quiz: [
      {
        question: "What is the main advantage of LoRA over full fine-tuning?",
        options: ["Better quality", "Much smaller file size and VRAM requirements", "Faster inference", "More stable training"],
        correctAnswer: 1,
        explanation: "LoRA trains only low-rank matrices, resulting in ~100MB files vs several GB."
      },
      {
        question: "What is 'prior preservation' in DreamBooth?",
        options: ["Saving checkpoints", "Preventing the model from forgetting general knowledge", "Backing up training data", "Preserving image quality"],
        correctAnswer: 1,
        explanation: "Prior preservation generates base class images during training to maintain general knowledge."
      },
      {
        question: "What does the 'rank' parameter control?",
        options: ["Training speed", "The size/capacity of the LoRA", "Image resolution", "Number of training images"],
        correctAnswer: 1,
        explanation: "Rank controls the size of trainable matrices. Higher rank = more capacity."
      }
    ],
    project: {
      title: "Train Your Own LoRA",
      description: "Create a LoRA that captures a specific style or subject.",
      deliverables: [
        "Dataset of 20-50 curated images",
        "Caption files",
        "Trained LoRA file",
        "Gallery of 10+ generated images",
        "Training report"
      ],
      evaluationCriteria: ["Quality of dataset", "Effectiveness of LoRA", "Variety in outputs", "Documentation quality"]
    },
    resources: [
      { title: "LoRA Paper", type: "paper", url: "https://arxiv.org/abs/2106.09685", description: "Low-Rank Adaptation" },
      { title: "DreamBooth Paper", type: "paper", url: "https://arxiv.org/abs/2208.12242", description: "Fine Tuning Diffusion Models" },
      { title: "Kohya_ss GUI", type: "tool", url: "https://github.com/bmaltais/kohya_ss", description: "GUI for training LoRAs" }
    ]
  },

  "lesson-c3-1": {
    id: "lesson-c3-1",
    title: "Python for Creative Coding",
    subtitle: "From zero to generative art",
    duration: "90 min",
    difficulty: "intermediate",
    prerequisites: [],
    content: [
      {
        type: "overview",
        title: "Why Python for Artists?",
        content: `Python is the lingua franca of creative AI.

**What You Can Build:**
• Custom image generation pipelines
• Automated asset processing
• Interactive art installations
• Data visualizations
• ML experiments
• Web applications

**Key Libraries:**
• Pillow (PIL) - Image manipulation
• OpenCV - Computer vision
• NumPy - Array operations
• Processing/p5.py - Creative coding
• PyTorch/TensorFlow - Deep learning
• Diffusers - Diffusion models`
      },
      {
        type: "deep-dive",
        title: "Python Fundamentals",
        content: `Essential concepts for artists:

**Variables:** Named containers for values
**Data Types:** int, float, str, list, dict
**Lists:** Ordered collections
**Loops:** Repeat for each item
**Functions:** Reusable blocks of code
**Conditionals:** Decision making
**Modules:** Importing libraries`
      },
      {
        type: "code-along",
        title: "Working with Images",
        content: `Images are arrays of numbers:`,
        code: `from PIL import Image, ImageFilter, ImageEnhance

img = Image.open('artwork.jpg')
print(f"Size: {img.size}")

img.thumbnail((512, 512))
cropped = img.crop((100, 100, 400, 400))
blurred = img.filter(ImageFilter.BLUR)
edges = img.filter(ImageFilter.FIND_EDGES)

enhancer = ImageEnhance.Brightness(img)
brighter = enhancer.enhance(1.5)

img.save('processed.jpg', quality=95)`
      },
      {
        type: "code-along",
        title: "Generative Patterns",
        content: `Create art through code:`,
        code: `from PIL import Image, ImageDraw
import math
import random

width, height = 800, 800
img = Image.new('RGB', (width, height), 'white')
draw = ImageDraw.Draw(img)

grid_size = 20
cell_size = width // grid_size

for row in range(grid_size):
    for col in range(grid_size):
        x = col * cell_size + cell_size // 2
        y = row * cell_size + cell_size // 2

        r = int(128 + 127 * math.sin(row * 0.2))
        g = int(128 + 127 * math.cos(col * 0.2))
        b = int(128 + 127 * math.sin((row + col) * 0.1))

        size = cell_size // 3
        draw.rectangle([x-size, y-size, x+size, y+size], fill=(r, g, b))

img.save('generative_grid.png')`
      }
    ],
    quiz: [
      {
        question: "What does Image.new('RGB', (800, 600), 'white') create?",
        options: ["A file on disk", "An 800x600 white image in memory", "A grayscale image", "A transparent image"],
        correctAnswer: 1,
        explanation: "Image.new creates a new image in memory with the specified mode, size, and background color."
      },
      {
        question: "What is the purpose of a for loop?",
        options: ["To define a function", "To repeat code for each item in a sequence", "To import modules", "To save files"],
        correctAnswer: 1,
        explanation: "A for loop iterates over a sequence and executes code for each item."
      },
      {
        question: "What is 'constrained randomness'?",
        options: ["Pure chaos", "Randomness with rules/boundaries", "No randomness", "Always the same output"],
        correctAnswer: 1,
        explanation: "Constrained randomness applies random values within boundaries, creating variation with structure."
      }
    ],
    project: {
      title: "Generative Art Piece",
      description: "Create generative artwork using Python and PIL.",
      deliverables: ["Python script", "Generated artwork", "Artist statement", "Parameter documentation"],
      evaluationCriteria: ["Code runs without errors", "Creative use of generative principles", "Visual appeal", "Well-commented code"]
    },
    resources: [
      { title: "Python Pillow Docs", type: "tool", url: "https://pillow.readthedocs.io", description: "Image processing in Python" },
      { title: "Generative Art Tutorial", type: "article", url: "https://www.generativehut.com", description: "Creating generative art" },
      { title: "Processing.py", type: "tool", url: "https://py.processing.org", description: "Creative coding framework" }
    ]
  },

  "lesson-c3-2": {
    id: "lesson-c3-2",
    title: "Working with AI APIs",
    subtitle: "Connect your code to powerful AI services",
    duration: "75 min",
    difficulty: "intermediate",
    prerequisites: ["lesson-c3-1"],
    content: [
      {
        type: "overview",
        title: "What Are APIs?",
        content: `APIs let your code talk to external services.

**Request-Response Pattern:**
1. Your code sends a request
2. API processes it (runs AI model)
3. API sends back response
4. Your code uses the response

**Common AI APIs:**
• OpenAI (GPT-4, DALL-E)
• Anthropic (Claude)
• Stability AI (Stable Diffusion)
• Midjourney
• ElevenLabs (voice)`
      },
      {
        type: "deep-dive",
        title: "Making API Requests",
        content: `HTTP methods and the requests library:`,
        code: `import requests

# GET request
response = requests.get('https://api.example.com/data')
print(response.json())

# POST request
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
}
data = {'prompt': 'a red apple', 'size': '512x512'}

response = requests.post(url, headers=headers, json=data)
result = response.json()`
      },
      {
        type: "code-along",
        title: "OpenAI API: Text Generation",
        content: `Working with GPT-4:`,
        code: `from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a creative assistant."},
        {"role": "user", "content": "Write a poem about digital art."}
    ],
    temperature=0.8,
    max_tokens=200
)

print(response.choices[0].message.content)`
      },
      {
        type: "code-along",
        title: "Image Generation APIs",
        content: `Generating images with DALL-E and Stability AI:`,
        code: `# DALL-E 3
response = client.images.generate(
    model="dall-e-3",
    prompt="a serene Japanese garden",
    size="1024x1024",
    n=1
)

image_url = response.data[0].url

# Download
import requests
img_data = requests.get(image_url).content
with open('garden.png', 'wb') as f:
    f.write(img_data)`
      }
    ],
    quiz: [
      {
        question: "What does 'temperature' control in GPT-4?",
        options: ["Speed", "Creativity/randomness", "Cost", "Image quality"],
        correctAnswer: 1,
        explanation: "Temperature controls randomness. Lower = more focused, Higher = more creative."
      },
      {
        question: "What HTTP method sends data TO an API?",
        options: ["GET", "POST", "DELETE", "HEAD"],
        correctAnswer: 1,
        explanation: "POST requests send data to an API. GET retrieves data."
      },
      {
        question: "Why use environment variables for API keys?",
        options: ["Makes code faster", "Keeps secrets out of code repository", "Required by law", "Improves quality"],
        correctAnswer: 1,
        explanation: "Environment variables prevent accidental exposure of sensitive information."
      }
    ],
    project: {
      title: "API-Powered Creative Tool",
      description: "Build a Python tool using an AI API for a creative task.",
      deliverables: ["Python script", "README with setup", "Example outputs", "Error handling"],
      evaluationCriteria: ["Useful creative function", "Proper authentication", "Error handling", "Well-organized code"]
    },
    resources: [
      { title: "OpenAI API Docs", type: "tool", url: "https://platform.openai.com/docs", description: "GPT-4, DALL-E documentation" },
      { title: "Stability AI API", type: "tool", url: "https://platform.stability.ai", description: "Image generation API" },
      { title: "Python Requests", type: "article", url: "https://docs.python-requests.org", description: "HTTP requests made simple" }
    ]
  },

  "lesson-c4-1": {
    id: "lesson-c4-1",
    title: "Building Your First Agent",
    subtitle: "From concept to working prototype",
    duration: "90 min",
    difficulty: "advanced",
    prerequisites: ["lesson-c1-2", "lesson-c3-2"],
    content: [
      {
        type: "overview",
        title: "Agent Architecture",
        content: `Core components of an agent:

**1. LLM (Brain)** - Makes decisions, interprets observations
**2. Tools (Hands)** - Functions the agent can call
**3. Memory (Context)** - Tracks history and state
**4. Loop (Heartbeat)** - Think → Act → Observe

**Agent Flow:**
User Input → LLM decides → Call Tool → Get Result → LLM decides → ... → Final Answer`
      },
      {
        type: "deep-dive",
        title: "Designing Tool Schemas",
        content: `Tools need clear descriptions for the LLM:

**Structure:**
• Name: Short identifier
• Description: When to use
• Parameters: Required inputs
• Function: Code to execute`
      },
      {
        type: "code-along",
        title: "The Agent Loop",
        content: `Implementing the core loop:`,
        code: `from openai import OpenAI
import json

client = OpenAI()

def run_agent(user_query, max_iterations=5):
    messages = [
        {"role": "system", "content": "You have access to tools. Use them when needed."},
        {"role": "user", "content": user_query}
    ]

    for i in range(max_iterations):
        response = client.chat.completions.create(
            model="gpt-4",
            messages=messages,
            tools=tools,
            tool_choice="auto"
        )

        message = response.choices[0].message

        if not message.tool_calls:
            return message.content

        # Execute tool calls and continue loop
        for tool_call in message.tool_calls:
            function_name = tool_call.function.name
            function_args = json.loads(tool_call.function.arguments)
            result = tool_functions[function_name](**function_args)
            messages.append({"role": "tool", "tool_call_id": tool_call.id, "content": str(result)})

    return "Maximum iterations reached"`
      }
    ],
    quiz: [
      {
        question: "What is the purpose of tool descriptions?",
        options: ["Make code prettier", "Help LLM know when to use each tool", "Reduce costs", "Speed up execution"],
        correctAnswer: 1,
        explanation: "Tool descriptions tell the LLM what each tool does and when to use it."
      },
      {
        question: "What happens after a tool is executed?",
        options: ["Agent stops", "Result added to conversation, LLM decides next", "User asked what to do", "Random tool chosen"],
        correctAnswer: 1,
        explanation: "The result is added to conversation history for the LLM to decide the next action."
      },
      {
        question: "Why set a maximum iteration limit?",
        options: ["Make it faster", "Prevent infinite loops", "Reduce memory", "Improve quality"],
        correctAnswer: 1,
        explanation: "Prevents the agent from running forever if stuck in a loop."
      }
    ],
    project: {
      title: "Custom Creative Agent",
      description: "Build an agent with at least 3 tools for a creative workflow.",
      deliverables: ["Agent code", "Working demo", "Tool documentation", "Example use cases"],
      evaluationCriteria: ["Uses multiple tools", "Well-designed tools", "Organized code", "Graceful error handling"]
    },
    resources: [
      { title: "OpenAI Function Calling", type: "tool", url: "https://platform.openai.com/docs/guides/function-calling", description: "Building agents with GPT-4" },
      { title: "LangChain", type: "tool", url: "https://python.langchain.com", description: "LLM application framework" },
      { title: "ReAct Paper", type: "paper", url: "https://arxiv.org/abs/2210.03629", description: "Reasoning + Acting in LLMs" }
    ]
  },

  "lesson-c4-2": {
    id: "lesson-c4-2",
    title: "Creative Workflow Agents",
    subtitle: "AI assistants for your artistic process",
    duration: "75 min",
    difficulty: "advanced",
    prerequisites: ["lesson-c4-1"],
    content: [
      {
        type: "overview",
        title: "Agents for Creative Work",
        content: `Specialized agents for artistic workflows:

**Creative Process Stages:**
1. Inspiration & Research
2. Concept Development
3. Creation & Iteration
4. Refinement
5. Presentation

**Agent Types:**
• **Research Agent** - Finds references, summarizes context
• **Concept Agent** - Brainstorms, mood boards, briefs
• **Creation Agent** - Generates variations, style transfers
• **Refinement Agent** - Suggests improvements, checks consistency
• **Presentation Agent** - Portfolios, descriptions, social posts`
      },
      {
        type: "case-study",
        title: "Concept Art Pipeline",
        content: `A complete agent system for concept art:

**Pipeline:**
1. Brief Analyzer - Expands description, identifies key elements
2. Research Agent - Finds reference images
3. Composition Agent - Generates thumbnails
4. Detail Agent - Adds specific elements
5. Style Agent - Applies consistent grading
6. Asset Agent - Prepares engine-ready files`
      },
      {
        type: "deep-dive",
        title: "Style Consistency Agent",
        content: `Maintaining style across multiple generations:

**Pipeline:**
1. Extract style from references (CLIP embeddings)
2. Generate with style guidance (IP-Adapter or LoRA)
3. Validate consistency (compare to references)
4. Iterate if needed (adjust parameters)`
      },
      {
        type: "workshop",
        title: "Design Your Workflow Agent",
        content: `Design an agent system for YOUR process:

**Step 1:** Map your current workflow
**Step 2:** Identify automation opportunities
**Step 3:** Design agent components (input, tools, output)
**Step 4:** Prioritize - start with your biggest pain point`
      }
    ],
    quiz: [
      {
        question: "What is the main challenge of style consistency agents?",
        options: ["Making images load faster", "Keeping visual style uniform across generations", "Reducing file sizes", "Improving text rendering"],
        correctAnswer: 1,
        explanation: "Style consistency ensures multiple images share visual characteristics."
      },
      {
        question: "Which technique extracts style from references?",
        options: ["JPEG compression", "IP-Adapter or CLIP embeddings", "File renaming", "Email attachments"],
        correctAnswer: 1,
        explanation: "IP-Adapter and CLIP capture style characteristics from references."
      },
      {
        question: "What should happen between pipeline stages?",
        options: ["Nothing", "Clear handoffs with defined inputs/outputs", "Random selection", "User starts over"],
        correctAnswer: 1,
        explanation: "Well-designed pipelines have clear handoffs maintaining context."
      }
    ],
    project: {
      title: "Workflow Agent Prototype",
      description: "Build a prototype agent assisting with 2+ stages of your workflow.",
      deliverables: ["Agent code", "Workflow diagram", "Demo video/screenshots", "Reflection"],
      evaluationCriteria: ["Addresses real needs", "Connected stages", "Working demo", "Thoughtful reflection"]
    },
    resources: [
      { title: "CLIP Paper", type: "paper", url: "https://arxiv.org/abs/2103.00020", description: "Connecting text and images" },
      { title: "IP-Adapter Repo", type: "repo", url: "https://github.com/tencent-ailab/IP-Adapter", description: "Image prompt adapter" },
      { title: "Creative AI Workflows", type: "article", url: "https://www.notion.so/Creative-AI-Workflows", description: "AI in creative pipelines" }
    ]
  },

  "lesson-c5-1": {
    id: "lesson-c5-1",
    title: "Portfolio Project: Generative Art Series",
    subtitle: "Create a cohesive series of AI-assisted artworks",
    duration: "2 weeks",
    difficulty: "expert",
    prerequisites: ["lesson-c2-1", "lesson-c2-2", "lesson-c2-3", "lesson-c3-1"],
    content: [
      {
        type: "overview",
        title: "Project Overview",
        content: `Create a portfolio-worthy series of 5-10 generative artworks:

**Goals:**
• Demonstrate technical skill
• Show artistic vision and curation
• Create gallery-ready work
• Document process professionally

**Requirements:**
• 5-10 cohesive pieces
• Clear conceptual theme
• Consistent style
• Professional presentation
• Complete documentation

**Suggested Themes:**
• Abstract emotions through AI
• Reimagined classical art
• Future landscapes
• AI portraits with human touch
• Hybrid human-AI collaboration`
      },
      {
        type: "deep-dive",
        title: "Developing Your Concept",
        content: `Concept development process:

**Step 1: Exploration**
• Brainstorm 10+ themes
• Research existing work
• Identify your unique perspective

**Step 2: Refinement**
• Select 2-3 strongest concepts
• Create mood boards
• Get peer feedback

**Step 3: Selection**
• Choose what excites you most
• Ensure visual potential
• Confirm it can sustain 5-10 variations`
      },
      {
        type: "workshop",
        title: "Technical Execution",
        content: `Workflow options:

**Option A: Pure AI Generation**
Use ControlNet for consistency, fine-tune LoRA for style.

**Option B: AI + Post-Processing**
Generate base images, enhance in Photoshop/Procreate.

**Option C: Code-Based**
Write Python scripts, use Processing for generative elements.

**Hybrid Approach (Recommended):**
1. AI for initial generation
2. ControlNet for consistency
3. Curate best outputs
4. Enhance with traditional tools
5. Add personal touches`
      },
      {
        type: "deep-dive",
        title: "Documentation & Presentation",
        content: `Professional presentation:

**Artist Statement (300-500 words):**
1. Opening hook
2. Concept explanation
3. Technical approach
4. Artistic significance
5. Closing reflection

**Process Documentation:**
• Initial sketches
• Parameter experiments
• Evolution of series
• Challenges and solutions

**Presentation Deck:**
• Title slide
• Concept overview
• Process highlights
• Final works
• Artist statement`
      }
    ],
    quiz: [
      {
        question: "What is the minimum recommended resolution for portfolio artwork?",
        options: ["512x512", "1024x1024", "2048px on shortest side", "100x100"],
        correctAnswer: 2,
        explanation: "Portfolio artwork should be at least 2048px for professional display."
      },
      {
        question: "What should an artist statement include?",
        options: ["Only technical details", "Concept, approach, and significance", "Just titles", "Your resume"],
        correctAnswer: 1,
        explanation: "An artist statement explains concept, technical approach, and significance."
      },
      {
        question: "Why is documentation important?",
        options: ["It's not important", "Shows process and technical skill", "Makes files smaller", "Required by law"],
        correctAnswer: 1,
        explanation: "Documentation demonstrates process and growth for galleries and employers."
      }
    ],
    project: {
      title: "Generative Art Portfolio Series",
      description: "Create 5-10 cohesive generative artworks with full documentation.",
      deliverables: [
        "5-10 final artwork images (high resolution)",
        "Artist statement (300-500 words)",
        "Process documentation",
        "Technical writeup",
        "Presentation deck",
        "Web gallery"
      ],
      evaluationCriteria: ["Strong concept", "Technical quality", "Visual cohesion", "Professional presentation", "Complete documentation"]
    },
    resources: [
      { title: "Artist Statements", type: "article", url: "https://www.gyst-ink.com/writing-an-artist-statement", description: "Writing effective statements" },
      { title: "AI Art Galleries", type: "article", url: "https://aiartists.org/ai-art-galleries", description: "Professional AI art presentations" },
      { title: "Portfolio Best Practices", type: "article", url: "https://www.format.com/magazine/resources/art/artist-portfolio", description: "Creating professional portfolios" }
    ]
  },

  "lesson-c5-2": {
    id: "lesson-c5-2",
    title: "Portfolio Project: Interactive AI Installation",
    subtitle: "Build an interactive experience with AI",
    duration: "2 weeks",
    difficulty: "expert",
    prerequisites: ["lesson-c3-1", "lesson-c4-1", "lesson-c4-2"],
    content: [
      {
        type: "overview",
        title: "Project Overview",
        content: `Create an interactive installation using AI:

**What is an Interactive Installation?**
Artwork that responds to viewers, creating two-way relationship.

**Goals:**
• Build working prototype
• Demonstrate technical integration
• Create memorable experience
• Document for portfolio

**Project Types:**
• **Generative Visuals** - AI generates from viewer input
• **AI Conversations** - Chat with AI characters
• **Physical Interactions** - Motion, touch, biometrics

**Requirements:**
• Real-time or near real-time response
• Clear interaction method
• Stable and reliable
• Documented setup`
      },
      {
        type: "deep-dive",
        title: "Installation Architecture",
        content: `Components:

**Input Layer:**
• Keyboard/mouse, touchscreen
• Webcam (gesture, face detection)
• Microphone (voice)
• Sensors (motion, proximity)

**Processing Layer:**
• Local model (fastest, needs GPU)
• API call (simpler, has latency)
• Hybrid approach (best balance)

**Output Layer:**
• Screen/projector
• Speakers
• Physical actuators

**Technical Stacks:**
• Web-based: HTML/JS + p5.js + Flask
• Python: Tkinter/PyQt + OpenCV
• Hybrid: Python backend + Web frontend`
      },
      {
        type: "code-along",
        title: "Web-Based Installation Template",
        content: `Flask backend with p5.js frontend:`,
        code: `# app.py - Flask Backend
from flask import Flask, render_template, request, jsonify
from diffusers import StableDiffusionPipeline
import torch, base64
from io import BytesIO

app = Flask(__name__)
pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16
).to("cuda")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    prompt = data.get('prompt', 'abstract art')

    image = pipe(
        prompt=prompt,
        num_inference_steps=20,
        height=512, width=512
    ).images[0]

    buffered = BytesIO()
    image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()

    return jsonify({'image': img_str})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)`
      },
      {
        type: "workshop",
        title: "Installation Design Workshop",
        content: `Design your installation:

**Step 1:** Define the experience (what users do, see, feel)
**Step 2:** Choose technology (comfort level, GPU access, timeline)
**Step 3:** Sketch the user journey
**Step 4:** Identify risks and backup plans
**Step 5:** Plan documentation (video, photos, diagrams)

**Example Projects:**
• "Mirror of Dreams" - Camera → AI transformation → Display
• "Collaborative Canvas" - Draw → AI enhances → Display
• "Voice to Vision" - Speak → AI generates → Projection`
      }
    ],
    quiz: [
      {
        question: "What is the main advantage of web-based installations?",
        options: ["Faster than Python", "Easier deployment and cross-platform", "No internet needed", "Less memory"],
        correctAnswer: 1,
        explanation: "Web-based installations run on any browser, making deployment easier."
      },
      {
        question: "Why use fewer inference steps for real-time installations?",
        options: ["Better quality", "Faster generation for real-time response", "Lower cost", "More colors"],
        correctAnswer: 1,
        explanation: "Fewer steps means faster generation for responsive experiences."
      },
      {
        question: "What should you consider for installation design?",
        options: ["Only visual output", "Complete experience from approach to conclusion", "Just technology", "Nothing"],
        correctAnswer: 1,
        explanation: "Good design considers the entire user journey."
      }
    ],
    project: {
      title: "Interactive AI Installation",
      description: "Build a working interactive installation with AI response.",
      deliverables: [
        "Working prototype",
        "Video documentation (2-5 min)",
        "Technical documentation",
        "Source code",
        "Setup photos/diagrams",
        "User feedback (if available)"
      ],
      evaluationCriteria: ["Works as described", "Clear interaction", "Real-time response", "Professional documentation", "Creative execution"]
    },
    resources: [
      { title: "p5.js Reference", type: "tool", url: "https://p5js.org/reference/", description: "Creative coding in JavaScript" },
      { title: "Flask Docs", type: "tool", url: "https://flask.palletsprojects.com", description: "Python web framework" },
      { title: "Interactive Art Examples", type: "article", url: "https://www.creativeapplications.net/category/interactive/", description: "Interactive art gallery" }
    ]
  }
};

export default advancedLessons;
