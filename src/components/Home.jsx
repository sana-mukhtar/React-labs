import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const counterChange = () => {
    let path = "/counter";
    navigate(path);
  };
  const textEditorChange = () => {
    let path = "/text-editor";
    navigate(path);
  };
  const userInfoChange = () => {
    let path = "/profile";
    navigate(path);
  };
  return (
    <Container sx={{ mt: "20vh" }} maxWidth="lg">
      <Button
        variant="contained"
        onClick={counterChange}
        sx={{ width: "80vw", margin: "4vh", padding: "4vh" }}
        color="primary"
      >
        Counter
      </Button>
      <Button
        variant="contained"
        onClick={textEditorChange}
        sx={{ width: "80vw", margin: "4vh", padding: "4vh" }}
        color="primary"
      >
        Text Editor
      </Button>
      <Button
        variant="contained"
        onClick={userInfoChange}
        sx={{ width: "80vw", margin: "4vh", padding: "4vh" }}
        color="primary"
      >
        User Info
      </Button>
    </Container>
  );
};

export default Home;
