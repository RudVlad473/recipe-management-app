import { AppDispatch, RootState } from "."
import { recipeReducer } from "../../../entities/Recipe/model"
import { filtersReducer } from "../../../entities/Recipe/model/filtersSlice"
import { authReducer } from "../../../entities/User/model"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "recipes"],
}

export const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipeReducer,
  filters: filtersReducer,
})

export const persistedReducer = persistReducer({ ...persistConfig }, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export const persistor = persistStore(store)

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
