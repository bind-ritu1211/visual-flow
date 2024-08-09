// import React from "react";
// // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const VisualCodebase = () => (
//   <div className="visual-codebase">
//   <div className="visual-codebase-wrapper">
//     <div className="visual-codebase-header">
//       <div style={{ margin: 40 }}>
//         <p className="font-2nd-head">
//           Not just the UI. <br></br>
//           Not just the Logic.
//         </p>
//         <p className="sub-font-head">
//           Langflow is a dynamic graph where each node is an executable unit. Its
//           modular and interactive design <b>fosters</b> rapid experimentation
//           and prototyping, pushing hard on the limits of creativity.
//         </p>
//       </div>
//     </div>
//     <div className="visual-codebase-code">
//       <div className="test">
//         <p className="node-code">
//           <SyntaxHighlighter
//             language="python"
//             style={dark}
//             showLsineNumbers={true}
//           >
//             {codeString}
//           </SyntaxHighlighter>
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="visual-codebase-wrapper" style={{}}>
//   <div className="visual-codebase-code visual-codebase-2nd-wrapper">
//       {/* <div className="test">
//         <p className="node-code">
//           <SyntaxHighlighter
//             language="python"
//             style={dark}
//             showLsineNumbers={true}
//           >
//             {codeString}
//           </SyntaxHighlighter>
//         </p>
//       </div> */}
//     </div>
//     <div className="visual-codebase-header">
//       <div style={{ margin: 40 }}>
//         <p className="font-2nd-head">
//         And it's Python Based.
//         </p>
//         <p className="sub-font-head">
//         Python is the <b>go-to language</b> for data scientists. By being Python-native, Langflow leverages the most powerful data manipulation and machine-learning libraries out there.
//         </p>
//       </div>
//     </div>
//   </div>
//   </div>
// );

// export default VisualCodebase;

import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"; // or use another style you prefer
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const codeString = `
from langflow import load_flow_from_json

flow_path = 'myflow.json'
flow = load_flow_from_json(flow_path, build=False)


>> Graph:
>> Nodes: ['ChatOpenAI-vy7fV', 'LLMChain-UjBh1', 'PromptTemplate-5Qowg', 'ConversationBufferMemory-Lu2Nb' ]

>> Connections:
>> ChatOpenAI-vy7fV --> LLMChain-UjBh1
>> PromptTemplate-5Q0W8 -> LLMChain-UjBh1
>> ConversationBufferMemory-Lu2Nb --> LLMChain-UiBh1
`;
const texts = [
  "pandas",
  "numpy",
  "sklearn",
  "transformers",
  "spacy",
  "torch",
  "tensorflow",
];

const VisualCodebase = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      setSpeed(isDeleting ? 30 : 150);
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, speed]);

  useEffect(() => {
    setCurrentText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <div className="visual-codebase">
      <div className="visual-codebase-wrapper">
        <div className="visual-codebase-header">
          <div style={{ margin: 40 }}>
            <p className="font-2nd-head">
              Not just the UI. <br></br>
              Not just the Logic.
            </p>
            <p className="sub-font-head">
              Langflow is a dynamic graph where each node is an executable unit.
              Its modular and interactive design <b>fosters</b> rapid
              experimentation and prototyping, pushing hard on the limits of
              creativity.
            </p>
          </div>
        </div>
        <div className="visual-codebase-code">
          <div className="test">
            <p className="node-code">
              <SyntaxHighlighter
                language="python"
                style={dark}
                showLineNumbers={true}
              >
                {codeString}
              </SyntaxHighlighter>
            </p>
          </div>
        </div>
      </div>
      <div className="visual-codebase-wrapper" style={{}}>
        <div className="visual-codebase-2nd-wrapper">
          <div >
          <p
            className="font-2nd-head"
            style={{
              color: "white",
            }}
          >
            import&nbsp;
            <b
              style={{
                color: "rgb(180, 65, 65)",
              }}
            >
              {currentText}
            </b>
          </p>
          </div>
        </div>
        <div className="visual-codebase-header">
          <div style={{ margin: 40 }}>
            <p className="font-2nd-head">And it's Python Based.</p>
            <p className="sub-font-head">
              Python is the <b>go-to language</b> for data scientists. By being
              Python-native, Langflow leverages the most powerful data
              manipulation and machine-learning libraries out there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualCodebase;
