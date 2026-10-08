import { ChangeEvent, FormEvent, useState } from "react";

interface SubmitAnswerFormProps {
  onSubmit: (answer: string) => Promise<boolean>;
}

export function SubmitAnswerForm({ onSubmit }: SubmitAnswerFormProps) {
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleAnswerChange(event: ChangeEvent<HTMLInputElement>) {
    setAnswer(event.target.value);
  }

  async function handleAnswerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!answer.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const correct = await onSubmit(answer);
      if (correct) setAnswer("");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleAnswerSubmit} className="answer-form">
      <label htmlFor="answer">Your answer</label>
      <p className="input-note">
        Enter the word or code that solves this stage.
      </p>
      <div className="answer-controls">
        <input
          id="answer"
          className="answer-input"
          placeholder="Enter your answer..."
          value={answer}
          onChange={handleAnswerChange}
        />
        <button
          className="action-button"
          type="submit"
          disabled={isSubmitting || !answer.trim()}
        >
          {isSubmitting ? "Checking..." : "Submit Answer"}
        </button>
      </div>
    </form>
  );
}
