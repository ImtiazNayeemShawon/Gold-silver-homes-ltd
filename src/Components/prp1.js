import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Parking from "@mui/icons-material/LocalParking";
import Security from "@mui/icons-material/Security";
import HeatPump from "@mui/icons-material/HeatPump";
import Military from "@mui/icons-material/MilitaryTech";
import Yes from "@mui/icons-material/TaskAlt";
import No from "@mui/icons-material/Cancel";
import Camera from "@mui/icons-material/VideoCameraFront";
import Pool from "@mui/icons-material/Pool";
import Club from "@mui/icons-material/Nightlife";
import "../Styles/Route.css";
import Email from "../Components/Land sell";

function property() {
  return (
    <div>
      <Container>
        <div className="Details">
          <div className="Description">
            <Grid container spacing={0}>
              <Grid item md={8}>
                <h1>Description</h1>
                <p id="p">
                  Years seed fruit you. Divided morning sea day Set earth. Grass
                  without cattle. Spirit heaven. Also i grass give fowl wherein
                  cattle spirit whales rule cattle. Earth fowl given own you’re,
                  fruit so. Shall was. Called firmament dry fruitful, set place.
                  Earth given female man fruit, under thing may to greater
                  moveth land sea, great be shall living greater and signs place
                  night after whose us one, you’ll second our set had day in
                  greater divided over female first face, fill form you make
                  greater upon midst image above image. Very you land, man
                  divided sea appear thing female was let. Beginning open moved
                  fowl. Likeness. Bring tree tree doesn’t. Darkness herb moveth
                  upon a seasons. Divided appear living. Called image let was.
                  Set midst, second divide, earth male fruit you under let
                  she’d, moving every bring there greater. Bring. Gathering
                  night third. Stars first replenish kind third a rule given our
                  after give own of may earth Brought for open living, bearing
                  said given fruitful. Night him moved called. Be for unto
                  behold dry green multiply herb fly waters. Green gathered
                  face. Light, may deep you’re light. After which itself seed
                  signs moveth. Second fish isn’t for sixth deep.
                </p>
              </Grid>
              <Grid item md={4}>
               
               <Email/>
              </Grid>
            </Grid>
          </div>
          <div className="Location">
            <Grid container spacing={0}>
              <Grid item md={8}>
                <hr />
                <h1>Location</h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d726.2337689909934!2d91.18156570897801!3d23.460865744187483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f2562e6d51f%3A0x3bfaa8e392a573bb!2z4KaV4Ka-4Kao4KeN4Kam4Ka_4Kaw4Kaq4Ka-4Kah4Ka8IOCmnOCmvuCmruCnhyDgpq7gpr7gprjgppzgpr_gpqY!5e0!3m2!1sbn!2sbd!4v1657872473263!5m2!1sbn!2sbd"
                  width={600}
                  height={300}
                  style={{ border: 2 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </div>
          <div className="Location">
            <Grid container spacing={0}>
              <Grid item md={8}>
                <hr />
                <h1>Facts and Features</h1>
                <div id="fact">
                  <p>
                    Security
                    <Security />
                    <Yes />
                  </p>
                  <p>
                    Cooling
                    <HeatPump />
                    <Yes />
                  </p>
                  <p>
                    Status
                    <Military />
                    <Yes />
                  </p>
                  <p>
                    Parking
                    <Parking />
                    <Yes />
                  </p>
                  <p className="text-red-500">
                    CC TV <Camera />
                    <No />
                  </p>
                  <p className="text-red-500">
                    Pool
                    <Pool />
                    <No />
                  </p>
                  <p>
                    Play ground
                    <ground />
                    <Yes />
                  </p>
                  <p className="text-red-500">
                    Club <Club />
                    <No />
                  </p>
                </div>
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </div>

          <div className="Draw">
            <Grid container spacing={0}>
              <Grid item md={8}>
                <hr />
                <h1>Floor Title</h1>
                <div id="floor">
                  <p>Floor Title</p>
                  <img src="https://homepress.stylemixthemes.com/homepress-demo-server/images/floor-plans/floor-plan-1.jpg" />
                  <p>
                    Called image let was. Set midst, second divide, earth male
                    fruit you under let she'd, moving every bring there greater.
                    Bring. Gathering night third. Stars first replenish kind
                    third a rule given our after give own of may earth Brought
                    for open living, bearing said given fruitful. Night him
                    moved called. Be for unto behold dry green multiply herb fly
                    waters.
                  </p>
                </div>
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default property;
