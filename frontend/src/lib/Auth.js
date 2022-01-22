import jwt from 'jsonwebtoken'

class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}')
  }

  static removeToken() {
    localStorage.removeItem('token')
  }

  static removeUser() {
    localStorage.removeItem('user')
  }

  static getPayload() {
    return jwt.decode(this.getToken())
  }

  static isAuthenticated() {
    const payload = this.getPayload()
    const now = Math.round(Date.now() / 1000)
    return payload && now < payload.exp
  }

  static isCurrentUser(user) {
    const payload = this.getPayload()
    return payload && user.id === payload.sub
  }
}

export default Auth


  
  headerstyle.css
.navbar {
  border-bottom: 1px solid rgba(187, 186, 231, 0.15);
  padding: 0.5rem 1rem;
  top: 0;
  z-index: 100;
  position: fixed;
  width: 105%;
  background-color: white;
}

.navbar_toggle_icon span {
  display: block;
  width: 30px;
  height: 3px;
  margin: 5px 0;
  position: relative;
  text-align: center;
  justify-content: center;
  background: rgb(85, 83, 83);
  border-radius: 3px;
  z-index: 1;
}

.navLinkFeatures {
  margin-right: 30px;
}

.navLinkPricing {
  margin-right: 30px;
}

.navLinkComms {
  margin-right: 30px;
}

.image {
  margin: auto;
}

.searchImage {
  position: relative;
  left: 130px;
}
.searchImage1 {
  display: none;
}
.navbarBrand {
  padding-left: 55px;
}
.navbarBrand span {
  padding: 0.5rem;
  font-size: 22px;
  margin: 0 !important;
}

.signs {
  padding-right: 8rem;
}
.signs li {
  padding: 8px 20px;
}
.signU {
  color: #00b87c;
  font-weight: 400;
  font-size: 18px;
  padding: 8px 10px;
}

.signU:hover {
  border-bottom: 0.2rem solid #00b87c;
}

.signIn {
  background-color: #00b87c;
  color: white !important;
  font-weight: 400;
  font-size: 18px;
  padding: 8px 20px;
  border-radius: 3px;
  margin-right: 80px;
}

.signIn:hover {
  background-color: #156349;
  color: white;
}

.item {
  color: black;
  font-size: 18px;
  font-weight: 400;
  padding: 8px 5px;
}
.navbarNav li span:hover {
  border-bottom: 0.2rem solid #00b87c;
}
.toggle {
  margin-right: 12px;
}

@media screen and (max-width: 480px) {
  .navbarNav li span {
    padding-left: 0;
  }
  .navbarBrand {
    padding-left: 0;
  }
  .toggle {
    margin-right: 10px;
  }
  .searchImage1 {
    position: relative;
    left: 50px;
  }
  .searchImage {
    display: none;
  }
  .signs {
    display: inline-flex;
    padding: 0 10px;
  }
  .signs li {
    padding: 0 20px;
  }
  .signU:hover {
    border-bottom: none;
    color: #00b87c;
  }
  .signU {
    color: #00b87c;
    font-weight: 400;
    font-size: 18px;
    padding: 8px 0px;
  }
}

@media screen and (min-width: 480px) {
  .navbarBrand {
    padding-left: 12px;
  }
  .navbarNav li {
    padding: 5px 0;
  }
  .navbarNav li span:hover {
    border-bottom: none;
  }
  .signs {
    display: inline-flex;
    padding: 0 10px;
  }
  .signs li {
    padding: 0 20px;
  }
  .signU:hover {
    border-bottom: none;
    color: #00b87c;
  }
  .searchImage1 {
    position: relative;
    left: 100px;
  }
  .searchImage {
    display: none;
  }
}

@media screen and (min-width: 600px) {
  .searchImage1 {
    position: relative;
    left: 150px;
  }
  .toggle {
    margin-right: 30px;
  }
}

@media screen and (min-width: 768px) {
  .searchImage1 {
    position: relative;
    left: 200px;
  }
  .toggle {
    margin-right: 50px;
  }
}

@media screen and (max-width: 1024px) {
  .searchImage {
    position: relative;
    left: 40px;
  }
}

@media screen and (min-width: 1440px) {
  .searchImage {
    position: relative;
    left: 180px;
  }
  .signs {
    padding-right: 2rem;
  }
}

header.js
import React from "react"
import { Link } from "react-router-dom"
import headerStyles from "../component-styles/HeaderStyle.module.css"
import zurichatlogo from "../component-assets/zurichatlogo.svg"
import searchIcon from "../component-assets/searchIcon.svg"
//import { Button } from '../pages/createworkspace/components/WorkspaceHome'

