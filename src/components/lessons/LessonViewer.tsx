import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Lightbulb, BookOpen, Play, Check, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { lessons, type LessonContent } from '@/data/lessons';

interface LessonViewerProps {
  lessonId: string;
  onComplete: () => void;
  onBack: () => void;
}

export function LessonViewer({ lessonId, onComplete, onBack }: LessonViewerProps) {
  const lesson = lessons[lessonId];
  const [currentSection, setCurrentSection] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [userResponse, setUserResponse] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  if (!lesson) {
    return <div className="text-white">Lesson not found</div>;
  }

  const progress = ((currentSection + 1) / lesson.content.length) * 100;
  const isLastSection = currentSection === lesson.content.length - 1;

  const handleNext = () => {
    if (isLastSection && lesson.exercise && !exerciseCompleted) {
      setShowExercise(true);
    } else if (isLastSection) {
      onComplete();
    } else {
      setCurrentSection(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (showExercise) {
      setShowExercise(false);
    } else if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const checkAnswer = () => {
    if (lesson.exercise?.type === 'quiz') {
      if (selectedAnswer === lesson.exercise.correctAnswer) {
        setExerciseCompleted(true);
        setShowSuccess(true);
      }
    } else {
      // For prompt/build exercises, any reasonable attempt counts
      if (userResponse.length > 10) {
        setExerciseCompleted(true);
        setShowSuccess(true);
      }
    }
  };

  const resetExercise = () => {
    setSelectedAnswer(null);
    setUserResponse('');
    setShowSuccess(false);
    setShowHint(false);
  };

  const renderContent = (content: LessonContent) => {
    switch (content.type) {
      case 'text':
        return (
          <div className="space-y-4">
            {content.title && (
              <h3 className="text-xl font-semibold text-white">{content.title}</h3>
            )}
            <div className="text-slate leading-relaxed whitespace-pre-line">
              {content.content}
            </div>
          </div>
        );

      case 'example':
        return (
          <div className="space-y-3">
            {content.title && (
              <h3 className="text-lg font-semibold text-violet flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {content.title}
              </h3>
            )}
            <div className="bg-violet/10 border border-violet/30 rounded-xl p-5 text-slate whitespace-pre-line">
              {content.content}
            </div>
          </div>
        );

      case 'tip':
        return (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 flex gap-4">
            <Lightbulb className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <p className="text-slate">{content.content}</p>
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-3">
            {content.title && (
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Play className="w-5 h-5 text-violet" />
                {content.title}
              </h3>
            )}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-slate whitespace-pre-line">{content.content}</p>
            </div>
          </div>
        );

      case 'visual':
        return (
          <div className="space-y-3">
            {content.title && (
              <h3 className="text-lg font-semibold text-white">{content.title}</h3>
            )}
            <div className="bg-gradient-to-r from-violet/20 to-purple/20 rounded-xl p-6 text-center">
              <p className="text-white font-mono whitespace-pre-line">{content.content}</p>
            </div>
          </div>
        );

      default:
        return <p className="text-slate">{content.content}</p>;
    }
  };

  const renderExercise = () => {
    if (!lesson.exercise) return null;

    if (showSuccess) {
      return (
        <div className="text-center py-8">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Great Job!</h3>
          <p className="text-slate mb-6">{lesson.exercise.successMessage}</p>
          <Button onClick={onComplete} className="bg-violet hover:bg-violet-700">
            Continue <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-violet/20 text-violet">Exercise</Badge>
          <span className="text-sm text-slate">
            {lesson.exercise.type === 'quiz' ? 'Multiple Choice' : lesson.exercise.type === 'prompt' ? 'Written Response' : 'Coding Challenge'}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white">{lesson.exercise.question}</h3>

        {lesson.exercise.type === 'quiz' && lesson.exercise.options && (
          <div className="space-y-3">
            {lesson.exercise.options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelectedAnswer(i)}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  selectedAnswer === i
                    ? 'border-violet bg-violet/20'
                    : 'border-white/10 hover:border-violet/40 bg-white/5'
                }`}
              >
                <span className="text-white">{option}</span>
              </button>
            ))}
          </div>
        )}

        {(lesson.exercise.type === 'prompt' || lesson.exercise.type === 'build') && (
          <div className="space-y-3">
            <textarea
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate/50 resize-none focus:border-violet/50 focus:outline-none"
            />
            <p className="text-xs text-slate">
              {userResponse.length} characters (aim for at least 10)
            </p>
          </div>
        )}

        {showHint && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <p className="text-sm text-slate">{lesson.exercise.hint}</p>
          </div>
        )}

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setShowHint(true)}
            className="border-white/20 text-slate hover:text-white"
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            Hint
          </Button>
          <Button
            onClick={checkAnswer}
            disabled={lesson.exercise.type === 'quiz' ? selectedAnswer === null : userResponse.length < 10}
            className="flex-1 bg-violet hover:bg-violet-700"
          >
            <Check className="w-4 h-4 mr-2" />
            Check Answer
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" onClick={onBack} className="text-slate hover:text-white">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Lessons
        </Button>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="border-violet/30 text-violet">
            {lesson.difficulty}
          </Badge>
          <span className="text-sm text-slate">{lesson.duration}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <Progress value={showExercise ? 100 : progress} className="h-2" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {!showExercise ? (
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">{lesson.title}</h2>
              <p className="text-slate">{lesson.subtitle}</p>
            </div>

            {renderContent(lesson.content[currentSection])}
          </div>
        ) : (
          renderExercise()
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentSection === 0 && !showExercise}
          className="border-white/20 text-white"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        {!showExercise && (
          <span className="text-sm text-slate">
            {currentSection + 1} of {lesson.content.length}
          </span>
        )}

        {!showExercise && (
          <Button onClick={handleNext} className="bg-violet hover:bg-violet-700">
            {isLastSection ? 'Start Exercise' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        )}

        {showExercise && !showSuccess && (
          <Button variant="outline" onClick={resetExercise} className="border-white/20 text-slate">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}
