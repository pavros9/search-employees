import { AxiosInstance } from 'axios';
import { EmployeeSchema } from 'entities/Employee';

export interface StateSchema {
    employee: EmployeeSchema,
    toastr: any
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
