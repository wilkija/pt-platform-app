import React, { useEffect, useState, useRef } from "react";
import styles from './texteditor.module.css';

function TextEditor(params) {
  // Solution-2 start
  let editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  // --- end
  let [loaded, setLoaded] = useState(false);
  console.log(params)

  useEffect(() => {
    // Solution-2 start
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    // --- end

    setLoaded(true);
  }, []); // run on mounting

  if (loaded) {
    return (
      <>
          <CKEditor  
            editor={ClassicEditor}
            data={params.textEditorData}
            className={styles.ck}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={ ( event, editor ) => {
              const data = editor.getData();
              // console.log( { event, editor, data } );
              params.setVal(data);
          } }
          />
      </>
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
}

export default TextEditor;