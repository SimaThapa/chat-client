import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../config/base_url";

const initialState = {
  // user: null,
  isAuthenticated: false,
  role: "",
  isLoading: false,
  userCheckLoading: true,
  errorMsg: "",
  successMsg: "",
  userId: null,

 
};

export const checkAuthAsync = createAsyncThunk(
  "auth/checkAuthAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/isLoggedIn`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Something went wrong!!";

      return rejectWithValue(errorMessage);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
    //    throw toast
        return response.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Something went wrong!!";
     //throw toast
      return rejectWithValue(errorMessage);
    }
  }
);
export const signup = createAsyncThunk(
    "auth/signup",
    async (inputs, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          `${BASE_URL}/auth/signup`,
          {
           inputs
          },
          { withCredentials: true }
        );
        console.log("sigup response",response)
        if (response.status === 201) {
      //    throw toast
          return response.data;
        }
      } catch (err) {
        const errorMessage =
          err?.response?.data?.message || "Something went wrong!!";
       //throw toast
        return rejectWithValue(errorMessage);
      }
    }
  );

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/admin/logout`,
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        // toast.success("Logout Successfull", {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: false,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });

        return "";
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Something went wrong!!";
    //   toast.error(errorMessage, {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
      return rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.userId = action.payload.user_id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAsync.pending, (state) => {
        state.userCheckLoading = true;
      })
      .addCase(checkAuthAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.role = action.payload.role;
        state.userId = action.payload.user_id;
        state.userCheckLoading = false;
      })
      .addCase(checkAuthAsync.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.errorMsg = action.payload;
        state.userCheckLoading = false;
      })
      
      
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.role = action.payload.role;
        state.userId = action.payload.user_id;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.errorMsg = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.role = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMsg = action.payload;
      });
  },
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;






