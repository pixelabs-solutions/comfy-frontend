// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { GetApis } from './query/getapis';
import { PostApis } from './query/postapis';
import themeConfigSlice from './themeConfigSlice';
import TopratedLangReducer from './topratedlang';
import profileReducer from './updateprofile'; // Ensure this path is correct

// Configure store
const store = configureStore({
    reducer: {
        themeConfig: themeConfigSlice,
        LangToprated: TopratedLangReducer,
        profile: profileReducer,
        [GetApis.reducerPath]: GetApis.reducer,
        [PostApis.reducerPath]: PostApis.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(GetApis.middleware, PostApis.middleware),
});

export default store;

// Define RootState based on the store itself
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
