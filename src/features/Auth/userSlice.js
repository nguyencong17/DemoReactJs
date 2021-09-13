import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from '../../api/userAPI';
import StorageKeys from "../../constants/storage-keys";
//register
export const register = createAsyncThunk('user/register',async (payload) => {
        //call API to register
        const data = await userAPI.register(payload);
        //save data to local storage
        localStorage.setItem(StorageKeys.TOKEN,data.jwt);
        localStorage.setItem(StorageKeys.USER,JSON.stringify(data.user));
        //return user data
        return data.user;
    }
)
//login
export const login = createAsyncThunk('user/login',async (payload) => {
    //call API to register
    const data = await userAPI.login(payload);
    //save data to local storage
    localStorage.setItem(StorageKeys.TOKEN,data.jwt);
    localStorage.setItem(StorageKeys.USER,JSON.stringify(data.user));
    //return user data
    return data.user;
}
)

const userSlice = createSlice({
    name:'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        setting: {}
    },
    reducers:{
        logout(state){
            //clear storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);

            state.current = {};
        }
    },
    extraReducers:{
        //register
        [register.fulfilled]: (state,action) => {
            state.current = action.payload
        },
        //login
        [login.fulfilled]: (state,action) => {
            state.current = action.payload
        },
    }
});

const { actions, reducer } = userSlice;
export const {logout} = actions;
export default reducer;


// export const register = createAsyncThunk('user/register', async (payload) => {
//     const data = await userApi.register(payload);

//     localStorage.setItem(StorageKeys.TOKEN, data.jwt)
//     localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))
//     return data.user;
// })

// export const login = createAsyncThunk('user/login', async (payload) => {
//     const data = await userApi.login(payload);

//     localStorage.setItem(StorageKeys.TOKEN, data.jwt)
//     localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))
//     return data.user;
// })

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
//         setting: {}
//     },
//     reducers: {
//         logout(state) {
//             localStorage.removeItem(StorageKeys.USER)
//             localStorage.removeItem(StorageKeys.TOKEN)
//             state.current = {}
//         }
//     },
//     extraReducers: {
//         [register.fulfilled]: (state, action) => {
//             state.current = action.payload
//         },
//         [login.fulfilled]: (state, action) => {
//             state.current = action.payload
//         }
//     }
// })

// const { actions, reducer } = userSlice;
// export const { logout } = actions 
// export default reducer;