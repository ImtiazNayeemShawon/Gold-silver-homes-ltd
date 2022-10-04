import "../Styles/Home.css";
import React from "react";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Place from "../Assets/2.jpg";
import Place1 from "../Assets/5.jpg";
import Place4 from "../Assets/4.jpg";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Check from "@mui/icons-material/CheckCircle";
import Location from "@mui/icons-material/PinDrop";
import PriceIcon from "@mui/icons-material/MonetizationOnRounded";

function All() {
  const price1 = 10000;
  const price2 = 25000;
  const price3 = 23000;
  const price4 = 20000;



  return (
    <div>
      <div className="Home">
      
        <div className="Sold-info ">
          <Stack spacing={2} direction="row"></Stack>
        </div>
      </div>
      <div className="places " >
      <h1> All projects here</h1> 
        <Grid container spacing={0}>
          <Grid item md={3}>
            <div className="show-place shadow-2xl animate__animated animate__lightSpeedInRight ">
              <img src={Place} alt="place" />
              <p id="type">Appartment</p>
              <p>
                {" "}
                <LoyaltyIcon /> For sale
              </p>
              <p>
                <Location /> Location:Kandirpar
              </p>
              <p>
                <PriceIcon /> price:{price1}$
              </p>
              <span id="ck">
                <Check />
              </span>{" "}
              <span>Bath:2</span>{" "}
              <span id="ck">
                <Check />
              </span>
              <span>Bed:2</span>
              <span id="ck">
                <Check />
              </span>{" "}
              <span>Kitchen:1</span>
              <div className="view shadow-lg shadow-indigo-500/40 animate__animated animate__lightSpeedInRight ">
                <Link to="property-1">view</Link>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="show-place shadow-2xl   animate__animated animate__lightSpeedInRight ">
              <img src={Place4} alt="place" />
              <p id="type">Appartment</p>
              <p>
                {" "}
                <LoyaltyIcon /> For sale
              </p>
              <p>
                <Location /> Location:Ranir bazar
              </p>
              <p>
                <PriceIcon /> price:{price2}$
              </p>
              <span id="ck">
                <Check />
              </span>{" "}
              <span>Bath:4</span>{" "}
              <span id="ck">
                <Check />
              </span>
              <span>Bed:9</span>
              <span id="ck">
                <Check />
              </span>{" "}
              <span>Kitchen:3</span>
              <div className="view shadow-lg shadow-indigo-500/40 animate__animated animate__lightSpeedInRight ">
                <Link to="property-2">view</Link>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="show-place shadow-2xl  animate__animated animate__lightSpeedInRight " >
              <img src={Place1} alt="place" />
              <p id="type">Appartment</p>
              <p>
                {" "}
                <LoyaltyIcon /> For sale
              </p>
              <p>
                <Location /> Location:Ranir dighi
              </p>
              <p>
                <PriceIcon /> price:{price3}$
              </p>
              <span id="ck">
                <Check />
              </span>{" "}
              <span>Bath:3</span>{" "}
              <span id="ck">
                <Check />
              </span>
              <span>Bed:5</span>
              <span id="ck">
                <Check />
              </span>{" "}
              <span>Kitchen:1</span>
              <div className="view shadow-lg shadow-indigo-500/40 animate__animated animate__lightSpeedInRight ">
                <Link to="property-3">view</Link>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="show-place shadow-2xl animate__animated animate__lightSpeedInRight  " >
              <img src={Place4} alt="place" />
              <p id="type">Flate</p>
              <p>
                {" "}
                <LoyaltyIcon /> For sale
              </p>
              <p>
                <Location /> Location:Thakurpara
              </p>
              <p>
                <PriceIcon /> price:{price4}$
              </p>
              <span id="ck">
                <Check />
              </span>{" "}
              <span>Bath:2</span>{" "}
              <span id="ck">
                <Check />
              </span>
              <span>Bed:4</span>
              <span id="ck">
                <Check />
              </span>{" "}
              <span>Kitchen:2</span>
              <div className="view shadow-lg shadow-indigo-500/40 animate__animated animate__lightSpeedInRight " >
                <Link to="property-4">view</Link>
              </div>
            </div>
          </Grid>
          
          <Grid container spacing={0}>
            <Grid item md={3}>
              <div className="show-place shadow-2xl  animate__animated animate__lightSpeedInRight " >
                <img src={Place} alt="place" />
                <p id="type">Appartment</p>
                <p>
                  {" "}
                  <LoyaltyIcon /> For sale
                </p>
                <p>
                  <Location /> Location:Kandirpar
                </p>
                <p>
                  <PriceIcon /> price:{price1}$
                </p>
                <span id="ck">
                  <Check />
                </span>{" "}
                <span>Bath:2</span>{" "}
                <span id="ck">
                  <Check />
                </span>
                <span>Bed:2</span>
                <span id="ck">
                  <Check />
                </span>{" "}
                <span>Kitchen:1</span>
                <div className="view shadow-lg shadow-indigo-500/40 animate__animated animate__lightSpeedInRight " >
                  <Link to="property-1">view</Link>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="show-place shadow-2xl  animate__animated animate__lightSpeedInRight " >
                <img src={Place4} alt="place" />
                <p id="type">Appartment</p>
                <p>
                  {" "}
                  <LoyaltyIcon /> For sale
                </p>
                <p>
                  <Location /> Location:Ranir bazar
                </p>
                <p>
                  <PriceIcon /> price:{price2}$
                </p>
                <span id="ck">
                  <Check />
                </span>{" "}
                <span>Bath:4</span>{" "}
                <span id="ck">
                  <Check />
                </span>
                <span>Bed:9</span>
                <span id="ck">
                  <Check />
                </span>{" "}
                <span>Kitchen:3</span>
                <div className="view shadow-lg shadow-indigo-500/40 animate__animated animate__lightSpeedInRight " >
                  <Link to="property-2">view</Link>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="show-place shadow-2xl  animate__animated animate__lightSpeedInRight " >
                <img src={Place1} alt="place" />
                <p id="type">Appartment</p>
                <p>
                  {" "}
                  <LoyaltyIcon /> For sale
                </p>
                <p>
                  <Location /> Location:Ranir dighi
                </p>
                <p>
                  <PriceIcon /> price:{price3}$
                </p>
                <span id="ck">
                  <Check />
                </span>{" "}
                <span>Bath:3</span>{" "}
                <span id="ck">
                  <Check />
                </span>
                <span>Bed:5</span>
                <span id="ck">
                  <Check />
                </span>{" "}
                <span>Kitchen:1</span>
                <div className="view shadow-lg shadow-indigo-500/40 animate__animated animate__lightSpeedInRight " >
                  <Link to="property-3">view</Link>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="show-place shadow-2xl animate__animated animate__lightSpeedInRight " > 
                <img src={Place4} alt="place" />
                <p id="type">Flate</p>
                <p>
                  {" "}
                  <LoyaltyIcon /> For sale
                </p>
                <p>
                  <Location /> Location:Thakurpara
                </p>
                <p>
                  <PriceIcon /> price:{price4}$
                </p>
                <span id="ck">
                  <Check />
                </span>{" "}
                <span>Bath:2</span>{" "}
                <span id="ck">
                  <Check />
                </span>
                <span>Bed:4</span>
                <span id="ck">
                  <Check />
                </span>{" "}
                <span>Kitchen:2</span>
                <div className="view shadow-lg shadow-indigo-500/40 animate__animated animate__lightSpeedInRight " >
                  <Link to="property-4">view</Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default All;
