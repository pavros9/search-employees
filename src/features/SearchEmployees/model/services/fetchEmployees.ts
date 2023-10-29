import { Employee } from 'entities/Employee';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';


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
        console.log(e);
        return rejectWithValue('error');
    }
});
