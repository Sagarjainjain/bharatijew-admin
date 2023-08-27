import { combineReducers } from "redux";
import {category} from "./category.js"
import {melting} from "./melting.js"
import {subcategory} from "./subcategory.js"
import {products} from "./products.js"
import {authReducers} from "./auth.js"
import {goldrate, silverrate} from "./liverate.js"
import {banner} from "./banner.js"
import {toppost} from "./toppost.js"
export const reducers = combineReducers({
  category,
  melting,
  subcategory,
  products,
  authReducers,
  goldrate,
  silverrate,
  banner, toppost
});