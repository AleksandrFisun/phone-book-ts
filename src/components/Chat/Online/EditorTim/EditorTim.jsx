import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export const EditorTim = ({ editor, value }) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      editor(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        apiKey="eoxfwmtfl7vvsm4f2kf80wovo1z23f2vvux1xcgcrkn0vzh7"
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        onChange={log}
        initialValue={value}
        init={{
          height: 150,
          width: `100%`,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',

          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; overflow:scroll; }',
        }}
      />
    </>
  );
};
