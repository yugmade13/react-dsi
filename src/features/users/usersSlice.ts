import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../utils/api.ts';
import { RootState } from '../../app/store.ts';

export const asyncFetchUsers = createAsyncThunk<UserProps[], void, {
  state: RootState
}>('fetch/usersSlice', async (_, thunkAPI) => {
  try {
    const users = await api.fetchUsers();
    return users.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

const initialState: InitialStateProps = {
  entities: [],
  sorting: null,
  loading: 'idle',
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filterTableByColumn: (state, action: PayloadAction<string>) => {
      if (!state.sorting || state.sorting === 'asc') {
        state.entities = state.entities.sort((a, b) => {
          const x = a[action.payload as keyof UserProps];
          const y = b[action.payload as keyof UserProps];

          return x === y ? 0 : x > y ? 1 : -1;
        });

        state.sorting = 'desc';
      } else {
        state.entities = state.entities.sort((a, b) => {
          const x = a[action.payload as keyof UserProps];
          const y = b[action.payload as keyof UserProps];

          return x === y ? 0 : x > y ? -1 : 1;
        });

        state.sorting = 'asc';
      }
    },
    filterTableByColumnAddress: (state) => {
      if (!state.sorting || state.sorting === 'asc') {
        state.entities = state.entities.sort((a, b) => a.address.street.localeCompare(b.address.street));
        state.sorting = 'desc';
      } else {
        state.entities = state.entities.sort((a, b) => b.address.street.localeCompare(a.address.street));
        state.sorting = 'asc';
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchUsers.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(asyncFetchUsers.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = 'succeeded';
      })
      .addCase(asyncFetchUsers.rejected, (state, action) => {
        state.error = action.payload as string
        state.loading = 'failed';
      })
  },
});

export const { filterTableByColumn, filterTableByColumnAddress } = usersSlice.actions

export default usersSlice.reducer