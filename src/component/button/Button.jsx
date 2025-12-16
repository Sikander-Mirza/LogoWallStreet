// Button.jsx
export default function Button({ text, className = "", onClick, ...rest }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      {...rest}
    >
      {text}
    </button>
  );
}