import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth", "product"], // persist only auth slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    });
  },
});

const persistor = persistStore(store);

export { store, persistor };
