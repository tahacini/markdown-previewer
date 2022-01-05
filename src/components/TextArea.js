import React from "react";

function TextArea(props) {
  return (
    <div className="editor">
      <textarea
        id="editor"
        value={props.text}
        onChange={props.change}
      ></textarea>
    </div>
  );
}

export default TextArea;
