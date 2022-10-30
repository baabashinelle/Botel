const actionTypes = {
  SET_HOTELS: "SET_HOTELS",
  SET_ROOMS: "SET_ROOMS",
  ADD_ROOM: "ADD_ROOM",
  ADD_HOTEL: "ADD_HOTEL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_HOTELS:
      return {
        ...state,
        hotels: action.hotels,
      };
    case actionTypes.SET_ROOMS:
      return {
        ...state,
        rooms: action.rooms,
      };
    case actionTypes.ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.room],
      };
    case actionTypes.ADD_HOTEL:
      return {
        ...state,
        hotels: [...state.hotels, action.hotel],
      };
    default:
      return state;
  }
};

export default reducer;