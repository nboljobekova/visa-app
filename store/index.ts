import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { leadsApi } from "./leads/leads.api";
import { leadsReducer } from "./leads/leads.slice";


export const store = configureStore({
  reducer: {
    [leadsApi.reducerPath]: leadsApi.reducer,
    leads: leadsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      leadsApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
