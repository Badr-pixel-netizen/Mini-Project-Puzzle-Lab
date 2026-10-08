import {
  puzzles,
  puzzleProgress,
  getPublicPuzzle,
  isPuzzleLocked,
} from "../store.js";

export function getAllPuzzles(req, res) {
  const puzzleSummaries = puzzles.map((puzzle) => {
    const progress = puzzleProgress.find((progress) => {
      return progress.id === puzzle.id;
    });

    return {
      id: puzzle.id,
      title: puzzle.title,
      summary: puzzle.summary,
      locked: isPuzzleLocked(puzzle.id),
      totalStages: puzzle.stages.length,
      completedStages: progress.currentStageIndex,
      solved: progress.solved,
    };
  });

  res.json(puzzleSummaries);
}

export function getPuzzleById(req, res) {
  const id = Number(req.params.id);

  if (!id || id < 1) {
    return res.status(400).json({ message: "Invalid puzzle ID." });
  }

  const puzzle = puzzles.find((puzzle) => puzzle.id === id);

  if (!puzzle) {
    return res.status(404).json({ message: "Puzzle not found." });
  }

  if (isPuzzleLocked(id)) {
    return res.status(403).json({
      message: "Complete all earlier puzzles before investigating this level.",
    });
  }

  res.json(getPublicPuzzle(id));
}

export function getCluesById(req, res) {
  const id = Number(req.params.id);

  if (!id || id < 1) {
    return res.status(400).json({ message: "Invalid puzzle ID." });
  }

  const puzzle = puzzles.find((puzzle) => puzzle.id === id);

  if (!puzzle) {
    return res.status(404).json({ message: "Puzzle not found." });
  }

  if (isPuzzleLocked(id)) {
    return res.status(403).json({
      message: "Complete all earlier puzzles before investigating this level.",
    });
  }

  const progress = puzzleProgress.find((progress) => progress.id === id);

  if (progress.solved) {
    return res.status(409).json({ message: "Puzzle already solved." });
  }

  const stage = puzzle.stages[progress.currentStageIndex];
  res.json(stage.clues);
}

export function submitAnswer(req, res) {
  const id = Number(req.params.id);
  const { stageId, answer } = req.body ?? {};

  if (!id || id < 1) {
    return res.status(400).json({ message: "Invalid puzzle ID." });
  }

  const puzzle = puzzles.find((puzzle) => puzzle.id === id);

  if (!puzzle) {
    return res.status(404).json({ message: "Puzzle not found." });
  }

  if (isPuzzleLocked(id)) {
    return res.status(403).json({
      message: "Complete all earlier puzzles before investigating this level.",
    });
  }

  if (typeof stageId !== "number" || !stageId || stageId < 1) {
    return res.status(400).json({ message: "Invalid stage ID." });
  }

  if (typeof answer !== "string" || !answer.trim()) {
    return res.status(400).json({ message: "Enter an answer." });
  }

  const stage = puzzle.stages.find((stage) => stage.id === stageId);

  if (!stage) {
    return res.status(404).json({ message: "Stage not found." });
  }

  const progress = puzzleProgress.find((progress) => progress.id === id);

  if (progress.solved) {
    return res.status(409).json({ message: "Puzzle already solved." });
  }

  const currentStage = puzzle.stages[progress.currentStageIndex];

  if (currentStage.id !== stageId) {
    return res.status(409).json({ message: "This stage is not current." });
  }

  const submittedAnswer = answer.trim().toLowerCase();
  const acceptedAnswers = stage.answers.map((acceptedAnswer) => {
    return acceptedAnswer.trim().toLowerCase();
  });
  const correct = acceptedAnswers.includes(submittedAnswer);

  if (correct) {
    progress.currentStageIndex += 1;
    progress.solved = progress.currentStageIndex === puzzle.stages.length;
  }

  res.json({
    correct,
    puzzle: getPublicPuzzle(id),
  });
}

export function requestHints(req, res) {
  const id = Number(req.params.id);
  const { stageId } = req.body ?? {};

  if (!id || id < 1) {
    return res.status(400).json({ message: "Invalid puzzle ID." });
  }

  const puzzle = puzzles.find((puzzle) => puzzle.id === id);

  if (!puzzle) {
    return res.status(404).json({ message: "Puzzle not found." });
  }

  if (isPuzzleLocked(id)) {
    return res.status(403).json({
      message: "Complete all earlier puzzles before investigating this level.",
    });
  }

  if (typeof stageId !== "number" || !stageId || stageId < 1) {
    return res.status(400).json({ message: "Invalid stage ID." });
  }

  const stage = puzzle.stages.find((stage) => stage.id === stageId);

  if (!stage) {
    return res.status(404).json({ message: "Stage not found." });
  }

  const progress = puzzleProgress.find((progress) => progress.id === id);

  if (progress.solved) {
    return res.status(409).json({ message: "Puzzle already solved." });
  }

  const currentStage = puzzle.stages[progress.currentStageIndex];

  if (currentStage.id !== stageId) {
    return res.status(409).json({ message: "This stage is not current." });
  }

  const hintProgress = progress.hintsByStage.find((hintProgress) => {
    return hintProgress.stageId === stageId;
  });
  const hintId = hintProgress.hintsUsed;

  if (hintId === stage.hints.length) {
    return res.status(409).json({ message: "No hints remain for this stage." });
  }

  hintProgress.hintsUsed += 1;

  res.json({
    hintId,
    hint: stage.hints[hintId],
    puzzle: getPublicPuzzle(id),
  });
}
