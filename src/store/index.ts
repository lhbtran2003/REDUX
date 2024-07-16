import { randomNumberReducer } from './reducers/randomNumberReducer';
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./reducers";

// export const store = configureStore({
//     reducer: {
//         user: reducer
//     }
// })

import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { countReducer } from "./reducers/countReducer";
import { arrayUserReducer } from "./reducers/arrayUser";

const RootReducer = combineReducers({
    userStore: userReducer,
    countStore: countReducer,
    arrayUserStore: arrayUserReducer,
    randomNumberStore: randomNumberReducer
});

export type StoreInterface = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer);