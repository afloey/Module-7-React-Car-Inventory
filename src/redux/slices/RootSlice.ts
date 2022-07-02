import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Name',
        email: 'Email',
        car_color: 'Car Color',
        car_make: 'Car Make',
        car_model: 'Car Model',
        car_year: 'Car Year',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        chooseColor: (state, action) => { state.car_color = action.payload},
        chooseMake: (state, action) => { state.car_make = action.payload},
        chooseModel: (state, action) => { state.car_model = action.payload},
        chooseYear: (state, action) => { state.car_year = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, chooseColor, chooseMake, chooseModel, chooseYear } = rootSlice.actions