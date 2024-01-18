import { combineReducers, configureStore } from '@reduxjs/toolkit';
import requestReducer from './requestReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import resultReducer from './resultReducer';
import schemaReducer from './schemaReducer';

const RootReducer = combineReducers({
  request: requestReducer,
  result: resultReducer,
  schema: schemaReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: RootReducer });
};

export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
