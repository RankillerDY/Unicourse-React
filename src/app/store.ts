import { configureStore } from "@reduxjs/toolkit";
import { bannerApi } from "../features/banner";
import homePageReducer from "../features/home-slice";
import { courseApi } from "../features/courses";
export const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    homePage: homePageReducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(bannerApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
