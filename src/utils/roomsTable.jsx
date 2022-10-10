import hotelFour from "../assets/hotel4.png";
import hotelTwo from "../assets/hotel2.png";
import hotelThree from "../assets/hotel3.png";
import hotelOne from "../assets/hotel1.png";

const RoomItems = [
  {
    name: "Hotel de France",
    country: "France",
    hotelImg: `${hotelOne}`,
    status: "Available",
  },
  {
    name: "Kempinski Hotel",
    country: "Ghana",
    hotelImg: `${hotelTwo}`,
    status: "Unavailable",
  },
  {
    name: "Transcorp Hilton",
    country: "Nigeria",
    hotelImg: `${hotelThree}`,
    status: "Available",
  },
  {
    name: "The Ritz-Carlton",
    country: "Canada",
    hotelImg: `${hotelFour}`,
    status: "Unavailable",
  },
];

export default RoomItems;
