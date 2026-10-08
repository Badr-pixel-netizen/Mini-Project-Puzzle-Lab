import {
  PuzzleDetail,
  PuzzleSummary,
  StageHintResponse,
  SubmitAnswerResponse,
} from "./types";

export async function getAllPuzzles(): Promise<PuzzleSummary[]> {
  const response = await fetch("/api/getAllPuzzles");

  if (!response.ok) {
    throw new Error("Could not load puzzles.");
  }

  return (await response.json()) as PuzzleSummary[];
}
export async function getPuzzleById(id: number): Promise<PuzzleDetail> {
  const response = await fetch(`/api/getPuzzleById/${id}`);

  if (!response.ok) {
    throw new Error("Could not load this puzzle.");
  }

  return (await response.json()) as PuzzleDetail;
}

export async function submitAnswer(
  id: number,
  stageId: number,
  answer: string,
): Promise<SubmitAnswerResponse> {
  const response = await fetch(`/api/submitAnswer/${id}/answers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stageId, answer }),
  });

  if (!response.ok) {
    throw new Error("Could not submit your answer.");
  }

  return (await response.json()) as SubmitAnswerResponse;
}

export async function requestHints(
  id: number,
  stageId: number,
): Promise<StageHintResponse> {
  const response = await fetch(`/api/requestHints/${id}/hint`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stageId }),
  });

  if (!response.ok) {
    throw new Error("Error loading hints.");
  }

  return (await response.json()) as StageHintResponse;
}
