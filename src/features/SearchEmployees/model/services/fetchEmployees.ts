import { Employee } from 'entities/Employee';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface Config {

}

export const fetchEmployees = createAsyncThunk<
    Employee[],
    Config | undefined,
    ThunkConfig<string>
>('employee/fetchEmployeeById', async (Config, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Employee[]>(
            `/users`,
            {},
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
