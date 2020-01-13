import {
  GET_AADHAR_CARD,
  GET_AADHAR_CARDS,
  DELETE_AADHAR_CARD
} from "../Actions/types";
const initialState = {
  aadhar_card: {},
  aadhar_cards: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AADHAR_CARD:
      return {
        ...state,
        aadhar_card: action.payload
      };

    case GET_AADHAR_CARDS:
      return {
        ...state,
        aadhar_cards: action.payload
      };

    case DELETE_AADHAR_CARD:
      return {
        ...state,
        aadhar_cards: state.aadhar_cards.filter(
          aadhar_card => aadhar_card.id !== action.payload
        )
      };
    default:
      return state;
  }
}
