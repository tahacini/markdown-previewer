import React from "react";
import { marked } from "marked";
marked.setOptions({
  breaks: true,
});
const renderer = new marked.Renderer();

function Previewer(props) {
  return (
    <div className="previewWrap">
      <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{
          __html: marked(props.text, { renderer: renderer }),
        }}
      ></div>
    </div>
  );
}
{
}

export default Previewer;
