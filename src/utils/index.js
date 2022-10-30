// import { removeImage } from "../firebase";
import Axios from "./axios";
/**
 * @param url: string //This is the endpoint of the data you want to fetch
 * @param callback:functionn // This is a function to handle response from the API
 */
export const FETCH_DATA = async (url, callback) => {
  try {
    const { data } = await Axios({
      method: "GET",
      url,
    });
    callback(data);
  } catch (err) {
    console.log(err);
  }
};

// export const ADD_HOTEL = async (hotel, url, callback) => {
//   try {
//     const { data } = await Axios({
//       url: "hotels",
//       method: "POST",
//       data: {
//         ...hotel,
//         image:url
//       }
//     });
//     callback(data);
//   } catch (err) {
//     removeImage(url);
//     console.log(err);
//   }
// };

// export const ADD_ROOM = async (room, url, callback) => {
//   try {
//     const { data } = await Axios({
//       url: `rooms/${room.hotel}`,
//       method: "POST",
//       data: {
//         ...room,
//         image:url
//       }
//     });
//     callback(data);
//   } catch (err) {
//     removeImage(url);
//     console.log(err);
//   }
// };
