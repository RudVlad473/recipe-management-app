import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

// import { apiSlice } from "../../../shared/api"
// import { authReducer } from "../../../widgets/Auth/model"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
}

export const rootReducer = combineReducers({
  // [apiSlice.reducerPath]: apiSlice.reducer,
  // auth: authReducer,
})

export const persistedReducer = persistReducer({ ...persistConfig }, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export const persistor = persistStore(store)
