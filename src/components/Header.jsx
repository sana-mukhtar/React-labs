import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton aria-label="" color="inherit" sx={{ mx: "4vh" }}>
            <Link to="/profile">
              <AccountCircleIcon />{" "}
            </Link>
          </IconButton>
          <Typography variant="h6">React Labs</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
