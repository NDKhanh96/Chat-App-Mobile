import { createAsyncThunk, createSlice, type ActionReducerMapBuilder } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import { login } from 'src/api';
import type { LoginParams, Token } from '~/types';

type InitialState = {
    isLoading: boolean;
    errorMessage: string;
    token: Token;
}

const initialState: InitialState = {
    isLoading: false,
    errorMessage: '',
    token: {
        accessToken: '',
        refreshToken: '',
    }
};

export const loginAction = createAsyncThunk('auth/login', async (params: LoginParams) => {
    const response: AxiosResponse<Token> = await login(params);

    return response.data;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    /**
   * Dùng để dispatch action đồng bộ
   */
    reducers: {
        setErrorMessage(state, action) {
            state.errorMessage = action.payload;
        },
    },
    /**
   * Dùng để dispatch action bất đồng bộ như call API
   */
    extraReducers(builder: ActionReducerMapBuilder<InitialState>): void {
        builder
            .addCase(loginAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                state.token = action.payload;
                state.isLoading = false;
            })
            .addCase(loginAction.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.error?.message || '';
            });
    },
});
export const { setErrorMessage } = authSlice.actions;
