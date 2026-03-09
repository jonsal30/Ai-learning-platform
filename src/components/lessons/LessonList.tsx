import { useState } from 'react';
import { CheckCircle2, Circle, Clock, BookOpen, Play, ChevronRight, Lock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { learningPath, lessons } from '@/data/lessons';
import { LessonViewer } from './LessonViewer';

interface LessonProgress {
  [lessonId: string]: {
    completed: boolean;
    score?: number;
  };
}

export function LessonList() {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const [progress, setProgress] = useState<LessonProgress>({});
  const [expandedModule, setExpandedModule] = useState<string | null>('module-1');

  // Load progress from localStorage on mount
  useState(() => {
    const saved = localStorage.getItem('cogniflow-progress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  });

  const handleLessonComplete = (lessonId: string) => {
    const newProgress = {
      ...progress,
      [lessonId]: { completed: true }
    };
    setProgress(newProgress);
    localStorage.setItem('cogniflow-progress', JSON.stringify(newProgress));
    setActiveLesson(null);
  };

  const getCompletedCount = (moduleLessonIds: string[]) => {
    return moduleLessonIds.filter(id => progress[id]?.completed).length;
  };

  const isLessonUnlocked = (_lessonId: string, moduleIndex: number, lessonIndex: number) => {
    // First lesson of first module is always unlocked
    if (moduleIndex === 0 && lessonIndex === 0) return true;
    
    // Check if previous lesson is completed
    const module = learningPath.modules[moduleIndex];
    if (lessonIndex > 0) {
      return progress[module.lessons[lessonIndex - 1]]?.completed;
    }
    
    // First lesson of module - check if previous module is complete
    if (moduleIndex > 0) {
      const prevModule = learningPath.modules[moduleIndex - 1];
      return prevModule.lessons.every(id => progress[id]?.completed);
    }
    
    return false;
  };

  if (activeLesson) {
    return (
      <div className="h-full p-6">
        <LessonViewer
          lessonId={activeLesson}
          onComplete={() => handleLessonComplete(activeLesson)}
          onBack={() => setActiveLesson(null)}
        />
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{learningPath.title}</h2>
        <p className="text-slate mb-4">{learningPath.description}</p>
        <div className="flex items-center gap-4 text-sm text-slate">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {learningPath.estimatedTime}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {Object.keys(lessons).length} lessons
          </span>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="mb-8 p-4 glass-panel rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate">Overall Progress</span>
          <span className="text-sm text-violet font-medium">
            {Object.values(progress).filter(p => p.completed).length} / {Object.keys(lessons).length} completed
          </span>
        </div>
        <Progress 
          value={(Object.values(progress).filter(p => p.completed).length / Object.keys(lessons).length) * 100} 
          className="h-2"
        />
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {learningPath.modules.map((module, moduleIndex) => {
          const completedCount = getCompletedCount(module.lessons);
          const isExpanded = expandedModule === module.id;
          const isModuleComplete = completedCount === module.lessons.length;

          return (
            <div key={module.id} className="glass-panel rounded-xl overflow-hidden">
              {/* Module Header */}
              <button
                onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isModuleComplete ? 'bg-green-500/20' : 'bg-violet/20'
                  }`}>
                    {isModuleComplete ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <span className="text-violet font-bold">{moduleIndex + 1}</span>
                    )}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white">{module.title}</h3>
                    <p className="text-sm text-slate">{module.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate">
                    {completedCount}/{module.lessons.length}
                  </span>
                  <ChevronRight className={`w-5 h-5 text-slate transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </div>
              </button>

              {/* Lessons */}
              {isExpanded && (
                <div className="border-t border-white/10">
                  {module.lessons.map((lessonId, lessonIndex) => {
                    const lesson = lessons[lessonId];
                    const isCompleted = progress[lessonId]?.completed;
                    const isUnlocked = isLessonUnlocked(lessonId, moduleIndex, lessonIndex);

                    return (
                      <button
                        key={lessonId}
                        onClick={() => isUnlocked && setActiveLesson(lessonId)}
                        disabled={!isUnlocked}
                        className={`w-full p-4 flex items-center gap-3 border-b border-white/5 last:border-b-0 transition-colors ${
                          isUnlocked ? 'hover:bg-white/5' : 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : isUnlocked ? (
                            <Circle className="w-5 h-5 text-violet" />
                          ) : (
                            <Lock className="w-4 h-4 text-slate" />
                          )}
                        </div>

                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-medium">{lesson.title}</span>
                            {lesson.type === 'hands-on' && (
                              <Badge variant="outline" className="border-violet/30 text-violet text-xs">
                                <Play className="w-3 h-3 mr-1" />
                                Hands-on
                              </Badge>
                            )}
                            {lesson.type === 'project' && (
                              <Badge variant="outline" className="border-amber-500/30 text-amber-400 text-xs">
                                <Star className="w-3 h-3 mr-1" />
                                Project
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate">
                            <span>{lesson.duration}</span>
                            <span>•</span>
                            <span className="capitalize">{lesson.difficulty}</span>
                          </div>
                        </div>

                        {isUnlocked && !isCompleted && (
                          <Button size="sm" className="bg-violet hover:bg-violet-700">
                            Start
                          </Button>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
