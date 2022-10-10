import roomFour from "../assets/room1.jpg";
import roomTwo from "../assets/room2.jpg";
import roomThree from "../assets/room3.jpg";
import roomOne from "../assets/room4.jpg";

const RoomItems = [
  {
    name: "Hotel de France",
    country: "France",
    roomImg: `${roomOne}`,
    status: "Available",
  },
  {
    name: "Kempinski Hotel",
    country: "Ghana",
    roomImg: `${roomTwo}`,
    status: "Unavailable",
  },
  {
    name: "Transcorp Hilton",
    country: "Nigeria",
    roomImg: `${roomThree}`,
    status: "Available",
  },
  {
    name: "The Ritz-Carlton",
    country: "Canada",
    roomImg: `${roomFour}`,
    status: "Unavailable",
  },
];

export default RoomItems;
