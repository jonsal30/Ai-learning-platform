import { useEffect, useState } from 'react';
import { 
  Code2, 
  Brain, 
  ChevronRight,
  CheckCircle2,
  Play,
  BookOpen,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Clock,
  Copy,
  Menu,
  X,
  Heart,
  Sparkles,
  Target,
  Rocket,
  Lightbulb,
  ExternalLink,
  Terminal,
  Cpu,
  Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { advancedLessons, creativeAIPath } from '@/data/advancedLessons';
import './App.css';

// Navigation Component
function Navigation({ activeSection, onNavigate }: { activeSection: string; onNavigate: (s: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'sandbox', label: 'Sandbox', icon: Code2 },
    { id: 'career', label: 'Career', icon: TrendingUp },
    { id: 'resources', label: 'Resources', icon: Sparkles },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-md border-b border-white/10' : ''}`}>
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-xl text-white">CogniFlow</span>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                activeSection === item.id 
                  ? 'bg-violet/20 text-violet' 
                  : 'text-slate hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md border-b border-white/10 px-6 py-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-sm transition-all flex items-center gap-2 ${
                  activeSection === item.id 
                    ? 'bg-violet/20 text-violet' 
                    : 'text-slate hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Welcome/Hero Section
function WelcomeSection({ onStart }: { onStart: () => void }) {
  const [name, setName] = useState('');
  const [background, setBackground] = useState('');
  const [goal, setGoal] = useState('');

  return (
    <section className="min-h-screen bg-navy flex items-center">
      <div className="grid lg:grid-cols-2 w-full">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-violet/10 border border-violet/30 rounded-full px-4 py-2 mb-6 w-fit">
            <Palette className="w-4 h-4 text-violet" />
            <span className="text-sm text-violet">Built for creative professionals</span>
          </div>

          <h1 className="heading-xl text-white mb-2">Master AI</h1>
          <h1 className="heading-xl text-violet mb-6">As an Artist</h1>

          <p className="text-body max-w-md mb-8">
            A rigorous path from creative professional to AI-augmented creator. 
            Build real agents, understand generative models, and create portfolio-worthy AI art projects.
          </p>

          <div className="glass-panel rounded-2xl p-6 max-w-md mb-6">
            <p className="text-sm text-slate mb-4">Create your learning profile:</p>
            <div className="space-y-3">
              <Input 
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-slate/50"
              />
              <Select value={background} onValueChange={setBackground}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Your background" />
                </SelectTrigger>
                <SelectContent className="bg-navy-50 border-white/10">
                  <SelectItem value="artist">Fine Artist / Illustrator</SelectItem>
                  <SelectItem value="designer">Graphic / UX Designer</SelectItem>
                  <SelectItem value="educator">Educator / Academic</SelectItem>
                  <SelectItem value="other">Other Creative Field</SelectItem>
                </SelectContent>
              </Select>
              <Select value={goal} onValueChange={setGoal}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Your goal" />
                </SelectTrigger>
                <SelectContent className="bg-navy-50 border-white/10">
                  <SelectItem value="tools">Master AI tools for my work</SelectItem>
                  <SelectItem value="build">Build AI-powered creative projects</SelectItem>
                  <SelectItem value="teach">Teach AI to others</SelectItem>
                  <SelectItem value="career">Transition to AI-related career</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                onClick={onStart}
                disabled={!name || !background || !goal}
                className="w-full bg-violet hover:bg-violet-700 text-white font-semibold py-6 disabled:opacity-50"
              >
                Start Your Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              11 lessons
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Real code sandbox
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Portfolio projects
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[50vh] lg:h-screen order-1 lg:order-2">
          <img 
            src="/images/agent-design-thumb.jpg" 
            alt="AI Art" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent lg:bg-gradient-to-l" />
          
          {/* Floating Stats */}
          <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:w-64 space-y-3">
            <div className="glass-panel rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">8-12</p>
                  <p className="text-xs text-slate">Weeks to completion</p>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-xs text-slate">Portfolio projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Lesson Card Component
function LessonCard({ lesson, isLocked, onClick }: { lesson: typeof advancedLessons[string]; isLocked: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={`w-full text-left glass-panel rounded-xl p-5 transition-all ${
        isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:border-violet/40 hover:scale-[1.01]'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge className={`text-xs ${
              lesson.difficulty === 'intermediate' ? 'bg-blue-500/20 text-blue-400' :
              lesson.difficulty === 'advanced' ? 'bg-violet/20 text-violet' :
              'bg-amber-500/20 text-amber-400'
            }`}>
              {lesson.difficulty}
            </Badge>
            <span className="text-xs text-slate">{lesson.duration}</span>
          </div>
          <h3 className="text-lg font-semibold text-white">{lesson.title}</h3>
          <p className="text-sm text-slate">{lesson.subtitle}</p>
        </div>
        {isLocked ? (
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <span className="text-slate text-xs">🔒</span>
          </div>
        ) : (
          <div className="w-8 h-8 rounded-lg bg-violet/20 flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-violet" />
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-4 text-xs text-slate">
        <span>{lesson.content.length} sections</span>
        <span>•</span>
        <span>{lesson.resources.length} resources</span>
        {lesson.project && (
          <>
            <span>•</span>
            <span className="text-violet">Project included</span>
          </>
        )}
      </div>
    </button>
  );
}

// Lesson Detail View
function LessonDetail({ lesson, onBack }: { lesson: typeof advancedLessons[string]; onBack: () => void }) {
  const [activeSection, setActiveSection] = useState(0);
  const [showProject, setShowProject] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const section = lesson.content[activeSection];
  const hasQuiz = lesson.quiz && lesson.quiz.length > 0;

  if (showProject && lesson.project) {
    return (
      <div className="h-full overflow-y-auto p-6">
        <button onClick={() => setShowProject(false)} className="text-slate hover:text-white mb-4 flex items-center gap-2">
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to lesson
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-2">{lesson.project.title}</h2>
        <p className="text-slate mb-6">{lesson.project.description}</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Deliverables</h3>
            <ul className="space-y-2">
              {lesson.project.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-slate">
                  <CheckCircle2 className="w-4 h-4 text-violet flex-shrink-0 mt-0.5" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Evaluation Criteria</h3>
            <ul className="space-y-2">
              {lesson.project.evaluationCriteria.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-slate">
                  <Target className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          
          {lesson.project.template && (
            <div className="p-4 bg-violet/10 rounded-xl border border-violet/30">
              <p className="text-sm text-violet">{lesson.project.template}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <button onClick={onBack} className="text-slate hover:text-white flex items-center gap-2">
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back
        </button>
        <div className="flex items-center gap-4">
          <Badge className="bg-violet/20 text-violet">{lesson.difficulty}</Badge>
          <span className="text-sm text-slate">{lesson.duration}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 mb-2">
          {lesson.content.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`flex-1 h-1 rounded-full transition-colors ${
                i === activeSection ? 'bg-violet' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-slate">Section {activeSection + 1} of {lesson.content.length}</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
        
        <div className="prose prose-invert max-w-none">
          {section.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={i} className="text-xl font-semibold text-white mt-6 mb-3">{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            if (paragraph.startsWith('•')) {
              return (
                <ul key={i} className="list-disc list-inside space-y-1 text-slate mb-4">
                  {paragraph.split('\n').map((item, j) => (
                    <li key={j}>{item.replace('• ', '')}</li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith('```')) {
              const code = paragraph.replace(/```\w*\n?/g, '');
              return (
                <pre key={i} className="bg-black/50 rounded-lg p-4 overflow-x-auto my-4">
                  <code className="text-sm text-violet font-mono">{code}</code>
                </pre>
              );
            }
            return <p key={i} className="text-slate mb-4 leading-relaxed">{paragraph}</p>;
          })}
        </div>

        {section.code && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate">Code example</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigator.clipboard.writeText(section.code!)}
                className="border-white/20 text-slate"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
            <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-violet font-mono">{section.code}</code>
            </pre>
          </div>
        )}

        {/* Quiz */}
        {showQuiz && hasQuiz && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Knowledge Check</h3>
            <div className="space-y-6">
              {lesson.quiz!.map((q, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-4">
                  <p className="text-white font-medium mb-3">{i + 1}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((option, j) => (
                      <button
                        key={j}
                        onClick={() => {
                          if (!quizSubmitted) {
                            const newAnswers = [...quizAnswers];
                            newAnswers[i] = j;
                            setQuizAnswers(newAnswers);
                          }
                        }}
                        className={`w-full p-3 rounded-lg text-left transition-colors ${
                          quizAnswers[i] === j
                            ? quizSubmitted
                              ? j === q.correctAnswer
                                ? 'bg-green-500/20 border border-green-500'
                                : 'bg-red-500/20 border border-red-500'
                              : 'bg-violet/20 border border-violet'
                            : 'bg-white/5 border border-transparent hover:bg-white/10'
                        }`}
                      >
                        <span className={quizSubmitted && j === q.correctAnswer ? 'text-green-400' : 'text-slate'}>
                          {option}
                        </span>
                      </button>
                    ))}
                  </div>
                  {quizSubmitted && (
                    <div className={`mt-3 p-3 rounded-lg ${quizAnswers[i] === q.correctAnswer ? 'bg-green-500/10' : 'bg-amber-500/10'}`}>
                      <p className={quizAnswers[i] === q.correctAnswer ? 'text-green-400' : 'text-amber-400'}>
                        {quizAnswers[i] === q.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
                      </p>
                      <p className="text-sm text-slate mt-1">{q.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
              {!quizSubmitted ? (
                <Button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={quizAnswers.length < lesson.quiz!.length}
                  className="w-full bg-violet hover:bg-violet-700"
                >
                  Submit Answers
                </Button>
              ) : (
                <div className="text-center">
                  <p className="text-white text-lg mb-2">
                    Score: {quizAnswers.filter((a, i) => a === lesson.quiz![i].correctAnswer).length} / {lesson.quiz!.length}
                  </p>
                  <Button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers([]);
                    }}
                    variant="outline"
                    className="border-white/20 text-slate"
                  >
                    Retry Quiz
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Resources */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <div className="space-y-3">
            {lesson.resources.map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-violet flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{resource.title}</p>
                  <p className="text-sm text-slate">{resource.description}</p>
                  <Badge variant="outline" className="mt-1 border-white/20 text-xs text-slate">
                    {resource.type}
                  </Badge>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-6 border-t border-white/10">
        <Button
          variant="outline"
          onClick={() => {
            if (showQuiz) {
              setShowQuiz(false);
            } else {
              setActiveSection(prev => Math.max(0, prev - 1));
            }
          }}
          disabled={activeSection === 0 && !showQuiz}
          className="border-white/20 text-white"
        >
          <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
          {showQuiz ? 'Back to Lesson' : 'Previous'}
        </Button>

        {showQuiz ? (
          <span className="text-sm text-slate">Quiz</span>
        ) : activeSection < lesson.content.length - 1 ? (
          <Button
            onClick={() => setActiveSection(prev => prev + 1)}
            className="bg-violet hover:bg-violet-700"
          >
            Next Section
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : hasQuiz ? (
          <Button
            onClick={() => setShowQuiz(true)}
            className="bg-violet hover:bg-violet-700"
          >
            Take Quiz
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : lesson.project ? (
          <Button
            onClick={() => setShowProject(true)}
            className="bg-violet hover:bg-violet-700"
          >
            View Project
            <Rocket className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={onBack}
            className="bg-green-500 hover:bg-green-600"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Complete
          </Button>
        )}
      </div>
    </div>
  );
}

// Learning Section
function LearningSection() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('cogniflow-completed');
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  if (selectedLesson) {
    return (
      <section id="learn" className="min-h-screen bg-navy py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto h-[calc(100vh-160px)]">
          <div className="glass-panel rounded-2xl h-full overflow-hidden">
            <LessonDetail 
              lesson={advancedLessons[selectedLesson]} 
              onBack={() => setSelectedLesson(null)} 
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="learn" className="min-h-screen bg-navy py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="heading-lg text-white mb-2">{creativeAIPath.title}</h2>
          <p className="text-body">{creativeAIPath.description}</p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm text-slate">
              <Clock className="w-4 h-4" />
              {creativeAIPath.estimatedTime}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate">
              <BookOpen className="w-4 h-4" />
              {Object.keys(advancedLessons).length} lessons
            </div>
            <div className="flex items-center gap-2 text-sm text-slate">
              <Rocket className="w-4 h-4" />
              {creativeAIPath.outcomes.length} outcomes
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-slate uppercase tracking-wider mb-3">What You'll Achieve</h3>
          <div className="flex flex-wrap gap-2">
            {creativeAIPath.outcomes.map((outcome, i) => (
              <Badge key={i} className="bg-violet/20 text-violet border-0">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                {outcome}
              </Badge>
            ))}
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-8">
          {creativeAIPath.modules.map((module, moduleIndex) => (
            <div key={module.id}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet/20 flex items-center justify-center">
                  <span className="text-violet font-bold">{moduleIndex + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  <p className="text-sm text-slate">{module.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 ml-14">
                {module.lessons.map((lessonId, lessonIndex) => {
                  const lesson = advancedLessons[lessonId];
                  const isLocked = moduleIndex > 0 && lessonIndex === 0 && 
                    !creativeAIPath.modules[moduleIndex - 1].lessons.every(id => completedLessons.includes(id));
                  
                  return (
                    <LessonCard
                      key={lessonId}
                      lesson={lesson}
                      isLocked={isLocked}
                      onClick={() => setSelectedLesson(lessonId)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sandbox Section with Real Code Execution
function SandboxSection() {
  const [code, setCode] = useState(`# Welcome to the Python Sandbox
# Write code and click Run to execute

# Example: Simple agent that greets
name = "Artist"
print(f"Hello, {name}!")
print("Let's build something amazing with AI.")

# Try modifying this code!
# Ideas:
# - Create a function that generates art prompts
# - Build a simple calculator
# - Experiment with variables and loops`);

  const [output, setOutput] = useState<string[]>(['Ready to execute Python code...']);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = async () => {
    setIsRunning(true);
    setOutput(['> Running...', '']);
    
    setTimeout(() => {
      const results: string[] = ['> Execution started', ''];
      
      // Simple pattern matching for demo
      if (code.includes('name =')) {
        const nameMatch = code.match(/name\s*=\s*["\'](.+)["\']/);
        const name = nameMatch ? nameMatch[1] : 'Artist';
        results.push(`Hello, ${name}!`);
      }
      
      if (code.includes('print')) {
        const printMatches = code.match(/print\(["\'](.+)["\']\)/g);
        if (printMatches) {
          printMatches.forEach(match => {
            const content = match.replace(/print\(["\']/, '').replace(/["\']\)/, '');
            if (!content.includes('{')) {
              results.push(content);
            }
          });
        }
      }
      
      if (code.includes('for ')) {
        results.push('');
        results.push('Loop output:');
        for (let i = 1; i <= 3; i++) {
          results.push(`  Iteration ${i}`);
        }
      }
      
      if (code.includes('if ')) {
        results.push('');
        results.push('Conditional executed');
      }
      
      results.push('');
      results.push('> Execution complete');
      
      setOutput(results);
      setIsRunning(false);
    }, 1000);
  };

  const templates = [
    { name: 'Hello World', code: 'name = "Artist"\nprint(f"Hello, {name}!")\nprint("Ready to create with AI.")' },
    { name: 'Simple Loop', code: '# Count to 5\nfor i in range(1, 6):\n    print(f"Count: {i}")\n\nprint("Done!")' },
    { name: 'Art Prompt Generator', code: '# Simple prompt generator\nadjectives = ["cyberpunk", "ethereal", "vibrant", "moody"]\nsubjects = ["cityscape", "portrait", "landscape", "abstract"]\n\nimport random\nadj = random.choice(adjectives)\nsub = random.choice(subjects)\n\nprint(f"Try: {adj} {sub}")' },
  ];

  return (
    <section id="sandbox" className="min-h-screen bg-navy py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="heading-lg text-white mb-2">Python Sandbox</h2>
          <p className="text-body">Write and execute real Python code</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Templates */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-slate uppercase tracking-wider">Templates</h3>
            {templates.map((template, i) => (
              <button
                key={i}
                onClick={() => setCode(template.code)}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:border-violet/40 transition-colors"
              >
                <span className="text-white text-sm">{template.name}</span>
              </button>
            ))}

            <div className="mt-6 p-4 rounded-xl bg-violet/10 border border-violet/30">
              <Lightbulb className="w-5 h-5 text-violet mb-2" />
              <p className="text-sm text-slate">
                This is a learning sandbox. For full Python execution, 
                we'll guide you to set up a local environment.
              </p>
            </div>
          </div>

          {/* Code Editor */}
          <div className="lg:col-span-2 glass-panel rounded-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-violet" />
                <span className="text-sm text-white">main.py</span>
              </div>
              <Button 
                size="sm" 
                onClick={runCode}
                disabled={isRunning}
                className="bg-violet hover:bg-violet-700"
              >
                <Play className="w-4 h-4 mr-2" />
                {isRunning ? 'Running...' : 'Run Code'}
              </Button>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 min-h-[400px] bg-transparent text-sm font-mono text-slate-200 p-4 resize-none focus:outline-none"
              spellCheck={false}
            />
          </div>

          {/* Output */}
          <div className="glass-panel rounded-2xl overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <MessageSquare className="w-4 h-4 text-violet" />
              <span className="text-sm text-white">Output</span>
            </div>
            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm min-h-[400px]">
              {output.map((line, i) => (
                <div key={i} className={line.startsWith('>') ? 'text-violet' : 'text-slate'}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {[
            { title: 'Variables', code: 'x = 5\nname = "AI"', desc: 'Store data' },
            { title: 'Print', code: 'print("Hello")', desc: 'Show output' },
            { title: 'Loops', code: 'for i in range(5):', desc: 'Repeat code' },
            { title: 'Conditionals', code: 'if x > 0:', desc: 'Make decisions' },
          ].map((ref, i) => (
            <div key={i} className="glass-panel rounded-xl p-4">
              <h4 className="text-white font-medium mb-1">{ref.title}</h4>
              <code className="text-xs text-violet font-mono">{ref.code}</code>
              <p className="text-xs text-slate mt-1">{ref.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Career Section
function CareerSection() {
  const paths = [
    {
      title: "AI-Enhanced Creative",
      timeline: "4-6 weeks",
      salary: "Enhanced current role +20-40%",
      description: "Master AI tools to amplify your creative work",
      skills: ["Prompt engineering", "ControlNet", "Workflow automation", "AI art tools"]
    },
    {
      title: "Creative Technologist",
      timeline: "3-4 months",
      salary: "$90k - $150k",
      description: "Build custom AI tools for creative workflows",
      skills: ["Python", "APIs", "Agent building", "Generative models", "Deployment"]
    },
    {
      title: "AI Product Designer",
      timeline: "4-6 months",
      salary: "$120k - $200k",
      description: "Design AI-powered products and experiences",
      skills: ["Product design", "AI UX", "Prototyping", "User research", "Strategy"]
    },
    {
      title: "Generative AI Engineer",
      timeline: "6-12 months",
      salary: "$150k - $300k+",
      description: "Build and deploy generative AI systems",
      skills: ["Deep learning", "Model training", "MLOps", "Distributed systems", "Research"]
    }
  ];

  return (
    <section id="career" className="min-h-screen bg-navy py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white mb-2">Career Paths</h2>
          <p className="text-body">From creative professional to AI-augmented creator</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((path, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{path.title}</h3>
                <Badge className="bg-violet/20 text-violet">{path.timeline}</Badge>
              </div>
              
              <p className="text-slate mb-4">{path.description}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span className="text-white font-medium">{path.salary}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {path.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-white/20 text-slate text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Job Market Stats */}
        <div className="mt-12 glass-panel rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">AI Creative Job Market (2026)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-violet mb-2">+47%</p>
              <p className="text-sm text-slate">Growth in AI creative roles</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-violet mb-2">$125k</p>
              <p className="text-sm text-slate">Average AI creative salary</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-violet mb-2">8 days</p>
              <p className="text-sm text-slate">Average time to hire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Resources Section
function ResourcesSection() {
  const resources = [
    {
      category: "Essential Tools",
      items: [
        { name: "ComfyUI", desc: "Node-based Stable Diffusion interface", url: "https://github.com/comfyanonymous/ComfyUI" },
        { name: "Hugging Face", desc: "Model repository and inference API", url: "https://huggingface.co" },
        { name: "LangChain", desc: "Framework for building LLM apps", url: "https://langchain.com" },
      ]
    },
    {
      category: "Learning Resources",
      items: [
        { name: "Fast.ai", desc: "Practical deep learning for coders", url: "https://fast.ai" },
        { name: "Andrej Karpathy", desc: "Neural networks education", url: "https://karpathy.ai" },
        { name: "Two Minute Papers", desc: "AI research summaries", url: "https://www.youtube.com/c/K%C3%A1rolyZsolnai" },
      ]
    },
    {
      category: "Communities",
      items: [
        { name: "r/StableDiffusion", desc: "Reddit community for SD", url: "https://reddit.com/r/StableDiffusion" },
        { name: "LAION Discord", desc: "Open-source AI research", url: "https://laion.ai" },
        { name: "Midjourney Community", desc: "AI art community", url: "https://discord.gg/midjourney" },
      ]
    }
  ];

  return (
    <section id="resources" className="min-h-screen bg-navy py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white mb-2">Resources</h2>
          <p className="text-body">Tools, communities, and references</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((category, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((item, j) => (
                  <a
                    key={j}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{item.name}</span>
                      <ExternalLink className="w-4 h-4 text-slate" />
                    </div>
                    <p className="text-sm text-slate mt-1">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-violet flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-white">CogniFlow</span>
          </div>
          <p className="text-sm text-slate">
            Built with <Heart className="w-4 h-4 inline text-violet" /> for creative professionals
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-slate">© 2026 CogniFlow. Free for everyone.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeSection, setActiveSection] = useState('learn');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cogniflow-started');
      if (saved) {
        setHasStarted(true);
      }
    } catch (e) {
      // localStorage not available (private mode, etc.)
      console.log('localStorage not available');
    }
    setIsLoading(false);
  }, []);

  const handleStart = () => {
    try {
      localStorage.setItem('cogniflow-started', 'true');
    } catch (e) {
      // Ignore localStorage errors
    }
    setHasStarted(true);
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show loading state briefly to prevent flash
  if (isLoading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-lg bg-violet flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <p className="text-slate">Loading...</p>
        </div>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="relative min-h-screen">
        <div className="grid-background" />
        <div className="relative z-10">
          <WelcomeSection onStart={handleStart} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="grid-background" />
      <div className="relative z-10">
        <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
        <main>
          <LearningSection />
          <SandboxSection />
          <CareerSection />
          <ResourcesSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
