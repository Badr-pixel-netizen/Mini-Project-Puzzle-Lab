
export interface PuzzleSummary {
  id: number;
  title: string;
  summary: string;
  locked: boolean;
  totalStages: number;
  completedStages: number;
  solved: boolean;
}

export interface RevealedHint {
  hintId: number;
  hint: string;
}

export interface PuzzleStage {
  id: number;
  title: string;
  question: string;
  clues: string[];
  revealedHints: RevealedHint[];
  hintsRemaining: number;
}

export interface PuzzleDetail {
  id: number;
  title: string;
  story: string;
  locked: boolean;
  totalStages: number;
  completedStages: number;
  solved: boolean;
  currentStage: PuzzleStage | null;
  finalReveal?: string;
}

export interface SubmitAnswerResponse {
  correct: boolean;
  puzzle: PuzzleDetail;
}

export interface StageHintResponse {
  hintId: number;
  hint: string;
  puzzle: PuzzleDetail;
}

