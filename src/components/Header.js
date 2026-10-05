import { useContext } from "react";
import { Badge, Button, Container, Navbar } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

function Header({ favoriteCount }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg="body-tertiary" className="border-bottom mb-4">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className="fw-bold">Movie App</Navbar.Brand>

        <div className="d-flex align-items-center gap-3">
          <span>
            Favourites <Badge bg="warning" text="dark">{favoriteCount}</Badge>
          </span>
          <Button
            variant={theme === "light" ? "dark" : "light"}
            size="sm"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <><FaMoon /> Dark Mode</>
            ) : (
              <><FaSun /> Light Mode</>
            )}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;