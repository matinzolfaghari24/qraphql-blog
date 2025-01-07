import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <AppBar position="sticky">
        <Container>
          <Toolbar >
            <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
              وبلاگ بوتواستارت
            </Typography>
            <Link to="/" style={{textDecoration:"none",color:"white"}}>
            <BookIcon />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
