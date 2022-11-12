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

export const getHotelName = (roomid, hotels) => {
  const hotel = hotels.map((hotel) => {
    return hotel.rooms.map((room) => {
      return room == roomid ? hotel.name : null;
    });
  });
  return hotel;
};

export const getRoomById = (rooms, id) => {
  const room = rooms.filter((room) => room._id == id);
  return room[0];
}

export const getHotelById = (hotels, id) => {
  const hotel = hotels.filter((hotel) => hotel._id == id);
  return hotel[0];
};

