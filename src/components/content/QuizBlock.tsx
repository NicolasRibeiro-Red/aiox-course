"use client";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizBlockProps {
  title: string;
  questions: Question[];
}

export function QuizBlock({ title, questions }: QuizBlockProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-card border border-border rounded-lg p-6 my-6 text-center not-prose">
        <h4 className="text-lg font-semibold mb-2">{title} — Resultado</h4>
        <div className="text-4xl font-bold text-accent mb-2">{pct}%</div>
        <p className="text-sm text-muted mb-4">
          {score}/{questions.length} respostas corretas
        </p>
        <button
          onClick={reset}
          className="text-sm text-accent hover:text-accent-hover transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 my-6 not-prose">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold">{title}</h4>
        <span className="text-xs text-muted">
          {currentQ + 1}/{questions.length}
        </span>
      </div>

      <p className="text-base font-medium mb-4">{q.question}</p>

      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => {
          let style = "border-border hover:border-zinc-600";
          if (answered) {
            if (i === q.correct) style = "border-accent bg-accent/10";
            else if (i === selected) style = "border-error bg-error/10";
          } else if (i === selected) {
            style = "border-accent";
          }
          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${style}`}
            >
              <span className="font-mono text-xs text-muted mr-3">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mb-4">
          <p
            className={`text-sm font-medium ${
              selected === q.correct ? "text-accent" : "text-error"
            }`}
          >
            {selected === q.correct ? "Correto!" : "Incorreto"}
          </p>
          <p className="text-sm text-zinc-400 mt-1">{q.explanation}</p>
        </div>
      )}

      {answered && (
        <button
          onClick={next}
          className="bg-accent hover:bg-accent-hover text-background text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          {currentQ < questions.length - 1 ? "Proxima" : "Ver Resultado"}
        </button>
      )}

      {/* Progress */}
      <div className="flex items-center gap-1 mt-4">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i < currentQ
                ? "bg-accent"
                : i === currentQ
                  ? "bg-accent/50"
                  : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
