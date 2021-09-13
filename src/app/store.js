import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Auth/userSlice";
import counterReducer from '../features/Counter_DemoRedux/counterSlice';
const rootReducer = {
    counter : counterReducer,
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
    
});

export default store;