import { createSlice } from "@reduxjs/toolkit";
import { Lead } from "../../model/index"

interface LeadsState {
  leads: Lead | null;
}

const initialState: LeadsState = {
  leads: null,
};

export const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
  },
});

export const leadsActions = leadsSlice.actions;
export const leadsReducer = leadsSlice.reducer;
