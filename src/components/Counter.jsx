import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/RestartAlt";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Container
      sx={{
        mt: "20vh",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: "5vh",
        }}
        variant="h1"
        color="initial"
      >
        {count}
      </Typography>
      <Container
        className="card"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{ margin: "2vh" }}
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </Button>
        <Button
          sx={{ margin: "2vh" }}
          variant="contained"
          endIcon={<DeleteIcon />}
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
        <Button
          sx={{ margin: "2vh" }}
          variant="outlined"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </Button>
      </Container>
    </Container>
  );
};

export default Counter;
