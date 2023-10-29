import {combineReducers, configureStore,} from '@reduxjs/toolkit';
// import applicantReducer from './reducers/applicantSlice'
import { applicantAPI } from '../services/applicantService';
import { vacancyAPI } from '../services/vacancyService';

export const rootReducer = combineReducers({
// applicantReducer,
[applicantAPI.reducerPath]: applicantAPI.reducer,
[vacancyAPI.reducerPath]: vacancyAPI.reducer,
   
 });

 export const setupStore = () => {
  return configureStore ({
   reducer: rootReducer, 

   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(applicantAPI.middleware, vacancyAPI.middleware),
 })}

 export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
