import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IRequestState {
  requestQuery: string;
  requestHeaders: string;
  requestVariables: string;
}

const defaultState: IRequestState = {
  requestQuery: '',
  requestHeaders: '',
  requestVariables: '',
};

export const requestSlice = createSlice({
  name: 'request',
  initialState: defaultState,
  reducers: {
    updateRequestQuery(state, action: PayloadAction<string>) {
      state.requestQuery = action.payload;
    },
    updateRequestHeaders(state, action: PayloadAction<string>) {
      state.requestHeaders = action.payload;
    },
    updateRequestVariables(state, action: PayloadAction<string>) {
      state.requestVariables = action.payload;
    },
  },
});

export default requestSlice.reducer;
