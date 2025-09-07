import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducer/userReducer.jsx";
import { contactReducer, feedbackReducer, otherReducer } from "./reducer/otherReducer.jsx";
import { allOrderReducer, appointmentHistoryReducer, categoryPropertyReducer, featuredPropertyReducer, orderHistoryReducer, propertyReducer, singlePropertyReducer } from "./reducer/propertyReducer.jsx";
import { createPropertyReducer } from "./reducer/createPropertyReducer.jsx";

const rootReducer = combineReducers({ 
  user: loginReducer,
  otherData: otherReducer,
  property:propertyReducer,
  createProperty: createPropertyReducer,
  featuredProperty: featuredPropertyReducer,
  orderHistory: orderHistoryReducer,
  appointmentHistory: appointmentHistoryReducer,
  singleProperty: singlePropertyReducer,
  allorders: allOrderReducer,
  feedback: feedbackReducer,
  allContactMessages: contactReducer,
  category:categoryPropertyReducer
})

export const store = configureStore({ 
  reducer: rootReducer
});

// export const server = "http://localhost:5000";
// export const server = "https://flat-mate-backend.onrender.com";
// export const server = "https://flatmate-backend2.onrender.com";
// export const server = "https://flatemate.ddns.net";
export const server = "https://flatmate-backend-teal.vercel.app";