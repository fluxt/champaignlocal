import React from "react";
import { Link, useHistory } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { useAuth } from "utils/auth.js";

function DefaultNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const auth = useAuth();
  const history = useHistory();

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            title="Champaign Local"
            tag={Link}
          >
            Champaign Local
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/stores" tag={Link}>
                <i className="nc-icon nc-shop" /> Stores
              </NavLink>
            </NavItem>
            { !auth.user &&
              <NavItem>
                <NavLink to="/users/login" tag={Link}>
                  <i className="nc-icon nc-key-25" /> Login
                </NavLink>
              </NavItem>
            }
            { auth.user &&
              <NavItem>
                <NavLink to="/users/logout" tag={Link} onClick={()=>{auth.logout(); history.push("/")}}>
                  <i className="nc-icon nc-key-25" /> Logout
                </NavLink>
              </NavItem>
            }
            {
              auth.user &&
              <NavItem>
                <NavLink>
                  Logged in as {auth.user}
                </NavLink>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default DefaultNavbar;
