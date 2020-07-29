import {
  UPDATE_COLLECTION,
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
} from "../../constants/Actions";
import { shopDataHandler } from "../../utils/array.utils";

const DEFAULT_STATE = {
  shop: [],
  isFetching: false,
  errorMessage: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    // -> fetch start
    case FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };

    // -> fetch successfully
    case FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shop: shopDataHandler(action.payload),
      };

    // -> Fetch failure
    case FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    // -> update collection
    case UPDATE_COLLECTION:
      return {
        ...state,
        shop: shopDataHandler(action.payload),
      };

    // -> default
    default:
      return state;
  }
};
