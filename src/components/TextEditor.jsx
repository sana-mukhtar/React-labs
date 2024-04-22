import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "Changes you made may not be saved";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleInput = (e) => {
    setContent(e.target.value);
    setUnsavedChanges(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: "20vh" }}>
      <JoditEditor ref={editor} value={content} onChange={handleInput} />
      <Button variant="contained" color="primary">
        Save
      </Button>
    </Container>
  );
};
export default TextEditor;
