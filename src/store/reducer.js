import { combineReducers } from "redux";
import imagesListReducer from "./ImagesListSlice";

const rootReducer = combineReducers({
    images: imagesListReducer
})

export default rootReducer;