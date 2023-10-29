import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployees = (state: StateSchema) => state.employee?.data;
