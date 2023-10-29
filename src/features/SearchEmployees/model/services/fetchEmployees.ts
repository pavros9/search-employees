import { Employee } from 'entities/Employee';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { toastr } from 'react-redux-toastr'


export const fetchEmployees = createAsyncThunk<
    Employee[],
    string | undefined,
    ThunkConfig<string>
>('employee/fetchEmployeeById', async (config, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Employee[]>(
            `/users?${config}`,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        toastr.error('Ошибка', 'Ошибка сервера')
        return rejectWithValue('error');
    }
});
