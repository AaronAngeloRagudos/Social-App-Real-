import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        loggedInUser: null
    }
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        whenUserIsLoggedIn: (state, action) => {
            state.user.loggedInUser = action.payload;
        }
    }
});

export const { whenUserIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;

