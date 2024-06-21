/** @jsxRuntime classic */
/** @jsx jsx */
import Navbar from "./Navbar"
import { css, jsx } from "@emotion/react";
import image from "./images/bg_bggenerator_com.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    
    <div className="home" css={CSS}>
      <Navbar/>
      <div className="banner">
        <div className="headline" >
          <center><h1>Welcome to SSB BANKING</h1></center>
          <h2>We are a trusted banking and finance system that provides a wide range of financial services to individuals and businesses. Our mission is to help our clients achieve their financial goals through innovative and tailored solutions.</h2>
        </div>
      </div>
      <div className="services__banner">
        <h1>Our Services</h1>
      </div>
      <div className="services" id="services">
        <Link to="/Customer">
          <div className="item">
            <div className="image">
              <i className="fas fa-users"></i>
            </div>
            <div className="title">
              <h3>Customer Account</h3>
            </div>
          </div>
        </Link>
        <Link to="/Loan">
          <div className="item">
            <div className="image">
              <i className="fas fa-rupee-sign"></i>
            </div>
            <div className="title">
              <h3>Loans</h3>
            </div>
          </div>
        </Link>
        <Link to="/Investments">
          <div className="item">
            <div className="image">
              <i className="fas fa-history"></i>
            </div>
            <div className="title">
              <h3>Investments</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

const CSS = css`
  font-family: "Roboto", sans-serif;
  background: url(${image}) no-repeat,
    linear-gradient(
      180deg,
      rgba(72, 202, 228, 1) 0%,
      rgba(173, 232, 244, 1) 50%,
      rgba(202, 240, 248, 1) 100%
    );
  background-size: cover, cover;
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 45vh;
    color: var(--navy-blue);
    .headline {
      margin-left: 100px;
      flex: 0.8;
      h1 {
        font-size: 38px;
        font-weight: 900;
      }
      p {
        color: var(--dark-cornflower-blue);
        font-size: 20px;
        font-weight: 500;
        text-decoration: underline;
      }
    }
    .image {
      position: absolute;
      right: 120px;
      i::before {
        font-size: 180px;
      }
    }
  }
  @media screen and (max-width: 780px) {
    .banner {
      flex-direction: column;
      justify-content: space-around;
      height: 100vh;
      .headline {
        margin-left: 10px;
        flex: unset;
        h1 {
          font-size: 56px;
        }
      }
      .image {
        position: unset;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .services__banner {
    height: 0vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(255, 255, 255, 0.3);
    h1 {
      font-size: 78px;
      font-family: "Marck Script", cursive;
      color: var(--navy-blue);
    }
    a {
      color: var(--powder-blue);
      padding: 0px 2.5px;
      border-radius: 180px;
      background: var(--navy-blue);
      box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 1px 1px 25px 0px rgba(0, 0, 0, 0.75);
      transition: all 0.3s ease;
      :hover {
        color: var(--navy-blue);
        background: var(--power-blue);
        transform: scale(1.4);
        box-shadow: unset;
        -webkit-box-shadow: unset;
        -moz-box-shadow: unset;
      }
      
      }
    }
  }
  .services {
 
    height: 45vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      height: 100%;
      display: flex;
      align-items: center;
      color: var(--powder-blue);
      padding: 10px 0;
      .item {
        height: 40%;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background: rgb(0, 137, 164);
        background: linear-gradient(
          180deg,
          rgba(0, 137, 164, 1) 0%,
          rgba(80, 196, 220, 1) 50%,
          rgba(58, 205, 235, 1) 100%
        );
        border-radius: 5px;
        padding: 0 60px;
        transition: all 0.3s ease;
        .image {
          i::before {
            font-size: 120px;
            padding-left: 10px;
          }
        }
        .title {
          color: var(--navy-blue);
        }
      }
      .item:hover {
        transform: scale(1.01);
        box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.75);
      }
      @media screen and (max-width: 1100px) {
        .item {
          width: 200px;
        }
      }
    }
  }
  @media screen and (max-width: 625px) {
    .services__banner {
      h1 {
        font-size: 58px;
      }
    }
    .services {
      height: 110vh;
      flex-direction: column;
      padding-bottom: 30px;
      a {
        width: 100%;
        max-width: 350px;
        justify-content: center;
        .item {
          width: 100%;
        }
      }
    }
  }
`;

export default Home;