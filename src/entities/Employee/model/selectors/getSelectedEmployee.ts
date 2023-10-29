import { StateSchema } from 'app/providers/StoreProvider';

export const getSelectedEmployee = (state: StateSchema) => state.employee?.selectedEmployee;
