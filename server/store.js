import { puzzlesData } from "./data.js";

export const puzzles = puzzlesData.puzzles;

// Every visitor shares this progress. Restarting Express creates fresh records.
export const puzzleProgress = puzzles.map((puzzle) => {
  return {
    id: puzzle.id,
    currentStageIndex: 0,
    solved: false,
    hintsByStage: puzzle.stages.map((stage) => {
      return { stageId: stage.id, hintsUsed: 0 };
    }),
  };
});

// The three approved puzzle IDs are also their level order: 1, 2, 3.
export function isPuzzleLocked(id) {
  const unfinishedEarlierPuzzles = puzzleProgress.filter((progress) => {
    return progress.id < id && !progress.solved;
  });

  return unfinishedEarlierPuzzles.length > 0;
}

export function getPublicPuzzle(id) {
  const puzzle = puzzles.find((puzzle) => puzzle.id === id);
  const progress = puzzleProgress.find((progress) => progress.id === id);

  let stage = null;
  if (!progress.solved) {
    stage = puzzle.stages[progress.currentStageIndex];
  }

  const details = {
    id: puzzle.id,
    title: puzzle.title,
    story: puzzle.story,
    totalStages: puzzle.stages.length,
    completedStages: progress.currentStageIndex,
    solved: progress.solved,
    locked: isPuzzleLocked(id),
    currentStage: null,
  };

  if (stage) {
    const hintProgress = progress.hintsByStage.find((hintProgress) => {
      return hintProgress.stageId === stage.id;
    });
    const publicHints = stage.hints.map((hint, hintId) => {
      return { hintId, hint };
    });
    const revealedHints = publicHints.filter((hint) => {
      return hint.hintId < hintProgress.hintsUsed;
    });

    details.currentStage = {
      id: stage.id,
      title: stage.title,
      question: stage.question,
      clues: stage.clues,
      revealedHints,
      hintsRemaining: stage.hints.length - hintProgress.hintsUsed,
    };
  }

  if (progress.solved) {
    details.finalReveal = puzzle.finalReveal;
  }

  return details;
}
