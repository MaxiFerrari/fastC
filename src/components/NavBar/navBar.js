import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Nav, Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  FiMonitor,
  FiCalendar,
  FiMessageSquare,
  FiShoppingCart,
  FiUsers,
  FiMail,
  FiRss,
  FiActivity,
  FiBriefcase,
  FiClipboard,
  FiBook,
  FiAperture,
} from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import "./navBar.scss";

const navBar = () => {
  const toggle = useSelector((state) => state.topBar.toggle);
  console.log(localStorage);
  const location = useLocation();

  const renderTooltip = (props) => (
    <Tooltip {...props}>
      <strong>{props}</strong>
    </Tooltip>
  );
  const navigation = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome className="mb-1" />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiMonitor className="mb-1" />,
    },
  ];

  const apps = [
    {
      name: "Calendar",
      path: "/calendar",
      icon: <FiCalendar className="mb-1" />,
    },
    {
      name: "Chat",
      path: "/chat",
      icon: <FiMessageSquare className="mb-1" />,
    },
    {
      name: "Ecommerce",
      path: "/ecommerce",
      icon: <FiShoppingCart className="mb-1" />,
    },
    {
      name: "CRM",
      path: "/crm",
      icon: <FiUsers className="mb-1" />,
    },
    {
      name: "Email",
      path: "/email",
      icon: <FiMail className="mb-1" />,
    },
    {
      name: "Social Feed",
      path: "/social-feed",
      icon: <FiRss className="mb-1" />,
    },
    {
      name: "Companies",
      path: "/companies",
      icon: <FiActivity className="mb-1" />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FiBriefcase className="mb-1" />,
    },
  ];

  return (
    <div className={!toggle ? "nav-bar-closed navi-bar" : "nav-bar navi-bar"}>
      <div className="">
        <div className={!toggle ? "d-none" : ""}>
          <span>Navigation</span>
          <Dropdown.Divider />
        </div>
        {navigation.map((item) => (
          <Nav.Link
            key={item.name}
            className={
              location.pathname === item.path ? "active-menu my-2" : "my-2"
            }
          >
            <Link to={item.path} className="text-black-50">
              <OverlayTrigger
                placement="right"
                delay={{ show: 10, hide: 200 }}
                overlay={renderTooltip(item.name)}
              >
                <span>{item.icon}</span>
              </OverlayTrigger>
              <span className={!toggle ? "d-none" : "ms-2"}>{item.name}</span>
            </Link>
          </Nav.Link>
        ))}
      </div>
      <div>
        <div className={!toggle ? "d-none" : ""}>
          <span>Apps</span>
          <Dropdown.Divider />
        </div>
        {apps.map((item) => (
          <Nav.Link
            key={item.name}
            className={
              location.pathname === item.path ? "active-menu my-2" : "my-2"
            }
          >
            <Link to={item.path} className="text-black-50">
              <OverlayTrigger
                placement="right"
                delay={{ show: 10, hide: 200 }}
                overlay={renderTooltip(item.name)}
              >
                <span>{item.icon}</span>
              </OverlayTrigger>
              <span className={!toggle ? "d-none" : "ms-2"}>{item.name}</span>
            </Link>
          </Nav.Link>
        ))}
      </div>
    </div>
  );
};

export default navBar;
