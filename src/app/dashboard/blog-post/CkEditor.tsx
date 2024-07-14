import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // ES6

const DynamicReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function TextEditor({ editorContent, onContentChange }) {
  return (
    <div className="z-100 ">
      <DynamicReactQuill
        className=" bg-white sm:h-[410px] "
        theme="snow"
        value={editorContent}
        onChange={onContentChange}
        modules={{
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction  // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],
            [{ image: "insert" }],
            [{ video: "upload" }],
          ],
        }}
      />
    </div>
  );
}
