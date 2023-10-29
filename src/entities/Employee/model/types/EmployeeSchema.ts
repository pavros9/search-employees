import { Employee } from "./types";

export interface EmployeeSchema {
    isLoading: boolean,
    data?: Employee[]
    selectedEmployee?: Employee
}