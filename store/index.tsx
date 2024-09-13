import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from '@/store/themeConfigSlice';
import TopratedLangReducer from './topratedlang'; 
import { PostApis } from './query/postapis'; // Ensure the correct import path

// Combine reducers
const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    LangToprated: TopratedLangReducer,
    [PostApis.reducerPath]: PostApis.reducer, 
});

// Configure store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(PostApis.middleware),
});

export default store;

// Define RootState based on the store itself
export type IRootState = ReturnType<typeof store.getState>;
