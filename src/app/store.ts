import { configureStore } from '@reduxjs/toolkit'
import userProvider from '../features/users/usersSlice.ts';

export const store = configureStore({
  reducer: {
    users: userProvider
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch