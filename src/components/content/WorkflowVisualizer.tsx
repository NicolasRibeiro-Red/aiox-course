"use client";

import { useState } from "react";

interface WorkflowStep {
  agent: string;
  agentIcon: string;
  title: string;
  description: string;
  artifacts?: string[];
}

interface WorkflowVisualizerProps {
  title: string;
  steps: WorkflowStep[];
}

export function WorkflowVisualizer({ title, steps }: WorkflowVisualizerProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden my-6 not-prose">
      <div className="px-4 py-3 border-b border-border">
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>

      <div className="flex">
        {/* Step Navigator */}
        <div className="w-48 border-r border-border flex-shrink-0">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                i === activeStep
                  ? "bg-accent/10 text-accent border-l-2 border-accent"
                  : "text-muted hover:text-foreground hover:bg-zinc-800/50 border-l-2 border-transparent"
              }`}
            >
              <span className="text-lg">{step.agentIcon}</span>
              <div className="min-w-0">
                <div className="font-medium text-xs truncate">
                  {step.agent}
                </div>
                <div className="text-xs text-zinc-500 truncate">
                  Step {i + 1}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="flex-1 p-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{steps[activeStep].agentIcon}</span>
            <div>
              <div className="font-semibold">{steps[activeStep].title}</div>
              <div className="text-xs text-muted font-mono">
                @{steps[activeStep].agent}
              </div>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed mb-4">
            {steps[activeStep].description}
          </p>

          {steps[activeStep].artifacts && (
              <div>
                <h5 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                  Artefatos Gerados
                </h5>
                <div className="space-y-1">
                  {(Array.isArray(steps[activeStep].artifacts)
                    ? steps[activeStep].artifacts!
                    : (steps[activeStep].artifacts as unknown as string).split(", ")
                  ).map((artifact, i) => (
                    <div
                      key={i}
                      className="text-xs font-mono text-zinc-400 bg-zinc-800 px-3 py-1.5 rounded"
                    >
                      {artifact}
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Progress Indicator */}
          <div className="flex items-center gap-1 mt-6">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= activeStep ? "bg-accent" : "bg-zinc-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
