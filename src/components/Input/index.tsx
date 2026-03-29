import "./index.scss";

export type InputState = "default" | "error" | "success";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  errorMessage?: string;
  state?: InputState;
  fullWidth?: boolean;
}

export const Input = ({
  label,
  hint,
  errorMessage,
  state = "default",
  fullWidth = true,
  className = "",
  id,
  ...props
}: InputProps) => {
  const inputId =
    id || `input-${label?.toLowerCase().replace(/\s+/g, "-") || "field"}`;

  const resolvedState = errorMessage ? "error" : state;

  return (
    <div
      className={[
        "input-wrapper",
        fullWidth ? "full-width" : "",
        className,
      ].join(" ")}
    >
      {label && (
        <label className="input-label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <input
        {...props}
        id={inputId}
        className={["input", resolvedState].join(" ")}
        aria-invalid={resolvedState === "error"}
      />

      {errorMessage ? (
        <span className="input-message error-message">{errorMessage}</span>
      ) : hint ? (
        <span className="input-message hint-message">{hint}</span>
      ) : null}
    </div>
  );
};
