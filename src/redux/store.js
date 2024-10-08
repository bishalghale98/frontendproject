import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"],
  blacklist: ["product"],

  // 'tempData' slice will not be persisted
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
