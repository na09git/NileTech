// pages/admin/new-post.jsx or pages/admin/new-post.tsx
"use client";
import React from "react";
import TextEditor from "./CkEditor";

const NewPost = () => {
  const editorContent = "hhf";
  const setEditorContent = (conntent: any) => {
    console.log("There is some changeL ", conntent);
  };
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <TextEditor
          editorContent={editorContent}
          onContentChange={setEditorContent}
        />
        {/* <div className="App">
          <h2>Using CKEditor 5 build in React</h2>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default NewPost;
