
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EmployeeSchema } from '../types/EmployeeSchema';
import { fetchEmployees } from 'features/SearchEmployees';
import { Employee } from '../types/types';

const initialState: EmployeeSchema = {
    isLoading: false,
};

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setSelectedEmployee: (
            state: EmployeeSchema,
            { payload }: PayloadAction<Employee>,
        ) => {
            state.selectedEmployee = payload;
        },

        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                fetchEmployees.fulfilled,
                (state, action: PayloadAction<Employee[]>) => {
                    state.data = action.payload;
                    state.isLoading = false
                },
            )
            .addCase(
                fetchEmployees.rejected,
                (state) => {
                    state.isLoading = false
                },
            )
    },
});

export const { actions: employeeActions } = employeeSlice;
export const { reducer: employeeReducer } = employeeSlice;
