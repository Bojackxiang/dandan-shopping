import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  UPDATE_COLLECTION,
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
} from "../../constants/Actions";

export const updateShopCollection = (collectionMap) => ({
  type: UPDATE_COLLECTION,
  payload: collectionMap,
});

export const fetchCollectionStart = () => ({
  type: FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collection) => ({
  type: FETCH_COLLECTION_SUCCESS,
  payload: collection,
});

export const fetchCollectionFailure = (errorMsg) => ({
  type: FETCH_COLLECTION_FAILURE,
  payload: errorMsg,
});

export const fetchCollectionAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const data = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchCollectionFailure);
      });
  };
};