const HeaderSearchSuggestion = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${headerStyles.navbar}`}
    >
      <Link
        to="/"
        className={`navbar-brand me-0 me-md-2 d-flex align-items-center ${headerStyles.navbarBrand}`}
      >
        <img
          src={zurichatlogo}
          alt="zuri-logo"
          className={`d-inline-block align-top ${headerStyles.image}`}
        />
        <span className={`mb-2 ${headerStyles.zuriChat}`}>Zuri Chat</span>
      </Link>
      <Link to="/search">
        <img
          src={searchIcon}
          alt="search-Icon"
          className={`d-block d-lg-none align-top ${headerStyles.searchImage1}`}
        />
      </Link>
      <button
        className={`navbar-toggler ${headerStyles.toggle}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className={headerStyles.navbar_toggle_icon}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div
        className={`collapse px-3 justify-content-center navbar-collapse ${headerStyles.collapse}`}
        id="navbarText"
      >
        <ul
          className={`navbar-nav d-flex justify-content-between align-items-start align-items-lg-center ${headerStyles.navbarNav}`}
        >
          <li className="nav-item">
            <Link
              to="/pricing"
              className={`nav-link ${headerStyles.navLinkFeatures}`}
              aria-current="page"
            >
              <span className={`${headerStyles.item}`}>Pricing</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${headerStyles.navLinkPricing}`}
              role="button"
              aria-expanded="false"
            >
              <span className={`${headerStyles.item}`}>About Zurichat</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/downloads"
              className={`nav-link ${headerStyles.navLinkComms}`}
            >
              <span className={`${headerStyles.item}`}>Downloads</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-link"
              role="button"
              aria-expanded="false"
            >
              <span className={`${headerStyles.item}`}>Contact Us</span>
            </Link>
          </li>
        </ul>

        <ul className={`d-lg-none navbar-nav-scroll ${headerStyles.signs}`}>
          <li className="nav-item">
            <Link to="/signup" className={`btn ${headerStyles.signU} nav-link`}>
              <span>Sign Up</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={`btn ${headerStyles.signIn} nav-link`}
              role="button"
            >
              <span className="signin">Login</span>
            </Link>
          </li>
        </ul>
        <Link to="/search">
          <img
            src={searchIcon}
            alt="search-Icon"
            className={`d-md-none d-lg-block align-top ${headerStyles.searchImage}`}
          />
        </Link>
      </div>
      <ul
        className={`navbar-nav d-none d-lg-flex me-auto my-2 my-lg-0 navbar-nav-scroll ${headerStyles.signs}`}
      >
        <li className="nav-item">
          <Link to="/signup">
            <span className={`${headerStyles.signU}`}>Sign Up</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login">
            <span className={`${headerStyles.signIn}`}>Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default HeaderSearchSuggestion

Careers section 2
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap");

* {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
}
button:hover {
  cursor: pointer;
}
.Section2 {
  margin-bottom: 0rem;
}
.Section2 h2 {
  font-size: 36px;
  margin: 0;
  text-align: center;
}
.Section2 p {
  font-size: 20px;
  text-align: center;
}
.subSection2 {
  text-align: left;
  padding: 69px 60px 69px 60px;
  background-color: #00b87c;
  display: flex;
  flex-direction: row;
  grid-gap: 100px;
}
.subSection2 h3 {
  font-size: 24px;
  color: #ffffff;
}
.subSection2 p {
  margin: 0;
  text-align: left;
  font-size: 20px;
  color: #ffffff;
}

@media screen and (max-width: 1085px) {
  .subSection2 {
    grid-gap: 80px;
  }
  .subSection2 h3 {
    font-size: 22px;
  }
  .subSection2 p {
    padding: 0;
    font-size: 18px;
  }
}
@media screen and (max-width: 850px) {
  .Section2 h2 {
    font-size: 40px;
  }
  .Section2 p {
    padding: 0px 20px 20px 20px;
    font-size: 18px;
  }
  .subSection2 {
    flex-direction: column;
    grid-gap: 80px;
    padding: 69px 30px 69px 30px;
  }
  .subSection2 p {
    padding: 0 50px 0px 0px;
  }
}


@media screen and (max-width: 480px) {
  .Section2 h2 {
    font-size: 22px;
  }
  .Section2 p {
    font-size: 16px;
    margin-bottom: -5px;
  }
  .subSection2 {
    grid-gap: 30px;
    padding: 30px;
  }
  .subSection2 h3 {
    font-size: 22px;
  }
  .subSection2 p {
    padding: 0;
  }
}



Section 3 Careers
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap");

* {
  font-family: "Lato", sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
button:hover {
  cursor: pointer;
}
.Section3 h2 {
  font-size: 36px;
  margin: 0;
  text-align: center;
}
.Section3 p {
  padding: 0px 30px 20px 30px;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
}
.section3Cards {
  padding: 60px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto;
}
.section3Cards div {
  background-color: white;
  padding: 20px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}
.section3Cards div h3 {
  font-size: 20px;
}
.registerNow p {
  margin-bottom: 10px;
  font-size: 24px;
  text-align: center;
}
.section3Cards div p {
  padding: 0;
  font-size: 16px;
  padding-right: 10px;
  text-align: left;
}
.section3Cards .languages {
  padding: 0;
  margin: 35px 0px 12px 0px;
  box-shadow: none;
}
.languages hr {
  position: static;
  margin-right: 50px;
  border: 1px solid #999999;
}
.section3Cards .languages li {
  list-style: none;
  font-size: 16px;
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-right: 15px;
}
.registerNow {
  padding: 60px;
  text-align: center;
  margin-bottom: 5rem;
}
.registerNow .regbtn {
  display: inline-block;
  padding: 20px 70px 20px 70px;
  font-size: 22px;
  border: none;
  border-radius: 3px;
  background-color: #00b87c;
  color: white;
  margin-bottom: 20px;
}
@media screen and (max-width: 1085px) {
  .section3Cards {
    padding: 30px;
  }
}
@media screen and (max-width: 850px) {
  .section3Cards {
    padding: 30px;
    grid-template-columns: auto auto;
  }
  .registerNow {
    padding: 30px;
  }
}

@media screen and (max-width: 500px) {
  .Section3 h2 {
    font-size: 24px;
  }
  .Section3 p {
    font-size: 16px;
  }
  .section3Cards {
    padding: 30px;
    grid-template-columns: auto;
  }

  .registerNow p {
    font-size: 22px;
    text-align: center;
  }
  .section3Cards div p {
    padding: 0;
    font-size: 14px;
    padding-right: 10px;
    text-align: left;
  }

  .registerNow .regbtn {
    padding: 18px 80px 18px 80px;
    font-size: 22px;
  }
}

@media screen and (max-width: 350px) {
  .registerNow .regbtn {
    padding: 18px 60px 18px 60px;
    font-size: 18px;
  }
}



Careers section 1
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap");

* {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
}
button:hover {
  cursor: pointer;
}
.Section1 {
  padding: 60px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  margin-bottom: 4rem;
}
.Section1 img {
  padding-top: 65px;
  width: 90%;
}
.section1Left {
  padding: 70px 40px 20px 0px;
}
.section1Left h1 {
  font-size: 40px;
  margin: 0;
}
.section1Left p {
  font-size: 24px;
  line-height: 1.5;
  padding: 0px 160px 0px 0px;
}
.section1Left .JoinBtn {
  display: inline-block;
  padding: 22px 34px 22px 34px;
  font-size: 18px;
  border-radius: 3px;
  color: white;
  background-color: #00b87c;
  border: none;
  font-weight: 600;
}

@media screen and (max-width: 1024px) {
  .Section1 {
    grid-gap: 10px;
    margin-bottom: 1rem;
  }
  .Section1 img {
    margin-top: 5rem;
  }
  .section1Left p {
    font-size: 22px;
    line-height: 1.5;
  }
  .section1Left .JoinBtn {
    font-size: 22px;
  }
}
@media screen and (max-width: 768px) {
  .Section1 {
    grid-template-columns: auto;
    padding: 50px;
    display: block;
    justify-content: center;
  }
  .Section1 img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: -2rem;
    width: 90%;
    height: 80%;
  }

  .section1Left .JoinBtn {
    padding: 18px 70px 18px 70px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 3px;
    width: 100%;
    text-align: center;
  }

  .section1Left {
    padding: 70px 40px 20px 40px;
  }
}

@media screen and (max-width: 500px) {
  .section1Left {
    text-align: center;
    padding: 30px 0px 20px 0px;
    position: relative;
    right: 15px;
  }
  .section1Left h1 {
    text-align: center;
    font-size: 30px;
    position: relative;
    left: 25px;
  }
  .section1Left p {
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    width: 116%;
    padding: 0 10px 0 10px;
  }
  .section1Left .JoinBtn {
    padding: 18px 70px 18px 70px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 3px;
    width: 115%;
  }

  .Section1 img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    margin-top: 0rem;
    padding-top: 5px;
  }

  .Section1 {
    grid-template-columns: auto;
    padding: 50px;
    padding-bottom: 10px;
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 410px) {
  .section1Left .JoinBtn {
    padding: 18px 70px 18px 70px;
    width: 115%;
  }
}
