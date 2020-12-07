import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const HighlighterCode = (props) => {
  if (props.isMultipleLanguage) {
    styles.margin = "0px";
  } else {
    styles.margin = " 20px 0px";
  }
  return (
    <SyntaxHighlighter
      showLineNumbers={props.showLineNumbers}
      language={props.language}
      customStyle={styles}
      style={atelierCaveDark}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};
HighlighterCode.defaultProps = {
  language: "javascript",
  showLineNumbers: true,
  isMultipleLanguage: false,
};

const styles = {
  borderRadius: 5,
  padding: 10,
  margin: " 20px 0px",
};
export default HighlighterCode;
