interface ErrorMessageProps {
  onRetry: () => void;
}
export default function ErrorMessage({ onRetry }: ErrorMessageProps) {
  return (
    <div>
      <p>Could not load this puzzle.</p>
      <button className="action-button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}
