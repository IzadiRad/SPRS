import React, { useState } from "react";
import { Logo } from "./Navbar.jsx";
import { Link } from "react-router-dom";
import SlideBar from "../Slidebar/SlideBar";
import { useReducePriceState } from "../../Providers/Providers.js";
import github from "../../static/github.svg";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const reducePrice = useReducePriceState();
  const showSidebar = () => setSidebar(!sidebar);

  function enableScroll() {
    window.onscroll = function () {};
  }
  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function multeClickShow() {
    showSidebar();
    disableScroll();
  }
  function multeClickColse() {
    showSidebar();
    enableScroll();
  }
  function reload() {
    window.location.reload(false);
  }
  return (
    <>
      <div className="navbar logoNavbar">
        <Link to="/" className="MenuLinks">
          <Logo className="noSelect">Logo</Logo>
        </Link>
        <a
          href="https://github.com/AlbertoMiller/SPRS"
          className="menuLinks githubLink"
        >
          <div className="github-icon">
          {/* <i class="fa fa-github" aria-hidden="true" >Github</i> */}
          <img src={github} alt="github" />
          </div>
        </a>
        <Link to="#" className="menuLinks ">
          <i
            className={"fas fa-cart-plus navMenuShopIcon"}
            onClick={multeClickShow}
          />
        </Link>
      </div>

      <nav className={sidebar ? "navMenu active" : " navMenu"}>
        <Link to="#" className="menubars">
          <div className="navbar-delete" onClick={multeClickColse}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </Link>
        <ul className="navMenuItems">
          <br />
          <SlideBar />
        </ul>
        <div className="payment">
          <div className="priceClac">
            <div className="priceText">Payment :</div>
            <div className="priceNumber">
              ${reducePrice.reduce((a, c) => (a = a + c), 0).toFixed(2)}
            </div>
          </div>
          <button className="paymentBtn btn btn-primary" onClick={reload}>
            Payment!
          </button>
        </div>
      </nav>
      <div
        className={sidebar ? " outOfMenu active" : " outOfMenu"}
        onClick={multeClickColse}
      />
    </>
  );
};
export default Navbar;
