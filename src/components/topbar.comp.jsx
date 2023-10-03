import Container from "react-bootstrap/Container";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";

function TopbarComp() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary p-3">
        <Container>
          <Link to="/" style={{ textDecoration: "white" }}>
            <Navbar.Brand>Job Hunter</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=" ">
            <Nav className="me-auto">{""}</Nav>
            <div className="position-relative d-flex gap-4 justify-content-center align-items-center">
              <span onClick={() => navigate("account")} role="button">
                <PersonFill size={20} color="dark" />
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default TopbarComp;
