import SyntaxHighlighter from "react-syntax-highlighter";
// import "./Highlighter.css";

export const StickyHeader = ({ language, theme, children }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={theme}
      className="highlighter"
    >
      {children}
    </SyntaxHighlighter>
  );
};
