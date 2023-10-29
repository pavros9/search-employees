import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoadingEmployees = (state: StateSchema) => state.employee?.isLoading;
