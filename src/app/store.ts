import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { usersApiSlice } from "../features/users/usersApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
