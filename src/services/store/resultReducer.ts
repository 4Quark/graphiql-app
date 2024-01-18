import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IResultState {
  resultQuery: string;
}

const defaultState: IResultState = {
  resultQuery: '',
};

export const resultSlice = createSlice({
  name: 'result',
  initialState: defaultState,
  reducers: {
    updateResult(state, action: PayloadAction<string>) {
      state.resultQuery = action.payload;
    },
  },
});

export default resultSlice.reducer;
