import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        register: {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        login: {
            email: '',
            password: ''
        },
        loggedInUser: null
    }
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        inputRegisterData: (state, action) => {
            state.user.register.displayName = action.payload.register.displayName;
            state.user.register.email = action.payload.register.email;
            state.user.register.password = action.payload.register.password;
            state.user.register.confirmPassword = action.payload.register.confirmPassword;
        },
        inputLoginData: (state, action) => {
            state.user.login.email = action.payload.login.email;
            state.user.login.password = action.payload.login.password;
        },
        whenUserIsLoggedIn: (state, action) => {
            state.user.loggedInUser = action.payload;
        }
    }
});

export const { inputRegisterData, inputLoginData, whenUserIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;

