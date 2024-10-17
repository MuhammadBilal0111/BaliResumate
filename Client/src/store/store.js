import userSlice from "./userSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import resumeInfoSlice from "./resumeInfoSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

// redux persist is used to store the state of the store in local strorage when the page refresh
// first make the store and reducer persist
// first create persist reducer then store

const rootReducer = combineReducers({
  user: userSlice.reducer,
  resume: resumeInfoSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});
export const persistor = persistStore(store);
export default store;
