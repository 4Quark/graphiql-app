import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GQLSchema } from '../../pages/main/documentation/documentation.types';

export interface IRequestState {
  schema: GQLSchema | null;
  isDocumentationShow: boolean;
}

const defaultState: IRequestState = {
  schema: null,
  isDocumentationShow: false,
};

export const schemaSlice = createSlice({
  name: 'schema',
  initialState: defaultState,
  reducers: {
    updateSchema(state, action: PayloadAction<GQLSchema | null>) {
      state.schema = action.payload;
    },
    updateIsDocumentationShow(state, action: PayloadAction<boolean>) {
      state.isDocumentationShow = action.payload;
    },
  },
});

export default schemaSlice.reducer;
