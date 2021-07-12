import { combineReducers } from "redux"
import authReducer from "./reducers/auth"
import membershipReducer from "./reducers/membership"
import paymentReducer from "./reducers/payments"
import loadingReducer from "./reducers/loading"
import flashReducer from "./reducers/flash"
import partners from "./reducers/excite"
import products from "./reducers/products"
import springboard from "./reducers/springboard"
import influencer from "./reducers/influencer"

const rootReducer = combineReducers({
  auth: authReducer,
  membership: membershipReducer,
  payment:paymentReducer,
  loading:loadingReducer,
  flash:flashReducer,
  partners:partners,
  products:products,
  springboard:springboard,
  influencer
})

export default rootReducer;