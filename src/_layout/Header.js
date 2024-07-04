import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "./header.css";

function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername("");
    navigate("/");
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <Navbar
      expand="lg"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={`head ${isExpanded ? "expanded" : ""}`}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbar-content">
            <div className="main-nav-content">
              <Nav className="navbar-nav">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <NavDropdown title="TV" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Headertv">
                    인기순
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Tvrating">
                    평점순
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Movie" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Headermovie">
                    인기순
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Movierating">
                    평점순
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/Search">
                  Search
                </Nav.Link>
                <Nav.Link as={Link} to="/bookmarks">
                  Bookmarks
                </Nav.Link>
              </Nav>
            </div>
            <div className="auth-buttons">
              {username ? (
                <>
                  <Nav.Link disabled>Welcome, {username}</Nav.Link>
                  <Button variant="outline-light" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline-light" as={Link} to="/Register">
                    회원가입
                  </Button>
                  <Button variant="outline-light" as={Link} to="/Login">
                    로그인
                  </Button>
                </>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
