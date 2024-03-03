import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading : true,
    data : [],
    error : ''
}

export const fetchData = createAsyncThunk('data/fetchData',(pincode) => {
    return axios
    .get(`https://api.postalpincode.in/pincode/${pincode}`)
    .then(response =>response.data)
})

const dataSlice = createSlice({
    name : 'postoffice-data',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchData.pending, (state,action) => {           
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state,action) => {          
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchData.rejected, (state,action) => {           
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    } 
})

export default dataSlice.reducer


