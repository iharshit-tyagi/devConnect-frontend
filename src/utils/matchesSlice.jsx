import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matches: [],
  matchRequests: [],
};

const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    setMatches: (state, action) => {
      state.matches = action.payload || [];
    },
    setMatchRequests: (state, action) => {
      state.matchRequests = action.payload || [];
    },
    addMatch: (state, action) => {
      // Avoid duplicate matches if needed
      const exists = state.matches.find((m) => m.id === action.payload.id);
      if (!exists) {
        state.matches.push(action.payload);
      }
    },
    removeMatchRequest: (state, action) => {
      state.matchRequests = state.matchRequests.filter(
        (req) => req.id !== action.payload
      );
    },
    clearMatches: (state) => {
      state.matches = [];
      state.matchRequests = [];
    },
  },
});

export const {
  setMatches,
  setMatchRequests,
  addMatch,
  removeMatchRequest,
  clearMatches,
} = matchSlice.actions;

export default matchSlice.reducer;
