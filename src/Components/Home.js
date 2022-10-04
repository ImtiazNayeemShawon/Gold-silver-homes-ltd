import React from "react";
import "../Styles/Home.css";
import CountUp from "react-countup";
import Rahman from "../Assets/Rahman.jpg";
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

const Count1 = <CountUp end={20} duration={5} />;
const Count2 = <CountUp end={10} duration={5} />;
const Count3 = <CountUp end={50} duration={5} />;

const price1 = 10000;
const price2 = 25000;
const price3 = 23000;
const price4 = 20000;

export default function Home() {
  return (
    <div>
      <div className="Container">
        <div className="Intro-text">
          <h1>Discover Most suitable homes</h1>
          <p>
            Find a variety of properties that suit you very easily
            <br /> forget all difficulties in finding a resdence for you
          </p>
          <div className="Counter-div">
            <div className="Count">
              {" "}
              <span>
                {Count1}K+ <h6>Products </h6>{" "}
              </span>
            </div>
            <div className="Count shadow-2xl">
              <span>
                {Count2}K+ <h6>Happy coustomer </h6>
              </span>
            </div>
            <div className="Count">
              <span>
                {Count3}K+ <h6>Homes</h6>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="Intro-img">
          <img src={Rahman} alt="Rahman villa" />
        </div>
      </div>
     {/*} <div className="slide-container">
        <div className="Running">
          <h1>Running projects</h1>
        </div>
        <div className="Upcoming">
          <h1>Upcoming projects</h1>
        </div>
        <div className="Complete">
          <h1>Complete projects</h1>
        </div>
      </div> */}
      <div className="Home">
        <div className="Sold-info ">
          <Stack spacing={2} direction="row"></Stack>
        </div>
      </div>
      <div className="places">
        <div className="Running text-white	">
          <h1 className="text-white	">Running projects</h1>
        </div>
        <Grid container spacing={0}>
          <Grid item md={3}>
            <div className="show-place shadow-2xl ">
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
              <div className="view shadow-lg shadow-indigo-500/40">
                <Link to="property-1">view</Link>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="show-place shadow-2xl ">
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
              <div className="view shadow-lg shadow-indigo-500/40">
                <Link to="property-2">view</Link>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="show-place shadow-2xl ">
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
              <div className="view shadow-lg shadow-indigo-500/40">
                <Link to="property-3">view</Link>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="show-place shadow-2xl ">
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
              <div className="view shadow-lg shadow-indigo-500/40">
                <Link to="property-4">view</Link>
              </div>
            </div>
          </Grid>
          <div className="Upcoming">
            <h1>Upcoming projects</h1>
          </div>{" "}
          <div className="Complete">
            <h1>Complete projects</h1>
          </div>
          <Grid container spacing={0}>
            <Grid item md={3}>
              <div className="show-place shadow-2xl ">
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
                <div className="view shadow-lg shadow-indigo-500/40">
                  <Link to="property-1">view</Link>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="show-place shadow-2xl ">
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
                <div className="view shadow-lg shadow-indigo-500/40">
                  <Link to="property-2">view</Link>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="show-place shadow-2xl ">
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
                <div className="view shadow-lg shadow-indigo-500/40">
                  <Link to="property-3">view</Link>
                </div>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className="show-place shadow-2xl ">
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
                <div className="view shadow-lg shadow-indigo-500/40">
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
