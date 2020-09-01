import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import sodaReducer from "./soda/sodaReducer";
import juiceReducer from "./juice/juiceReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  soda: sodaReducer,
  juice: juiceReducer,
});

export default rootReducer;
