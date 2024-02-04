import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  // {
  //   path: "/about",
  //   display: "About",
  // },
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
];
const nav_links2 = [
  {
    path: "/home",
    display: "Home",
  },
  // {
  //   path: "/about",
  //   display: "About",
  // },
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
  {
    path: "/admin/create-tour",
    display: "Admin",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const {data:userInfo} = useFetch(`${BASE_URL}/users/${user?._id}`)

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef?.current?.classList.add("sticky-header");
      } else {
        headerRef?.current?.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/** logo */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/** logo end */} 

            {/* menu start */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {userInfo?.role ==='admin' ? nav_links2.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                )): nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* menu end */}

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                {userInfo ? (
                  <>
                    <ul>
                      <li className="nav_item mt-3">
                      <NavLink to={'/user/profile'} className={(navClass) =>
                        navClass.isActive ? "active_link" : ""
                      }>{userInfo?.photo ? <span className="me-2"><img src={userInfo.photo} alt="" width='35px' height='35px'  style={{border:'1px solid',borderRadius:'50%'}} /></span>:<i class="ri-map-pin-user-fill"></i>}{userInfo.username}</NavLink>
                      </li>
                    </ul>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary_btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary_btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile_menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
